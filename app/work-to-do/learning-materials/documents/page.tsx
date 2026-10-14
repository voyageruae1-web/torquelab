import Link from "next/link";
import DocSaver from "../DocSaver";

export default function DocumentsPage() {
  return (
    <>
      <Link href="/work-to-do/learning-materials" className="wtd-back">← Learning Materials</Link>
      <p className="wtd-eyebrow">Learning Materials / 01</p>
      <h1>Documents</h1>
      <p className="wtd-lead">Paste a link to a document, PDF or web page. Add a name if you like. Saved links stay in this browser on this device.</p>
      <DocSaver />
    </>
  );
}
