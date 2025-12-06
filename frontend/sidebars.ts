// sidebars.ts — COMPLETE & FINAL
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Course Overview'
    },
    {
      type: 'doc',
      id: 'why-physical-ai',
      label: 'Why Physical AI Matters'
    },
    {
      type: 'doc',
      id: 'learning-outcomes',
      label: 'Learning Outcomes'
    },
    {
      type: 'doc',
      id: 'hardware-requirements',
      label: 'Hardware Requirements'
    },
    {
      type: 'doc',
      id: 'course-roadmap',
      label: 'Course Roadmap'
    },

    // --- MODULE 1: ROS 2 ---
    {
      type: 'category',
      label: 'Module 1: ROS 2 — The Robotic Nervous System',
      collapsed: true,
      items: [
        'module-1/intro',
        'module-1/ros2-vs-ros1',
        'module-1/nodes-topics-services',
        'module-1/actions-parameters',
        'module-1/python-rclpy',
        'module-1/cpp-rclcpp',
        'module-1/colcon-workspaces',
        'module-1/launch-files',
        'module-1/urdf-basics',
        'module-1/humanoid-urdf',
        'module-1/ros2-control',
        'module-1/joint-trajectory-controller',
        'module-1/diff-drive-vs-bipedal',
        {
          type: 'category',
          label: 'Hands-on Projects',
          collapsed: false, // Expanded by default
          items: [
            { type: 'doc', id: 'module-1/project-1-talker-listener', label: 'Project 1.1: Talker-Listener Node' },
            { type: 'doc', id: 'module-1/project-2-service-turtle', label: 'Project 1.2: Turtle Control Service' },
            { type: 'doc', id: 'module-1/project-3-humanoid-urdf', label: 'Project 1.3: Full Humanoid URDF' },
          ],
        },
      ],
    },

    // --- MODULE 2: The Digital Twin ---
    {
      type: 'category',
      label: 'Module 2: The Digital Twin — Simulation',
      collapsed: true,
      items: [
        'module-2/gazebo-evolution',
        'module-2/installation-ubuntu',
        'module-2/worlds-sdf',
        'module-2/physics-engines',
        'module-2/lidar-camera-imu',
        'module-2/sensor-noise',
        'module-2/custom-plugins',
        'module-2/unity-robotics-hub',
        'module-2/ros-tcp-connector',
        'module-2/digital-human-interaction',
        {
          type: 'category',
          label: 'Projects',
          collapsed: false,
          items: [
            { type: 'doc', id: 'module-2/project-4-walking-gazebo', label: 'Project 2.1: Walking Humanoid in Gazebo' },
            { type: 'doc', id: 'module-2/project-5-unity-hri', label: 'Project 2.2: Digital Human Interaction' },
          ],
        },
      ],
    },

    // --- MODULE 3: NVIDIA Isaac Sim ---
    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac Sim — The AI Brain',
      collapsed: true,
      items: [
        'module-3/isaac-sim-overview',
        'module-3/usd-assets',
        'module-3/synthetic-data-pipeline',
        'module-3/replicator-sdg',
        'module-3/isaac-ros-gems',
        'module-3/nvblox-3d-reconstruction',
        'module-3/cuVSLAM',
        'module-3/gemini-perception',
        'module-3/nav2-stack',
        'module-3/bipedal-locomotion',
        'module-3/dynamic-balancing',
        {
          type: 'category',
          label: 'Projects',
          collapsed: false,
          items: [
            { type: 'doc', id: 'module-3/project-6-nav2-isaac', label: 'Project 3.1: Nav2 Navigation in Isaac Sim' },
            { type: 'doc', id: 'module-3/project-7-nvblox-mapping', label: 'Project 3.2: Real-time 3D Reconstruction' },
          ],
        },
      ],
    },

    // --- MODULE 4: Vision-Language-Action (VLA) ---
    {
      type: 'category',
      label: 'Module 4: Vision-Language-Action (VLA)',
      collapsed: true,
      items: [
        'module-4/whisper-live',
        'module-4/speech-to-text-ros',
        'module-4/llm-action-parsing',
        'module-4/prompt-engineering-robotics',
        'module-4/openai-gpt-4o-realtime',
        'module-4/local-llms-llama3',
        'module-4/action-tokenization',
        'module-4/octo-rt-x',
        'module-4/openvla',
        'module-4/training-vla-isaac',
        {
          type: 'category',
          label: 'Final Projects',
          collapsed: false,
          items: [
            { type: 'doc', id: 'module-4/project-8-voice-robot', label: 'Project 4.1: Voice-Controlled Assistant' },
            { type: 'doc', id: 'module-4/project-9-offline-vla', label: 'Project 4.2: Offline VLA Robot' },
            { type: 'doc', id: 'module-4/capstone-project', label: 'Capstone: Autonomous Humanoid Assistant' },
          ],
        },
      ],
    },

    // --- ADVANCED TOPICS ---
    {
      type: 'category',
      label: 'Advanced Topics',
      collapsed: true,
      items: [
        'advanced/sim-to-real',
        'advanced/reinforcement-learning',
        'advanced/humanoid-locomotion',
        'advanced/multi-modal-interaction',
      ],
    },

    // --- REFERENCE ---
    {
      type: 'category',
      label: 'Reference',
      collapsed: true,
      items: [
        'reference/hardware-kits',
        'reference/cloud-vs-onprem',
        'reference/recommended-gpus',
        'reference/ros2-cheatsheet',
        'reference/isaac-sim-commands',
      ],
    },
  ],
};

export default sidebars;