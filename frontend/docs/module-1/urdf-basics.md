# URDF & Xacro Basics

In ROS 2, **URDF (Unified Robot Description Format)** is the standard XML-based format for describing a robot’s physical structure, kinematics, and dynamics. It defines how the robot is built, how its parts are connected, and how it moves. URDF is essential for simulation, visualization, and control in ROS.

**Xacro (XML Macros)** is an extension of URDF that simplifies robot description by allowing modular, reusable, and parameterized design. It is particularly useful for complex robots like humanoids, which have many links and joints.

---

## URDF Basics

### Links
- Links are the rigid components of a robot, such as the torso, arms, legs, or sensors.
- Each link has multiple attributes:
  - **Visual properties** define how the link appears in visualization tools like RViz.
  - **Collision properties** define simplified geometry for physics simulation and path planning.
  - **Inertial properties** specify mass, center of mass, and inertia, which are crucial for dynamic stability.

### Joints
- Joints connect links and define how they can move relative to each other.
- Common joint types include:
  - **Revolute:** rotates around a single axis (like elbows or knees)
  - **Prismatic:** allows linear movement along an axis
  - **Fixed:** no movement between connected links
  - **Floating or Planar:** allow free 6-DOF or 3-DOF motion, typically used for root links in simulation
- Important joint parameters include motion axis and limits (position, velocity, effort) to prevent physically impossible configurations.

---

## Xacro Basics

Xacro introduces **macros, properties, and modularity** to URDF:

- **Macros:** Allow defining reusable building blocks for links, joints, or entire limbs, reducing repetitive definitions.
- **Properties:** Enable setting variables like dimensions, masses, or joint limits, making it easy to adjust the robot globally without editing multiple sections.
- **File Inclusion:** Lets developers split a large robot description into smaller, organized files, improving readability and maintainability.
- **Parameterization:** Supports creating flexible and scalable robot models, where sizes, joint limits, and other values can be modified dynamically.

---

## Why Use Xacro for Humanoids

Humanoid robots are highly complex, often having dozens of links and joints. Xacro simplifies the modeling process by:

- Reducing repetitive XML code.
- Allowing consistent definitions of link sizes and joint parameters.
- Supporting modular design, so limbs, sensors, or torso sections can be maintained separately.
- Making it easier to test, modify, and scale robot designs efficiently.

---

By understanding **URDF and Xacro**, roboticists can create accurate, maintainable, and simulation-ready robot models, which form the foundation for control, planning, and learning in ROS 2.
