"use client";

const sections = [
  {
    number: "01",
    title: "Overview",
    description: "The big picture. The complete system.",
    className: "overview",
    href: "#overview",
  },
  {
    number: "02",
    title: "Design",
    description: "Form meets function.",
    className: "design",
    href: "#design",
  },
  {
    number: "03",
    title: "Engineering",
    description: "Explore the complete machine.",
    className: "engineering",
    href: "#engineering",
  },
  {
    number: "04",
    title: "Powertrain",
    description: "Battery · Motor · Gearbox",
    className: "powertrain",
    href: "/work-to-do/powertrain",
  },
  {
    number: "05",
    title: "Chassis",
    description: "Suspension · Brakes · Frame",
    className: "chassis",
    href: "/work-to-do",
  },
  {
    number: "06",
    title: "Aero & Thermal",
    description: "Downforce · Cooling · Drag",
    className: "aero",
    href: "#performance",
  },
  {
    number: "07",
    title: "Performance",
    description: "Power · Speed · Control",
    className: "performance",
    href: "#performance",
  },
];

export default function Home() {
  return (
    <main className="torquelab" id="overview">
      <section className="hero">
        <div className="hero-background" />
        <div className="hero-shade" />

        <header className="navbar">
          <a className="brand" href="#overview" aria-label="TorqueLab home">
            <span className="brand-mark">▽</span>
            <span>TORQUELAB</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a className="nav-active" href="#overview">Overview</a>
            <a href="#engineering">Engineering</a>
            <a href="#performance">Performance</a>
            <a href="/work-to-do">Work to do</a>
          </nav>

          <a className="configure-button" href="/work-to-do">
            Configure <span>↗</span>
          </a>
        </header>

        <div className="electric-label">
          <span>Pure electric power</span>
          <span className="label-divider" />
          <span>Zero emissions</span>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Electric hypercar project</p>

          <h1>
            Engineered
            <br />
            Without Compromise.
          </h1>

          <p className="hero-description">
            Exploring the engineering behind an extraordinary
            electric hypercar. Design, power, precision and
            performance.
          </p>

          <div className="specifications">
            <div className="spec">
              <strong>250 <span>kW</span></strong>
              <span className="spec-caption">Target motor</span>
            </div>
            <div className="spec">
              <strong>800 <span>V</span></strong>
              <span className="spec-caption">Power architecture</span>
            </div>
            <div className="spec">
              <strong>01</strong>
              <span className="spec-caption">Build project</span>
            </div>
          </div>

          <a className="orange-button" href="#engineering">
            Explore engineering <span>→</span>
          </a>

          <div className="hero-footnote">
            <span>TORQUELAB / PROJECT 001</span>
            <span>DESIGNED FOR PERFORMANCE</span>
          </div>
        </div>

        <div className="slide-indicator" aria-label="Slide 1 of 4">
          <span>01</span>
          <span className="slide-line" />
          <span>04</span>
        </div>

        <div className="hero-bottom-glow" />
      </section>

      <section className="features" aria-label="Core principles">
        <article className="feature">
          <span className="feature-icon">ϟ</span>
          <div>
            <h2>Power</h2>
            <p>Electric powertrain concepts and component integration.</p>
          </div>
        </article>

        <article className="feature">
          <span className="feature-icon target-icon">◎</span>
          <div>
            <h2>Control</h2>
            <p>Chassis dynamics, braking and vehicle control systems.</p>
          </div>
        </article>

        <article className="feature">
          <span className="feature-icon">◇</span>
          <div>
            <h2>Efficiency</h2>
            <p>Aerodynamics, cooling and energy management.</p>
          </div>
        </article>
      </section>

      <section className="engineering-section" id="engineering">
        <div className="section-intro">
          <p className="eyebrow">— Explore engineering</p>
          <h2>
            Dive into the
            <br />
            <span>Details.</span>
          </h2>
          <p className="intro-description">
            Seven systems. One complete machine.
          </p>
          <a className="orange-button view-all" href="/work-to-do">
            View all sections <span>→</span>
          </a>
        </div>

        <div className="section-cards">
          {sections.map((section) => (
            <a
              className={`section-card ${section.className}`}
              href={section.href}
              key={section.number}
            >
              <div className="card-image">
                <span className="card-number">{section.number}</span>
              </div>
              <div className="card-content">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="footer">
        <a className="footer-brand" href="#overview">TORQUELAB</a>
        <span>PROJECT 001 · ELECTRIC PERFORMANCE</span>
        <a href="/work-to-do">Explore the build →</a>
      </footer>
    </main>
  );
}