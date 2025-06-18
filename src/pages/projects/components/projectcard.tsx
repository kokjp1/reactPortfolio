import React from "react";
import { Link } from "react-router";
import type { Project } from "./projectdata";

interface ProjectCardProps {
   project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
   return (
      <Link
         to={`/projects/${project.id}`}
         className="block rounded-lg shadow-md overflow-hidden bg-base-100 transition-all duration-350 hover:scale-[1.01] hover:shadow-lg h-full"
      >
         <img
            src={project.coverimage}
            alt={project.title}
            className="object-cover w-full h-48 transition-all duration-350 hover:scale-[1.025]"
         />
         <div className="p-4">
            <h3 className="text-xl font-semibold flex justify-between">
               {project.title}
               <span className="badge badge-neutral text-sm h-3/4 opacity-0 sm:opacity-100">
                  {project.badge}
               </span>
            </h3>
            <p className="mt-2 text-sm">{project.desc}</p>
            <div className="mt-3 space-x-1">
               {project.categories.map((cat) => (
                  <span key={cat} className="badge badge-outline text-md category font-bold">
                     {cat}
                  </span>
               ))}
            </div>
         </div>
      </Link>
   );
};
