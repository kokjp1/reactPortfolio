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
        <h3 className="text-xl font-semibold flex items-start justify-between gap-2">
          <span>{project.title}</span>

          <span className="badge badge-ghost text-sm hidden min-[1400px]:inline-flex">
            {project.badge}
          </span>
        </h3>

        <p className="mt-2 text-sm">{project.desc}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          {project.categories.map((cat) => (
            <span key={cat} className="badge badge-ghost text-md font-bold">
              {cat}
            </span>
          ))}

          <span className="badge badge-ghost text-sm text inline-flex min-[1400px]:hidden">
            {project.badge}
          </span>
        </div>
      </div>
    </Link>
  );
};
