export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>

        <div className="projects-grid">
          {/* Expense Tracker API */}
          <div className="project-card">
            <h3>Expense Tracker API</h3>
            <p>
              RESTful API to manage user expenses with secure JWT authentication
              and optimized database queries.
            </p>

            <ul>
              <li>⬆️ Improved data handling efficiency by <strong>40%</strong></li>
              <li>⚡ Reduced DB latency by <strong>30%</strong></li>
              <li>🔐 Secured 100% sensitive endpoints</li>
            </ul>

            <p className="tech">
              Java · Spring Boot · PostgreSQL · JdbcTemplate · JWT
            </p>

            <a
              href="https://github.com/Pranavsi7/Expense-Tracker-API"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* Flight Search */}
          <div className="project-card">
            <h3>Flight Search Web App</h3>
            <p>
              Scalable flight search platform with admin dashboard and bulk
              upload support.
            </p>

            <ul>
              <li>👥 1,000+ monthly users</li>
              <li>🚀 30% faster DB queries</li>
              <li>📂 Bulk upload (CSV, Excel, XML)</li>
            </ul>

            <p className="tech">
              Java · Spring MVC · Hibernate · MySQL · JSP
            </p>

            <a
              href="https://github.com/Pranavsi7/Flight-Search-"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* E-commerce */}
          <div className="project-card">
            <h3>E-commerce Platform</h3>
            <p>
              Full-stack e-commerce application with optimized APIs and modern
              React UI.
            </p>

            <ul>
              <li>🛒 500+ monthly product views</li>
              <li>📉 25% faster API response</li>
              <li>✅ 90% unit test coverage</li>
            </ul>

            <p className="tech">
              Spring Boot · React · MySQL · REST APIs
            </p>

            <a
              href="https://github.com/Pranavsi7/E-commerce"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>

          {/* To-Do */}
          <div className="project-card">
            <h3>To-Do List App</h3>
            <p>
              Desktop task management application with persistent local storage.
            </p>

            <ul>
              <li>📝 Add, edit, delete, prioritize tasks</li>
              <li>💾 Persistent local storage</li>
              <li>🎨 JavaFX-based UI</li>
            </ul>

            <p className="tech">
              Java · JavaFX · Collections
            </p>

            <a
              href="https://github.com/Pranavsi7/To-Do-List-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
