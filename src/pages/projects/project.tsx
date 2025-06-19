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
    <main className="flex flex-col items-center justify-center gap-4 p-4">
      <h1>{project.title}</h1>
      <div className="w-1/4">
        <div className="carousel">
          <div id="item1" className="carousel-item relative w-full">
            <img src={project.images[0]} className="w-full" />
          </div>
          <div id="item2" className="carousel-item relative w-full">
            <img src={project.images[1]} className="w-full" />
          </div>
          <div id="item3" className="carousel-item relative w-full">
            <img src={project.images[2]} className="w-full" />
          </div>
          <div id="item4" className="carousel-item relative w-full">
            <img src={project.images[3]} className="w-full" />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2">
          <a href="#item1" className="btn btn-xs">1</a>
          <a href="#item2" className="btn btn-xs">2</a>
          <a href="#item3" className="btn btn-xs">3</a>
          <a href="#item4" className="btn btn-xs">4</a>
        </div>
      </div>

      <span>{project.badge}</span>
      <p>{project.desc}</p>
      <p>{project.detaileddesc}</p>
      <p>{project.categories}</p>
    </main>
  );
}
