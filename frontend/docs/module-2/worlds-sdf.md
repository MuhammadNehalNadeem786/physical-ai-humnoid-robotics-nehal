# Worlds & SDF

## Introduction

In Gazebo, a **World** defines the **entire simulation environment**, including terrain, lighting, physics properties, robots, and sensors. The **SDF (Simulation Description Format)** is an XML-based format used to **describe worlds, robots, and objects** in Gazebo. Understanding SDF is crucial for building **custom environments and integrating robots** in simulations.

---

## Key Concepts

### 1. World

* Represents the **simulation environment**.
* Includes elements like:

  * Terrain
  * Lighting
  * Gravity and physics
  * Models (robots, obstacles, furniture)
* Default world files location:

  ```
  /usr/share/gazebo-11/worlds/
  ```

### 2. SDF (Simulation Description Format)

* **XML-based format** used by Gazebo for entities.
* Can define:

  * **Worlds** (`<world>`)
  * **Models** (`<model>`)
  * **Links & Joints** (`<link>`, `<joint>`)
  * **Sensors** (`<sensor>`)
* Latest SDF versions: 1.6, 1.7 (Gazebo 11 supports 1.6)

---

## Basic SDF World Structure

```xml
<sdf version="1.6">
  <world name="my_world">

    <!-- Physics settings -->
    <physics type="ode">
      <gravity>0 0 -9.81</gravity>
    </physics>

    <!-- Ground plane -->
    <include>
      <uri>model://ground_plane</uri>
    </include>

    <!-- Sun / Light source -->
    <include>
      <uri>model://sun</uri>
    </include>

    <!-- Robot model -->
    <include>
      <uri>model://my_robot</uri>
    </include>

  </world>
</sdf>
```

**Explanation:**

* `<world>`: Simulation container
* `<physics>`: Sets gravity and physics solver
* `<include>`: Imports prebuilt models
* `<model>`: Can also define robots directly inside the world

---

## SDF Model Example

```xml
<model name="simple_box">
  <pose>0 0 0.5 0 0 0</pose>
  <link name="link">
    <collision name="collision">
      <geometry>
        <box>
          <size>1 1 1</size>
        </box>
      </geometry>
    </collision>
    <visual name="visual">
      <geometry>
        <box>
          <size>1 1 1</size>
        </box>
      </geometry>
      <material>
        <ambient>1 0 0 1</ambient>
      </material>
    </visual>
  </link>
</model>
```

**Explanation:**

* `<model>`: Defines an object
* `<link>`: Physical link with collision and visual properties
* `<collision>`: Defines physics
* `<visual>`: Appearance in Gazebo
* `<pose>`: Position and orientation

---

## Advantages of Using SDF

* Platform-independent and XML-based
* Highly **customizable environments**
* Define **complex physics, lighting, and sensors**
* Supports **modular models** via `<include>`
* Compatible with ROS and Gazebo plugins

---

## Tips for Worlds & SDF

* Use `<include>` to reuse models.
* Always define `<pose>` for accurate placement.
* Check physics properties for realistic simulation.
* Combine SDF worlds with **ROS 2 launch files** for robot simulation.

---

## References

1. [Gazebo SDF Documentation](http://sdformat.org/)
2. [Gazebo Worlds and Models](https://gazebosim.org/tutorials?tut=ros_overview)
3. [Creating Custom Worlds in Gazebo](http://gazebosim.org/tutorials?tut=build_world)
