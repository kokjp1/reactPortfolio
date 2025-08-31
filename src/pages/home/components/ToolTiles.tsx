import React, { useRef, useEffect } from "react";
import Roadmap from "./Roadmap";
import { motion, type Variants } from "framer-motion";

// --- Images ---
import afterEffectsIcon from "@/assets/icons/logos--adobe-after-effects.svg";
import illustratorIcon from "@/assets/icons/logos--adobe-illustrator.svg";
import photoshopIcon from "@/assets/icons/logos--adobe-photoshop.svg";
import premiereProIcon from "@/assets/icons/logos--adobe-premiere.svg";
import figmaIcon from "@/assets/icons/devicon--figma.svg";
import miroIcon from "@/assets/icons/logos--miro-icon.svg";
import githubIcon from "@/assets/icons/logos--github-icon.svg";
import githubDesktopIcon from "@/assets/icons/Github-desktop-logo-symbol.svg.png";
import htmlCssIcon from "@/assets/icons/htmlcss.svg";
import javascriptIcon from "@/assets/icons/logos--javascript.svg";
import typescriptIcon from "@/assets/icons/devicon--typescript.svg";
import tailwindCssIcon from "@/assets/icons/devicon--tailwindcss.svg";
import reactIcon from "@/assets/icons/devicon--react.svg";

// --- Tools Array ---
const tools = [
  { src: afterEffectsIcon, alt: "After Effects icon", label: "After Effects", delay: 0 },
  { src: illustratorIcon, alt: "Illustrator icon", label: "Illustrator", delay: 50 },
  { src: photoshopIcon, alt: "Photoshop icon", label: "Photoshop", delay: 100 },
  { src: premiereProIcon, alt: "Premiere Pro icon", label: "Premiere Pro", delay: 150 },
  { src: figmaIcon, alt: "Figma icon", label: "Figma", delay: 200 },
  { src: miroIcon, alt: "Miro icon", label: "Miro", delay: 250 },
  { src: githubIcon, alt: "GitHub icon", label: "GitHub", delay: 300 },
  { src: githubDesktopIcon, alt: "GitHub Desktop icon", label: "GitHub Desktop", delay: 450 },
  { src: htmlCssIcon, alt: "HTML/CSS icon", label: "HTML/CSS", delay: 100 },
  { src: javascriptIcon, alt: "JavaScript icon", label: "JavaScript", delay: 150 },
  { src: typescriptIcon, alt: "TypeScript icon", label: "TypeScript", delay: 200 },
  { src: tailwindCssIcon, alt: "Tailwind CSS icon", label: "Tailwind CSS", delay: 250 },
  { src: reactIcon, alt: "React icon", label: "React", delay: 300 },
];

export default function ToolTiles() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Parent orchestrates the order
  const container: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,   // strict DOM order
        delayChildren: 0.05,
      },
    },
  };

  // Child zoom-out animation
  const item: Variants = {
    hidden: { opacity: 0, scale: 1.08 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  useEffect(() => {
    const overlay = overlayRef.current;
    const section = sectionRef.current;
    if (!overlay || !section) return;

    function handlePointerMove(e: PointerEvent) {
      const rect = section!.getBoundingClientRect();
      const paddingLeft = 170; // px-18
      const paddingTop = 64;   // py-8

      const x = e.clientX - rect.left - paddingLeft;
      const y = e.clientY - rect.top - paddingTop;
      overlay!.style.setProperty("--opacity", "1");
      overlay!.style.setProperty("--x", `${x}px`);
      overlay!.style.setProperty("--y", `${y}px`);
    }

    function handlePointerLeave() {
      overlay!.style.setProperty("--opacity", "0");
    }

    section.addEventListener("pointermove", handlePointerMove);
    section.addEventListener("pointerleave", handlePointerLeave);
    return () => {
      section.removeEventListener("pointermove", handlePointerMove);
      section.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="tiles relative max-w-screen-2xl mx-auto">
      <div className="container mx-auto px-18 flex flex-col gap-9">
        <h2 className="text-2xl font-semibold">Tools/Tech I Use</h2>

        {/* Parent orchestrator */}
        <motion.div
          className="tiles__inner relative flex flex-col flex-wrap gap-6 md:flex-row py-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.label} // stable key
              className="tile-container"
              variants={item}
            >
              <div className="tile flex flex-col gap-4 items-center justify-center rounded-xl bg-base-200 border-3 border-primary/20 shadow-md w-full md:w-35 h-35 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <img src={tool.src} className="w-12 h-12" alt={tool.alt} />
                <p className="font-semibold">{tool.label}</p>
              </div>
            </motion.div>
          ))}

          <div
            ref={overlayRef}
            className="overlay absolute inset-0 flex flex-col flex-wrap gap-6 md:flex-row pointer-events-none z-10 py-8"
            style={
              {
                "--opacity": 0,
                "--x": "0px",
                "--y": "0px",
                maskImage:
                  "radial-gradient(25rem 25rem at var(--x) var(--y), #000 1%, transparent 50%)",
                WebkitMaskImage:
                  "radial-gradient(25rem 25rem at var(--x) var(--y), #000 1%, transparent 50%)",
                transition: "mask-image 400ms ease",
              } as React.CSSProperties
            }
          >
            {tools.map((_, idx) => (
              <div
                key={idx}
                className="tile rounded-xl border-3 border-primary/75 shadow-inner w-full md:w-35 h-35 bg-primary/15"
              />
            ))}
          </div>
        </motion.div>
      </div>

      <Roadmap />
    </section>
  );
}
