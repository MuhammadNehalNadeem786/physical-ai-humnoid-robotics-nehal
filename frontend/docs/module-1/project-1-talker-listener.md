# Project 1.1: Talker-Listener Node

The **Talker-Listener** example is the foundational project in ROS 2 for understanding inter-node communication using **publishers** and **subscribers**. It demonstrates the basic messaging workflow, which is crucial for all ROS-based applications.

---

## Concept Overview

ROS 2 applications are built around **nodes**, which are independent processes that communicate via **topics**. The Talker-Listener project consists of two nodes:

1. **Talker Node (Publisher)**
   - Responsible for creating and sending messages.
   - Continuously publishes data on a specific topic (e.g., `/chatter`).
   - Data can be of different types (string, integer, sensor readings, etc.).
   - Simulates a real-world sensor or data-generating component.

2. **Listener Node (Subscriber)**
   - Receives messages published by the Talker node.
   - Processes or displays the received data.
   - Acts as a consumer of information, similar to a controller or monitoring system in real robots.

This model introduces the **Publisher-Subscriber pattern**, which is one of the core communication paradigms in ROS 2.

---

## Key Components

### Node
- The basic computational unit in ROS 2.
- Nodes encapsulate functionality and can run independently.
- In this project:
  - Talker node publishes messages.
  - Listener node subscribes to those messages.

### Topic
- A named bus over which nodes exchange messages.
- Topics are **unidirectional**; publishers send, subscribers receive.
- Example: A `String` message on topic `/chatter`.

### Message
- The structured data transmitted between nodes.
- ROS 2 comes with predefined message types (e.g., `std_msgs/String`, `sensor_msgs/Image`).
- Each message type defines a fixed structure for consistent communication.

### Publisher & Subscriber
- **Publisher:** Node component that sends messages to a topic.
- **Subscriber:** Node component that receives messages from a topic.
- This separation allows multiple publishers and subscribers to operate asynchronously and independently.

---

## Learning Objectives

By completing the Talker-Listener project, you will:

1. Understand **how ROS 2 nodes communicate** using topics.
2. Learn the basic workflow of **publishing and subscribing**.
3. Recognize the importance of **message types** and **topic naming conventions**.
4. Gain hands-on experience in setting up and running multiple nodes simultaneously.
5. Prepare for more advanced projects involving **sensors, actuators, and complex robotic behavior**.

---

## Real-World Analogy

- The **Talker node** is like a weather station broadcasting temperature readings.
- The **Listener node** is like a mobile app that receives and displays the weather information.
- This simple communication model scales to complex systems with multiple sensors, controllers, and robots interacting simultaneously.

---

The Talker-Listener project forms the **foundation of ROS 2 inter-node communication**, providing the essential skills needed to develop larger robotic applications and understand the publish-subscribe architecture.
