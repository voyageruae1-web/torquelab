
import Link from "next/link";

const items = [
["Steel square/rectangular tube","25–50 mm structural tubing","US$0.5–1.5/kg","https://www.alibaba.com/countrysearch/CN/carbon-square-steel-tubing.html"],
["Fiberglass / FRP panels","Automotive FRP body panels","US$3–15/m²","https://www.alibaba.com/countrysearch/CN/fiberglass-car-body.html"],
["Aventador-style FRP body kit","Bumpers, fenders, skirts, hood","US$2,558–2,758/set","https://www.alibaba.com/countrysearch/CN/fiberglass-bodies.html"],
["Fiberglass resin","Laminating epoxy/polyester","US$1–5/kg","https://www.alibaba.com/countrysearch/CN/fiberglass-epoxy-resin.html"],
["Body filler / putty","Automotive 2K polyester","US$3–5/kg","https://www.alibaba.com/countrysearch/CN/car-2k-paint.html"],
["Scissor-door hinges","Universal vertical-opening system","US$125–150/set","https://www.alibaba.com/countrysearch/CN/lambo-door-hinges.html"],
["Automatic door system","Remote / automatic vertical doors","US$423–440","https://www.alibaba.com/countrysearch/CN/lambo-door-hinges.html"],
["LED headlights","Custom projector LED","US$100–330/set","https://www.alibaba.com/countrysearch/CN/led-auto-headlight.html"],
["LED tail lights","Custom LED lighting","~US$50–200","https://www.alibaba.com/countrysearch/CN/led-auto-headlight.html"],
["Alloy wheels",'18–20", 5-lug, custom offset',"US$50–430/wheel","https://www.alibaba.com/countrysearch/CN/18-alloy-wheels.html"],
["Windshield","Laminated automotive glass","US$20–150","https://www.alibaba.com/countrysearch/CN/windshield-laminated-glass.html"],
["Glass adhesive","PU windshield adhesive","~US$5–30","https://www.alibaba.com/showroom/automotive-windshield-adhesive.html"],
["Automotive leather / PU","Seats and door panels","US$0.83–15/m","https://www.alibaba.com/countrysearch/CN/leather-car-seats-price.html"],
["Suede-style fabric","Dashboard, headliner, seats","US$4–17/m","https://www.alibaba.com/countrysearch/CN/automotive-alcantara-fabric.html"],
["2K automotive paint","Metallic automotive finish","US$3–6/L","https://www.alibaba.com/countrysearch/CN/car-2k-paint.html"],
["2K clear coat","High-gloss UV-resistant finish","US$2.7–5/L","https://www.alibaba.com/countrysearch/CN/best-clear-coat.html"],
["Radiator grille / mesh","ABS or aluminium mesh","US$28–88/set","https://www.alibaba.com/countrysearch/CN/car-radiator-grill.html"],
["Aluminium radiator","High-performance cooling","US$60–120","https://www.alibaba.com/countrysearch/CN/radiator-car.html"],
["Seats","Sport / bucket seats","US$78–135+","https://www.alibaba.com/countrysearch/CN/automotive-seats.html"],
["Reverse camera + display","Rear camera infotainment","~US$30–150","https://www.alibaba.com/showroom/car-reverse-camera.html"],
];

export default function BodyReplica() {
  return (
    <main>
      <nav className="navbar"><Link href="/" className="brand"><span>▽</span> TORQUELAB</Link><Link href="/work-to-do" className="nav-cta">ALL WORKSTREAMS ↗</Link></nav>
      <section className="page-shell">
        <Link href="/work-to-do" className="back-link">← BACK TO WORK TO DO</Link>
        <p className="eyebrow">WORKSTREAM 03A / MATERIALS</p>
        <h1>Body replica <span style={{color:"#ff6425"}}>sourcing.</span></h1>
        <p className="page-intro">A preliminary 20-item sourcing list for a custom hypercar-style body replica. Prices are indicative estimates, not verified live quotations.</p>
        <div className="table-wrap"><table className="data-table">
          <thead><tr><th>#</th><th>Material / part</th><th>Specification</th><th>Approx. China price</th><th>Supplier search</th></tr></thead>
          <tbody>{items.map((x,i)=><tr key={x[0]}><td>{String(i+1).padStart(2,"0")}</td><td><strong>{x[0]}</strong></td><td>{x[1]}</td><td>{x[2]}</td><td><a href={x[3]} target="_blank" rel="noreferrer">View suppliers ↗</a></td></tr>)}</tbody>
        </table></div>
        <div className="notice">Important: The chassis, crash structure, steering, suspension, brakes, seat mounts and restraint systems require qualified automotive engineering. A cosmetic body kit is not a substitute for a safe structural design.</div>
      </section>
      <footer><Link href="/" className="brand"><span>▽</span> TORQUELAB</Link><p>BODY REPLICA / SOURCING</p><Link href="/work-to-do/powertrain">NEXT: POWERTRAIN →</Link></footer>
    </main>
  );
}
