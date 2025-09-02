export const BASE_URL =
  "http://localhost:8000" || "https://interview-prep-ai-wyej.onrender.com";

export const API_PATHS = {
  AUTH: {
    REGISTER: "/api/auth/register", // Signup
    LOGIN: "/api/auth/Login", // Authentication user & return JWT token
    GET_PROFILE: "/api/auth/profile", // Get logged-in user details
  },

  IMAGE: {
    UPLOAD_IMAGE: "/api/auth/upload-image", // Upload profile picture
  },

  AI: {
    GENERATE_QUESTIONS: "/api/ai/generate-questions", // Generate interview questions and answers using Gemini
    GENERATE_EXPLANATION: "/api/ai/generate-explanation", // Generate concept explanation using Gemini
  },

  SESSION: {
    CREATE: "/api/sessions/create", // Create a new interview session with questions
    GET_ALL: "/api/sessions/my-sessions", // Get all user sessions
    GET_ONE: (id) => `/api/sessions/${id}`, // Get session details with questions
    DELETE: (id) => `/api/sessions/${id}`, // Delete a session
  },

  QUESTION: {
    ADD_TO_SESSION: "/api/questions/add", // Add more questions to a session
    PIN: (id) => `/api/questions/${id}/pin`, // Pin or Unpin question
    UPDATE_NOTE: (id) => `/api/questions/${id}/note`, // Update/Add note to a question
  },
};
