/* -------------------------------------------------------------------------- */
/*                              import statements                             */
/* -------------------------------------------------------------------------- */

// ─── Components ───────────────────────────────────────────

import Roadmap from "./Roadmap.tsx"

// ─── Images ───────────────────────────────────────────

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

/* -------------------------------------------------------------------------- */

const tools: Tool[] = [
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
];


type Tool = {
  src: string;
  alt: string;
  label: string;
  delay: number;
};

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
      <div className="container mx-auto px-18 flex flex-col">
        <h2 className="text-2xl font-semibold">Tools/Tech I Use</h2>
        <div className="tiles__inner relative flex flex-col flex-wrap gap-6 md:flex-row py-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="tile-container" data-aos="zoom-out" data-aos-delay={tool.delay}>
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
      <Roadmap />
    </section>
  );
}

export default ToolTiles;