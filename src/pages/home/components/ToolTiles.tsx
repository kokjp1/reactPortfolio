import React from "react";

// Define the shape of a tool entry
type Tool = {
  src: string;
  alt: string;
  label: string;
  delay: number;
};

// Array of tools/tech you use
const tools: Tool[] = [
  { src: "/assets/icons/logos--adobe-after-effects.svg", alt: "After Effects icon", label: "after effects", delay: 0 },
  { src: "/assets/icons/logos--adobe-illustrator.svg", alt: "Illustrator icon", label: "illustrator", delay: 50 },
  { src: "/assets/icons/logos--adobe-photoshop.svg", alt: "Photoshop icon", label: "photoshop", delay: 100 },
  { src: "/assets/icons/logos--adobe-premiere.svg", alt: "Premiere Pro icon", label: "premiere pro", delay: 150 },
  { src: "/assets/icons/devicon--figma.svg", alt: "Figma icon", label: "figma", delay: 200 },
  { src: "/assets/icons/logos--miro-icon.svg", alt: "Miro icon", label: "miro", delay: 250 },
  { src: "/assets/icons/logos--github-icon.svg", alt: "GitHub icon", label: "GitHub", delay: 300 },
  { src: "/assets/icons/Github-desktop-logo-symbol.svg.png", alt: "GitHub Desktop icon", label: "GitHub Desktop", delay: 450 },
  { src: "/assets/icons/htmlcss.svg", alt: "HTML/CSS icon", label: "HTML/CSS", delay: 100 },
  { src: "/assets/icons/logos--javascript.svg", alt: "JavaScript icon", label: "JavaScript", delay: 150 },
  { src: "/assets/icons/devicon--typescript.svg", alt: "TypeScript icon", label: "TypeScript", delay: 200 },
  { src: "/assets/images/icons/devicon--tailwindcss.svg", alt: "Tailwind CSS icon", label: "Tailwind CSS", delay: 250 },
];

// Named function export for the tools tiles
export function ToolTiles() {
  // Define overlay style with support for CSS custom properties
  const overlayStyle: React.CSSProperties & { [key: `--${string}`]: string } = {
    "--opacity": "0",
    "--x": "0px",
    "--y": "0px",
    maskImage: "radial-gradient(25rem 25rem at var(--x) var(--y), #000 1%, transparent 50%)",
    WebkitMaskImage: "radial-gradient(25rem 25rem at var(--x) var(--y), #000 1%, transparent 50%)",
    transition: "mask-image 400ms ease",
  };

  return (
    <section className="tiles relative max-w-screen-2xl mx-auto">
      <div className="container mx-auto px-18 flex flex-col gap-9">
        <h2 className="text-2xl font-semibold">Tools/Tech I Use</h2>
        <div className="tiles__inner relative flex flex-col flex-wrap gap-6 md:flex-row py-8">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className="tile-container"
              data-aos="zoom-out"
              data-aos-delay={tool.delay}
            >
              <div className="tile flex flex-col gap-4 items-center justify-center rounded-xl bg-base-200 border-3 border-primary/20 shadow-md w-full md:w-35 h-35 transform transition-transform duration-300 ease-in-out hover:scale-105">
                <img src={tool.src} className="w-12 h-12" alt={tool.alt} />
                <p className="font-semibold capitalize">{tool.label}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Mouse-following overlay */}
        <div
          className="overlay tiles__inner absolute top-25 flex flex-wrap gap-6 pointer-events-none z-1 xl:w-[90%] lg:w-[80%]"
          style={overlayStyle}
        ></div>
      </div>
    </section>
  );
}

export default ToolTiles;