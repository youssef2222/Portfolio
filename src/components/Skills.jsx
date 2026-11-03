
const skills = [
  "PHP",
  "Symfony",
  "JavaScript",
  "React",
  "Node.js",
  "Express",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "PostgreSQL",
  "MySQL",
  "Git",
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills__inner">
        <p className="section__eyebrow">— Technologies —</p>

        <h2 className="section__title">
          My technical <em>toolkit.</em>
        </h2>

        <div className="skills__list">
          {skills.map((skill) => (
            <span className="tag" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
