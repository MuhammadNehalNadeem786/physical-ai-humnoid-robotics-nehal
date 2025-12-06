# Hardware Requirements

**RTX 4070 Ti+ • Jetson Orin • RealSense**  
Choose your tier — from full simulation to real walking humanoid.

This course is built for **real 2025–2026 workloads**: Isaac Sim + large USD scenes + Replicator + VLA inference + nvblox + cuVSLAM all running at once.  
Laptops, MacBooks, and gaming PCs without RTX will **not** work. Here are the four proven paths.

### Tier 1 – Simulation Only (Most Students)
Run the entire course + capstone 100 % in high-fidelity simulation.

| Component       | Minimum                          | Recommended                    | Why it matters                                      |
|-----------------|----------------------------------|---------------------------------|-----------------------------------------------------|
| GPU             | RTX 4070 Ti (12 GB)              | RTX 4090 / 4090 Laptop (24 GB)  | Isaac Sim + Replicator + VLA training need VRAM     |
| CPU             | 12th/13th Gen i7 or Ryzen 7      | 14th Gen i9 or Ryzen 9 7950X    | Physics (1000+ rigid bodies) are heavily multi-core |
| RAM             | 32 GB DDR5                       | 64 GB DDR5                      | USD scenes + ROS 2 + training often exceed 40 GB    |
| Storage         | 1 TB NVMe                        | 2 TB NVMe                       | Isaac Sim assets + synthetic data = 300–600 GB      |
| OS              | Ubuntu 22.04 LTS                 | Ubuntu 22.04 LTS                | Native ROS 2 Humble/Iron + NVIDIA drivers           |
| Approx. Cost    | ~$1,800–$2,400                   | ~$3,500–$4,500                  |                                                     |

### Tier 2 – Edge + Perception (Real Sensors, No Robot Yet)
Deploy perception, mapping, and VLA inference on real hardware. Required for real 3D reconstruction and offline capstone.

| Component             | Model                                      | Price   | Notes                                                                 |
|-----------------------|--------------------------------------------|---------|-----------------------------------------------------------------------|
| Edge Brain            | Jetson Orin Nano 8 GB Super Dev Kit        | $249    | New 2025 price – 40 TOPS, runs nvblox + Gemini + OpenVLA @ 15–20 fps  |
|                       | → Jetson Orin NX 16 GB (upgrade path)      | $699    | 70 TOPS – runs full offline VLA + cuVSLAM smoothly                    |
| Depth Camera + IMU    | Intel RealSense D435i or D455              | $349    | Built-in IMU, perfect for VSLAM and nvblox                            |
| Microphone            | ReSpeaker 4-Mic Array or USB mic          | $69     | Far-field voice commands for Whisper Live                             |
| Power & Cables        | 128 GB microSD + good 65 W+ supply         | $50     |                                                                       |
| Total                 |                                            | ~$720   | Complete “brain + eyes + ears” kit                                    |

### Tier 3 – Full Physical AI (Real Humanoid Deployment)
Run your capstone live on a real walking/manipulating robot.

| Option                | Robot                                 | Price Range      | Notes                                                                                     |
|-----------------------|---------------------------------------|------------------|-------------------------------------------------------------------------------------------|
| Budget Proxy          | Unitree Go2 Edu / Pro                 | $2,800–$4,500    | Quadruped – excellent ROS 2 support, perfect for sim-to-real testing                      |
| Mini Humanoid         | Hiwonder TonyPi Pro or similar        | $600–$1,200      | Table-top, good for kinematics & manipulation, limited AI performance                    |
| Real Humanoid         | Unitree G1                             | ~$16,000         | The only affordable, open, dynamic bipedal humanoid in 2025 – perfect for capstone         |
| Premium               | Figure 01, Tesla Optimus (Gen 2 dev)  | $50k–$150k+      | Closed ecosystem – not needed for this course                                             |

### Tier 4 – Cloud Native (No Local GPU)
For students who cannot buy an RTX workstation.

| Service               | Instance Type         | Cost (13 weeks) | Notes                                              |
|-----------------------|-----------------------|-----------------|----------------------------------------------------|
| AWS                   | g5.4xlarge (A10G 24 GB) or g6e.2xlarge | ~$180–$250      | Spot + on-demand mix, includes Omniverse streaming |
| Paperspace / Vast.ai  | RTX 4090 instances    | ~$0.7–$1.2/hr   | Often cheaper, but less stable                     |
| Local Edge Kit        | Still required (Tier 2) | ~$720         | You still need the Jetson + RealSense for real deployment |

### Official “Economy Student Kit” (Tier 2 – Most Popular)
| Item                        | Model                                | Price   |
|-----------------------------|--------------------------------------|---------|
| Jetson Orin Nano Super      | 8 GB                                 | $249    |
| Intel RealSense D435i       |                                      | $349    |
| ReSpeaker USB Mic Array     |                                      | $69     |
| 128 GB microSD + cables     |                                      | $40     |
| **Total**                   |                                      | **~$707** |

This kit + a decent RTX PC = full capstone with real perception and offline autonomy.

### Summary – Pick One

| Goal                              | Required Hardware                          | Total Investment       |
|-----------------------------------|--------------------------------------------|------------------------|
| Finish course + capstone in sim   | Tier 1 only                                | $2,000–$4,500          |
| Real perception + offline VLA     | Tier 1 + Tier 2                            | +$700                  |
| Real walking robot                | Tier 1 + Tier 2 + Unitree Go2 or G1        | +$3,000–$20,000        |
| Zero local GPU                    | Cloud + Tier 2                             | ~$250 + $700           |

Detailed shopping lists, Amazon links, and setup scripts → `reference/hardware-kits.mdx`

Next → [Course Roadmap](./course-roadmap.mdx)