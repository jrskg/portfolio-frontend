import { Video, Gamepad2 } from 'lucide-react';

export interface AIBuild {
  id: number;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrls: { name: string; url: string }[];
  icon: any;
  status: string;
}

export const aiBuilds: AIBuild[] = [
  {
    id: 1,
    title: "ViProcess",
    tagline: "A YouTube-like video processing pipeline",
    description:
      "An asynchronous video processing pipeline that transcodes uploads into adaptive HLS streams — with thumbnail previews, real-time watch parties, and YouTube import.",
    techStack: ["NestJS", "BullMQ", "Redis", "ffmpeg", "Socket.io", "PostgreSQL", "React", "hls.js"],
    highlights: [
      "ffmpeg pipeline transcodes to 240p-720p HLS, playable as soon as the first rendition is ready",
      "Real-time 'Watch Parties' with synchronized playback via Socket.io",
      "YouTube import via yt-dlp",
      "Custom HLS player with hover-preview thumbnails",
    ],
    githubUrls: [
      { name: "Frontend", url: "https://github.com/jrskg/vi-process-ui" },
      { name: "Backend", url: "https://github.com/jrskg/vi-process-server" },
    ],
    icon: Video,
    status: "In Development",
  },
  {
    id: 2,
    title: "Luvdo",
    tagline: "A real-time, couple-centric Ludo game",
    description:
      "A mobile Ludo game built for couples, with voice chat, reactions, gifts, and a fully server-authoritative game engine.",
    techStack: ["Expo React Native", "NestJS", "MongoDB", "Socket.io", "WebRTC", "Zustand"],
    highlights: [
      "Server-authoritative game engine — every move validated server-side",
      "WebRTC voice chat, with background music that auto-lowers during calls",
      "Idempotent socket events with full state sync on reconnect",
      "Fully playable offline against bots, mirroring the server logic in TypeScript",
    ],
    githubUrls: [
      { name: "Frontend", url: "https://github.com/jrskg/luvdo-frontend" },
      { name: "Backend", url: "https://github.com/jrskg/luvdo-backend" },
    ],
    icon: Gamepad2,
    status: "In Development",
  },
];
