"use client";

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { FaBalanceScale, FaRobot, FaBook } from 'react-icons/fa';
import { useTheme } from "@/context/ThemeContext";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-black" : "bg-gray-100";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-zinc-900" : "bg-white";
  const mutedText = theme === "dark" ? "text-gray-400" : "text-gray-700";
  const footerText = theme === "dark" ? "text-gray-500" : "text-gray-600";

  return (
    <>
      <Navbar />
      <main className={`${bgColor} ${textColor} min-h-screen pt-24 px-6 pb-16 transition-colors duration-300`}>
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Legal AI</h1>
          <p className={`text-lg md:text-xl ${mutedText}`}>
            Legal AI is an intelligent legal research engine designed to simplify and accelerate legal research,
            specifically for commercial courts in India. Powered by advanced natural language processing,
            it helps professionals find relevant case laws and statutes faster and more efficiently.
          </p>
        </motion.section>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {[
            {
              icon: <FaBalanceScale size={40} className="text-blue-400" />,
              title: 'Judicial Intelligence',
              desc: 'Harnesses AI to understand legal queries and surface the most relevant results from complex databases.',
            },
            {
              icon: <FaRobot size={40} className="text-green-400" />,
              title: 'AI-Powered Search',
              desc: 'Uses semantic understanding with models like BERT to enhance search beyond keywords.',
            },
            {
              icon: <FaBook size={40} className="text-purple-400" />,
              title: 'Structured Knowledge',
              desc: 'Organizes legal knowledge systematically for quick and effective access to judgments and references.',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className={`${cardBg} rounded-xl p-6 shadow-md hover:shadow-blue-500/30 transition`}
              whileHover={{ scale: 1.03 }}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className={mutedText}>{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className={`text-center mt-24 text-sm ${footerText}`}
        >
          <p>&copy; {new Date().getFullYear()} Legal AI — Empowering Legal Research with Artificial Intelligence</p>
        </motion.section>
      </main>
    </>
  );
}
