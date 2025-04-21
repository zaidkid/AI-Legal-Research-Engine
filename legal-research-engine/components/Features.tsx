import { FaGavel, FaBalanceScale, FaClock, FaBrain } from "react-icons/fa";

export default function Features() {
  return (
    <section className="w-full py-16 bg-white text-gray-900 dark:bg-[#1a1a1a] dark:text-white text-center transition-all">
      <h2 className="text-4xl font-bold">Why Choose Legal AI?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-8 px-4">
        {[
          { icon: <FaGavel />, title: "Case Insights", desc: "Get AI-driven case summaries." },
          { icon: <FaBalanceScale />, title: "Legal Accuracy", desc: "Trusted sources, verified content." },
          { icon: <FaClock />, title: "Fast Research", desc: "Find judgments in seconds." },
          { icon: <FaBrain />, title: "AI-Powered", desc: "Smart and efficient search results." },
        ].map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className="p-6 bg-gray-100 dark:bg-[#222] rounded-lg shadow-lg flex flex-col items-center transition-colors"
          >
            <div className="text-blue-600 dark:text-blue-400 text-4xl">{icon}</div>
            <h3 className="text-xl font-semibold mt-4 text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
