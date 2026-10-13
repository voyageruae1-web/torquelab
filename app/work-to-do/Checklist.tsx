"use client";
import { useState } from "react";

export type Section = { title: string; items: string[]; gate?: boolean };

export default function Checklist({ sections }: { sections: Section[] }) {
  const [done, setDone] = useState<Record<string, boolean>>({});
  const total = sections.reduce((n, s) => n + s.items.length, 0);
  const count = Object.values(done).filter(Boolean).length;
  const pct = total ? Math.round((count / total) * 100) : 0;

  return (
    <>
      <div className="wtd-progress">
        <strong>{count}/{total}</strong>
        <div className="wtd-bartrack"><div className="wtd-barfill" style={{ width: `${pct}%` }} /></div>
        <span>{pct}%</span>
      </div>
      {sections.map((s, si) => (
        <section key={si} className={`wtd-sec${s.gate ? " gate" : ""}`}>
          <h2>
            <span>{s.gate ? "GATE" : String(si + 1).padStart(2, "0")}</span>
            {s.title}
          </h2>
          {s.items.map((item, ii) => {
            const key = `${si}-${ii}`;
            return (
              <label key={key}>
                <input
                  type="checkbox"
                  checked={!!done[key]}
                  onChange={(e) => setDone((d) => ({ ...d, [key]: e.target.checked }))}
                />
                <span>{item}</span>
              </label>
            );
          })}
        </section>
      ))}
    </>
  );
}
