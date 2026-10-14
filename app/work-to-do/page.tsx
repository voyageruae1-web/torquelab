import Link from "next/link";

const cards = [
  { href: "/work-to-do/body-replica", n: "01", t: "Body Replica", d: "Sourcing list for the shell, panels, lighting, glass, interior and finishing, with approximate China prices." },
  { href: "/work-to-do/powertrain", n: "02", t: "High-Performance EV Powertrain", d: "Motor, inverter, battery, BMS, charger and high-voltage components with suggested specifications." },
  { href: "/work-to-do/street-legal", n: "03", t: "Making It Street Legal", d: "A ten-part checklist covering approval, safety, testing, registration and insurance in India." },
  { href: "/work-to-do/learning-materials", n: "04", t: "Learning Materials", d: "Saved documents and YouTube videos to study while building." },
];

export default function WorkToDo() {
  return (
    <>
      <p className="wtd-eyebrow">TorqueLab / Work to do</p>
      <h1>Three builds to finish.</h1>
      <p className="wtd-lead">Everything needed to move from concept to a road-ready electric hypercar: the body, the powertrain and the legal pathway.</p>
      <div className="wtd-cards">
        {cards.map((c) => (
          <Link key={c.href} href={c.href} className="wtd-card">
            <span className="wtd-num">{c.n}</span>
            <h2>{c.t}</h2>
            <p>{c.d}</p>
            <span className="wtd-go">Open →</span>
          </Link>
        ))}
      </div>
    </>
  );
}
