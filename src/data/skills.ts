export interface SkillNode {
  name: string;
  level: number;
  context: string;
  category: "Backend" | "Frontend" | "Optimization" | "Database" | "DevOps" | "Real-time";
}

export const techMatrix: SkillNode[] = [
  // Backend & Languages
  { name: "Node.js", level: 90, category: "Backend", context: "Enterprise APIs & Scalable Microservices" },
  { name: "NestJS", level: 95, category: "Backend", context: "Modular Architecture & High-Performance Backends" },
  { name: "Golang", level: 75, category: "Backend", context: "High-concurrency Payroll v2 Migration (Ongoing)" },
  { name: "Express.js", level: 90, category: "Backend", context: "Lightweight RESTful Services" },
  { name: "TypeScript", level: 95, category: "Backend", context: "Type-safe System Engineering" },
  
  // Optimization & Architecture
  { name: "System Optimization", level: 98, category: "Optimization", context: "Radical Performance Gains (Hours to Minutes)" },
  { name: "Query Optimization", level: 95, category: "Optimization", context: "PostgreSQL & TypeORM Performance Tuning" },
  { name: "System Architecture", level: 90, category: "Optimization", context: "Distributed Systems & Scalable Design" },
  
  // Databases
  { name: "PostgreSQL", level: 90, category: "Database", context: "Relational Data Modeling & Complex Aggregations" },
  { name: "MongoDB", level: 85, category: "Database", context: "NoSQL Architectures & High-speed Caching" },
  { name: "MySQL", level: 85, category: "Database", context: "Relational Database Management" },
  { name: "TypeORM", level: 92, category: "Database", context: "Advanced ORM Mapping & Optimization" },

  // Frontend
  { name: "React", level: 90, category: "Frontend", context: "Complex Interactive Dashboards & UIs" },
  { name: "Redux Toolkit", level: 85, category: "Frontend", context: "Global State Management & Data Sync" },
  { name: "Tailwind CSS", level: 95, category: "Frontend", context: "Modern, Utility-first UI Engineering" },
  
  // Real-time & DevOps
  { name: "Redis", level: 85, category: "Real-time", context: "Distributed Caching & Pub/Sub Scalability" },
  { name: "Kafka", level: 80, category: "Real-time", context: "High-throughput Message Streaming" },
  { name: "WebSockets", level: 90, category: "Real-time", context: "Low-latency Real-time Communication" },
  { name: "Docker", level: 85, category: "DevOps", context: "Containerization & Deployment Pipelines" },
  { name: "Linux", level: 80, category: "DevOps", context: "Server Administration & CLI Scripting" },
  { name: "Git", level: 90, category: "DevOps", context: "Version Control & Collaborative Workflows" }
];
