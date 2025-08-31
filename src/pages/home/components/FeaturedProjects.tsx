// src/pages/home/components/FeaturedProjects.tsx
import { projects } from "@/pages/projects/components/projectdata";
import { Link } from "react-router";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: -16 },
  visible: { opacity: 1, y: 0 },
};

function FeaturedProjects() {
  // you picked specific ones by index previously
  const featured = [projects[1], projects[3], projects[6]];

  return (
    <section id="projects">
      <div className="container mx-auto px-18 text-center">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-3xl font-semibold">Featured projects</h2>
          <Link to="/projects" className="btn">
            View all projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {featured.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card w-full bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <div className="flex items-center justify-between">
                  <div className="text-left min-w-0">
                    <h3 className="card-title leading-tight">
                      <Link to={`/projects/${project.id}`} className="hover:underline">
                        {project.title}
                      </Link>
                    </h3>
                    <span className="badge badge-neutral mt-1">{project.badge}</span>
                  </div>

                  <figure className="shrink-0 w-24 h-24 rounded-lg scale-75 overflow-hidden">
                    <img
                      src={project.coverimage}
                      alt={project.title}
                      className="object-cover w-full h-full rounded-md"
                      loading="lazy"
                    />
                  </figure>
                </div>

                <p className="text-left mt-3 line-clamp-3">{project.desc}</p>

                <div className="card-actions justify-end mt-4">
                  <Link to={`/projects/${project.id}`} className="btn btn-primary w-full">
                    View Project
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;
