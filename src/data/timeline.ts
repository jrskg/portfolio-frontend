import { Terminal, Activity, Zap, Layers } from 'lucide-react';

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
    timestamp: "Payroll",
    event: "Payroll Engine Rewrite",
    problem: "Processing payroll for 2,000+ employees — computation plus payslip generation — took roughly 4 hours end-to-end.",
    solution: "Rewrote the engine around bulk fetching and bulk processing with selective data fetching, removing N+1 queries. Replaced Puppeteer with pdf-lib for payslip generation.",
    result: "Full run down to 10-15 minutes for 2,000+ employees.",
    metrics: [{ label: "Reduction", value: "~95%" }, { label: "Employees", value: "2,000+" }],
    icon: Activity
  },
  {
    id: "LOG-002",
    timestamp: "Delta Input",
    event: "Delta Input Optimization",
    problem: "Uploading 15-16 Excel sheets (2,000+ rows each) took 2-3 hours in production.",
    solution: "Applied the same bulk-fetch, bulk-process, selective-fetching strategy to remove N+1 queries from the upload pipeline.",
    result: "Processing time dropped to ~10 minutes.",
    metrics: [{ label: "Reduction", value: "~93%" }, { label: "Sheets/Run", value: "15-16" }],
    icon: Zap
  },
  {
    id: "LOG-003",
    timestamp: "Reports",
    event: "Report Suite Optimization",
    problem: "A set of 14 payroll reports (CTC, PF & ESIC, tax, advice reports, etc.) were each riddled with N+1 queries, some taking over 2 minutes to generate.",
    solution: "Removed N+1 queries across all 14 reports using the same bulk-fetching approach.",
    result: "Every report got faster — up to 63.5× on the biggest win (ESI Advise Report: 45.15s → 0.71s).",
    metrics: [{ label: "Reports Optimized", value: "14" }, { label: "Peak Speedup", value: "63.5×" }],
    icon: Layers
  },
  {
    id: "LOG-004",
    timestamp: "Compliance",
    event: "Compliance & Payslip Flexibility",
    problem: "New government compliance requirements needed to be reflected in payroll, and different clients needed different payslip formats.",
    solution: "Implemented the new statutory compliance calculations and added support for multiple configurable payslip layouts.",
    result: "Payroll stayed compliant, and clients could pick the payslip layout that fit them.",
    metrics: [{ label: "Compliance", value: "Updated" }, { label: "Layouts", value: "Multiple" }],
    icon: Terminal
  }
];

export interface ReportSpeedup {
  report: string;
  before: string;
  after: string;
  multiplier: string;
}

export const reportSpeedups: ReportSpeedup[] = [
  { report: "ESI Advise Report", before: "45.15s", after: "0.71s", multiplier: "63.5×" },
  { report: "PF & ESIC Advise Report", before: "148.41s", after: "2.80s", multiplier: "53.1×" },
  { report: "PF Advise Report", before: "95.68s", after: "2.18s", multiplier: "44.0×" },
  { report: "Employee Tax Report", before: "106.99s", after: "2.64s", multiplier: "40.5×" },
  { report: "Professional Tax Advise Report", before: "19.62s", after: "0.48s", multiplier: "40.5×" },
  { report: "Car Lease Report", before: "29.22s", after: "0.75s", multiplier: "38.8×" },
  { report: "Bank Advise Report", before: "29.29s", after: "0.91s", multiplier: "32.3×" },
  { report: "Active Employees PF & UAN List", before: "27.55s", after: "0.83s", multiplier: "33.2×" },
  { report: "Income Tax Advise Report", before: "51.24s", after: "1.67s", multiplier: "30.7×" },
  { report: "VPF Details Report", before: "31.89s", after: "1.22s", multiplier: "26.1×" },
  { report: "NPS Details Report", before: "32.60s", after: "1.76s", multiplier: "18.5×" },
  { report: "Client CTC Report", before: "85.91s", after: "8.36s", multiplier: "10.3×" },
  { report: "Food Coupon Report", before: "22.83s", after: "3.07s", multiplier: "7.4×" },
  { report: "Prorated CTC Report", before: "98.13s", after: "13.38s", multiplier: "7.3×" },
];
