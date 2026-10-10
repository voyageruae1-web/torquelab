
import Link from "next/link";

const sections = [
  { n: "01", title: "Design", desc: "Form follows performance", icon: "◈" },
  { n: "02", title: "Engineering Explorer", desc: "Explore the exploded vehicle", icon: "⌘" },
  { n: "03", title: "Powertrain", desc: "Battery · Motor · Gearbox", icon: "ϟ" },
  { n: "04", title: "Chassis", desc: "Suspension · Brakes · Frame", icon: "◇" },
  { n: "05", title: "Aero & Thermal", desc: "Downforce · Cooling", icon: "〰" },
  { n: "06", title: "Performance", desc: "Power · Speed · Control", icon: "↗" },
];

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <Link href="/" className="brand"><span>▽</span> TORQUELAB</Link>
        <div className="navlinks">
          <a href="#overview">OVERVIEW</a>
          <a href="#explore">ENGINEERING</a>
          <a href="#specs">PERFORMANCE</a>
        </div>
        <Link href="/work-to-do" className="nav-cta">WORK TO DO ↗</Link>
      </nav>

      <section className="hero" id="overview">
        <div className="hero-copy">
          <p className="eyebrow">ELECTRIC HYPERCAR PROJECT / 001</p>
          <h1>BUILT TO<br />DEFY THE<br /><span>ORDINARY.</span></h1>
          <p className="hero-desc">
            A ground-up exploration of electric performance,
            automotive engineering and an uncompromising design.
          </p>
          <div className="hero-actions">
            <a className="button-primary" href="#explore">EXPLORE ENGINEERING ↘</a>
            <Link className="button-outline" href="/work-to-do">VIEW PROJECT PLAN ↗</Link>
          </div>
          <div className="hero-stats" id="specs">
            <div><strong>EV</strong><span>POWERTRAIN</span></div>
            <div><strong>360°</strong><span>CAR EXPLORATION</span></div>
            <div><strong>001</strong><span>PROJECT SERIES</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-label">TORQUELAB / CONCEPT STUDY</div>
          <div className="car-image" role="img" aria-label="Dark performance sports car concept" />
          <div className="image-caption"><span>TL—001</span><span>DESIGN STUDY / 2026</span></div>
          <div className="hero-index">01 <span>—</span> 04</div>
        </div>
      </section>

      <section className="manifesto">
        <p className="eyebrow">THE VISION</p>
        <h2>Every component has a purpose.<br />Every system works as one.</h2>
        <p>From the body shell to the electric drive system, explore the ideas, parts and engineering behind our hypercar project.</p>
      </section>

      <section className="engineering section-pad" id="explore">
        <div className="section-heading">
          <div><p className="eyebrow">DISCOVER TORQUELAB</p><h2>Engineering, <span>explored.</span></h2></div>
          <p>Six systems. One complete machine.</p>
        </div>
        <div className="engineering-grid">
          {sections.map((s) => (
            <a className="engineering-card" href="/work-to-do" key={s.n}>
              <div className="card-top"><span>{s.n} / SYSTEM</span><span className="card-icon">{s.icon}</span></div>
              <div className="card-art">{s.n === "03" ? "EV / DRIVE" : s.n === "02" ? "EXPLODED / VIEW" : "TL—001"}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="card-bottom"><span>EXPLORE SYSTEM</span><span>↗</span></div>
            </a>
          ))}
        </div>
      </section>

      <section className="work-banner">
        <div><p className="eyebrow">FROM CONCEPT TO BUILD</p><h2>Turn the vision<br />into a real project.</h2><p>Parts sourcing, EV powertrain planning and road-legal research—all in one place.</p></div>
        <Link href="/work-to-do" className="button-primary">OPEN WORK TO DO ↗</Link>
      </section>

      <footer><Link href="/" className="brand"><span>▽</span> TORQUELAB</Link><p>INDEPENDENT HYPERCAR ENGINEERING CONCEPT · 2026</p><a href="#overview">BACK TO TOP ↑</a></footer>
    </main>
  );
}
