import { BookOpen, Code, Coffee, LucideIcon, Rocket, Smartphone } from 'lucide-react';

interface TimelineData {
  title: string;
  date: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const timelineData: TimelineData[] = [
  {
    title: "Self-Taught Foundations",
    date: "2020",
    description: "Started learning programming with C, explored coding through CLI programs, and built simple websites using HTML, CSS, and JavaScript.",
    icon: BookOpen,
    color: "bg-blue-500"
  },
  {
    title: "Improved Problem Solving Skills",
    date: "2021",
    description: "Learned problem-solving techniques, practiced DSA, and developed an effective approach to complex challenges.",
    icon: Rocket,
    color: "bg-pink-500"
  },
  {
    title: "First Major Project",
    date: "2022",
    description: "Built a full-stack web app using React, Node.js, and MongoDB, diving into backend development.",
    icon: Code,
    color: "bg-green-500"
  },
  {
    title: "First Mobile App",
    date: "2023",
    description: "Developed a mobile app using React Native and gained expertise in mobile app development.",
    icon: Smartphone,
    color: "bg-pink-500"
  },
  {
    title: "Mastered Real-Time Scaling",
    date: "2024",
    description: "Gained expertise in scaling technologies using Redis, Kafka, and WebSockets. Built a real-time, scalable chat application with FCM for notifications.",
    icon: Coffee,
    color: "bg-blue-500"
  }
];
