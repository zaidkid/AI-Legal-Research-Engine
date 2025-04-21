"use client";

import Link from "next/link";

export default function CallToAction() {
  const handleScrollToSearch = () => {
    const input = document.getElementById("search-input");
    if (input) {
      input.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => input.focus(), 600); // small delay to ensure it's in view
    }
  };

  return (
    <section className="w-full py-16 bg-gradient-to-r from-blue-500 to-blue-700 text-center text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Start Your Legal Research Today!
        </h2>
        <p className="mt-4 text-lg sm:text-xl lg:text-2xl font-light">
          Get instant insights with AI-powered legal analysis.
        </p>
        <button
          onClick={handleScrollToSearch}
          className="mt-8 inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-100 hover:scale-105 transition-all duration-300 transform"
        >
          Start Searching
        </button>
      </div>
    </section>
  );
}
