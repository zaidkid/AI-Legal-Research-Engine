'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function AskResultClient() {
  const searchParams = useSearchParams();
  const question = searchParams.get('q') || '';
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);
  const [displayedAnswer, setDisplayedAnswer] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchAnswer = async () => {
      if (!question) return;
      setLoading(true);
      try {
        const response = await fetch('https://ai-legal-research-engine.onrender.com/ask', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
        });

        const data = await response.json();
        setAnswer(data.answer);
      } catch (error) {
        setAnswer('⚠️ Failed to fetch answer. Please try again.');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnswer();
  }, [question]);

  useEffect(() => {
    if (answer) {
      const lines = answer.split('\n');
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedAnswer((prev) => [...prev, lines[i]]);
        i += 1;
        if (i >= lines.length) clearInterval(interval);
      }, 300);
    }
  }, [answer]);

  return (
    <motion.div
      className="w-full max-w-4xl space-y-8 text-center"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-3xl font-semibold text-blue-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Your Legal Query:
      </motion.h1>
      <motion.p
        className="text-xl text-blue-300 italic mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        “{question}”
      </motion.p>

      <motion.div
        className="text-lg text-gray-200 max-w-3xl mx-auto leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-green-400 mb-6">AI-Powered Answer</h2>
        {loading ? (
          <p className="text-gray-400">Fetching answer...</p>
        ) : (
          <div className="whitespace-pre-wrap">
            {displayedAnswer.map((line, idx) => (
              <motion.p
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: idx * 0.3,
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                className="mb-3"
              >
                {line}
              </motion.p>
            ))}
          </div>
        )}
      </motion.div>

      <motion.button
        onClick={() => router.push('/')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-md transition duration-300"
      >
        ⬅️ Back to Home
      </motion.button>
    </motion.div>
  );
}
