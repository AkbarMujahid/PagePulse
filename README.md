# 🚀 PagePulse - Website SEO & Performance Auditor

PagePulse is a full-stack web application that analyzes a website and provides a quick SEO and performance audit. Users simply enter a website URL, and the application extracts important SEO metrics such as page title, meta description, heading count, missing image alt attributes, word count, response time, and HTTP status.

---

## ✨ Features

- 🔍 Analyze any public website
- 📄 Extract Page Title
- 📝 Detect Meta Description
- 🏷 Count H1 Tags
- 🖼 Detect Images Missing Alt Attributes
- 📖 Count Total Words
- ⚡ Measure Response Time
- 🌐 Display HTTP Status Code
- ❌ Handles Invalid URLs and Errors
- 📱 Responsive Modern UI
- 🧪 Unit & API Testing with Jest and Supertest

---

## 🛠 Tech Stack

### Frontend

- React
- Vite
- Axios
- CSS

### Backend

- Node.js
- Express.js
- Axios
- Cheerio
- CORS

### Testing

- Jest
- Supertest

### Deployment

- Vercel (Frontend)
- Render (Backend)

---

## 📂 Project Structure

```
PagePulse
│
├── backend
│   ├── app.js
│   ├── server.js
│   ├── routes
│   ├── utils
│   ├── tests
│   └── package.json
│
├── frontend
│   ├── src
│   ├── public
│   └── package.json
│
└── README.md
```

---

## 🚀 Installation

Clone the repository

```bash
git clone <repository-url>
```

### Backend

```bash
cd backend
npm install
npm start
```

Runs on:

```
http://localhost:3000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## 📡 API Endpoint

### POST /audit

Request

```json
{
  "url": "https://example.com"
}
```

Response

```json
{
  "success": true,
  "status": 200,
  "responseTime": "42 ms",
  "title": "...",
  "metaDescription": "...",
  "h1Count": 2,
  "imagesMissingAlt": 1,
  "wordCount": 345
}
```

---

## 🧪 Running Tests

```bash
cd backend

npm test
```

---

## 💡 Design Decisions

The backend was designed with a modular architecture by separating routing logic and HTML parsing into dedicated files. HTML parsing is handled using Cheerio, while Axios is used to fetch webpage content. Error handling was implemented for invalid URLs, request timeouts, and non-HTML responses. The frontend focuses on a clean and responsive user experience with real-time audit results.

---

## 🌍 Live Demo

### Frontend

https://page-pulse-zeta-three.vercel.app/

### Backend

https://pagepulse-backend-xphh.onrender.com

---

## 👨‍💻 Developed By

Akbar Mujahid

Built as part of the Digital Heroes Internship Technical Assignment.