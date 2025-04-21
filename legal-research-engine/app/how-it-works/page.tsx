'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';

export default function HowItWorks() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const bgColor = isDark ? 'bg-black' : 'bg-gray-100';
  const textColor = isDark ? 'text-white' : 'text-gray-900';
  const fadedText = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderColor = isDark ? 'border-blue-500' : 'border-blue-400';
  const circleColor = isDark ? 'bg-blue-500' : 'bg-blue-400';
  const glowShadow = isDark
    ? 'hover:shadow-blue-400/70'
    : 'hover:shadow-blue-500/50';

  const steps = [
    {
      title: 'Step 1: Enter Query',
      description: 'Users input a legal query or keywords related to their case.',
    },
    {
      title: 'Step 2: AI Processes',
      description: 'Our AI model semantically understands and matches your query.',
    },
    {
      title: 'Step 3: Search & Retrieve',
      description: 'The engine searches legal databases for the most relevant precedents.',
    },
    {
      title: 'Step 4: Display Results',
      description: 'Users receive ranked, relevant judgments with summarized insights.',
    },
  ];

  return (
    <div
      className={`${bgColor} ${textColor} min-h-screen relative overflow-hidden transition-colors duration-300`}
    >
      <Navbar />

      {/* Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1.2 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-blue-400 rounded-full w-96 h-96 top-20 left-10 blur-3xl opacity-20"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1.2 }}
          transition={{ duration: 4.5, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bg-purple-400 rounded-full w-96 h-96 top-80 right-0 blur-3xl opacity-20"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-36 pb-24">
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-20"
        >
          How It Works
        </motion.h1>

        {/* Timeline */}
        <div
          className={`space-y-16 relative border-l-4 ${borderColor} pl-8 md:pl-12 rounded-lg shadow-lg py-8 bg-opacity-5`}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className={`absolute -left-5 top-2 w-3 h-3 ${circleColor} rounded-full shadow-md`}
              ></div>
              <h2 className="text-2xl font-semibold mb-1">{step.title}</h2>
              <p className={`${fadedText} text-base`}>{step.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-20"
        >
          <Link
            href="/#search-bar"
            className={`inline-block px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full text-lg font-semibold shadow-xl transition-transform transform hover:scale-105 ${glowShadow}`}
          >
            Try Now
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
