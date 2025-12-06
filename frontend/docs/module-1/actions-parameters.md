# Actions & Parameters  
**The Complete Beginner-to-Pro Guide — Everything Explained Like You’re Starting from Zero**

You’ve already learned **Nodes**, **Topics**, and **Services**.  
Now we finish the core ROS 2 communication system with the two most powerful tools every humanoid robot uses every second: **Actions** and **Parameters**.

This one page takes you from “I have no idea what this is” → “I can build Tesla-level robot behavior”.

Let’s go — zero jargon, real examples, zero skipped steps.


### 1. Action — The "Food Delivery" of Robotics  
**(Long-Running Tasks with Live Updates & Cancel Button)**

**Best analogy in the world:**  
An **Action** is exactly like ordering food on Uber Eats or DoorDash.

| Food Delivery                     | Robot Action                                  | Why It Matters                                      |
|-----------------------------------|-----------------------------------------------|-----------------------------------------------------|
| You place an order                | You send a **goal**                           | "Walk to the kitchen"                              |
| App says "Preparing…"             | Robot sends **feedback** every few seconds    | "40% there… avoiding chair…"                        |
| You can cancel anytime            | You can **cancel** the action                 | "Stop! I changed my mind"                           |
| Food arrives → Done               | Robot sends **result**                        | "Arrived at kitchen" or "Failed — obstacle"         |

**Perfect for anything that takes more than 1 second.**

#### Real Humanoid Examples You’ll Build

| Task                              | Action Name Example               | Goal → Feedback → Result                                  |
|-----------------------------------|-----------------------------------|------------------------------------------------------------|
| Walk to the sofa                  | `/navigate_to_pose`               | Goal: coordinates → "60% complete" → "Arrived"            |
| Pick up a cup from table          | `/pick_object`                    | Goal: object ID → "Grasping…" → "Success/Failed"          |
| Follow a person                   | `/follow_target`                  | Goal: person ID → "Keeping 1.5m distance" → "Done"        |
| Clean the floor                   | `/clean_area`                     | Goal: room boundaries → "40% cleaned" → "Finished"        |

#### The 3 Channels of Every Action (Always the Same Pattern)

```text
/navigate_to_pose/goal       → You send this
/navigate_to_pose/feedback   → Robot keeps talking to you
/navigate_to_pose/result     → Final answer when done
```

**Live Demo — Send Your First Action (Run This Now):**

```bash
# Send a goal: compute Fibonacci sequence of order 10
ros2 action send_goal /fibonacci action_msgs/action/Fibonacci "{order: 10}"

# Watch live feedback in another terminal
ros2 topic echo /fibonacci/_action/feedback
```

You just controlled a long-running task — exactly how a humanoid walks across a room.

---

### 2. Parameter — The "Settings Menu" of a Node

**Best analogy:**  
**Parameters** are like the settings page in a game or app.

| Real Life Example                 | Robot Parameter Example                          | What It Controls                                  |
|-----------------------------------|--------------------------------------------------|----------------------------------------------------|
| Volume slider in Spotify          | `walking_speed`                                  | How fast the robot walks (0.3 → 1.2 m/s)          |
| Dark mode on/off                  | `use_real_hardware`                              | True = real robot, False = simulation             |
| Difficulty: Easy/Hard             | `controller_gain`                                | How aggressively the robot balances               |
| Language: English/Spanish         | `speech_language`                                | Which language Whisper listens to                 |

**Parameters can be changed while the robot is running — no restart needed!**

#### Real Example: Controlling a Humanoid’s Personality

```yaml
walking_controller:
  ros__parameters:
    max_speed: 1.0          # m/s
    step_height: 0.15       # meters
    balance_mode: "aggressive"  # or "safe"
    voice_enabled: true
```

Change one line → robot instantly walks faster or speaks.

**Live Demo — Change a Parameter Right Now:**

```bash
# See current parameters
ros2 param list

# Change a parameter live
ros2 param set /talker interval 0.1   # Makes it talk 10x faster!
```

**Pro Trick: Launch files can set parameters automatically**

```yaml
# launch/my_humanoid.launch.py
Node(
    package='walking_controller',
    executable='walker',
    parameters=[{'max_speed': 1.2, 'voice_enabled': True}]
)
```

One click → fast, talking robot.

---

### Side-by-Side Comparison (You’ll Use This Every Day)

| Feature           | Topic                  | Service                  | Action                          | Parameter                  |
|-------------------|------------------------|--------------------------|---------------------------------|----------------------------|
| Analogy           | YouTube Live           | Phone call               | Food delivery                   | Settings menu              |
| Duration          | Continuous             | One-shot                 | Long-running                    | Static (until changed)     |
| Direction         | One → Many             | Request → Reply          | Goal → Feedback → Result        | Read/Write anytime         |
| Can cancel?       | No                     | No                       | Yes                             | N/A                        |
| Live updates?     | Yes (new messages)     | No                       | Yes (feedback)                  | No                         |
| Example           | Camera stream          | Take photo               | Walk to kitchen                 | Set walking speed          |

**Rule of Thumb Used by Every Pro Team:**
- Streaming data → **Topic**  
- Quick request → **Service**  
- Long task → **Action**  
- Configuration → **Parameter**

---

### Real-World Humanoid Robot Example (2025 Stack)

```text
Your voice → Whisper → LLM → Sends Action Goal: /navigate_to_pose
                                     ↓
                            Walking Controller Node
                                     ↓
                   Publishes feedback → "Avoiding table..."
                                     ↓
                             Final result → "Arrived"
```

Meanwhile:
```bash
ros2 param set /walker max_speed 1.5   # You make it walk faster live!
```

This exact pattern runs on **Tesla Optimus**, **Figure 01**, **Unitree G1** — every single day.

---

### Commands You’ll Use 100 Times Per Day

```bash
# Actions
ros2 action list
ros2 action info /navigate_to_pose
ros2 action send_goal /fibonacci ... 

# Parameters
ros2 param list
ros2 param get /my_node max_speed
ros2 param set /my_node max_speed 2.0
ros2 param dump /my_node > my_config.yaml   # Save settings
```

---

### Summary — You Now Know Everything

| Concept     | What It Is                     | When You Use It                          | Real Example You’ll Build             |
|-------------|--------------------------------|------------------------------------------|----------------------------------------|
| **Action**  | Long task with feedback + cancel | Walking, picking, cleaning, following   | “Bring me water” from voice command   |
| **Parameter** | Live settings menu           | Speed, safety, voice, behavior          | Toggle between “fast mode” and “safe mode” |

**You have just mastered the final two pieces of robot communication.**

You are no longer learning theory.  
You are ready to build **real autonomous humanoids**.

Next → [Python with rclpy – Your First Real Robot Code](./python-rclpy.mdx)

