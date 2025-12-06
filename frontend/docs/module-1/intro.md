# The Robotic Nervous System (ROS 2)  
**"The Linux of Robotics" — Industry Standard Since 2020**

Welcome to the foundation of every modern robot on Earth in 2025–2026.

Tesla Optimus, Figure 01, Boston Dynamics Atlas, Unitree G1, Amazon Astro, NVIDIA JetBot, Sanctuary Phoenix — **every single one runs ROS 2**.

This module turns you from "I’ve heard of ROS" → **"I build production-grade ROS 2 systems used by humanoid teams today"**.

### Why ROS 2 Won (And ROS 1 Is Dead)
| ROS 1 (2007–2020)           | ROS 2 (2020–Present)                              |
|-----------------------------|----------------------------------------------------|
| Single-threaded             | Real-time, deterministic, DDS-based               |
| No security                 | Built-in SROS2 encryption & authentication        |
| Best-effort only            | QoS policies (Reliability, Durability, Lifespan)  |
| No lifecycle management     | Managed node lifecycles                         |
| Python/C++ only             | Officially supports Python, C++, Rust, Go, JS     |
| Dead in industry            | **Mandatory** at Tesla, NASA, Intel, NVIDIA, Foxconn |

**ROS 2 is not a library. It is the operating system for robots.**

### Module Overview (Weeks 2–5)

| Lesson                              | What You Will Master                                                                    | Real-World Example You’ll Build                                                                 |
|-------------------------------------|------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| ROS 2 vs ROS 1                      | Why the entire industry migrated overnight                                               | Compare a ROS 1 turtlebot node vs ROS 2 version side-by-side                                    |
| Nodes, Topics, Services, Actions    | The four communication patterns every robot uses                                        | Build a humanoid head that turns when you publish `/look_at`                                    |
| Parameters & Launch Files           | Configuration, remapping, and system orchestration                                      | One-click launch of a full 30-DOF humanoid with tunable walk speed                             |
| Python (rclpy)                      | Rapid prototyping — 90 % of research teams use this                                     | Voice-controlled arm using speech-to-text → ROS 2 topic                                          |
| C++ (rclcpp)                        | Hard real-time, low latency — used in safety-critical systems                           | 1 kHz joint state publisher + trajectory controller                                             |
| Colcon Workspaces & Packaging       | Professional project structure (used at Tesla, NVIDIA, Bosch)                           | `isaac_humanoid_ws/` with 12 packages, clean build, CI-ready                                    |
| 
| URDF & Xacro Mastery                | Robot description — the DNA of your robot                                                | Full Unitree G1–style humanoid URDF from scratch using Xacro macros                             |
| ros2_control & Controllers          | The standard way to connect software → motors                                            | Hardware-agnostic JointTrajectoryController running on simulated + real humanoid                     |
| Gazebo Integration                  | Bridge from RViz → physics world                                                        | Your humanoid walks in Gazebo using `ros2_control` and `gazebo_ros2_control`                    |
| Bipedal vs Wheeled Fundamentals     | Why walking is exponentially harder than driving                                        | Visualize ZMP, CoM, footstep planning, and capture point in RViz                                 |

### Final Deliverables – Module 1 (You Will Ship All of These)
**Project 1.1** – Talker-Listener + Actions  
**Project 1.2** – Multi-node Turtle Control with Services & Launch Files  
**Project 1.3** – Full 30+ DOF Humanoid URDF  
→ Loads in RViz  
→ Controlled via `JointTrajectoryController`  
→ Walks forward 10 steps in Gazebo using only ROS 2 standard tools (no custom plugins yet)

This is the **exact same base stack** that every humanoid company starts from before adding AI.

### Tools You Will Use Daily
```bash
ros2 topic list
ros2 action send_goal
ros2 launch
colcon build --symlink-install
xacro, urdf, sdf
ros2 control, gazebo_ros2_control
rviz2, plotjuggler