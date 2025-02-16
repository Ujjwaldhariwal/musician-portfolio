"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => (
  <div id={id} className="my-20">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-700">{title}</h2>
      {children}
    </motion.div>
  </div>
);

export default Section;