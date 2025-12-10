# Colcon Workspaces – Professional Project Organization  
**How Every Humanoid Team in 2025 Structures Their Code — From Zero to Industry-Standard**

You now know how to write Python and C++ ROS 2 nodes.  
Now you’ll learn **exactly** how Tesla, Figure, Unitree, Boston Dynamics, and every serious robotics team **organizes millions of lines of code** so 100 engineers can work together without chaos.

This one file takes you from “I just have random .py files on my desktop” → “I run a clean, scalable, production-grade humanoid codebase”.

Let’s go — zero to pro, beginner-friendly, 100% real-world.

### What Is a “Workspace”? (Explained Like You’re 10)

| Real Life Example                 | In Robotics → Workspace means…                                         |
|--------------------------------|--------------------------------------------------------------------------|
| Your bedroom                   | A folder where you keep **all** your robot code                         |
| Your school backpack           | Everything has its place: homework, lunch, books                        |
| A giant LEGO factory           | Hundreds of people building one big robots — everyone knows where parts go |

**ROS 2 Workspace = One folder that contains all your robot’s code, cleanly organized.**

### What Is “colcon”? (The Build Tool Everyone Uses)

| Tool       | What It Does                                   | Who Uses It                         |
|------------|-------------------------------------------------|-------------------------------------|
| colcon     | The **official** ROS 2 build system (since 2018) | Tesla, NASA, NVIDIA, Unitree, Figure |
| catkin     | Old ROS 1 tool — dead in 2025                  | Only legacy code                    |

**colcon = Collection of packages → builds them all at once, fast and clean.**

### The One True Folder Structure (Used by Every Top Team)

This is the **exact layout** you will see at any serious humanoid company:

```bash
humanoid_ws/                    # Your workspace folder
├── src/                        # ALL source code goes here
│   ├── humanoid_description/   # URDF, meshes, Xacro files
│   │   ├── urdf/
│   │   ├── meshes/
│   │   └── package.xml
│   │
│   ├── walking_controller/     # C++ real-time control
│   │   ├── src/
│   │   ├── include/
│   │   └── CMakeLists.txt
│   │
│   ├── voice_brain/            # Python AI brain
│   │   ├── voice_brain/
│   │   └── setup.py
│   │
│   ├── perception/             # Camera, LiDAR, nvblox
│   └── launch/                 # .launch.py files to start everything
│
├── build/                      # Auto-generated — never touch!
├── install/                    # Auto-generated — where built files live
├── log/                        # Auto-generated
└── .gitignore
```

**Rule:** You only ever put code inside `src/`. Everything else is created by `colcon`.

### Step-by-Step: Create Your First Professional Workspace

Run this right now:

```bash
# 1. Create workspace
mkdir -p ~/humanoid_ws/src
cd ~/humanoid_ws

# 2. Create your first package (Python)
ros2 pkg create voice_brain --build-type ament_python
ros2 pkg create walking_controller --build-type ament_cmake

# 3. Put your Python node here
#    ~/humanoid_ws/src/voice_brain/voice_brain/voice_node.py

# 4. Build everything with ONE command
colcon build

# 5. Activate the workspace (add to your shell forever)
echo "source ~/humanoid_ws/install/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

Now you can run any node from anywhere:
```bash
ros2 run voice_brain voice_node
ros2 run walking_controller walker
```

### Why This Structure Wins (Real Industry Reasons)

| Problem                             | Without Workspace (Chaos)               | With colcon Workspace (Order)                     |
|-------------------------------------|------------------------------------------|----------------------------------------------------|
| Where is the URDF?                  | Random folder on desktop                 | `src/humanoid_description/urdf/`                   |
| How do I build everything?          | Run 15 commands manually                 | One command: `colcon build`                        |
| Two packages have same name         | Name conflict → crash                    | Each in own folder → safe                          |
| Team of 50 engineers                | Impossible to collaborate                | Everyone works in `src/`, never steps on toes      |
| Want to reuse code later            | Copy-paste hell                          | Just `git clone` the package into `src/`           |

### Pro colcon Commands You’ll Use Every Day

```bash
# Build everything (most common)
colcon build

# Build only one package (fast when testing)
colcon build --packages-select walking_controller

# Build with full speed (8+ cores)
colcon build --parallel-workers 16

# Clean everything (when things get weird)
rm -rf build/ install/ log/
colcon build

# See what will be built
colcon list

# Build in Release mode (for real robot)
colcon build --cmake-args -DCMAKE_BUILD_TYPE=Release
```

### Real Example: How Figure 01 Organizes Their Code (2025)

```bash
figure_ws/
├── src/
│   ├── figure_description/           # URDF + meshes
│   ├── locomotion/                   # C++ walking, balance
│   ├── perception/                   # nvblox, cuVSLAM
│   ├── ai_brain/                     # Python + GPT-4o + OpenVLA
│   ├── hardware_interface/           # Jetson + motor drivers
│   └── launch/
│       ├── sim.launch.py
│       └── real_robot.launch.py
```

One `colcon build` → entire billion-dollar humanoid boots up.

### Golden Rules (Never Break These)

| Rule                                    | Why It Matters                                         |
|-----------------------------------------|---------------------------------------------------------|
| Never put code outside `src/`           | Breaks builds, confuses team                            |
| One package = one job                   | Keeps code clean and reusable                           |
| Always `source install/setup.bash`      | Without this, ROS 2 can’t find your code                |
| Use `--symlink-install` when developing | Changes appear instantly without rebuild                |

```bash
# Best practice: always develop with symlinks
colcon build --symlink-install
```

### Summary – You Now Run Like the Pros

| Before This Lesson                   | After This Lesson                                      |
|--------------------------------------|------------------------------------------------------|
| Random .py files everywhere          | Clean `~/humanoid_ws/src/` with proper packages      |
| `python3 script.py`                  | `ros2 run package_name node_name`                    |
| Build one file at a time             | `colcon build` → entire robot at once                |
| Can’t work with others               | Ready to join any humanoid team on day 1              |

**You are no longer playing with toys.**  
You are now using the **exact same project structure** as the robots that will live in your home in 2030.

Next → [Launch Files – Start Your Entire Humanoid with One Command](./launch-files.mdx)
