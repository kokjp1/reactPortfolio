// src/pages/about/components/qualities.tsx
import { motion } from "framer-motion";

export default function Qualities() {
  const qualities = [
    { label: "Creative 🎨",     delay: 0.10 },
    { label: "Detail oriented 📐", delay: 0.20 },
    { label: "Precise 📝",    delay: 0.30 },
    { label: "Organized 🗃️", delay: 0.40 },
    { label: "Persistent ⚓",     delay: 0.50 },
    { label: "Realistic ⚖️",   delay: 0.60 },
    { label: "Competent 🎓",       delay: 0.70 },
    { label: "Enthusiastic ⚡",    delay: 0.80 },
  ];

  return (
    <div
      className="
        grid gap-2
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        sm:px-12
      "
    >
      {qualities.map(({ label, delay }) => (
        <motion.div
          key={label}
          className="badge badge-lg w-full px-2 py-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {label}
        </motion.div>
      ))}
    </div>
  );
}
