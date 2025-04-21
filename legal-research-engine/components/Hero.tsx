"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";

export default function Hero() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  return (
    <section className="w-full h-screen flex flex-col items-center justify-center text-center px-6 transition-all bg- text-gray-900 dark:bg-gradient-to-br dark:from-[#121212] dark:via-[#1e1e1e] dark:to-[#282828] dark:text-white">
      {/* Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold tracking-tight text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        AI-Powered{" "}
        <span className="text-blue-600 dark:text-blue-400">Legal Research</span>
      </motion.h1>

      {/* Subtitle */}
      <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
        Empowering legal research through intelligent automation.
      </p>

      {/* Search Form */}
      <motion.form
        onSubmit={handleSearch}
        className="relative w-full max-w-xl mt-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <input
          id="search-input"
          type="text"
          placeholder="Search about any Article, case, or legal term..."
          className="w-full px-6 py-4 text-lg bg-gray-100 dark:bg-[#202020] border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-full shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:animate-bounce-glow transition-all duration-300"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition"
          aria-label="Search"
        >
          <FaSearch />
        </button>
      </motion.form>
    </section>
  );
}
