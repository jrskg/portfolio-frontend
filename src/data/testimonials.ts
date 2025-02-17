import sureshPic from "../assets/suresh.jpeg";
import anishPic from "../assets/anish.jpg";
import motilalPic from "../assets/motilal.jpg";
export interface Testimonial {
  name: string;
  post: string;
  feedback: string;
  profilePic?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Suresh Gupta",
    post: "Sr Software Engineer at Jellyfish Technologies",
    feedback: "Suraj is a dedicated and hardworking individual with a strong passion for learning. His ability to grasp new concepts quickly and apply them effectively sets him apart. I have no doubt he will continue to grow and achieve great things.",
    profilePic: sureshPic
  },
  {
    name: "Anish Ansari",
    post: "Lecturer at National Infotech College",
    feedback: "He is an outstanding student, excelling in both studies and extracurricular activities, showcasing intelligence, dedication, and leadership. His strong work ethic and problem-solving skills make him a valuable asset to any team or institution.",
    profilePic: anishPic
  },
  {
    name: "Motilal Jaiswal",
    post: "Lecturer at National Infotech College",
    feedback: "Suraj has shown remarkable commitment to learning and a strong determination to succeed. His academic achievements reflect his abilities, potential, and smart work. He continues to excel while being generous and dedicated.",
    profilePic: motilalPic
  },
];