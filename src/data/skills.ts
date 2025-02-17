export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    description: "Building responsive and interactive user interfaces with modern technologies",
    icon: "Monitor",
    skills: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux Toolkit", "HTML", "CSS"]
  },
  {
    category: "Backend Development",
    description: "Creating scalable and efficient server-side applications",
    icon: "Server",
    skills: [ "Node.js", "Express.js", "MySql", "MongoDB"]
  },
  {
    category: "DevOps & Cloud",
    description: "Managing and deploying applications in cloud environments",
    icon: "Cloud",
    skills: [ "Docker", "Linux"]
  },
  {
    category: "Tools & Others",
    description: "Supporting technologies and development tools",
    icon: "Wrench",
    skills: [ "Git & GitHub", "Redis", "Kafka", "WebSocket"]
  }
];