# 🌸 Hubmatic — No-Code Automation + Team Collaboration Platform

> ⚠️ This is a **public showcase repository**.  
> Code and content are protected under **All Rights Reserved**.  
> **Please do not copy, reuse, or redistribute** without written permission.

---

**Hubmatic** is an all-in-one, no-code automation platform with a modern twist — combining the power of **Zapier**, **Make**, and **n8n** with real-time **team communication**, an intuitive **AI assistant**, and a clean pastel-pink interface.

It’s currently under active development — and once the **MVP is completed**, **Hubmatic will go live** on a public domain with ongoing updates and features.

---

## ✨ Features (Current & In Progress)

- 🧠 **AI API Assistant**  
  Just describe what you need (e.g. “Get contacts from CRM”), and Hubmatic suggests the right API method, URL, auth, and headers.

- ⚙️ **No-Code Workflow Builder** *(in progress)*  
  Drag-and-drop interface to create automations between apps and APIs — without code.

- 💬 **Spike-Style Team Chat**  
  A beautiful Viber- and Spike-inspired chat UI with:
  - Real-time messaging via Socket.IO  
  - Emoji, file upload, and voice message buttons  
  - “My Notes” section for personal memos  
  - Message alignment + pastel themes

- 🔀 **Toggle: Chat or Email View** *(in progress)*  
  Switch between casual chat mode or structured email-style conversation threads.

- 📞 **Voice/Video Calling + Screen Share** *(coming soon)*  
  WebRTC-powered peer-to-peer calling with optional media panel.

- 📅 **Team Calendar + Planner** *(upcoming)*  
  Organize tasks, deadlines, and events with your team.

---

## 🛠 Tech Stack

| Layer        | Tech Used                        |
|--------------|----------------------------------|
| Frontend     | React (Vite) + Vanilla CSS       |
| Backend      | Node.js + Express (ES Modules)   |
| Realtime     | Socket.IO                        |
| Calling      | WebRTC                           |
| Optional DB  | MongoDB (planned)                |

---

## 🚀 How to Run Locally

### Prerequisites
- Node.js v18+
- npm

### Setup

**Frontend**
cd hubmatic-frontend
npm install
npm run dev


***Backend**
cd hubmatic-backend
npm install
node index.js

Visit:
Frontend: http://localhost:5173
Backend: http://localhost:5000

!! Live Deployment
Once the MVP is complete, Hubmatic will launch on a live domain — free to use, with optional one-time upgrades and ad-free options.

Future updates will introduce:

Calendar syncing
Workflow template marketplace
Public API builder
AI-powered auto-flow creation

Stay tuned 💫
