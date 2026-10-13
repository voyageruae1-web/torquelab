import Link from "next/link";
import Checklist, { Section } from "../Checklist";

const sections: Section[] = [
  { title: "Vehicle Classification and Legal Pathway", items: [
    "Determine whether the vehicle is a newly constructed custom vehicle, a modified registered vehicle, or a reconstructed vehicle.",
    "Identify the applicable vehicle category and approval process.",
    "Confirm whether the proposed construction can legally be registered for public-road use.",
    "Consult the relevant Regional Transport Office (RTO).",
    "Review applicable Ministry of Road Transport and Highways (MoRTH) rules and notifications."] },
  { title: "Vehicle Approval and Homologation", items: [
    "Identify applicable vehicle type-approval requirements.",
    "Determine whether testing by an authorised agency, such as ARAI or ICAT, is required.",
    "Identify applicable Central Motor Vehicles Rules (CMVR) and technical standards.",
    "Determine the required inspection and certification procedures.",
    "Obtain the necessary approvals before applying for registration."] },
  { title: "Chassis, VIN and Build Documentation", items: [
    "Establish the lawful identity and provenance of the donor vehicle or chassis, where applicable.",
    "Maintain invoices for the chassis, body, motor, battery, and other major components.",
    "Document the vehicle construction and modification process.",
    "Confirm the requirements for chassis and Vehicle Identification Number (VIN) identification.",
    "Obtain any required authorisation for chassis or vehicle-identity alterations.",
    "Maintain technical drawings, specifications, and build records."] },
  { title: "Body, Frame and Structural Safety", items: [
    "Verify chassis strength and structural integrity.",
    "Assess body mounting points and load-bearing components.",
    "Check doors, latches, bonnet, and other closures.",
    "Review applicable crash-safety and occupant-protection requirements.",
    "Verify vehicle dimensions and applicable ground-clearance requirements.",
    "Ensure body modifications do not compromise visibility or pedestrian safety.",
    "Document structural modifications for technical inspection."] },
  { title: "Braking, Steering and Suspension", items: [
    "Verify service-brake performance.",
    "Verify parking-brake performance.",
    "Inspect steering-system integrity and control.",
    "Verify suspension geometry and load capacity.",
    "Assess road handling and vehicle stability.",
    "Verify wheel alignment and tyre compatibility.",
    "Obtain required technical test reports."] },
  { title: "Lighting, Mirrors, Glass and Visibility", items: [
    "Headlamps with compliant high-beam and low-beam functions.",
    "Turn indicators and hazard warning lights.",
    "Tail lamps and brake lamps.",
    "Required reflectors and registration-plate illumination.",
    "Compliant mirrors and required fields of vision.",
    "Approved or compliant windscreen and glazing, as applicable.",
    "Windscreen wipers and washers.",
    "Verify applicable lighting, glazing, and installation standards."] },
  { title: "EV Powertrain and High-Voltage Safety", items: [
    "Verify traction-motor and inverter installation.",
    "Assess battery-pack mounting and mechanical protection.",
    "Provide suitable high-voltage insulation and electric-shock protection.",
    "Evaluate battery thermal management and thermal-runaway risks.",
    "Verify charging-system compatibility and electrical protection.",
    "Assess high-voltage cabling, connectors, and isolation.",
    "Review electromagnetic compatibility (EMC) requirements.",
    "Identify applicable traction-battery and electric-powertrain tests.",
    "Maintain battery and powertrain specifications and test documentation."] },
  { title: "Occupant Protection and Mandatory Road Equipment", items: [
    "Verify applicable seat requirements.",
    "Check seat belts and anchorage points.",
    "Assess head restraints and other required occupant-protection equipment.",
    "Verify tyres and wheels meet applicable load and speed requirements.",
    "Check horn and speedometer requirements.",
    "Verify required driver controls and warning indicators.",
    "Check other mandatory equipment for the selected vehicle category."] },
  { title: "Emissions, Noise and Technical Testing", items: [
    "Determine which emissions requirements apply to the final vehicle configuration.",
    "Identify applicable noise limits.",
    "Determine required braking and lighting tests.",
    "Identify electrical-safety and EV-specific testing requirements.",
    "Determine whether additional structural or performance tests are required.",
    "Obtain required test reports and compliance certificates.",
    "Confirm requirements with the authorised testing agency."] },
  { title: "Inspection, Registration and Insurance", items: [
    "Confirm the applicable approval and registration pathway.",
    "Collect ownership and donor-vehicle documents, where applicable.",
    "Compile component invoices and construction records.",
    "Obtain required technical reports and certificates.",
    "Complete the prescribed inspection process.",
    "Submit the registration application and supporting documents to the RTO.",
    "Complete applicable registration fees and vehicle-tax formalities.",
    "Obtain registration approval and the authorised number plate.",
    "Arrange valid motor insurance before public-road use.",
    "Complete any additional statutory requirements applicable to the vehicle."] },
  { title: "Final Approval Gate", gate: true, items: [
    "Legal registrability confirmed with the relevant authority.",
    "Required technical approvals and certificates obtained.",
    "Mandatory safety requirements verified.",
    "Inspection completed successfully.",
    "Registration legally approved.",
    "Insurance arranged.",
    "Vehicle authorised for public-road use."] },
];

const notes = [
  "A Lamborghini-inspired body replica is not automatically eligible for road registration.",
  "Modifying a registered vehicle or converting an internal-combustion vehicle to electric power may trigger specific legal restrictions and approval requirements.",
  "Installing individually compliant components does not automatically certify the complete vehicle.",
  "Requirements must be verified against the applicable Motor Vehicles Act, Central Motor Vehicles Rules, and current MoRTH notifications.",
  "Consult the relevant RTO and an authorised automotive testing agency before major construction expenditure.",
  "Treat this checklist as a research and project-planning document, not as confirmation that a particular vehicle is legally approved.",
];

export default function StreetLegal() {
  return (
    <>
      <Link href="/work-to-do" className="wtd-back">← Work to do</Link>
      <p className="wtd-eyebrow">Work to do / 03</p>
      <h1>Making It Street Legal</h1>
      <p className="wtd-lead">Project: TorqueLab. Identify the legal, regulatory, technical, safety, inspection and registration requirements for making a custom Lamborghini-inspired replica or electric vehicle road legal in India.</p>
      <Checklist sections={sections} />
      <div className="wtd-warn">
        <h2>Important Compliance Notes</h2>
        <ol>{notes.map((n, i) => <li key={i}>{n}</li>)}</ol>
      </div>
    </>
  );
}
