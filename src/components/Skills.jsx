export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills & Competencies</h2>

        <div className="skills-grid">
          <div className="skill-card languages">
            <h3>Languages</h3>
            <p>Java, HTML, CSS, JavaScript, Python</p>
          </div>

          <div className="skill-card tools">
            <h3>Developer Tools</h3>
            <p>
              VS Code, Git, GitHub, APIs, Bootstrap, MERN Stack,
              Postman, Vercel
            </p>
          </div>

          <div className="skill-card soft-skills">
            <h3>Soft Skills</h3>
            <p>
              Leadership, Public Speaking, Teamwork,
              Project Management
            </p>
          </div>

          <div className="skill-card coursework">
            <h3>Coursework</h3>
            <p>
              Data Structures & Algorithms, Database Management,
              Object-Oriented Programming, Software Engineering
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
