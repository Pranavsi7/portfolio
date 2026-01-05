export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2>Contact Me</h2>

      <p className="contact-text">
        I’m open to internships, full-time roles, and freelance opportunities.
        Let’s connect.
      </p>

      <div className="contact-actions">
        <a
          href="mailto:pranavsingh@email.com"
          className="primary-btn"
        >
          Email Me
        </a>

        <a
          href="https://www.linkedin.com/in/pranav-singh-8a802424b/"
          target="_blank"
          rel="noopener noreferrer"
          className="secondary-btn"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
