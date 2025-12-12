# Project 2.1: Walking Humanoid in Gazebo

## Introduction

This project focuses on simulating a **walking humanoid robot in Gazebo**, aiming to achieve **10 consecutive steps without falling**. It combines **URDF modeling, physics simulation, sensor integration, and control algorithms** to ensure stable bipedal locomotion. This detailed guide expands on each step with practical considerations and best practices.

---

## 10-Step Detailed Procedure

### Step 1: Prepare the ROS 2 Workspace

* Create a ROS 2 workspace for the humanoid project:

  ```bash
  mkdir -p ~/humanoid_ws/src
  cd ~/humanoid_ws
  colcon build
  source install/setup.bash
  ```
* Set up version control for the workspace to manage robot models and configurations.

### Step 2: Humanoid URDF/Xacro Modeling

* Model the humanoid with all **links, joints, and transmissions**, including torso, arms, legs, and head.
* Include **ankle, knee, and hip joints** for both legs for walking motion.
* Ensure **link masses, center of mass, and inertia** are accurately defined to reflect real-world dynamics.
* Use Xacro macros for modularity and reusability.

### Step 3: Integrate Gazebo Plugins

* Add the **`gazebo_ros_control` plugin** to enable ROS 2 control of joints.
* Include **IMU and foot contact sensors**:

  * IMU provides orientation and angular velocity for balance.
  * Contact sensors detect when feet touch the ground, crucial for step timing.
* Optionally, add **torque sensors** for real-time feedback.

### Step 4: Configure Physics Engine

* Use **ODE or Bullet** engine for realistic dynamics.
* Tune parameters:

  * **Gravity**: `-9.81 m/s²`
  * **Friction**: for feet-ground interaction
  * **Max step size & solver iterations**: for stable simulation
* Ensure small timestep (`max_step_size ~0.001s`) to improve control precision.

### Step 5: Implement Controllers

* Implement **joint-level controllers** (effort or position controllers) for legs.
* Tune **PID gains** for smooth joint movement without overshoot.
* Optionally, implement **trajectory controllers** for walking sequences.

### Step 6: Plan Walking Trajectory

* Define **step parameters**:

  * Step length: distance covered per step
  * Step height: foot clearance
  * Step frequency: walking speed
* Use **inverse kinematics (IK)** to calculate joint angles for each step.
* Plan **swing and stance phases** carefully to maintain stability.

### Step 7: Feedback Control and Balance

* Continuously monitor **IMU orientation and angular velocity**.
* Use **contact sensor data** to detect foot-ground contact.
* Adjust joint commands in real-time to maintain **center of mass over support polygon**.
* Implement **ankle and hip compensation** for lateral balance.

### Step 8: Test in Gazebo Simulation

* Launch the humanoid in a **flat Gazebo world**.
* Observe step execution and detect any instabilities.
* Verify that **10 steps can be completed** without falling.
* Visualize joint states, sensor outputs, and center of mass trajectory.

### Step 9: Fine-Tune Parameters

* Adjust **PID gains, step timing, and step height** based on observations.
* Iteratively refine trajectories to prevent tipping or foot slipping.
* Test under slight perturbations to ensure robustness.

### Step 10: Optional: Add Environment Complexity

* Introduce **uneven terrain, slopes, or small obstacles**.
* Observe humanoid performance under more realistic conditions.
* Update trajectory planning and feedback controllers to handle environmental variations.

---

## Key Considerations

* Maintain **low center of mass** for stability.
* Use **smooth trajectories** for ankle, knee, and hip joints.
* Monitor **sensor feedback continuously** to adjust motion in real-time.
* Keep simulation **timestep small** for accurate dynamics.
* Gradually increase difficulty: start on flat terrain, then add obstacles.

---

## References

1. [Gazebo Humanoid Simulation Tutorials](https://gazebosim.org/tutorials)
2. [ROS 2 Control Documentation](https://ros-controls.github.io/ros2_control)
3. [Bipedal Walking and Inverse Kinematics Research](https://ieeexplore.ieee.org/document/7422318)
4. [Humanoid Robot Dynamics and Control Principles](https://link.springer.com/chapter/10.1007/978-3-319-32386-0_15)
