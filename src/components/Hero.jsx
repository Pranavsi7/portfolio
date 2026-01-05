import profile from "../assets/profile.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <img src={profile} alt="Pranav Singh" className="profile-img" />

        <h1>Hi, I'm Pranav Singh 👋</h1>

        <p className="hero-subtitle">
          Final-year B.Tech CSE student at KIIT University building
          <span> scalable backend & full-stack systems</span> using
          Java, Spring Boot, and React — focused on performance,
          security, and real-world impact.
        </p>

        <div className="hero-buttons">
          <a href="/Resume2026.pdf" download className="primary-btn">
            Download Resume
          </a>
          <a
            href="https://github.com/Pranavsi7"
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            View GitHub
          </a>
        </div>

        {/* Trust / Impact Bar */}
        <div className="hero-stats">
          <div>
            <h3>5+</h3>
            <p>Projects</p>
          </div>
          <div>
            <h3>1K+</h3>
            <p>Users Impacted</p>
          </div>
          <div>
            <h3>30–40%</h3>
            <p>Performance Gains</p>
          </div>
        </div>

        <p className="hero-note">
          Actively seeking Backend / Full-Stack roles and internship-to-full-time
          opportunities.
        </p>
      </div>
    </section>
  );
}
