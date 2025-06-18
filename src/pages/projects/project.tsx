import { useParams } from "react-router";
import { projects } from "./components/projectdata";

export default function Project() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found. <a href="/">Terug naar Home</a></div>;

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.coverimage} className="w-1/4"></img>
      <img src={project.images[0]}></img>
      <span>{project.badge}</span>
      <p>{project.desc}</p>
      <p>{project.detaileddesc}</p>
      <p>{project.categories}</p>
    </div>
  );
}
