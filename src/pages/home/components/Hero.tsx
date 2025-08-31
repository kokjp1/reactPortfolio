// src/pages/home/components/Hero.tsx
import { motion } from "framer-motion";

const word = (d = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: d } },
});

export default function Hero() {
  return (
    <header className="hero text-center flex items-center justify-center min-h-[75vh]">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          <motion.span
            className="inline-block"
            variants={word(0.0)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Hello,&nbsp;
          </motion.span>
          <motion.span
            className="inline-block"
            variants={word(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            I'm&nbsp;
          </motion.span>
          <motion.span
            className="inline-block"
            variants={word(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            James&nbsp;
          </motion.span>
          <motion.span
            className="inline-block"
            variants={word(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Kok&nbsp;
          </motion.span>
        </h1>

        <motion.p
          className="m-5 text-lg mb-8"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          2e jaars CMD student aan de Hogeschool van Amsterdam.
        </motion.p>

        <a id="openingAnimation" href="#projects" className="btn btn-primary mt-8">
          View My Work
        </a>
      </div>
    </header>
  );
}
