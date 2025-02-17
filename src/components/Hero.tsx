import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal, Twitter } from 'lucide-react';
import { HEAD_ROLES } from '../data/constantData';
import FloatingIcon from './sub_components/FloatingIcon';
import GlowText from './sub_components/GlowText';
import FloatingDots from './sub_components/FloatingDots';
import { containerVariants, contentVariants, ctaVariants, terminalVariants } from '../utils/animations';

export default function Hero() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/jrskg" },
    { icon: Linkedin, href: "https://linkedin.com/in/jrskg" },
    { icon: Twitter, href: "https://x.com/_skgsuraj" },
    { icon: Mail, href: "mailto:sgsuraj150@gmail.com" },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <FloatingDots />
      <div className="relative max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <FloatingIcon />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center relative z-10"
        >
          {/* Terminal Icon Animation */}
          <motion.div
            variants={terminalVariants}
            className="mb-6 inline-block"
          >
            <Terminal className="w-20 h-20 text-blue-400" />
          </motion.div>

          {/* Header and Roles Animation */}
          <motion.div variants={contentVariants} className="space-y-6">
            <h1 className="text-4xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                Hi, I'm Suraj Gupta
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Known as <GlowText text="jr_skg" />
            </h2>
            <div className="text-xl md:text-2xl text-gray-300">
              {HEAD_ROLES.map((r, i) => (
                <GlowText
                  key={i}
                  textStyle="#00ffff"
                  text={r}
                  toShadow="0 0 8px #008080"
                  includeBar={true}
                  isLast={i === HEAD_ROLES.length - 1}
                />
              ))}
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={contentVariants}
            className="flex justify-center space-x-6 mt-8"
          >
            {socialLinks.map(({ icon: Icon, href }) => (
              <motion.a
                key={href}
                href={href}
                className="transform hover:scale-110 transition-transform hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
              >
                <Icon className="w-8 h-8" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={ctaVariants} className="mt-12">
            <motion.a
              href="#projects"
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
