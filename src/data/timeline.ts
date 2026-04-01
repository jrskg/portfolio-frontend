import { Terminal, Activity, Zap, Layers, Cpu } from 'lucide-react';

export interface SystemLog {
  id: string;
  timestamp: string;
  event: string;
  problem: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  icon: any;
}

export const systemLogs: SystemLog[] = [
  {
    id: "LOG-001",
    timestamp: "2024.Q3",
    event: "Delta Input Optimization",
    problem: "Uploading 10-15 sheets (2000+ rows each) taking ~2 hours in production.",
    solution: "Implemented batch processing, optimized repository calls, and reduced redundant database roundtrips.",
    result: "Processing time slashed to 10-13 minutes.",
    metrics: [{ label: "Reduction", value: "90%" }, { label: "Sheet Capacity", value: "15+" }],
    icon: Zap
  },
  {
    id: "LOG-002",
    timestamp: "2024.Q4",
    event: "Payroll Engine Overhaul",
    problem: "Payroll processing for 2000+ employees required 4 hours of total system time.",
    solution: "Re-architected computation logic for concurrency; optimized SQL queries and payslip generation pipeline.",
    result: "Total time reduced to 15 minutes (7m computation + 5m generation).",
    metrics: [{ label: "Efficiency", value: "16x" }, { label: "Nodes", value: "Distributed" }],
    icon: Activity
  },
  {
    id: "LOG-003",
    timestamp: "2025.Q1",
    event: "Dynamic Report Engine",
    problem: "Static report configurations required backend changes for every new user field request.",
    solution: "Built a dynamic metadata-driven engine allowing users to select any fields at runtime.",
    result: "Zero backend intervention for custom reporting.",
    metrics: [{ label: "Configs", value: "Dynamic" }, { label: "Agility", value: "Max" }],
    icon: Layers
  }
];
