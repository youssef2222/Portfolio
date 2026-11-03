
import { ExternalLink, FolderGit2 } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">

        {project.image && (
        <div className="project-card__image">
            <img
            src={project.image}
            alt={`${project.title} preview`}
            />
        </div>
        )}

      <div className="project-card__head">
        <FolderGit2 size={22} />

        <span className="project-card__lang">
          {project.category}
        </span>
      </div>

      <h3 className="project-card__title">
        {project.title}
      </h3>

      <p className="project-card__desc">
        {project.description}
      </p>

      <div className="skill-tags">
        {project.technologies.map((tech) => (
          <span className="tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      <p className="project-card__meta">
        {project.period}
      </p>

      <div className="project-card__links">
       
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>

    </article>
  );
}
