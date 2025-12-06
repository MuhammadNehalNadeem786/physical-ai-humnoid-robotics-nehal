# 🤖 Physical AI & Humanoid Robotics: The Book & RAG Platform

## **🚀 Project Overview**

This project is a high-impact, **Docusaurus-based book platform** for the **Physical AI & Humanoid Robotics** course. It is integrated with a cutting-edge **Retrieval-Augmented Generation (RAG) Chatbot** and features advanced learning tools like contextual text querying.

The platform provides a modern, interactive, and personalized learning experience for students venturing from core **ROS 2** fundamentals to deploying autonomous, **Vision-Language-Action (VLA)**-powered humanoid robots.

---

## **📚 Course Content Structure**

The 13-week course is structured into four main modules, progressing from foundational robotics to advanced VLA models and culminating in a capstone project.

| Topic/Module | Key Focus Areas | Duration |
| :--- | :--- | :--- |
| **Intro** | Physical AI, Humanoid Robotics, Hardware (RTX 4070 Ti+, Jetson Orin), 13-Week Roadmap. | (Introductory) |
| **Module 1: ROS 2 — The Robotic Nervous System** | ROS 2 vs ROS 1, Core Concepts (Nodes, Topics, Services, Actions), C++/Python Programming, Robot Modeling (URDF), `ros2_control` & Controllers. | **Project:** Build a Full Humanoid URDF. |
| **Module 2: The Digital Twin** | Gazebo & Unity Simulation, Physics Engines, Sensor Simulation (LiDAR, IMU), Realistic Noise, ROS 2 ↔ Unity Bridge, Human-Robot Interaction (HRI). | **Project:** Walking Humanoid in Gazebo. |
| **Module 3: NVIDIA Isaac Sim** | Omniverse & USD, Synthetic Data Generation (Replicator SDG), Isaac ROS Gems (NVBlox, cuVSLAM), **Gemini Perception**, Nav2 for Bipedal Robots, Dynamic Balancing (ZMP, MPC, RL). | **Project:** Nav2 Navigation in Isaac Sim. |
| **Module 4: Vision-Language-Action (VLA)** | LLMs in Robotics, Real-time Voice Commands (Whisper Live), Natural Language Parsing, GPT-4o & Local LLMs (LLaMA 3), OpenVLA Framework, Octo & RT-X. | **Project:** Voice-Controlled Assistant. |
| **Capstone Project** | **Autonomous Humanoid Assistant.** Deployable on real hardware. | (Culminating) |

---

## **✅ Features Completed**

### **1. 💻 Book Platform & Content (Docusaurus)**
* **Structured Content:** The entire course is divided into over 50 markdown files (`.md`) across 4 modules and reference sections.
* **Navigation:** All content is organized and navigable via the configured Docusaurus sidebar.

### **2. 💬 Interactive RAG Chatbot Integration (Frontend)**
* **React UI:** Implemented a non-obtrusive, fully interactive React-based Chatbot UI component.
* **Visuals:** Includes open/close functionality and `ThreeDotBounce` typing visuals for a smooth UX.
* **Component List:** `Chatbot.tsx`, `Chatbot.css`, `ThreeDotBounce.tsx`, `ThreeDotBounce.css`.

### **3. 🌐 Backend Core (FastAPI)**
* **FastAPI Initialization:** Initialized a `uvicorn`-served FastAPI backend.
* **RAG Readiness:** Installed essential dependencies including `fastapi[standard]`, `openai-agents`, `python-dotenv`, `qdrant-client`, and `uvicorn`, preparing the structure to handle RAG-based logic.

### **4. 💡 Contextual Text Querying**
* **Text Selection:** Users can select any text snippet on a page.
* **"Ask AI" Trigger:** An **"Ask AI"** button appears upon selection.
* **Flow:** Clicking the button automatically copies the selected text into the Chatbot input field, allowing for immediate, content-specific questions.

---

## **⚙️ Features in Progress**

### **🔐 Better Authentication Integration**
* **Secure Auth Flow:** Implementing secure login/signup for user session management using React components.
* **Route Protection:** Applying route guards to secure content (e.g., Chatbot page) for authenticated users only.

---

## **⏭️ Next Steps & Roadmap**

| Priority | Task | Details |
| :--- | :--- | :--- |
| **HIGH** | **Complete Auth (Frontend/Backend)** | Finalize the secure authentication flow. |
| **HIGH** | **Enhanced RAG Chatbot Integration** | Integrate the full RAG pipeline: replace mock APIs with real document embeddings, use **Qdrant** for vector search, and enable contextual/memory-aware responses. |
| **MEDIUM** | **User Data Storage with Neon** | Integrate **Neon (Postgres)** to securely store user data, including reading progress and questions asked, to support personalization and progress tracking. |
| **MEDIUM** | **Personalization & Memory** | Connect user-specific data from Neon to the Chatbot to implement context memory for personalized interactions. |
