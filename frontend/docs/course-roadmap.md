# 13-Week Roadmap  
**Foundations → ROS 2 → Simulation → Isaac Sim → Vision-Language-Action → Autonomous Humanoid**

The exact production roadmap the fastest humanoid teams are running in 2025–2026. Every week ends with a **working, recordable demo**.

| Week | Focus                                               | Key Topics                                                                                               | Project / Deliverable You Ship This Week                                                                                 | Primary Tools                                      |
|------|-----------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------|
| 1    | Physical AI Foundations & Workstation Setup         | Why humanoids now, industry landscape, Ubuntu + NVIDIA + Docker setup                                    | Fully working dev machine (Ubuntu 22.04 + ROS 2 + Isaac Sim)                                                              | Linux, NVIDIA drivers, Docker                      |
| 2    | ROS 2 Core Concepts & Tooling                       | ROS 2 vs ROS 1, nodes/topics/services/actions, parameters, colcon, launch files                         | Project 1.1: Talker-Listener · Project 1.2: Turtle control service + multi-node launch                                   | rclpy, rclcpp, colcon                              |
| 3    | Robot Modeling – URDF, Xacro, ros2_control          | URDF/Xacro macros, transmissions, gazebo_ros2_control, JointTrajectoryController                        | Project 1.3: Complete 30+ DOF humanoid URDF that moves in RViz                                                           | URDF, Xacro, ros2_control                          |
| 4–5  | Advanced ROS 2 & Bipedal Locomotion Basics          | Lifecycle nodes, real-time C++, ZMP, MPC intro, diff-drive vs bipedal                                    | Stable walking humanoid in RViz + basic Gazebo (no plugins yet)                                                           | Gazebo Harmonic, ros2_controllers                  |
| 6    | Gazebo – Physics, Sensors, Worlds                   | SDF worlds, physics engines, LiDAR/RGB-D/IMU simulation, realistic sensor noise                             | Project 2.1: Humanoid walks 10+ stable steps in realistic Gazebo world                                                    | Gazebo Harmonic, SDF, sensor plugins               |
| 7    | Unity Digital Twin & Human-Robot Interaction        | Unity Robotics Hub, ROS-TCP Connector, digital humans, gesture mirroring                                | Project 2.2: Photorealistic Unity human interacts with your ROS 2 humanoid in real time                                  | Unity 2023+, ROS-TCP Connector                     |
| 8    | NVIDIA Isaac Sim – The New Standard                 | Isaac Sim overview, USD assets, Omniverse workflow, physics speed, core extensions                      | Humanoid loads and walks in photorealistic Isaac Sim apartment scene                                                      | Isaac Sim 2024.1+, Omniverse                       |
| 9    | Synthetic Data Generation at Scale                  | Replicator, domain randomization, material/light/camera variation, synthetic data pipelines            | 10,000+ randomized training images + depth/normal/object masks generated                                                  | NVIDIA Replicator, Python SDK                      |
| 10   | Isaac ROS Perception Stack on Jetson                | nvblox, cuVSLAM, Gemini perception GEMs, hardware-accelerated pipelines                                  | Project 3.2: Real-time 3D reconstruction + zero-shot object detection on live RealSense feed                         | Jetson Orin, Isaac ROS, nvblox, Gemini             |
| 11   | Bipedal Navigation & Whole-Body Control             | Nav2 with bipedal costmaps, dynamic balancing, MPC, locomotion policies in Isaac Sim                    | Project 3.1: Autonomous bipedal navigation through an office environment in Isaac Sim                                    | Nav2, MoveIt 2, Isaac Sim locomotion               |
| 12   | Vision-Language-Action (VLA) Full Pipeline          | Whisper Live → GPT-4o-realtime / Llama 3 70B → action parsing → Octo / OpenVLA → robot execution       | Project 4.1: Online voice-to-action (“Bring me the red cup”) · Project 4.2: Fully offline VLA agent (no internet)      | Whisper, GPT-4o, Llama 3, Octo, OpenVLA           |
| 13   | Capstone – Autonomous Humanoid Assistant               | End-to-end integration: voice → planning → navigation → perception → manipulation → speech feedback     | Final demo + video: complete autonomous humanoid performing multi-step tasks from natural language (sim + optional real robot) | Entire stack combined                                |

### Weekly Rhythm
- Mon–Wed → Theory + guided labs  
- Thu–Fri → Project implementation  
- Sat → Polish + record demo video  
- Sun → Submit (optional community review)

### After Week 13 You Will Own
- 9 graded projects + 1 full capstone in a public GitHub repo  
- 12–15 professional demo videos (instant portfolio)  
- A working autonomous humanoid that responds to open-ended voice commands  
- Skills that immediately qualify you for roles at Tesla Optimus, Figure, 1X, Agility, NVIDIA Robotics, Sanctuary, Apptronik, Boston Dynamics, and every serious humanoid startup

This is the real 2025–2026 production roadmap — executed by you in 13 weeks.

**Let’s ship.**

Next → **Module 1: The Robotic Nervous System (ROS 2)**  
→ [module-1/intro.mdx](./module-1/intro.mdx)