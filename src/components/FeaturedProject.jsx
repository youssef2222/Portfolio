
import { ExternalLink } from "lucide-react";

export default function FeaturedProject() {
  return (
    <section className="featured-project" id="featured-project">
      <div className="featured-project__inner">

        <div className="featured-project__content">

          <p className="section__eyebrow">
            — Latest Project —
          </p>

          <span className="featured-project__company">
            MAYERFELD CONSULTING · GERMANY
          </span>

          <h2>
            Pulse <em>Fitness.</em>
          </h2>

          <p className="featured-project__description">
            A high-performance fitness center web application
            featuring membership management, real-time bookings,
            interactive membership plans and a responsive
            desktop and mobile experience.
          </p>

          <div className="featured-project__features">
            <h4>CORE FEATURES</h4>

            <ul>
              <li>Member dashboard and booking management</li>
              <li>Interactive membership plans</li>
              <li>Responsive desktop and mobile experience</li>
            </ul>
          </div>

          <div className="featured-project__technologies">
            <h4>TECH STACK</h4>

            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"].map(
              (tech) => (
                <span key={tech}>{tech}</span>
              )
            )}
          </div>

          <div className="featured-project__links">
            <a
              href="https://my-pulse-fitness.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>

          </div>

        </div>

        <div className="featured-project__visual">
          <img
            src="/images/pulsefitness-responsive-upwork-cover.png"
            alt="Pulse Fitness desktop and mobile application preview"
          />
        </div>

      </div>
    </section>
  );
}
