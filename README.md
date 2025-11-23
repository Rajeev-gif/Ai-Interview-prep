# AI Interview Prep

This is a full-stack web application designed to help users practice for job interviews. It uses AI to simulate interview scenarios and provide feedback.

## Description

The AI Interview Prep application provides a platform for users to create accounts, participate in mock interviews, and receive AI-driven feedback on their performance. The frontend is built with React and Vite, offering a fast and modern user experience. The backend is a Node.js server using Express and MongoDB to manage user data and interview sessions.

## Tech Stack

### Frontend

- **React:** A JavaScript library for building user interfaces.
- **Vite:** A fast build tool for modern web development.
- **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
- **React Router:** For declarative routing in the React application.
- **Axios:** A promise-based HTTP client for making requests to the backend.
- **Framer Motion:** For creating animations.

### Backend

- **Node.js:** A JavaScript runtime for building server-side applications.
- **Express:** A minimal and flexible Node.js web application framework.
- **MongoDB:** A NoSQL database for storing application data.
- **Mongoose:** An ODM library for MongoDB and Node.js.
- **JSON Web Tokens (JWT):** For securing the application and authenticating users.
- **Bcrypt.js:** For hashing passwords.
- **Google Generative AI:** For powering the AI-driven interview simulations.
- **Multer:** For handling file uploads.

## How to Install and Run the Project

To get the project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Rajeev-gif/Ai-Interview-prep.git
    cd Ai-Interview-prep
    ```

2.  **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3.  **Install frontend dependencies:**
    ```bash
    cd ../frontend/interview-prep-ai
    npm install
    ```

### Running the Application

1.  **Start the backend server:**

    ```bash
    cd backend
    npm run dev
    ```

2.  **Start the frontend development server:**
    ```bash
    cd ../frontend/interview-prep-ai
    npm run dev
    ```

The application should now be running on your local machine.

## Made By

This project was created by **Rajeev**.
