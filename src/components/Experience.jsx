export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>

        <div className="project-card experience-card">
          {/* Header */}
          <div className="experience-header">
            <div>
              <h3>Web Development Intern</h3>
              <h4>Coding Blocks Pvt. Ltd.</h4>
            </div>
            <span className="experience-date">
              May 2025 – June 2025
            </span>
          </div>

          {/* Content */}
          <ul>
            <li>
              Developed a <strong>Flight Search Web Application</strong> using
              Java, Spring MVC, Hibernate, MySQL, and JSP.
            </li>
            <li>
              Optimized Hibernate ORM queries, achieving
              <strong> 30% faster database response</strong>.
            </li>
            <li>
              Implemented bulk upload support (CSV, Excel, XML), improving
              ingestion speed by <strong>60%</strong>.
            </li>
            <li>
              Designed admin dashboards and validation workflows, reducing
              manual data entry errors by <strong>25%</strong>.
            </li>
          </ul>

          <p className="tech">
            Java · Spring MVC · Hibernate · MySQL · JSP · Tomcat
          </p>
        </div>
      </div>
    </section>
  );
}
