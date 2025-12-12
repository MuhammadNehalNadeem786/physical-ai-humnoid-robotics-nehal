# ROS 2 Cheatsheet (Quick Reference)

A concise reference for **ROS 2** covering commonly used commands, workflows, and best practices.  
Designed for **robotics, humanoid systems, and Vision–Language–Action (VLA) pipelines**.

---

## ROS 2 Basics

### Check ROS Version
```bash
ros2 --version
```

### Source ROS Setup
```bash
source /opt/ros/<distro>/setup.bash
```

Example:
```bash
source /opt/ros/humble/setup.bash
```

---

## Workspace Management

### Create Workspace
```bash
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
```

### Build Workspace
```bash
colcon build
```

### Source Workspace
```bash
source install/setup.bash
```

---

## Packages

### Create Python Package
```bash
ros2 pkg create my_package --build-type ament_python
```

### Create C++ Package
```bash
ros2 pkg create my_package --build-type ament_cmake
```

### List Packages
```bash
ros2 pkg list
```

---

## Nodes

### Run Node
```bash
ros2 run <package_name> <node_name>
```

### List Nodes
```bash
ros2 node list
```

### Node Info
```bash
ros2 node info /node_name
```

---

## Topics

### List Topics
```bash
ros2 topic list
```

### Echo Topic
```bash
ros2 topic echo /topic_name
```

### Topic Info
```bash
ros2 topic info /topic_name
```

### Publish Test Message
```bash
ros2 topic pub /topic_name std_msgs/msg/String "{data: 'Hello ROS 2'}"
```

---

## Services

### List Services
```bash
ros2 service list
```

### Service Type
```bash
ros2 service type /service_name
```

### Call Service
```bash
ros2 service call /service_name <service_type> "{request}"
```

---

## Actions

### List Actions
```bash
ros2 action list
```

### Action Info
```bash
ros2 action info /action_name
```

### Send Action Goal
```bash
ros2 action send_goal /action_name <action_type> "{goal}"
```

---

## Interfaces (Messages / Services / Actions)

### List Interfaces
```bash
ros2 interface list
```

### Show Interface Definition
```bash
ros2 interface show std_msgs/msg/String
```

---

## Parameters

### List Parameters
```bash
ros2 param list
```

### Get Parameter
```bash
ros2 param get /node_name param_name
```

### Set Parameter
```bash
ros2 param set /node_name param_name value
```

---

## Launch Files

### Run Launch File
```bash
ros2 launch <package_name> <launch_file.py>
```

Example:
```bash
ros2 launch nav2_bringup navigation_launch.py
```

---

## ros2 bag (Record & Playback)

### Record Topics
```bash
ros2 bag record /topic1 /topic2
```

### Play Bag
```bash
ros2 bag play bag_name
```

---

## Diagnostic & Visualization Tools

| Tool | Description |
|---|---|
| `rviz2` | 3D visualization |
| `rqt` | GUI tools & graphs |
| `ros2 doctor` | System diagnostics |
| `ros2 graph` | Node graph view |

---

## Environment Variables

```bash
export ROS_DOMAIN_ID=0
export RMW_IMPLEMENTATION=rmw_fastrtps_cpp
```

---

## ROS 2 Best Practices

- Always **source setup files** after build
- Use **launch files** instead of manual runs
- Prefer **Actions** for long-running tasks
- Use **QoS profiles** for sensor data
- Apply **namespaces** for multi-robot systems
- Use **Lifecycle nodes** for safety-critical components

---

## ROS 2 in Humanoid & VLA Systems

- **Topics:** vision, sensors, force feedback
- **Services:** configuration and control
- **Actions:** navigation, manipulation, motion
- **DDS:** real-time distributed communication
- **ros2 bag:** dataset generation & debugging

---

## Rule of Thumb
> If it streams → **Topic**  
> If it configures → **Service**  
> If it moves → **Action**

---

## Recommended Stacks & Tools
- ROS 2 Navigation (Nav2)
- MoveIt 2
- NVIDIA Isaac ROS
- Gazebo / Ignition
- RTAB-Map

---
