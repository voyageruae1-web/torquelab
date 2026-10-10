
import Link from "next/link";

const items = [
["Electric motor","150–250 kW PMSM","US$1,500–4,500","https://www.alibaba.com/countrysearch/CN/electric-powertrain.html"],
["Motor inverter / controller","400–800 V, 200–300 kW","US$1,000–3,000","https://www.alibaba.com/tesla-motors-electric-car-suppliers.html"],
["Battery pack","400–800 V, approx. 70–100 kWh","US$5,000–10,000+","https://chinaev.autos/"],
["Battery management system","Automotive high-voltage BMS","US$300–1,000","https://www.alibaba.com/ev-bms-suppliers.html"],
["On-board charger","6.6–22 kW","US$250–950","https://autopart.alibaba.com/product/alibaba-china-car-spare-parts"],
["DC–DC converter","High voltage to 12/24 V, 1–3 kW","US$100–400","https://chinaev.autos/"],
["Vehicle control unit","VCU with CAN communication","US$200–800","https://www.alibaba.com/tesla-motors-electric-car-suppliers.html"],
["HV contactors + fuse","Automotive high-voltage rated","US$100–400","https://chinaev.autos/"],
["Battery cooling system","Liquid cooling plate and pump","US$300–1,000","https://chinaev.autos/"],
["HV cables / connectors","400–800 V high-voltage system","US$150–500","https://chinaev.autos/"],
];

export default function Powertrain() {
  return (
    <main>
      <nav className="navbar"><Link href="/" className="brand"><span>▽</span> TORQUELAB</Link><Link href="/work-to-do" className="nav-cta">ALL WORKSTREAMS ↗</Link></nav>
      <section className="page-shell">
        <Link href="/work-to-do" className="back-link">← BACK TO WORK TO DO</Link>
        <p className="eyebrow">WORKSTREAM 03B / ELECTRIC DRIVE</p>
        <h1>EV powertrain <span style={{color:"#ff6425"}}>sourcing.</span></h1>
        <p className="page-intro">A preliminary list of ten major EV powertrain components, suggested specifications, indicative prices and supplier starting points.</p>
        <div className="table-wrap"><table className="data-table">
          <thead><tr><th>#</th><th>Component</th><th>Suggested specification</th><th>Approx. price</th><th>Supplier search</th></tr></thead>
          <tbody>{items.map((x,i)=><tr key={x[0]}><td>{String(i+1).padStart(2,"0")}</td><td><strong>{x[0]}</strong></td><td>{x[1]}</td><td>{x[2]}</td><td><a href={x[3]} target="_blank" rel="noreferrer">View suppliers ↗</a></td></tr>)}</tbody>
        </table></div>
        <div className="notice"><strong>High-voltage safety:</strong> These are planning estimates, not a validated vehicle design. Motor, inverter, battery, contactors, cables and cooling must be engineered as one compatible system. High-voltage work should only be performed by qualified professionals using appropriate isolation and safety procedures.</div>
      </section>
      <footer><Link href="/" className="brand"><span>▽</span> TORQUELAB</Link><p>EV POWERTRAIN / SOURCING</p><Link href="/work-to-do/street-legal">NEXT: STREET LEGAL →</Link></footer>
    </main>
  );
}
