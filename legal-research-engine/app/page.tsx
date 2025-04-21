"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CallToAction from "@/components/CallToAction";
import ThemeToggle from "@/components/ThemeToggle";


export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 dark:bg-gray-900 transition-all">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Top Header with Theme Toggle (Optional) */}
      <header className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-900 dark:text-white"></h1>
        <ThemeToggle />
      </header>

      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />

      {/* Call To Action Section */}
      <CallToAction />
      
    </main>
  );
}
