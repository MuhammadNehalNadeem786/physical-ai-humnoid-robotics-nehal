# Realistic Sensor Noise

## Introduction

When simulating robots, adding **realistic sensor noise** is essential for **sim-to-real transfer**. Noise helps algorithms trained in simulation to **perform reliably on real hardware**, accounting for measurement errors, sensor inaccuracies, and environmental variations.

Gazebo allows **configurable noise models** for LiDAR, cameras, IMUs, and other sensors.

---

## Types of Sensor Noise

### 1. Gaussian Noise

* Random variations following a **normal distribution**.
* Commonly used for **range sensors, cameras, and IMUs**.
* Parameters:

  * `mean` (μ)
  * `stddev` (σ) – standard deviation

### 2. Bias

* Constant offset added to sensor readings.
* Useful for modeling **systematic errors**.
* Often combined with Gaussian noise.

### 3. Drift

* Gradual change over time.
* Simulates **sensor degradation** or slow changes in measurements.

### 4. Quantization Noise

* Discrete step error due to **limited sensor resolution**.
* Example: LIDAR distance steps.

---

## Adding Noise in SDF Sensors

### LiDAR Noise Example

```xml
<sensor name="laser_sensor" type="gpu_ray">
  <ray>
    <noise type="gaussian">
      <mean>0.0</mean>
      <stddev>0.01</stddev>
    </noise>
  </ray>
  <plugin name="gazebo_ros_laser" filename="libgazebo_ros_laser.so"/>
</sensor>
```

### IMU Noise Example

```xml
<sensor name="imu_sensor" type="imu">
  <imu>
    <angular_velocity>
      <noise type="gaussian">
        <mean>0.0</mean>
        <stddev>0.001</stddev>
      </noise>
    </angular_velocity>
    <linear_acceleration>
      <noise type="gaussian">
        <mean>0.0</mean>
        <stddev>0.01</stddev>
      </noise>
    </linear_acceleration>
  </imu>
  <plugin name="gazebo_ros_imu" filename="libgazebo_ros_imu.so"/>
</sensor>
```

### RGB-D Camera Noise Example

* Add noise to **depth measurements**:

```xml
<sensor name="depth_camera" type="depth">
  <camera>
    <noise type="gaussian">
      <mean>0.0</mean>
      <stddev>0.005</stddev>
    </noise>
  </camera>
  <plugin name="gazebo_ros_depth_camera" filename="libgazebo_ros_depth_camera.so"/>
</sensor>
```

---

## Advantages of Realistic Noise

* Improves **sim-to-real transfer**.
* Ensures algorithms are **robust to real-world sensor imperfections**.
* Helps in **testing state estimation, localization, and control** under realistic conditions.

---

## Tips

* Tune `stddev` according to the **actual sensor specifications**.
* Combine **bias and drift** with Gaussian noise for realistic effects.
* Validate noise models by comparing simulated data with **real sensor logs**.
* Avoid excessive noise that may make simulation unstable or unrealistic.

---

## References

1. [Gazebo Sensor Noise Documentation](http://gazebosim.org/tutorials?tut=ros_sensors)
2. [Sim-to-Real Transfer in Robotics](https://arxiv.org/abs/2003.05495)
3. [Noise Models in Gazebo SDF](http://sdformat.org/tutorials?tut=sdf_sensors)
