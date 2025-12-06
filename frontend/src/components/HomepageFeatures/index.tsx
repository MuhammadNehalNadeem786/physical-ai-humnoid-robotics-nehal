// components/HomepageFeatures.tsx
import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';
import { Check, Clock, Target, Zap } from 'lucide-react';
import styles from './styles.module.css'; 

const modules = [
  {
    number: '01',
    title: 'ROS 2 — The Robotic Nervous System',
    description: 'Master real-time distributed systems, URDF modeling, ros2_control, and build a full 30+ DOF humanoid robot description ready for simulation.',
    weeks: 'Weeks 1–3',
    icon: <Zap size={28} />,
  },
  {
    number: '02',
    title: 'Digital Twin & High-Fidelity Simulation',
    description: 'Gazebo Harmonic + Unity Robotics Hub. Simulate physics, sensors (LiDAR, RGB-D, IMU), noise, and human-robot interaction with photorealistic digital humans.',
    weeks: 'Weeks 4–6',
    icon: <Target size={28} />,
  },
  {
    number: '03',
    title: 'NVIDIA Isaac Sim — The AI Robotics Platform',
    description: 'USD scenes, synthetic data, NVBlox 3D reconstruction, cuVSLAM, Gemini perception, and bipedal Nav2 navigation in photorealistic environments.',
    weeks: 'Weeks 7–9',
    icon: <Check size={28} />,
  },
  {
    number: '04',
    title: 'Vision-Language-Action Models (VLA)',
    description: 'Connect GPT-4o Realtime, Whisper Live, and OpenVLA to your robot. “Bring me the red cup” → autonomous execution. Train offline models with Octo/RT-X.',
    weeks: 'Weeks 10–12',
    icon: <Clock size={28} />,
  },
  {
    number: 'CAPSTONE',
    title: 'Deploy Your Autonomous Humanoid',
    description: 'Full-stack integration: ROS 2 + Isaac Sim + VLA → a deployable humanoid assistant. Optional real hardware deployment on Jetson Orin.',
    weeks: 'Final Project',
    icon: <Target size={36} />,
    isCapstone: true,
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <span className={styles.badge}>
            <Check size={20} />
            13-Week Professional Curriculum
          </span>
          <Heading as="h2" className={styles.title}>
            The Complete Path to Building <span className={styles.highlight}>Autonomous Humanoids</span>
          </Heading>
          <p className={styles.subtitle}>
            From ROS 2 foundations to deploying Vision-Language-Action powered robots —
            the exact roadmap used by leading AI robotics labs in 2025.
          </p>
        </div>

        {/* Module Grid */}
        <div className={styles.grid}>
          {modules.map((mod) => (
            <div
              key={mod.number}
              className={`${styles.moduleCard} ${mod.isCapstone ? styles.capstone : ''}`}
            >
              <div className={styles.cardHeader}>
                <span className={styles.moduleNumber}>{mod.number}</span>
                <div className={styles.weekBadge}>{mod.weeks}</div>
              </div>

              <div className={styles.cardBody}>
                <div className={styles.iconWrapper}>
                  <div className={styles.iconCircle}>{mod.icon}</div>
                </div>

                <h3 className={styles.moduleTitle}>{mod.title}</h3>
                <p className={styles.moduleDesc}>{mod.description}</p>
              </div>

              {mod.isCapstone && (
                <div className={styles.capstoneRibbon}>
                  <span>Capstone Project</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>Ready to Build the Future of Robotics?</h3>
            <p>Join 8,200+ students already mastering Physical AI</p>
            <Link to="docs/overview" className={styles.startButton}>
              Start Learning for Free
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}