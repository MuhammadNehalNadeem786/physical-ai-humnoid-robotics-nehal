
# Nodes, Topics, Services, Actions  
**The Complete Beginner-to-Advanced Guide — One File, Zero Jargon, Everything Explained**

This single page will take you from **"I’ve never heard of ROS"** → **"I fully understand how every humanoid robot in 2025 talks internally"**.

Let’s go step by step — like you’re 12 years old, then grow you into a pro.



### What Is a Node? (Think: One Tiny Robot Worker)

**Definition in plain English:**  
A **Node** is just **one running program** inside the robot.  
Each node does **one simple job**.

| Everyday Example         | Robot Equivalent → Node Name                     |
|--------------------------|--------------------------------------------------|
| WhatsApp                 | `/camera_node` → sends pictures                  |
| Spotify                  | `/microphone_node` → sends sound                 |
| Calculator               | `/battery_monitor` → tells battery level        |
| Zoom                     | `/face_detector` → finds humans                  |
| Your brain               | `/ai_brain` → decides what to do                 |

A full humanoid robot runs **50–200 nodes at the same time**.

**See a real node right now (run this):**
```bash
ros2 run demo_nodes_cpp talker
```
You just started a real ROS 2 node that prints "Hello" forever!

---

### 1. Topic — The "Live TV Channel" (Most Used)

**Best analogy ever:**  
A **Topic** is like a **YouTube live stream**.

- One node broadcasts (publishes)  
- Any number of nodes can watch (subscribe)  
- Data flows **one way**  
- If you miss a message → it’s gone  
- Perfect for **continuous streaming**

| Real Humanoid Example               | Topic Name                | What It Carries              | Frequency |
|-------------------------------------|---------------------------|------------------------------|-----------|
| Camera seeing the world             | `/camera/image_raw`       | Color images                 | 30–60 Hz  |
| Robot saying where it is            | `/odom`                   | Position + speed             | 100 Hz    |
| LiDAR scanning room                 | `/scan`                   | 3D laser points              | 40 Hz     |
| All joint angles (30+ motors)       | `/joint_states`           | Current angles               | 500 Hz    |

**Live Demo — Watch a real topic right now:**
```bash
# Terminal 1 — Start the "TV station"
ros2 run demo_nodes_cpp talker

# Terminal 2 — Watch the live stream
ros2 run demo_nodes_cpp listener
```
You just saw **two nodes talking via a topic** called `chatter`.

**Check all active topics on your computer:**
```bash
ros2 topic list
```

---

### 2. Service — The "Phone Call" (Request + One Reply)

**Best analogy:**  
A **Service** is like calling a taxi.

- You make a request  
- Someone does the job  
- You get **one reply**  
- Then it’s over

Perfect for **one-time actions**.

| Real Robot Example                     | Service Name                 | Request → Reply Example                     |
|----------------------------------------|------------------------------|---------------------------------------------|
| Take a photo                           | `/camera/capture`            | "Take photo" → returns image                |
| Move arm to a pose                     | `/arm/go_to_pose`            | "Go here" → "Done" or "Failed"              |
| Ask battery level                      | `/get/battery_state`         | "How much battery?" → "87%"                 |
| Reset the robot’s position             | `/reset_odometry`            | "Reset" → "OK"                              |

**Live Demo — Call a real service:**
```bash
ros2 service call /add_two_ints example_interfaces/srv/AddTwoInts "{a: 5, b: 3}"
```
→ Returns `{sum: 8}`

**See all available services:**
```bash
ros2 service list
```

---

### 3. Action — The "Long-Running Phone Call with Updates"

**Best analogy:**  
An **Action** is like ordering food delivery.

- You place an order  
- You get **live updates** ("Cooking", "On the way")  
- You can **cancel** anytime  
- Final result when done

Perfect for **long tasks** (walking, picking objects, cleaning a room).

| Real Humanoid Example                  | Action Name                     | Goal → Feedback → Result                     |
|----------------------------------------|---------------------------------|----------------------------------------------|
| Walk to kitchen                        | `/navigate_to_pose`             | Goal: location → "30% done" → "Arrived"      |
| Pick up cup                            | `/pick_object`                  | Goal: cup ID → "Moving arm" → "Success"      |
| Follow a person                        | `/follow_target`                | Goal: person ID → "Keeping distance" → Done  |

**Actions have 3 channels:**
```
/navigate_to_pose/goal
/navigate_to_pose/feedback
/navigate_to_pose/result
```

**Live Demo — Send an action (Fibonacci example):**
```bash
ros2 action send_goal /fibonacci action_msgs/action/Fibonacci "{order: 10}"
```

---

### Summary Table — When to Use What?

| Pattern   | Analogy               | Direction     | Use When                                  | Example                          |
|-----------|-----------------------|---------------|-------------------------------------------|----------------------------------|
| **Topic**     | YouTube Live          | One → Many    | Streaming data (camera, sensors)          | `/camera/image_raw`              |
| **Service**   | Phone Call            | One → One     | Quick request + reply                     | Take a photo                     |
| **Action**    | Food Delivery         | One → One     | Long task with feedback + cancelable      | Walk to kitchen, pick object     |

**90 % Topic**  
**9 % Service**  
**1 % Action** (but the most important 1 %!)

---

### Real Humanoid Robot Communication Map (2025)

```
[Camera Node] →→→ /camera/image_raw (Topic) →→→ [AI Vision Node]
[Mic Node]    →→→ /audio_raw (Topic)       →→→ [Speech-to-Text Node]
[AI Brain]    →→→ /navigate_to_pose (Action) →→→ [Walking Controller]
[Walking]     →→→ /joint_states (Topic)    →→→ [Balance Node]
```

All of this happens 100–1000 times per second.

---

### Pro Tips You’ll Use Every Day

```bash
# See everything happening live
ros2 topic echo /chatter
ros2 topic hz /scan
ros2 service list
ros2 action list
ros2 node list

# Visualize everything
rqt_graph          # See the full robot "nervous system"
rviz2              # 3D view of the robot
```

---

### Final Words

You now fully understand the **entire communication foundation** of every humanoid robot being built in 2025.

- Nodes = workers  
- Topics = live TV  
- Services = phone calls  
- Actions = delivery orders  

**You just learned the language every robot speaks.**

Next → [Actions & Parameters – Long-Running Goals and Configuration](./actions-parameters.mdx)
