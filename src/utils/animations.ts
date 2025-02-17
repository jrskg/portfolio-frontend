// export const containerVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//       when: "beforeChildren",
//       staggerChildren: 0.2
//     }
//   },
//   exit: {
//     opacity: 0,
//     y: -50,
//     transition: { duration: 0.6 }
//   }
// };

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.5 }
  }
};

export const cardHoverVariants = {
  hover: {
    scale: 1.05,
    transition: { duration: 0.1 }
  },
  tap: {
    scale: 0.95,
    transition: { duration: 0.1 }
  }
};

export const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.2 } },
};

export const terminalVariants = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
};

export const contentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const ctaVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { delay: 0.8 } },
};