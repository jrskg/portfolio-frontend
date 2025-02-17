export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  challenges: string[];
  learnings: string[];
  githubUrls: { name: string, url: string }[];
  liveUrl?: string;
  image: string;
  duration: string;
  role: string;
  videoDemo?: {
    url: string;
    orientation: 'landscape' | 'portrait';
  }
}

export const projects: Project[] = [
  {
    id: 1,
    title: "GOSS UP",
    description: "A realtime scalable chat application with features like push notification.",
    longDescription: "This project is a full-stack chatting application. It is highly scalable because it uses redis pub/sub architecture to scale websocket server and kafka for storing high througput messages. It also support push notification by using firebase cloud messaging.",
    technologies: ["React", "TypeScript", "Redux-Toolkit", "Tailwind CSS", "Shadcn UI", "NodeJS", "ExpressJS", "MongoDB", "WebSocket", "Redis", "Kafka", "Firebase Cloud Messaging"],
    features: [
      "Real-time communication",
      "Send any kind of files",
      "Push notification",
      "Status of messages",
      "Group chat",
      "Private chat",
      "Proper authentication with email verification",
      "Dark mode",
      "Formatted text with markdown support",
      "Responsive design",
    ],
    challenges: [
      "Handling large-scale concurrent connections",
      "Scalable WebSocket architecture",
      "Implementing push notification",
      "Handling high throughput of messages",
    ],
    learnings: [
      "Sending push notification",
      "Scaling WebSocket server",
      "How to upload files",
      "Learned about Kafka and Redis",
      "Learned about distributed system",
    ],
    githubUrls: [
      {
        name: "Front-End",
        url: "https://github.com/jrskg/goss-up-ui"
      },
      {
        name: "Back-End",
        url: "https://github.com/jrskg/goss-up-server"
      }
    ],
    // liveUrl: "https://code-assistant-demo.com",
    image: "https://res.cloudinary.com/douasqi2q/image/upload/v1739463105/portfolio-data/goss_iq6exs.jpg",
    duration: "Running",
    role: "Full Stack Developer",
    // videoDemo:{
    //   orientation:"portrait",
    //   url: "https://res.cloudinary.com/douasqi2q/video/upload/v1739691444/videotubeVideo/f1vlcznp6dykf1vjyker.mp4"
    // }
  },
  {
    id: 2,
    title: "Thekedar Pro",
    description: "A mobile application for Thekedars for managing workers and multiple constructions sites.",
    longDescription: "Thekedar Pro is a mobile application for Thekedars. This application helps Thekedars to manage their workers and multiple construction sites. Thekedars can track worker's attendance, payment, and other details and also do settlement.",
    technologies: ["React Native", "Redux-Roolkit", "Node.js", "Express.js", "MongoDB"],
    features: [
      "Create and manage multiple workers",
      "Create and manage multiple construction sites",
      "Track worker's attendance",
      "Do settlement of workers periodically",
      "Track payment of workers",
      "Built-in Nepali Calendar",
      "Easy login with google and traditional email password",
    ],
    challenges: [
      "Creating a nepali date system",
      "Creating a settlement system",
      "Implementing a calendar view in the app",
      "Automatic settlement on month ends"
    ],
    learnings: [
      "How to do social login",
      "How to create a calendar view",
      "Learned about react native",
      "Learned about redux toolkit",
      "Get confortable with mongodb aggregation"
    ],
    githubUrls: [
      {
        name: "App",
        url: "https://github.com/jrskg/Thekedar-pro-app"
      },
      {
        name: "Backend",
        url: "https://github.com/jrskg/thekedar-pro-server"
      }
    ],
    // liveUrl: "https://supply-chain-demo.com",
    image: "https://res.cloudinary.com/douasqi2q/image/upload/v1739464006/portfolio-data/thekedar_fdlimj.jpg",
    duration: "4 months",
    role: "Full Stack Developer",
    // videoDemo: {
    //   orientation: "landscape",
    //   url: "https://res.cloudinary.com/douasqi2q/video/upload/v1739691377/videotubeVideo/wt9kkmgyx3egfiak5nwn.mp4"
    // }
  },
  {
    id: 3,
    title: "NepShop",
    description: "An e-commerce platform for local businesses to sell their products online.",
    longDescription: "NepShop is an e-commerce platform for local businesses to sell their products online. It is a mobile application built with React Native. It supports features like product search, product filtering, product sorting, and product reviews. It also has an admin panel to manage products, orders, and users.",
    technologies: ["React Native", "Redux-Roolkit", "Node.js", "Express.js", "MongoDB",],
    features: [
      "Product search and filter",
      "Add to cart",
      "Product reviews",
      "Admin panel",
      "Product management",
      "Integrated payment gateway (stripe)",
    ],
    challenges: [
      "Creating a product review system",
      "Creating a cart system",
      "Implementing a payment gateway",
      "Creating an admin panel",
      "Creating a search and filter system"
    ],
    learnings: [
      "How to integrate stripe",
      "How to create a review system",
      "Learned about react native",
      "Multiple image upload",
      "Learned about redux toolkit",
    ],
    githubUrls: [
      {
        name: "App",
        url: "https://github.com/jrskg/nep-shop-app"
      },
      {
        name: "Backend",
        url: "https://github.com/jrskg/nep-shop-server"
      }
    ],
    image: "https://res.cloudinary.com/douasqi2q/image/upload/v1739464499/portfolio-data/nepshop_xzqbhj.jpg",
    duration: "4 months",
    role: "Full Stack Developer"
  }
];