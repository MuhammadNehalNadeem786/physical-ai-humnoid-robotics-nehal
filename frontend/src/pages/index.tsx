import type { ReactNode } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import HomepageFeatures from '../components/HomepageFeatures';
import styles from './index.module.css';
import { ArrowRight, CheckCircle, Users, Star, Clock, Award } from 'lucide-react';

const TECH_STACK = ['ROS 2', 'NVIDIA Isaac Sim', 'PyTorch', 'Gazebo'];

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
              <Link
                className={styles.secondaryCTA}
                to="https://github.com/MuhammadNehalNadeem786/physical-ai-humnoid-robotics-nehal"
              >
                <svg className={styles.githubIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Star on GitHub
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}