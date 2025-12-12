# Reference: Hardware Kits

## Introduction

**Hardware kits** provide the physical components required to build and experiment with humanoid and autonomous robots. These kits are essential for translating **simulation-based learning** (like Isaac Sim and Gazebo) into **real-world robot deployment**. They typically include actuators, sensors, controllers, and structural parts.

Understanding the available hardware kits helps bridge the gap between **simulated robotics research** and **practical robotics implementation**.

---

## Common Hardware Kits for Humanoids

### 1. Robotis OP3 / OP2 Kits

* **Features:** Humanoid platform, modular actuators, open-source ROS support
* **Applications:** Walking, balancing, manipulation, and education
* **Advantages:** Fully supported ROS 2 integration, strong community

### 2. Unitree Robotics Kits (A1, B1, etc.)

* **Features:** Quadruped kits, high-performance actuators, sensor modules
* **Applications:** Dynamic locomotion, reinforcement learning research
* **Advantages:** High-speed actuation, robust design, simulation support

### 3. NVIDIA JetBot / JetRacer Kits

* **Features:** Small mobile robots powered by NVIDIA Jetson
* **Applications:** AI perception, navigation, VLA testing on small platforms
* **Advantages:** GPU acceleration, AI-friendly hardware, accessible for prototyping

### 4. LEGO Mindstorms / Spike Prime

* **Features:** Modular building blocks, programmable controllers
* **Applications:** Education, prototyping simple robotics behaviors
* **Advantages:** Easy to assemble, safe, great for learning robotics fundamentals

### 5. OpenHumanoids / Custom DIY Kits

* **Features:** Custom frames, off-the-shelf actuators and sensors
* **Applications:** Research and experimental humanoid robotics
* **Advantages:** Highly customizable, supports specialized experiments

---

## Components to Consider

* **Actuators:** Servos, harmonic drives, brushless motors for joints
* **Sensors:** LiDAR, RGB-D cameras, IMUs, force sensors
* **Controllers:** Microcontrollers, SBCs (Raspberry Pi, NVIDIA Jetson)
* **Structural Parts:** Frames, joints, brackets for humanoid assembly
* **Power Systems:** Batteries and voltage regulators for safe operation

---

## Advantages of Using Hardware Kits

* Provides **hands-on experience** with real robots
* Enables **sim-to-real testing** of trained VLA models
* Facilitates experimentation with **control, perception, and AI modules**
* Reduces development time compared to building robots from scratch

---

## Challenges

* High cost of high-performance humanoid kits
* Maintenance and calibration requirements
* Limited adaptability for specialized experiments unless custom components are added
* Need for synchronization between hardware and ROS 2 software pipelines

---

## Learning Outcomes

* Understanding the types and capabilities of humanoid hardware kits
* Selecting appropriate kits for simulation-to-real projects
* Integrating hardware with ROS 2, perception, and control pipelines
* Bridging theory from simulation to physical robot deployment

---

## References

* Robotis OP3/OP2 Official Documentation
* Unitree Robotics User Manuals
* NVIDIA JetBot/JetRacer Guides
* LEGO Mindstorms and Spike Prime Manuals
* OpenHumanoids and DIY Robotics Communities
