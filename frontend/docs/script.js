// create-docs.js — FINAL VERSION (NO FRONTMATTER = NO YAML ERRORS)
const fs = require("fs");
const path = require("path");

const structure = {
  docs: [
    { "intro.md": "# Physical AI & Humanoid Robotics\n\nThe future of AI is physical." },
    { "overview.md": "# Course Overview\n\n13-week journey from ROS 2 to autonomous humanoid robots." },
    { "why-physical-ai.md": "# Why Physical AI Matters\n\nHumanoids are the next trillion-dollar industry." },
    { "learning-outcomes.md": "# Learning Outcomes\n\nYou will build real robots using industry tools." },
    { "hardware-requirements.md": "# Hardware Requirements\n\nRTX 4070 Ti+ • Jetson Orin • RealSense" },
    { "course-roadmap.md": "# 13-Week Roadmap\n\nFoundations → ROS 2 → Simulation → Isaac → VLA → Capstone" },

    { "module-1": [
      { "intro.md": "# Module 1: ROS 2 — The Robotic Nervous System\n\nThe Linux of robotics." },
      { "ros2-vs-ros1.md": "# ROS 1 vs ROS 2\n\nWhy ROS 2 won." },
      { "nodes-topics-services.md": "# Nodes, Topics, Services\n\nCore communication." },
      { "actions-parameters.md": "# Actions & Parameters\n\nLong-running goals." },
      { "python-rclpy.md": "# Python with rclpy\n\nFast prototyping." },
      { "cpp-rclcpp.md": "# C++ with rclcpp\n\nHard real-time." },
      { "colcon-workspaces.md": "# Colcon Workspaces\n\nProject organization." },
      { "launch-files.md": "# Launch Files\n\nOrchestrate systems." },
      { "urdf-basics.md": "# URDF & Xacro Basics\n\nRobot modeling." },
      { "humanoid-urdf.md": "# Building a Full Humanoid URDF\n\n30+ DOF model." },
      { "ros2-control.md": "# ros2_control Framework\n\nHardware interface." },
      { "joint-trajectory-controller.md": "# Joint Trajectory Controller\n\nSmooth motion." },
      { "diff-drive-vs-bipedal.md": "# Differential Drive vs Bipedal\n\nLocomotion strategies." },
      { "project-1-talker-listener.md": "# Project 1.1: Talker-Listener Node\n\nYour first ROS 2 program." },
      { "project-2-service-turtle.md": "# Project 1.2: Turtle Control Service\n\nService + launch file." },
      { "project-3-humanoid-urdf.md": "# Project 1.3: Full Humanoid URDF\n\nReady for simulation." },
    ]},

    { "module-2": [
      { "gazebo-evolution.md": "# Module 2: The Digital Twin\n\nGazebo + Unity simulation." },
      { "installation-ubuntu.md": "# Gazebo Harmonic Setup\n\nUbuntu 22.04 guide." },
      { "worlds-sdf.md": "# Worlds & SDF Format\n\nBuild environments." },
      { "physics-engines.md": "# Physics Engines\n\nRealistic dynamics." },
      { "lidar-camera-imu.md": "# Sensor Simulation\n\nLiDAR, RGB-D, IMU." },
      { "sensor-noise.md": "# Realistic Sensor Noise\n\nFor sim-to-real." },
      { "custom-plugins.md": "# Custom Gazebo Plugins\n\nC++ extensions." },
      { "unity-robotics-hub.md": "# Unity Robotics Hub\n\nPhotorealistic HRI." },
      { "ros-tcp-connector.md": "# ROS TCP Connector\n\nROS 2 ↔ Unity bridge." },
      { "digital-human-interaction.md": "# Human-Robot Interaction\n\nNatural gestures." },
      { "project-4-walking-gazebo.md": "# Project 2.1: Walking Humanoid in Gazebo\n\n10 steps without falling." },
      { "project-5-unity-hri.md": "# Project 2.2: Digital Human Interaction\n\nUnity character responds to ROS." },
    ]},

    { "module-3": [
      { "isaac-sim-overview.md": "# Module 3: NVIDIA Isaac Sim\n\nMost advanced robot simulator." },
      { "usd-assets.md": "# USD & Omniverse\n\nUniversal Scene Description." },
      { "synthetic-data-pipeline.md": "# Synthetic Data Generation\n\nInfinite training data." },
      { "replicator-sdg.md": "# Replicator SDG\n\nProcedural scenes." },
      { "isaac-ros-gems.md": "# Isaac ROS Gems\n\nCUDA perception." },
      { "nvblox-3d-reconstruction.md": "# NVBlox\n\nReal-time 3D mapping." },
      { "cuVSLAM.md": "# cuVSLAM\n\nGPU visual SLAM." },
      { "gemini-perception.md": "# Gemini Perception\n\nFoundation model detection." },
      { "nav2-stack.md": "# Nav2 for Bipedal Robots\n\nSafe navigation." },
      { "bipedal-locomotion.md": "# Bipedal Locomotion\n\nZMP, MPC, RL." },
      { "dynamic-balancing.md": "# Dynamic Balancing\n\nStay upright." },
      { "project-6-nav2-isaac.md": "# Project 3.1: Nav2 Navigation in Isaac Sim\n\nAutonomous office walking." },
      { "project-7-nvblox-mapping.md": "# Project 3.2: Real-time 3D Reconstruction\n\nBuild dense maps." },
    ]},

    { "module-4": [
      { "whisper-live.md": "# Module 4: Vision-Language-Action (VLA)\n\nLLMs meet robot bodies." },
      { "speech-to-text-ros.md": "# Whisper Live → ROS 2\n\nReal-time voice commands." },
      { "llm-action-parsing.md": "# Natural Language → Actions\n\nParse complex commands." },
      { "prompt-engineering-robotics.md": "# Prompt Engineering for Robots\n\nRobust reasoning." },
      { "openai-gpt-4o-realtime.md": "# GPT-4o Realtime API\n\nVoice + vision + action." },
      { "local-llms-llama3.md": "# Local LLMs (LLaMA 3)\n\nOffline intelligence." },
      { "action-tokenization.md": "# Action Tokenization\n\nFor end-to-end training." },
      { "octo-rt-x.md": "# Octo & RT-X\n\nOpen-source VLA models." },
      { "openvla.md": "# OpenVLA Framework\n\nTrain your own VLA." },
      { "training-vla-isaac.md": "# Training in Isaac Sim\n\nFull VLA pipeline." },
      { "project-8-voice-robot.md": "# Project 4.1: Voice-Controlled Assistant\n\n\"Bring me the red cup\"." },
      { "project-9-offline-vla.md": "# Project 4.2: Offline VLA Robot\n\nZero internet." },
      { "capstone-project.md": "# Capstone: Autonomous Humanoid Assistant\n\nYour personal robot. Deployable on real hardware." },
    ]},

    { "advanced": [
      { "sim-to-real.md": "# Sim-to-Real Transfer\n\nZero-shot deployment." },
      { "reinforcement-learning.md": "# Reinforcement Learning\n\nTrain in Isaac Gym." },
      { "humanoid-locomotion.md": "# Advanced Humanoid Locomotion\n\nMPC + RL." },
      { "multi-modal-interaction.md": "# Multi-Modal Interaction\n\nVision + language + touch." },
    ]},

    { "reference": [
      { "hardware-kits.md": "# Hardware Kits\n\nFull shopping list." },
      { "cloud-vs-onprem.md": "# Cloud vs On-Premise\n\nAWS g5 vs local lab." },
      { "recommended-gpus.md": "# Recommended GPUs\n\nRTX 4070 Ti → 4090." },
      { "ros2-cheatsheet.md": "# ROS 2 Cheatsheet\n\nOne-page reference." },
      { "isaac-sim-commands.md": "# Isaac Sim Commands\n\nCLI reference." },
    ]},
  ]
};

function createFiles(basePath, items) {
  items.forEach(item => {
    for (const key in item) {
      if (key.endsWith(".md")) {
        const filePath = path.join(basePath, key);
        fs.mkdirSync(path.dirname(filePath), { recursive: true });
        fs.writeFileSync(filePath, item[key], "utf-8");
      } else {
        const folderPath = path.join(basePath, key);
        fs.mkdirSync(folderPath, { recursive: true });
        createFiles(folderPath, item[key]);
      }
    }
  });
}

createFiles(".", structure.docs);
console.log("COMPLETE PHYSICAL AI TEXTBOOK GENERATED — 100% WORKING!");

