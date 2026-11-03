
import { Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__inner">

        <p className="section__eyebrow">— Get in touch —</p>

        <h2 className="section__title">
          Let's build something <em>together.</em>
        </h2>

        <p className="contact__text">
          I'm open to junior developer opportunities, internships
          and interesting web development projects.
        </p>

        <a
          href="mailto:your-email@example.com"
          className="btn"
        >
          <Mail size={18} />
          y.tourirt5@gmail.com
          <ArrowUpRight size={16} />
        </a>

        <div className="contact__socials">
          <a
            href="https://github.com/youssef2222"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/tourirt-youssef-903577139/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}
