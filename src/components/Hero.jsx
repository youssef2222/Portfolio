
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__inner">
        <div className="hero__content">
          <p className="hero__eyebrow">SOFTWARE ENGINEER</p>

          <h1>
            Hi, I'm <span>Youssef</span>.
          </h1>

          <p className="hero__description">
            I build modern web applications and digital solutions.
          </p>

          <div className="hero__actions">
            <a href="#projects" className="btn">
              View my work <ArrowUpRight size={16} />
            </a>
            <a href="#contact" className="btn btn--secondary">
              Contact me
            </a>
          </div>

          <div className="hero__socials">
            <a href="https://github.com/youssef2222" target="_blank" rel="noreferrer">
            GitHub
            </a>
            <a href="https://www.linkedin.com/in/tourirt-youssef-903577139/" target="_blank" rel="noreferrer">
            LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__image">
          <img src="/images/Photo17.jpg" alt="Youssef" />
        </div>
      </div>
    </section>
  );
}
