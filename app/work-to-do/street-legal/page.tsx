
import Link from "next/link";

const checks = [
["Confirm vehicle category","Ask the relevant Indian transport authority how a one-off, kit-built or modified vehicle would be classified."],
["Obtain approval guidance before construction","Confirm the applicable type-approval, inspection and registration pathway with the competent authority and an authorised testing agency."],
["Document chassis and vehicle identity","Ask what chassis identification, build records and ownership documents are required."],
["Verify structural safety","Use qualified automotive engineers to assess the frame, crashworthiness, body mounting and occupant protection."],
["Verify braking and steering","Ensure the design can meet applicable braking, steering, suspension and stability requirements."],
["Verify lighting and visibility","Check approved headlamps, indicators, tail lamps, mirrors, glazing, visibility and other applicable equipment."],
["Validate EV electrical safety","Assess battery protection, high-voltage isolation, electrical safety, charging and electromagnetic compatibility requirements."],
["Check tyres, wheels and restraints","Verify suitable tyres, wheel ratings, seat belts, seats and anchorage points."],
["Confirm emissions and noise rules","Determine which rules and tests apply to the vehicle category and proposed powertrain."],
["Complete inspection and registration","Proceed only after the authority confirms the required testing, certification, insurance and registration documents."]
];

export default function StreetLegal() {
  return (
    <main>
      <nav className="navbar"><Link href="/" className="brand"><span>▽</span> TORQUELAB</Link><Link href="/work-to-do" className="nav-cta">ALL WORKSTREAMS ↗</Link></nav>
      <section className="page-shell">
        <Link href="/work-to-do" className="back-link">← BACK TO WORK TO DO</Link>
        <p className="eyebrow">WORKSTREAM 03C / COMPLIANCE</p>
        <h1>Making it <span style={{color:"#ff6425"}}>street legal.</span></h1>
        <p className="page-intro">A preliminary checklist for investigating whether a custom-built or heavily modified electric vehicle can be legally registered for road use in India.</p>
        <div className="notice"><strong>Start here:</strong> Do not assume that a road-legal donor vehicle, an aftermarket body kit or a successfully running prototype makes the completed vehicle road-legal. Obtain written guidance on the applicable approval pathway before committing to construction.</div>
        <div className="check-list">{checks.map((c,i)=><label className="check-item" key={c[0]}><input type="checkbox"/><span><strong>{String(i+1).padStart(2,"0")}. {c[0]}</strong><br/>{c[1]}</span></label>)}</div>
        <div className="notice">This is a planning checklist, not legal advice or confirmation of eligibility. Requirements depend on the vehicle's classification, construction and modifications. Verify the current rules with the relevant RTO, MoRTH and authorised vehicle-testing agency.</div>
      </section>
      <footer><Link href="/" className="brand"><span>▽</span> TORQUELAB</Link><p>ROAD-LEGALITY RESEARCH</p><Link href="/work-to-do">WORK TO DO ↗</Link></footer>
    </main>
  );
}
