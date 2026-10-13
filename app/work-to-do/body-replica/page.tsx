import Link from "next/link";
import SourcingTable, { Row } from "../SourcingTable";

const A = "https://www.alibaba.com/";
const rows: Row[] = [
  ["Steel square/rectangular tube", "25–50 mm structural tubing", "US$0.5–1.5/kg", "Alibaba – Carbon steel square tubing", A + "countrysearch/CN/carbon-square-steel-tubing.html"],
  ["Fiberglass / FRP panels", "Automotive FRP body panels", "US$3–15/m²", "Alibaba – Fiberglass car body", A + "countrysearch/CN/fiberglass-car-body.html"],
  ["Aventador-style FRP body kit", "Bumpers, fenders, skirts, hood etc.", "US$2,558–2,758/set", "Alibaba – Aventador-style fiberglass body kit", A + "countrysearch/CN/fiberglass-bodies.html"],
  ["Fiberglass resin", "Laminating epoxy/polyester", "US$1–5/kg", "Alibaba – Fiberglass epoxy resin", A + "countrysearch/CN/fiberglass-epoxy-resin.html"],
  ["Body filler/putty", "Automotive 2K polyester", "US$3–5/kg", "Alibaba – Automotive paint/body materials", A + "countrysearch/CN/car-2k-paint.html"],
  ["Lambo/scissor door hinges", "Universal vertical-opening system", "US$125–150/set", "Alibaba – Lambo door hinges", A + "countrysearch/CN/lambo-door-hinges.html"],
  ["Automatic/hydraulic door system", "Remote/automatic vertical doors", "US$423–440", "Alibaba – Automatic Lambo doors", A + "countrysearch/CN/lambo-door-hinges.html"],
  ["LED headlights", "Custom/projector LED", "US$100–330/set", "Alibaba – LED automotive headlights", A + "countrysearch/CN/led-auto-headlight.html"],
  ["LED tail lights", "Custom Lamborghini-style", "~US$50–200", "Alibaba – Automotive LED lighting", A + "countrysearch/CN/led-auto-headlight.html"],
  ["Alloy wheels", '18–20", 5-lug, custom offset', "US$50–430/wheel", 'Alibaba – 18" alloy wheels', A + "countrysearch/CN/18-alloy-wheels.html"],
  ["Windshield", "Laminated automotive glass", "US$20–150", "Alibaba – Laminated automotive glass", A + "countrysearch/CN/windshield-laminated-glass.html"],
  ["Automotive glass adhesive", "PU windshield adhesive", "~US$5–30", "Alibaba – Automotive adhesive suppliers", A + "showroom/automotive-windshield-adhesive.html"],
  ["Automotive leather/PU", "Seats + door panels", "US$0.83–15/m", "Alibaba – Automotive leather", A + "countrysearch/CN/leather-car-seats-price.html"],
  ["Alcantara-style suede", "Dashboard/headliner/seats", "US$4–17/m", "Alibaba – Automotive Alcantara-style fabric", A + "countrysearch/CN/automotive-alcantara-fabric.html"],
  ["2K automotive paint", "Lamborghini-style metallic colour", "US$3–6/L", "Alibaba – 2K automotive paint", A + "countrysearch/CN/car-2k-paint.html"],
  ["2K clear coat", "High-gloss UV-resistant", "US$2.7–5/L", "Alibaba – 2K clear coat", A + "countrysearch/CN/best-clear-coat.html"],
  ["Radiator grille/mesh", "ABS/aluminium mesh", "US$28–88/set", "Alibaba – Car radiator grille/mesh", A + "countrysearch/CN/car-radiator-grill.html"],
  ["Aluminium radiator", "High-performance cooling", "US$60–120", "Alibaba – Aluminium car radiator", A + "countrysearch/CN/radiator-car.html"],
  ["Seats", "Sport/bucket seats", "US$78–135+", "Alibaba – Automotive seats", A + "countrysearch/CN/automotive-alcantara-fabric.html"],
  ["Reverse camera + display", "Rear camera infotainment", "~US$30–150", "Alibaba – Car reverse camera systems", A + "showroom/car-reverse-camera.html"],
];

export default function BodyReplica() {
  return (
    <>
      <Link href="/work-to-do" className="wtd-back">← Work to do</Link>
      <p className="wtd-eyebrow">Work to do / 01</p>
      <h1>Body Replica</h1>
      <p className="wtd-lead">Sourcing list for the Body Replica: materials, parts and specifications for this build, with approximate China prices and supplier pages.</p>
      <SourcingTable rows={rows} cols={["Material / part", "Specification for this build", "Approx. China price", "China website"]} />
      <p className="wtd-note">Prices are approximate and unverified; confirm with suppliers before ordering. Import duty, shipping and taxes are not included.</p>
    </>
  );
}
