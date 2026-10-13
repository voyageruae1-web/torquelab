import Link from "next/link";
import "./work.css";

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="wtd">
      <header className="wtd-bar">
        <Link href="/" className="wtd-logo">TORQUELAB</Link>
        <nav className="wtd-nav">
          <Link href="/">Overview</Link>
          <Link href="/work-to-do" className="on">Work to do</Link>
        </nav>
      </header>
      <main className="wtd-main">{children}</main>
    </div>
  );
}
