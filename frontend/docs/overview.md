# Course Overview
**Physical AI & Humanoid Robotics**  
**13-Week Zero-to-Autonomous-Humanoid Bootcamp**

Welcome to the most complete, production-grade humanoid robotics course available in 2025–2026.

In just 13 weeks you go from zero ROS 2 knowledge to shipping a fully autonomous humanoid that understands natural language, walks bipedally, perceives the world in real time, and manipulates objects — in simulation and optionally on real hardware.

### The 13-Week Journey + Every Project You Will Ship

| Weeks  | Module & Focus                                      | Projects You Complete |
|--------|-----------------------------------------------------|------------------------|
| 1–2    | Foundations + Full Dev Environment                  | RTX workstation + ROS 2 + Isaac Sim ready |
| 3–5    | **Module 1 – ROS 2: The Robotic Nervous System**   | • Project 1.1: Talker-Listener Node<br/>• Project 1.2: Turtle Control Service + Launch Files<br/>• Project 1.3: Full 30+ DOF Humanoid URDF + walking in RViz |
| 6–7    | **Module 2 – The Digital Twin**                     | • Project 2.1: Walking Humanoid in Gazebo (10 stable steps)<br/>• Project 2.2: Digital Human Interaction in Unity via ROS-TCP |
| 8–10   | **Module 3 – NVIDIA Isaac Sim & Isaac ROS**        | • Project 3.1: Bipedal Nav2 Navigation in Isaac Sim<br/>• Project 3.2: Real-time 3D Reconstruction with nvblox + cuVSLAM |
| 11–12  | **Module 4 – Vision-Language-Action (VLA)**         | • Project 4.1: Voice-Controlled Robot (“Bring me the red cup”)<br/>• Project 4.2: Fully Offline VLA Robot (Llama 3 + OpenVLA) |
| 13     | **Capstone Week**                                   | **Capstone: Autonomous Humanoid Assistant** — full voice-to-action pipeline, deployable on real hardware |

### Capstone Project (Week 13)
**Autonomous Humanoid Assistant** — a complete embodied agent that:

- Listens to open-ended voice commands in real time (Whisper Live)  
- Uses GPT-4o-realtime or local Llama 3 to plan actions  
- Navigates bipedally with dynamic balance (Nav2 + Isaac locomotion)  
- Builds dense 3D maps with nvblox  
- Detects objects using Gemini foundation models  
- Manipulates them with Octo or OpenVLA policies  
- Speaks confirmations back to you  

This is the exact stack used by Tesla Optimus, Figure 01, 1X, and NVIDIA GR00T in 2025–2026.

### Learning Outcomes
You will confidently be able to:
- Build and control full humanoid robots from scratch  
- Master ROS 2 (Python + C++) at industry level  
- Simulate humanoids in Gazebo, Unity, and Isaac Sim  
- Generate synthetic data at scale with NVIDIA Replicator  
- Run GPU-accelerated perception on Jetson hardware  
- Deploy open-source VLA models (Octo, OpenVLA, RT-X)  
- Turn natural language into physical robot actions  
- Transfer policies from simulation to real humanoids (sim-to-real)

### Hardware Paths

| Path               | Required Hardware                                    | Approx. Cost       | What You Unlock                     |
|--------------------|------------------------------------------------------|--------------------|-------------------------------------|
| Simulation Only    | RTX 4070 Ti+ PC (Ubuntu 22.04)                       | $1,800–$4,000      | Full capstone in photorealistic sim |
| Edge + Perception  | + Jetson Orin Nano/NX + RealSense D435i              | +$700–$1,200       | Real 3D mapping & inference         |
| Full Physical AI   | + Unitree G1 / Go2 / robotic arm                     | +$3k–$20k          | Real walking & manipulation         |
| Cloud Native       | AWS g5/g6 instances + local Jetson kit               | ~$250/quarter      | No local GPU needed                 |

Full shopping lists → `reference/hardware-kits.mdx`

### This Is Tomorrow’s Production Stack — Today
Every tool and model in this course is actively shipped by:
- Tesla Optimus · Figure 01 · 1X Technologies · Agility Robotics  
- Boston Dynamics · Sanctuary AI · Apptronik · NVIDIA Project GR00T

You’re not learning old robotics.  
You’re building the future.

**Let’s go.**

→ Next: [Why Physical AI Matters](./why-physical-ai.mdx)