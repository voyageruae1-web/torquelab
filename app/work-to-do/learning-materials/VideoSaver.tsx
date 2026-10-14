"use client";
import { useEffect, useState } from "react";

type Video = { id: string; url: string; title: string };
const KEY = "torquelab-videos";

function getId(input: string): string | null {
  const m = input.trim().match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|shorts\/|embed\/|live\/|v\/))([A-Za-z0-9_-]{11})/);
  return m ? m[1] : null;
}

export default function VideoSaver() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setVideos(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  function persist(list: Video[]) {
    setVideos(list);
    try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {}
  }

  async function save() {
    setError("");
    const id = getId(link);
    if (!id) { setError("That does not look like a YouTube link. Please paste the full link."); return; }
    if (videos.some((v) => v.id === id)) { setError("This video is already saved."); return; }
    setBusy(true);
    let title = "YouTube video";
    try {
      const res = await fetch(`https://noembed.com/embed?url=${encodeURIComponent("https://www.youtube.com/watch?v=" + id)}`);
      const data = await res.json();
      if (data && data.title) title = data.title;
    } catch {}
    persist([{ id, url: `https://www.youtube.com/watch?v=${id}`, title }, ...videos]);
    setLink("");
    setBusy(false);
  }

  return (
    <>
      <div className="wtd-add">
        <input
          type="text"
          value={link}
          placeholder="Paste YouTube link here"
          onChange={(e) => setLink(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter") save(); }}
        />
        <button className="wtd-btn" onClick={save} disabled={busy}>{busy ? "Saving..." : "Save"}</button>
      </div>
      {error && <p className="wtd-err">{error}</p>}
      {loaded && videos.length === 0 && <p className="wtd-empty">No videos saved yet. Paste a link above to start.</p>}
      <div className="wtd-vgrid">
        {videos.map((v) => (
          <div key={v.id} className="wtd-vcard">
            <a className="wtd-thumb" href={v.url} target="_blank" rel="noopener noreferrer">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`} alt={v.title} loading="lazy" />
              <span className="wtd-play">▶</span>
            </a>
            <div className="wtd-vbody">
              <a className="wtd-vtitle" href={v.url} target="_blank" rel="noopener noreferrer">{v.title}</a>
              <button className="wtd-del" onClick={() => persist(videos.filter((x) => x.id !== v.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
