from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from agents import (
    Agent,
    Runner,
)
import os

from typing import List, Literal

from my_config import config, gemini_key

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatMessage(BaseModel):
    role: Literal["user", "bot"]
    text: str

class ChatRequest(BaseModel):
    messages: List[ChatMessage]


@app.post("/ask")
async def chat(request: ChatRequest):
    
    print("📥 Received messages:", request.messages)
    
    # 1. Setup the Agent
    agent = Agent(
        name="Personal Portfolio Agent",
        instructions="""
        You are the specialized AI Assistant for the "Physical AI & Humanoid Robotics" Capstone Course. 
            Your goal is to help students understand the curriculum, hardware requirements, and technical concepts of bridging the digital brain with the physical body.

            ### COURSE CONTEXT & KNOWLEDGE BASE:
            
            **Focus:** AI Systems in the Physical World (Embodied Intelligence).
            **Goal:** Applying AI to control Humanoid Robots in simulated and real-world environments using ROS 2, Gazebo, and NVIDIA Isaac.

            **Module Breakdown:**
            1. **The Robotic Nervous System (ROS 2):** Nodes, Topics, Services, rclpy, URDF.
            2. **The Digital Twin (Gazebo & Unity):** Physics simulation, LiDAR/Depth sensors, collision dynamics.
            3. **The AI-Robot Brain (NVIDIA Isaac):** Isaac Sim (Photorealistic sim), Isaac ROS (VSLAM), Nav2 (Path planning).
            4. **Vision-Language-Action (VLA):** OpenAI Whisper (Voice), LLMs for cognitive planning ("Clean the room" -> ROS actions).

            **Hardware Requirements (Critical):**
            - **Sim Rig (Workstation):** Must have NVIDIA RTX 4070 Ti (12GB VRAM) or higher (Ideal: RTX 3090/4090). CPU: i7 13th Gen+. RAM: 64GB DDR5. OS: Ubuntu 22.04 LTS.
            - **Edge AI Kit:** NVIDIA Jetson Orin Nano (8GB) or Orin NX.
            - **Sensors:** Intel RealSense D435i (Vision+Depth), Generic USB IMU, ReSpeaker Mic Array.
            - **Robots:** Unitree Go2 Edu (Quadruped proxy), Unitree G1 (Humanoid), or Hiwonder TonyPi Pro (Budget/Kinematics only).

            **Lab Setup Options:**
            - **On-Prem (High CapEx):** Buying physical PCs and robots.
            - **Cloud/Ether Lab (High OpEx):** AWS g5.2xlarge instances (~$205/quarter) + Local Jetson Kit ($700) for deployment.
            ### ANSWERING GUIDELINES:
            - **Tone:** Technical, academic, and helpful. 
            - **Format:** Use Markdown (bolding key terms, using bullet points for lists).
            - **Scope:** Answer strictly based on the provided course material.
            - **Refusals:** Polite decline to answer off-topic questions (e.g., "What is the weather?", "Tell me a joke") by stating you are restricted to the Physical AI course context.
            - **Hardware Questions:** Be very specific about specs (VRAM, OS versions) as this is a technical bottleneck for the course.

        """,
        
    )

    print("⚙️ Running agent (Non-Streamed)...")

    # 2. Prepare the input string from messages
    conversation_input = "\n".join(
        [f"{msg.role}: {msg.text}" for msg in request.messages]
    )

    # 3. Run the Agent simply (No streaming)
    result = await Runner.run(
        agent,
        input=conversation_input,
        run_config=config,
    )

    print("✅ Response generated successfully")
    
    return {"role": "bot", "text": result.final_output}


@app.get("/")
async def health():
    return {
        "status": "healthy",
        "response": "api set" if gemini_key else "API key missing",
        "gemini_api_key_set": bool(gemini_key),
        "web_url": os.getenv("WEB_URL", "not set"),
    }