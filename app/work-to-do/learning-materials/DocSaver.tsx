"use client";
import { useEffect, useState } from "react";

type Doc = { id: string; url: string; title: string };
const KEY = "torquelab-docs";

export default function DocSaver() {
  const [docs, setDocs] = useState<Doc[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [link, setLink] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setDocs(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  function persist(list: Doc[]) {
    setDocs(list);
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {}
  }

  function save() {
    setError("");
    let u = link.trim();
    if (!u) { setError("Please paste a link."); return; }
    if (!/^https?:\/\//i.test(u)) u = "https://" + u;
    let host = "";
    try { host = new URL(u).hostname.replace(/^www\./, ""); } catch { setError("That does not look like a valid link."); return; }
    if (docs.some((d) => d.url === u)) { setError("This link is already saved."); return; }
    persist([{ id: String(Date.now()), url: u, title: name.trim() || host }, ...docs]);
    setLink("");
    setName("");
  }

  return (
    <>
      <div className="wtd-add">
        <input type="text" value={name} placeholder="Name (optional)" onChange={(e) => setName(e.target.value)} />
        <input
          type="text"
          value={link}
          placeholder="Paste document link here"
          onChange={(e) => setLink(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") save(); }}
        />
        <button className="wtd-btn" onClick={save}>Save</button>
      </div>
      {error && <p className="wtd-err">{error}</p>}
      {loaded && docs.length === 0 && <p className="wtd-empty">No documents saved yet. Paste a link above to start.</p>}
      <div className="wtd-vgrid">
        {docs.map((d) => (
          <div key={d.id} className="wtd-vcard">
            <div className="wtd-vbody">
              <a className="wtd-vtitle" href={d.url} target="_blank" rel="noopener noreferrer">{d.title}</a>
              <span className="wtd-vmeta">{d.url}</span>
              <button className="wtd-del" onClick={() => persist(docs.filter((x) => x.id !== d.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
