# Project 1.2: Turtle Control Service

The **Turtle Control Service** project introduces **ROS 2 services**, which provide a **request-response communication mechanism** between nodes. Unlike the continuous streaming of messages in publishers/subscribers, services allow nodes to interact **on-demand**.

---

## Concept Overview

In ROS 2, nodes can communicate not only via topics but also using **services**:

1. **Service Server**
   - Waits for incoming requests from other nodes.
   - Performs a specific action when a request is received.
   - Sends a response back to the requester.
   - Example: A node that moves a turtle to a given position when requested.

2. **Service Client**
   - Sends a request to the server.
   - Waits for the server to respond.
   - Processes the returned response.
   - Example: A node that asks the turtle to move forward or turn.

This project uses **the turtlesim simulation**, which provides a simple 2D turtle that can move based on commands. The service interface allows **precise control** of the turtle's movement.

---

## Key Components

### Node
- Each service is encapsulated in a node.
- The **server node** implements the service logic.
- The **client node** sends requests and handles responses.

### Service
- Defines a **request-response pair** for communication.
- Unlike topics, services are **synchronous**: the client waits for the server to complete the task and respond.
- Service types are predefined in ROS 2 (e.g., `turtlesim/srv/TeleportAbsolute`).

### Request
- The data sent by the client to the server.
- Specifies what action the server should perform.
- Example: Coordinates `(x, y)` for the turtle to move to.

### Response
- The data sent back by the server to the client.
- Confirms that the request has been executed or provides a result.
- Example: A boolean success flag or a confirmation message.

---

## Learning Objectives

By completing the Turtle Control Service project, you will:

1. Understand **how ROS 2 services differ from topics**.
2. Learn the workflow of creating **service servers and clients**.
3. Practice **synchronous communication** between nodes.
4. Gain experience with **real-time command execution** in a simulation.
5. Prepare for more complex robotic systems requiring **on-demand actions**, such as motion planning or sensor-triggered events.

---

## Real-World Analogy

- The **Service Client** is like a user pressing a button on a remote control.
- The **Service Server** is like the machine or robot receiving the command and performing the task.
- Unlike continuous data streams (like a radio broadcast), services are **triggered only when needed**, ensuring precise and coordinated actions.

---

The Turtle Control Service project provides hands-on experience with **ROS 2’s request-response architecture**, a critical concept for designing robotic systems that require controlled and deterministic operations.
