export const SYSTEM_STATUS = {
  label: "Optimizing Systems at Scale",
  uptime: "99.9%",
  location: "Birgunj, Nepal",
  environment: "Production",
  lastDeployment: new Date().toLocaleDateString()
};

export const DASHBOARD_METRICS = [
  { label: "Payroll Processing", before: "4h", after: "15m", reduction: "93.7%" },
  { label: "Delta Input Upload", before: "2h", after: "12m", reduction: "90%" },
  { label: "Report Generation", type: "Dynamic", impact: "High" }
];

export const BIO_INFO = {
  devRole: "Backend Engineer",
  name: "Suraj Gupta",
  alias: "jr_skg",
  slogan: ["System Performance", "Architect"],
  paragraph: [
    "Specialized in architecting high-efficiency enterprise backends. Expert in identifying bottlenecks and implementing radical optimizations that reduce processing times from hours to minutes.",
    "Currently migrating large-scale payroll architectures to Golang for peak concurrency and throughput."
  ],
  stats: [
    { count: 4, text: "Years Active" },
    { count: 50000, text: "Lines Optimized" },
    { count: 15, text: "Deployments" }
  ]
};
