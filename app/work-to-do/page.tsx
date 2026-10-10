
import Link from "next/link";

const tasks = [
  { n: "03A", title: "Sourcing List for Body Replica", desc: "Body panels, structural materials, lighting, wheels, glass and interior parts.", href: "/work-to-do/body-replica" },
  { n: "03B", title: "High-Performance EV Powertrain", desc: "Motor, inverter, battery, BMS, charging, controls and thermal management.", href: "/work-to-do/powertrain" },
  { n: "03C", title: "Making It Street Legal", desc: "Research registration, vehicle approval, roadworthiness and safety requirements.", href: "/work-to-do/street-legal" },
];

export default function WorkToDo() {
  return (
    <main>
      <nav className="navbar">
        <Link href="/" className="brand"><span>▽</span> TORQUELAB</Link>
        <div className="navlinks"><Link href="/">OVERVIEW</Link><a href="/#explore">ENGINEERING</a></div>
        <span className="nav-cta">PROJECT WORKSPACE</span>
      </nav>
      <section className="page-shell">
        <Link href="/" className="back-link">← BACK TO TORQUELAB</Link>
        <p className="eyebrow">PROJECT WORKSPACE / TASKS</p>
        <h1>From concept<br />to <span style={{color:"#ff6425"}}>construction.</span></h1>
        <p className="page-intro">The working plan for the TorqueLab hypercar project. Select a workstream to explore components, indicative sourcing costs and the next steps.</p>
        <div className="work-grid">
          {tasks.map(t => (
            <Link href={t.href} className="work-option" key={t.n}>
              <span className="number">{t.n} / WORKSTREAM</span>
              <h2>{t.title}</h2>
              <p>{t.desc}</p>
              <strong>OPEN WORKSTREAM ↗</strong>
            </Link>
          ))}
        </div>
        <div className="notice">Planning estimates only. Prices, availability, import duties and vehicle approval requirements must be verified before purchasing parts or starting construction.</div>
      </section>
      <footer><Link href="/" className="brand"><span>▽</span> TORQUELAB</Link><p>PROJECT WORKSPACE · 2026</p><Link href="/">HOME ↗</Link></footer>
    </main>
  );
}
