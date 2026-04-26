const { HfInference } = require("@huggingface/inference");
const {
  conceptExplanationPrompt,
  questionAnswerPrompt,
} = require("../utils/prompts");
const express = require("express");

const hf = new HfInference(process.env.HUGGINGFACE_TOKEN);

// @desc    Generate interview question and answers using Hugging Face
// @route   POST /api/ai/generate-questions
// @access  Private
const generateInterviewQuestions = async (req, res) => {
  try {
    const { role, experience, topicsToFocus, numberOfQuestions } = req.body;

    if (!role || !experience || !topicsToFocus || !numberOfQuestions) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = questionAnswerPrompt(
      role,
      experience,
      topicsToFocus,
      numberOfQuestions,
    );

    // Use a free text generation model from Hugging Face
    const response = await hf.chatCompletion({
      model: "Qwen/Qwen3-Coder-Next",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1500,
      temperature: 0.3,
    });

    // The response generated text is in response.generated_text
    const rawText = response.choices[0].message.content;

    // Try to parse the JSON from the output
    let data;
    try {
      // Extract JSON array from text
      const jsonMatch = rawText.match(/\[[\s\S]*\]/);

      if (!jsonMatch) {
        throw new Error("No JSON array found");
      }

      data = JSON.parse(jsonMatch[0]);
    } catch (e) {
      return res.status(200).json({
        questions: [],
        raw: rawText,
        error: "Failed to extract valid JSON.",
      });
    }

    res.status(200).json({
      questions: data,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to generate questions", error: error.message });
  }
};

// @desc    Generate explains a interview question using Hugging Face
// @route   POST /api/ai/generate-explanation
// @access  Private
const generateConceptExplanation = async (req, res) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const prompt = conceptExplanationPrompt(question);

    const response = await hf.chatCompletion({
      model: "Qwen/Qwen3-Coder-Next",
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
      max_tokens: 1024,
    });

    const rawText = response.choices[0].message.content;
    let data;
    try {
      data = JSON.parse(rawText);
    } catch (e) {
      return res.status(200).json({
        explanation: null,
        raw: rawText,
        error: "Failed to parse AI response as JSON.",
      });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to generate questions", error: error.message });
  }
};

module.exports = { generateInterviewQuestions, generateConceptExplanation };
