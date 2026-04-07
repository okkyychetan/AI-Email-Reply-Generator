# ✉️ AI Email Reply Generator (Chrome Extension + Full Stack App)

An AI-powered email assistant that generates smart, context-aware replies directly inside Gmail using a Chrome Extension. Built with **Spring Boot, React, Material UI, and Google Gemini API**.

---

## 🚀 Features

- ✨ Generate AI-powered email replies instantly
- 🎯 Choose tone: Professional, Casual, Friendly
- 📩 Works directly inside Gmail via Chrome Extension
- ⚡ Fast and scalable backend using Spring Boot
- 🧠 Powered by Google Gemini API
- 📋 One-click copy to clipboard
- 🔗 REST APIs tested using Postman

---

## 🧱 Tech Stack

### 🔹 Frontend
- React.js
- Material UI (MUI)
- Axios

### 🔹 Backend
- Spring Boot 3
- REST APIs
- WebClient (Reactive HTTP Client)

### 🔹 AI Integration
- Google Gemini API

### 🔹 Chrome Extension
- Manifest v3
- Content Scripts
- DOM Manipulation

### 🔹 Tools
- Postman (API Testing)
- Git & GitHub

---

## 🧠 How It Works

1. User opens Gmail and clicks the **"AI Reply"** button  
2. Extension extracts email content from Gmail  
3. Sends request to backend (`/api/generate`)  
4. Backend processes input and calls Gemini API  
5. AI generates a contextual reply  
6. Reply is automatically inserted into the compose box  

---

## 📁 Project Structure
├── frontend # React + Material UI
├── backend # Spring Boot Application
├── extension # Chrome Extension
│ ├── manifest.json
│ ├── content.js
│ └── content.css


---

## ⚙️ Backend Overview

- REST Controller to handle API requests  
- Service layer integrates with Gemini API  
- WebClient for efficient API communication  
- DTO for structured request handling  

---

## 💻 Frontend Overview

- Clean UI using Material UI  
- Input field for email content  
- Tone selection dropdown  
- Displays AI-generated reply  
- Copy-to-clipboard functionality  

---

## 🔌 Chrome Extension

- Injects **"AI Reply" button** into Gmail UI  
- Detects compose window using MutationObserver  
- Fetches and inserts AI-generated replies  

---

## 🧪 API Testing

- All endpoints tested using **Postman**  
- Verified request-response flow before frontend & extension integration  

---

## 🏁 Getting Started

### 1️⃣ Backend Setup
cd backend
mvn spring-boot:run


2️⃣ Frontend Setup
cd frontend
npm install
npm run dev

3️⃣ Chrome Extension Setup
Open chrome://extensions/
Enable Developer Mode
Click Load Unpacked
Select the extension folder

🔐 Environment Variables

Create application.properties in backend:

gemini.api.key=YOUR_API_KEY
gemini.api.url=https://generativelanguage.googleapis.com


🎯 Use Cases
Save time replying to emails
Improve communication quality
Boost productivity with AI assistance
Great project for full-stack + AI learning


🔮 Future Improvements
Multi-language support
Custom prompt editing
Email summarization
Enhanced UI/UX for extension



⭐ Support

If you like this project, give it a ⭐ on GitHub!


---

If you want next level:
- 🔥 README with badges (stars, forks, tech icons)
- 🌐 Portfolio version (to impress recruiters)
- 📄 Resume bullet points (ATS optimized)

Just tell me 👍
