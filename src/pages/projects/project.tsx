import { useParams } from "react-router";
import { projects } from "./components/projectdata";
import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  useEffect(() => {
    if (!project) return;
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery",
      children: "a",
      pswpModule: () => import("photoswipe")
    });
    lightbox.init();
    return () => lightbox.destroy();
  }, [project]);

  if (!project) {
    return (
      <div className="container mx-auto px-18 min-h-screen flex items-center justify-center p-4">
        <p className="text-lg">Project not found.</p>
        <a href="/" className="ml-4 text-blue-600 hover:underline">Terug naar Home</a>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-18 py-12">
      <div className="my-12">
        <div
          id="gallery"
          className="columns-2 sm:columns-3 md:columns-4 gap-4 max-w-screen-xl gallery-hover"
        >
          {project.images.map((src, idx) => (
            <a
              key={idx}
              href={src}
              data-pswp-width="1600"
              data-pswp-height="1200"
              className="block mb-4 rounded-lg group gallery-image overflow-hidden break-inside-avoid"
            >
              <img
                src={src}
                alt={`Image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
              />
            </a>
          ))}
        </div>
      </div>

      {/* Details Section */}
      <section className="flex flex-col space-y-6">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <h1 className="text-2xl sm:text-3xl font-semibold">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-4 mt-4 sm:mt-0">
            <span className="badge badge-neutral text-lg font-bold">
              {project.badge}
            </span>
            <span className="badge badge-neutral text-lg font-bold">
              {project.categories}
            </span>
          </div>
        </div>

        <p className="text-base leading-relaxed">
          {project.detaileddesc}
        </p>

        <a
          href={project.link}
          className="text-blue-600 hover:underline break-all"
        >
          {project.linkidentifier}
        </a>

        <div className="flex flex-wrap items-center gap-2">
          {project.tools.map((toolUrl, idx) => (
            <img
              key={idx}
              src={toolUrl}
              alt={`Tool ${idx + 1}`}
              className="w-8 h-8"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
