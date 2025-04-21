"use client";

import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

const faqs = [
  {
    question: "What is Legal AI?",
    answer: "Legal AI is a smart legal research platform built to streamline commercial court case analysis using AI and NLP.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, Legal AI offers free access to basic features. Advanced features may be subscription-based.",
  },
  {
    question: "Can I use it for personal research?",
    answer: "Absolutely! It's great for students, lawyers, or anyone looking to explore legal content intelligently.",
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function FAQPage() {
  const { theme } = useTheme();
  const bgColor = theme === "dark" ? "bg-slate-900" : "bg-grey-200";
  const textColor = theme === "dark" ? "text-white" : "text-gray-900";
  const cardBg = theme === "dark" ? "bg-slate-800" : "bg-gray-100";
  const textMuted = theme === "dark" ? "text-gray-300" : "text-gray-600";

  return (
    <>
      <Navbar />
      <main className={`min-h-screen pt-24 px-4 md:px-8 ${bgColor} ${textColor}`}>
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold text-center text-blue-500 mb-10"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
          </motion.h1>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200 }}
                className={`p-6 rounded-xl shadow-md ${cardBg}`}
              >
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className={`${textMuted}`}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </>
  );
}
