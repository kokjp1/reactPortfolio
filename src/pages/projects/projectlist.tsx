// src/pages/projects/projectlist.tsx
import { useRef, useState } from "react";
import { projects } from "./components/projectdata";
import { ProjectCard } from "./components/projectcard";
import Controls from "./components/controls";
import { motion, type Variants } from "framer-motion";

const fadeInUp: Variants = {
   hidden: { opacity: 0, y: 40 },
   visible: ([idx, base]: [number, number]) => ({
      opacity: 1,
      y: 0,
      transition: {
         duration: 0.5,
         ease: "easeOut",
         delay: Math.max(0, (idx - base) * 0.08),
      },
   }),
};

export default function ProjectList() {
   const [searchValue, setSearchValue] = useState("");
   const [selectedFilter, setSelectedFilter] = useState("All");

   const [baseIndex, setBaseIndex] = useState(0);

   // Guard to avoid rapid thrashing: only advance baseIndex forward.
   const lastSeenIndexRef = useRef(0);

   const filteredProjects = projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchValue.toLowerCase());
      const matchesFilter = selectedFilter === "All" || project.categories.includes(selectedFilter);
      return matchesSearch && matchesFilter;
   });

   return (
      <section className="container mx-auto mt-24 px-18">
         
         <h2 className="text-3xl font-semibold mb-6">All Projects</h2>

         <Controls
            searchValue={searchValue}
            onSearchChange={setSearchValue}
            selectedFilter={selectedFilter}
            onFilterChange={(val) => {
               setBaseIndex(0);
               lastSeenIndexRef.current = 0;
               setSelectedFilter(val);
            }}
         />

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
               <motion.div
                  key={project.id}
                  variants={fadeInUp}
                  custom={[idx, baseIndex]}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                     once: true,
                     margin: "0px 0px 10% 0px", // extend bottom of viewport by 30% -> triggers earlier
                  }}
                  onViewportEnter={() => {
                     if (idx > lastSeenIndexRef.current) {
                        lastSeenIndexRef.current = idx;
                        setBaseIndex(idx);
                     }
                  }}
               >
                  <ProjectCard project={project} />
               </motion.div>
            ))}
         </div>
      </section>
   );
}
