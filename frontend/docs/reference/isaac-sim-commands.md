# NVIDIA Isaac Sim – Complete Commands & Usage README

A comprehensive **README.md** for **NVIDIA Isaac Sim**, covering installation checks, launch commands, scripting, ROS 2 integration, simulation workflows, performance tuning, and best practices.  
Designed for **robotics simulation, humanoid robots, and Vision–Language–Action (VLA) pipelines**.

---

## What is NVIDIA Isaac Sim?

**NVIDIA Isaac Sim** is a high-fidelity robotics simulator built on **NVIDIA Omniverse**.  
It is widely used for:

- Robot development and testing  
- Synthetic data generation  
- Reinforcement and imitation learning  
- ROS 2 integration  
- Sim-to-real transfer  

---

## System Requirements

- Ubuntu 20.04 / 22.04  
- NVIDIA GPU (RTX / A-series recommended)  
- Latest NVIDIA drivers  
- CUDA-compatible system  
- ROS 2 (optional, for ROS integration)

---

## Installation Notes (Quick)

- Install via **NVIDIA Omniverse Launcher**
- Default install path:
```text
~/.local/share/ov/pkg/isaac_sim-*
```

---

## Launch Commands

### Launch Isaac Sim (GUI)
```bash
./isaac-sim.sh
```

### Headless Mode (No GUI)
```bash
./isaac-sim.sh --no-window
```

### Launch with ROS 2 Enabled
```bash
./isaac-sim.sh --enable-ros2
```

### Launch with ROS Domain ID
```bash
export ROS_DOMAIN_ID=0
./isaac-sim.sh
```

---

## Python & Scripting

### Run Python Script
```bash
./python.sh my_script.py
```

### Open Python REPL
```bash
./python.sh
```

### Common Script Directory
```text
standalone_examples/
```

---

## ROS 2 Integration

### Enable ROS 2 Bridge (GUI)
```
Window → Extensions → ROS → ROS2 Bridge → Enable
```

### ROS 2 Bridge Extension Name
```text
omni.isaac.ros2_bridge
```

### Verify ROS Topics
```bash
ros2 topic list
```

---

## Example Commands

### Core Example
```bash
./python.sh standalone_examples/api/omni.isaac.core/hello_world.py
```

### Manipulation Example
```bash
./python.sh standalone_examples/api/omni.isaac.manipulation/pick_place.py
```

### ROS 2 Example
```bash
./python.sh standalone_examples/api/omni.isaac.ros2_bridge/ros2_tutorial.py
```

---

## ⏱Simulation Control (GUI)

- ▶ **Play** – Start simulation  
- ⏸ **Pause** – Pause simulation  
- ⏹ **Stop** – Reset simulation  

*(Available in the Timeline panel)*

---

## Assets & USD Stages

### Default Assets Location
```text
isaac/Isaac/Assets
```

### Open USD Stage
```
File → Open → *.usd
```

### Save USD Stage
```
File → Save As
```

---

## Physics & Rendering

### Enable Physics Debug
```
Debug → Physics Debug Window
```

### Set Physics Frequency
```
World Settings → Physics → Time Steps Per Second
```

### Optimized Headless Training
```bash
./isaac-sim.sh --no-window
```

---

## Debugging & Logging

### Verbose Logs
```bash
./isaac-sim.sh --verbose
```

### Extension Console
```
Window → Extensions → Console
```

---

## Performance Tuning

### Select GPU
```bash
export CUDA_VISIBLE_DEVICES=0
```

### Reduce Rendering Load
```
Viewport → Disable RTX Effects
```

### Recommended for Training
- Headless mode
- Lower render resolution
- Fixed physics timestep

---

## Best Practices

- Use **GUI** for environment & robot design
- Use **headless mode** for training & batch runs
- Control robots via **ROS 2 topics, services, and actions**
- Keep **simulation and control logic separated**
- Version-control **USD environments**
- Match physics timestep with control loops

---

## Isaac Sim in Humanoid & VLA Pipelines

- **Vision:** RGB, depth, segmentation, synthetic datasets
- **Language:** LLM-based planners via ROS 2 nodes
- **Action:** Manipulation, navigation, motion planning
- **Training:** Reinforcement learning, imitation learning
- **Deployment:** Sim-to-real validation

---

## Related NVIDIA Tools

- Isaac ROS  
- Isaac Lab (RL Training)  
- NVIDIA Omniverse  
- NVIDIA Jetson Platform  
- NVIDIA PhysX  

---

## Workflow Tip

> **Design in GUI → Train headless → Integrate ROS 2 → Validate sim-to-real**

---

## License

Refer to NVIDIA Isaac Sim and Omniverse licensing terms for research and commercial usage.
