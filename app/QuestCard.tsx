"use client";
import { motion } from "framer-motion";

type QuestProps = {
  title: string;
  subtitle: string;
};
export default function QuestCardProps({ title, subtitle }: QuestProps) {
  return (
    <motion.div
      className="bg-zinc-800 rounded-xl p-5 flex flex-col justify-center"
      whileHover={{
        y: -2.03,
      }}
    >
      <h2 className="text-lg mb-2">{title}</h2>
      <p className="text-sm opacity-70">{subtitle}</p>
      <button className="bg-zinc-700 text-zinc-200 p-2.5 rounded-xl w-fit text-sm mt-6 self-end">
        Start
      </button>
    </motion.div>
  );
}
