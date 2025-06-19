import { useParams } from "react-router";
import { projects } from "./components/projectdata";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project)
    return (
      <div>
        Project not found. <a href="/">Terug naar Home</a>
      </div>
    );

  return (
    <main className="flex flex-col items-center justify-center gap-4 py-12">
      <div className="container mx-auto px-18 lg:max-w-3/4 xl:max-w-1/2">
        <div className="carousel w-full relative rounded-xl">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={project.images[0]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide2" className="carousel-item relative w-full">
            <img src={project.images[1]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img src={project.images[2]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>

          <div id="slide4" className="carousel-item relative w-full">
            <img src={project.images[3]} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#slide1" className="btn btn-xs">1</a>
          <a href="#slide2" className="btn btn-xs">2</a>
          <a href="#slide3" className="btn btn-xs">3</a>
          <a href="#slide4" className="btn btn-xs">4</a>
        </div>

        <section className="flex flex-col gap-6">
          <div className="w-full flex flex-row justify-between">
            <h1 className="text-3xl font-semibold">{project.title}</h1>
            <div className="flex flex-row gap-4">
            <span className="badge badge-neutral text-lg h-full font-bold">{project.badge}</span>
            <span className="badge badge-neutral text-lg h-full font-bold">{project.categories}</span>
            </div>
          </div>
          <p>{project.detaileddesc}</p>
          <a href={project.link}>{project.linkidentifier}</a>
          <div className="flex flex-wrap items-center gap-2">
            {project.tools.map((toolUrl, idx) => (
              <img key={idx} src={toolUrl} className="w-8 h-8"/>
            ))}
          </div>
      </section>
      </div>

    </main>
  );
}
