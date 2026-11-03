
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="projects__inner">

        <div className="section__head">
          <p className="section__eyebrow">— My Work —</p>

          <h2 className="section__title">
            Featured <em>Projects.</em>
          </h2>

          <p className="section__sub">
            A selection of my professional and personal projects.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
