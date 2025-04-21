// components/Navbar.tsx 
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const isDark = theme === "dark";
  const baseBg = isDark ? "bg-[#0f172a]" : "bg-gray-100";
  const navBg = scrolled ? `${baseBg} shadow-md` : "bg-transparent";
  const textColor = isDark ? "text-white" : "text-black";
  const linkColor = isDark ? "text-gray-300 hover:text-white" : "text-black hover:text-gray-800";

  return (
    <nav className={`fixed top-0 left-0 w-full transition-all z-50 ${navBg} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-blue-400">Legal</span> AI
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-6 items-center">
          <Link href="/about" className={`transition ${linkColor}`}>About</Link>
          <Link href="/how-it-works" className={`transition ${linkColor}`}>How It Works</Link>
          <Link href="/faq" className={`transition ${linkColor}`}>FAQ</Link>
          <Link href="/contact" className={`transition ${linkColor}`}>Contact</Link>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition ${
              isDark ? "bg-gray-800 hover:bg-gray-700" : "bg-gray-600 hover:bg-gray-700"
            }`}
          >
            {isDark ? (
              <FaSun className="text-yellow-300" />
            ) : (
              <FaMoon className="text-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
