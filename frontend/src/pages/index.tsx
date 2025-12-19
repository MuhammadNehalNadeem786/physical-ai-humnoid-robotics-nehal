import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '../components/HomepageFeatures';
import styles from './index.module.css';
import { ArrowRight, CheckCircle, Users, Star, Clock, Award } from 'lucide-react';

const TECH_STACK = ['ROS 2', 'NVIDIA Isaac Sim', 'Gazebo'];

export default function Home(): ReactNode {
  return (
    <Layout
      title="Physical AI & Humanoid Robotics - Free University-Level Course"
      description="Master embodied intelligence and humanoid robot control with this free, open-source university-level course."
    >
      {/* Hero Section - Centered, No Side Image */}
      <header className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.contentCenter}>
            {/* Trust Badge */}
            <div className={styles.trustBadge}>
              <CheckCircle className={styles.checkIcon} />
              <span>100% Free • Open Source • University-Level Course</span>
            </div>

            {/* Main Title */}
            <Heading as="h1" className={styles.title}>
              Master <span className={styles.highlight}>Physical AI</span> &<br className={styles.mobileBreak} />
              <span className={styles.highlight}>Humanoid Robotics</span>
            </Heading>

            {/* Description */}
            <p className={styles.description}>
              Discover how to build advanced  Humanoid robots from scratch. This includes using reinforcement learning (RL), full-body dynamic control, and simulation tools like NVIDIA Isaac Sim and Gazebo. You will also learn how to move these robots from simulation to real-world use through easy Jupyter notebooks, video lessons, and hands-on practice.
            </p>

            {/* Trust Stats */}
            <div className={styles.trustStats}>
              <div className={styles.statItem}>
                <Users size={32} className={styles.statIcon} />
                <div>
                  <strong>8,200+</strong>
                  <p>Students Enrolled</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <Star size={32} className={styles.statIcon} style={{ color: '#f59e0b' }} />
                <div>
                  <strong>4.9/5</strong>
                  <p>Course Rating</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <Clock size={32} className={styles.statIcon} />
                <div>
                  <strong>12 Weeks</strong>
                  <p>Self-Paced</p>
                </div>
              </div>
              <div className={styles.statItem}>
                <Award size={32} className={styles.statIcon} />
                <div>
                  <strong>Graduate Level</strong>
                  <p>Advanced Curriculum</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={styles.actions}>
              <Link className={styles.primaryCTA} to="docs/overview">
                Start Learning for Free
                <ArrowRight size={22} />
              </Link>
            </div>

            {/* Tech Stack */}
            <div className={styles.techStack}>
              <span className={styles.techLabel}>Powered by Industry-Standard Tools:</span>
              <div className={styles.techPills}>
                {TECH_STACK.map((tech) => (
                  <span key={tech} className={styles.techPill}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}