export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <h2 className="navbar-logo">Pranav Singh</h2>

        <ul className="navbar-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>

        {/* Contact CTA */}
        <a href="#contact" className="navbar-btn">
          Contact
        </a>
      </div>
    </nav>
  );
}
