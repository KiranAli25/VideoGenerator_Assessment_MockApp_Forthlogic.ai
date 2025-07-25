# Mock Video Generator App for ForthLogic.ai

## Overview
This project is a full-stack web application designed to simulate Google Gemini (Veo3)'s video generation capabilities through two use cases:
- **Marketing Video Generator** for the energy drink **Suplimax**
- **Real Estate Video Tour Generator** based on a provided listing

Since direct access to Gemini Veo3's API is limited, this implementation features a **mock video response** to demonstrate API integration and handling.

## Tech Stack
### **Frontend**
- React 
- TypeScript
- Tailwind CSS

### **Backend**
- Node.js (Express.js)
- API Integration (Simulated Google Gemini Veo3 Response)

## Features
- **User Input:** Enter a prompt to generate a video.
- **Mock API Response:** Backend returns a **predefined mock video**.
- **UI/UX Simplicity:** Clean interface for seamless user interaction.
- **Clear & Reset:** Option to reset input.

## Installation & Setup
### **Prerequisites**
- Node.js installed
- Yarn or npm installed

### **Clone Repository**
```bash
git clone https://github.com/KiranAli25/VideoGenerator_Assessment_MockApp_Forthlogic.ai.git
cd VideoGenerator_Assessment_MockApp_Forthlogic.ai

```

### **Backend Setup**
```bash
cd backend
npm install
npm start
```
This starts the Express server with mock video response.

### **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```
Runs the React-based frontend locally.

## Code Structure
```
VideoGenerator_Assessment_MockApp_Forthlogic.ai
│── backend/
│   ├── node_modules/
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│── frontend/
│   ├── public/
│   ├── src/
│   │   ├── services/
│   │   │   ├── api.ts
│   │   ├── App.css
│   │   ├── App.test.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   ├── index.tsx
│   │   ├── react-app-env.d.ts
│   │   ├── reportWebVitals.ts
│   │   ├── setupTests.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── package.json
│   ├── tsconfig.json
│── README.md

```

## API Integration (Mock)
To simulate Gemini Veo3’s response:
- Backend API listens for user prompts.
- Instead of real video generation, a predefined mock video URL is returned.
