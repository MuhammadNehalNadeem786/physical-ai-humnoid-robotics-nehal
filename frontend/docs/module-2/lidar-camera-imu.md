# Sensor Simulation

## Introduction

Gazebo allows the simulation of various **robot sensors**, enabling testing and development of algorithms **without physical hardware**. Simulated sensors provide **realistic data** for perception, navigation, and control in robots.

Key sensors commonly simulated include **LiDAR, RGB-D cameras, and IMUs**.

---

## LiDAR Simulation

* Simulates **laser range finders** used for mapping and obstacle detection.
* Generates **point clouds** and **distance measurements**.
* Example SDF sensor configuration:

```xml
<sensor name="laser_sensor" type="gpu_ray">
  <pose>0 0 0.5 0 0 0</pose>
  <update_rate>30</update_rate>
  <ray>
    <scan>
      <horizontal>
        <samples>720</samples>
        <resolution>1</resolution>
        <min_angle>-1.57</min_angle>
        <max_angle>1.57</max_angle>
      </horizontal>
    </scan>
    <range>
      <min>0.1</min>
      <max>30</max>
      <resolution>0.01</resolution>
    </range>
  </ray>
  <plugin name="gazebo_ros_laser" filename="libgazebo_ros_laser.so"/>
</sensor>
```

---

## RGB-D Camera Simulation

* Simulates **color and depth cameras** for computer vision, mapping, and object detection.
* Provides **image and depth streams**.
* Example SDF sensor configuration:

```xml
<sensor name="rgbd_camera" type="depth">
  <pose>0 0 1 0 0 0</pose>
  <camera>
    <horizontal_fov>1.047</horizontal_fov>
    <image>
      <width>640</width>
      <height>480</height>
      <format>R8G8B8</format>
    </image>
    <clip>
      <near>0.1</near>
      <far>10.0</far>
    </clip>
  </camera>
  <plugin name="gazebo_ros_depth_camera" filename="libgazebo_ros_depth_camera.so"/>
</sensor>
```

---

## IMU Simulation

* Simulates **Inertial Measurement Units** for orientation, acceleration, and angular velocity.
* Useful for **state estimation, navigation, and control**.
* Example SDF sensor configuration:

```xml
<sensor name="imu_sensor" type="imu">
  <pose>0 0 0.2 0 0 0</pose>
  <update_rate>100</update_rate>
  <plugin name="gazebo_ros_imu" filename="libgazebo_ros_imu.so"/>
</sensor>
```

---

## Advantages of Sensor Simulation

* Enables **algorithm testing without hardware**.
* Provides **realistic sensor data** for navigation, perception, and control.
* Supports integration with **ROS/ROS 2 topics and plugins**.
* Reduces **development cost and risk**.

---

## Tips

* Tune **update rates** for sensor realism and computational performance.
* Combine multiple sensors for **multi-modal perception**.
* Use **Gazebo plugins** to integrate sensors with ROS/ROS 2.
* Validate simulated data against real sensors for accuracy.

---

## References

1. [Gazebo Sensors Tutorial](https://gazebosim.org/tutorials?tut=ros_sensors)
2. [LiDAR Simulation in Gazebo](https://gazebosim.org/tutorials?tut=ros_lidar)
3. [RGB-D Camera in Gazebo](https://gazebosim.org/tutorials?tut=ros_camera)
4. [IMU Simulation](https://gazebosim.org/tutorials?tut=ros_imu)
