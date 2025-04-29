"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In production, integrate with an API
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div
        className={`pt-28 min-h-screen px-4 transition-colors ${
          isDark
            ? "bg-black text-white"
            : "bg-gradient-to-br from-gray-100 to-gray-200 text-black"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">Get in Touch</h1>
          <p
            className={`mb-12 text-center ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            We'd love to hear from you. Fill out the form or reach us using the info below.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`p-8 rounded-lg shadow-lg space-y-6 ${
                isDark ? "bg-gray-900" : "bg-white"
              }`}
            >
              <div>
                <label
                  className={`text-sm mb-1 block ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`text-sm mb-1 block ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                  }`}
                />
              </div>
              <div>
                <label
                  className={`text-sm mb-1 block ${
                    isDark ? "text-gray-400" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows={4}
                  className={`w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isDark ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
                  }`}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 px-6 py-2 rounded-full font-medium transition text-white"
              >
                Send Message
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className={`p-8 rounded-lg shadow-lg space-y-6 ${
                isDark ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            >
              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-blue-400 text-xl" />
                <span>contact@legalai.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="text-blue-400 text-xl" />
                <span>+91 1234567890</span>
              </div>
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-blue-400 text-xl" />
                <span>Delhi High Court, India</span>
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <h2 className="text-lg font-semibold mb-3">Follow us</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/company/legalai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl transition-transform transform hover:scale-125 hover:text-blue-500 duration-300"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    href="https://twitter.com/legalai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl transition-transform transform hover:scale-125 hover:text-blue-400 duration-300"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://github.com/legalai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl transition-transform transform hover:scale-125 hover:text-gray-400 duration-300"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Google Map */}
          <div className="mt-12 max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-300 dark:border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83905364164!2d77.06889822635327!3d28.52728034405762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e087c1364d%3A0x893c2784c6a65eb9!2sDelhi%20High%20Court!5e0!3m2!1sen!2sin!4v1713537767657!5m2!1sen!2sin"
              width="100%"
              height="220"
              className="w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </>
  );
}
