
import { ArrowUpRight } from "lucide-react";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__inner">

        <div className="about__content">
          <p className="section__eyebrow">— About me —</p>

          <h2 className="section__title">
            Software Engineer focused on
            <em> web development.</em>
          </h2>

          <p>
            I'm a Software Engineering graduate with experience in
            developing and maintaining web applications.
          </p>

          <p>
            I work with technologies such as PHP, Symfony, JavaScript,
            React and Node.js to build practical digital solutions.
          </p>

          <a href="#contact" className="btn">
            Let's talk <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="about__stats">
          <div className="about__stat">
            <h3>2500+</h3>
            <p>Students supported</p>
          </div>

          <div className="about__stat">
            <h3>3+</h3>
            <p>Development projects</p>
          </div>
        </div>

      </div>
    </section>
  );
}
