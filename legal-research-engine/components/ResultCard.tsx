import { motion } from "framer-motion";

type Props = {
  title: string;
  summary: string;
  link: string;
  index: number;
};

const ResultCard = ({ title, summary, link, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="p-4 border rounded-lg shadow hover:shadow-lg transition"
  >
    <h3 className="text-xl font-bold text-blue-600">{title}</h3>
    <p className="text-gray-700 dark:text-gray-300">{summary}</p>
    <a href={link} target="_blank" className="text-sm text-blue-500 mt-2 inline-block">
      View Full Judgment →
    </a>
  </motion.div>
);

export default ResultCard;
