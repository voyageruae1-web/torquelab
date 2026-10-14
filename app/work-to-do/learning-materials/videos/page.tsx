import Link from "next/link";
import VideoSaver from "../VideoSaver";

export default function VideosPage() {
  return (
    <>
      <Link href="/work-to-do/learning-materials" className="wtd-back">← Learning Materials</Link>
      <p className="wtd-eyebrow">Learning Materials / 02</p>
      <h1>Videos</h1>
      <p className="wtd-lead">Paste a YouTube link and press Save. The video appears below with its thumbnail. Saved links stay in this browser on this device.</p>
      <VideoSaver />
    </>
  );
}
