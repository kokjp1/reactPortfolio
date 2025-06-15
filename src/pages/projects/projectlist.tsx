import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import type { Variants } from "framer-motion";

import Controls from "./components/controls";
import { projects } from "./components/projectdata";
import type { Project } from "./components/projectdata";
import { ProjectCard } from "./components/projectcard";

// Define variant type explicitly to satisfy TypeScript
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// Component wrapping each ProjectCard with scroll + time-based trigger
function AnimatedTile({ project, idx }: { project: Project; idx: number }) {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });
  const [timePassed, setTimePassed] = useState(false);

  // Start a timer on mount based on index
  useEffect(() => {
    const timer = setTimeout(() => setTimePassed(true), idx * 100);
    return () => clearTimeout(timer);
  }, [idx]);

  // When both timer and in-view are ready, trigger animation
  useEffect(() => {
    if (inView && timePassed) {
      controls.start("visible");
    }
  }, [inView, timePassed, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeInUp}
      className="w-full"
    >
      <ProjectCard project={project} />
    </motion.div>
  );
}

export default function ProjectList() {
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);

  useEffect(() => {
    setFilteredProjects(
      projects.filter(
        (p) =>
          (filter === "All" || p.categories.includes(filter)) &&
          p.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, filter]);

  return (
    <section className="container mx-auto px-18 pt-36 space-y-12">
      <Controls
        searchValue={search}
        onSearchChange={setSearch}
        selectedFilter={filter}
        onFilterChange={setFilter}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <AnimatedTile key={project.title} project={project} idx={idx} />
        ))}
      </div>
    </section>
  );
}
