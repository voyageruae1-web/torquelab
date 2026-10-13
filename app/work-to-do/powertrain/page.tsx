import Link from "next/link";
import SourcingTable, { Row } from "../SourcingTable";

const rows: Row[] = [
  ["Electric motor", "150–250 kW PMSM", "US$1,500–4,500", "China EV PMSM motors", "https://www.alibaba.com/countrysearch/CN/electric-powertrain.html"],
  ["Motor inverter/controller", "400–800 V, 200–300 kW", "US$1,000–3,000", "China EV motor controllers", "https://www.alibaba.com/tesla-motors-electric-car-suppliers.html"],
  ["Battery pack", "400–800 V, ~70–100 kWh", "US$5,000–10,000+", "China EV battery packs", "https://chinaev.autos/"],
  ["BMS", "High-voltage automotive BMS", "US$300–1,000", "China EV BMS suppliers", "https://www.alibaba.com/ev-bms-suppliers.html"],
  ["On-board charger (OBC)", "6.6–22 kW", "US$250–950", "China EV chargers", "https://autopart.alibaba.com/product/alibaba-china-car-spare-parts"],
  ["DC-DC converter", "HV → 12/24 V, 1–3 kW", "US$100–400", "China EV power electronics", "https://chinaev.autos/"],
  ["VCU", "Vehicle control unit + CAN", "US$200–800", "China EV VCU suppliers", "https://www.alibaba.com/tesla-motors-electric-car-suppliers.html"],
  ["HV contactors + fuse", "400–800 V automotive HV", "US$100–400", "China EV HV components", "https://chinaev.autos/"],
  ["Battery cooling system", "Liquid cooling plate/pump", "US$300–1,000", "China EV thermal-management suppliers", "https://chinaev.autos/"],
  ["HV cables/connectors", "400–800 V orange HV system", "US$150–500", "China EV HV components", "https://chinaev.autos/"],
];

export default function Powertrain() {
  return (
    <>
      <Link href="/work-to-do" className="wtd-back">← Work to do</Link>
      <p className="wtd-eyebrow">Work to do / 02</p>
      <h1>High-Performance EV Powertrain</h1>
      <p className="wtd-lead">Suggested components and specifications for the electric powertrain, with approximate China prices.</p>
      <div className="wtd-stats">
        <div><b>250 kW</b><span>Target motor</span></div>
        <div><b>800 V</b><span>Power architecture</span></div>
      </div>
      <SourcingTable rows={rows} cols={["Powertrain component", "Suggested specification", "Approx. China price", "China link"]} />
      <p className="wtd-note">Prices are approximate and unverified. High-voltage parts must be selected and installed by qualified people and must meet the safety rules on the Street Legal page.</p>
    </>
  );
}
