# Gazebo Harmonic Setup on Ubuntu 22.04

## Introduction

Harmonic drives are **high-precision actuators** used in robotics for smooth, backlash-free motion. Simulating them in **Gazebo** allows developers to **test robot kinematics, controllers, and sensors** before deploying physical hardware. This guide provides a **step-by-step setup for Ubuntu 22.04**, integrating **Gazebo**, **ROS 2 Humble**, and harmonic drive configurations.

---

## Prerequisites

* **Ubuntu 22.04 LTS**
* **ROS 2 Humble** ([Installation guide](https://docs.ros.org/en/humble/Installation.html))
* **Gazebo 11** (verify with `gazebo --version`)
* **colcon build tool**: `sudo apt install python3-colcon-common-extensions`
* **ROS 2 Control packages**:

  ```bash
  sudo apt install ros-humble-ros2-control ros-humble-ros2-controllers ros-humble-gazebo-ros-pkgs
  ```

---

## Step 1: Create ROS 2 Workspace

```bash
mkdir -p ~/harmonic_ws/src
cd ~/harmonic_ws
colcon build
source install/setup.bash
```

---

## Step 2: Create Robot URDF/Xacro

Define **robot links, joints, and harmonic drive transmissions**.

```xml
<robot name="robot_arm">
  <link name="base_link"/>
  <joint name="shoulder_joint" type="revolute">
    <parent link="base_link"/>
    <child link="upper_arm_link"/>
    <limit effort="15" velocity="1.0" lower="-1.57" upper="1.57"/>
  </joint>
  <transmission name="shoulder_trans">
    <type>transmission_interface/SimpleTransmission</type>
    <joint name="shoulder_joint"/>
    <actuator name="shoulder_motor">
      <mechanicalReduction>100</mechanicalReduction>
    </actuator>
  </transmission>
</robot>
```

---

## Step 3: Add Gazebo Plugins

```xml
<gazebo>
  <plugin name="gazebo_ros_control" filename="libgazebo_ros2_control.so"/>
</gazebo>
```

---

## Step 4: Configure ROS 2 Controllers

Create `robot_controllers.yaml`:

```yaml
shoulder_joint:
  type: effort_controllers/JointEffortController
  joint: shoulder_joint
  pid: {p: 100.0, i: 0.01, d: 5.0}
```

---

## Step 5: Launch Gazebo Simulation

Create `gazebo_launch.py`:

```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='gazebo_ros',
            executable='gazebo',
            arguments=['-s', 'libgazebo_ros_factory.so'],
            output='screen'
        ),
        Node(
            package='controller_manager',
            executable='spawner',
            arguments=['shoulder_joint'],
            output='screen'
        )
    ])
```

Launch simulation:

```bash
ros2 launch your_robot_pkg gazebo_launch.py
```

---

## Step 6: Test Harmonic Drive Motion

```bash
ros2 topic pub /shoulder_joint/command std_msgs/msg/Float64 "data: 1.0"
```

* Observe motion in Gazebo.
* Tune PID gains in `robot_controllers.yaml` for realistic behavior.

---

## Advantages

* Realistic harmonic drive simulation.
* Early **controller and kinematics testing**.
* Reduces **hardware risk and cost**.
* Fully compatible with **ROS 2 Humble** and **Gazebo 11**.

---

## Challenges

* PID tuning is critical for smooth motion.
* Multi-joint robots may require high computational resources.
* Accuracy depends on precise URDF modeling.

---

## References

1. [ros2_control Documentation](https://ros-controls.github.io/ros2_control)
2. [Gazebo ROS Integration](https://gazebosim.org/tutorials)
3. Harmonic Drive Inc., Technical Manuals

---

## 📊 Optional Workflow Diagram

```
URDF/Xacro → Joint Transmission → Gazebo Physics → ros2_control → Joint State Feedback → PID Tunin
```
