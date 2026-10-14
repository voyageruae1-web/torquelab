import Link from "next/link";

const cards = [
  { href: "/work-to-do/learning-materials/documents", n: "01", t: "Documents", d: "Save links to documents, PDFs and web pages you want to read." },
  { href: "/work-to-do/learning-materials/videos", n: "02", t: "Videos", d: "Paste YouTube links and keep them here with thumbnails." },
];

export default function LearningMaterials() {
  return (
    <>
      <Link href="/work-to-do" className="wtd-back">← Work to do</Link>
      <p className="wtd-eyebrow">Work to do / 04</p>
      <h1>Learning Materials</h1>
      <p className="wtd-lead">Your study shelf for the build: documents and videos in one place.</p>
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
