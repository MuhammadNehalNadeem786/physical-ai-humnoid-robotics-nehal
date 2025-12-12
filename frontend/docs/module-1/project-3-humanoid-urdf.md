# Project 1.3: Full Humanoid URDF

**Project 1.3** focuses on creating a **Full Humanoid URDF** in ROS 2, which is a crucial step in representing a robot’s **physical structure, kinematics, and dynamics**. This project builds on the foundational knowledge of URDF and Xacro, combining it with practical humanoid modeling.

---

## Concept Overview

A **humanoid robot** is complex, consisting of multiple links and joints that replicate the human body. A **Full Humanoid URDF** serves as the complete blueprint of the robot, defining:

- How the robot looks in visualization tools like RViz.
- How the robot behaves dynamically in simulation.
- How its joints and links are connected and move relative to each other.

The project emphasizes the **use of Xacro** to make the URDF modular, readable, and scalable.

---

## Key Components

### Root Link
- Serves as the **anchor point** for the robot.
- Often the **pelvis** or a base point on the ground for mobile humanoids.
- Connected to the world frame with a **floating joint** to allow free movement in 3D space during simulation.

### Torso and Spine
- Consists of multiple links connected by **revolute or prismatic joints**.
- Allows bending, twisting, and balance adjustments.

### Arms (Manipulators)
- Shoulder joints typically have **three degrees of freedom (DOF)**.
- Elbows and wrists use **single-axis revolute joints**.
- Essential for humanoid manipulation and interaction with the environment.

### Legs (Locomotion)
- Hip joints require **high DOF** for natural walking and turning.
- Ankle and foot assemblies include multiple joints for **pitch (up/down) and roll (side-to-side) motion**, critical for stability.

---

## URDF and Xacro Considerations

Creating a humanoid URDF requires attention to:

1. **Links**
   - Visual: How the robot appears.
   - Collision: Simplified geometry for physics simulation.
   - Inertial: Mass and inertia, crucial for dynamic stability.

2. **Joints**
   - Define motion between links.
   - Include joint limits to prevent unrealistic movements.

3. **Xacro**
   - Enables reusable macros for repetitive structures like arms and legs.
   - Supports parameterization for link sizes, joint limits, and other attributes.
   - Allows modular file inclusion for a cleaner and maintainable design.

---

## Learning Objectives

By completing this project, you will:

1. Learn to **design and organize a complex robot model** using URDF and Xacro.
2. Understand the **kinematic chain structure** of a humanoid.
3. Gain practical experience in **specifying link, joint, and inertial properties**.
4. Prepare the robot for **simulation, motion planning, and control** in ROS 2.
5. Develop skills for **modular and scalable robot modeling**, which is essential for advanced humanoid projects.

---

## Real-World Analogy

- The **Full Humanoid URDF** is like a blueprint for an architect, defining the structure, joints, and materials of a building.
- Just as a building plan ensures stability and functionality, the URDF ensures the humanoid robot behaves correctly in simulation and real-world tasks.
- This project bridges the gap between **conceptual robot design** and **practical implementation** in ROS 2.

---

By mastering Project 1.3, learners gain the foundation to **visualize, simulate, and control a humanoid robot**, setting the stage for advanced robotics projects involving motion planning, reinforcement learning, and real-world manipulation.
