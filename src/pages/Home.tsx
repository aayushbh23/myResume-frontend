import content from "@/data/content.json";
import type { Content } from "@/types/content";

const data = content as Content;

export default function Home() {
  return (
    <section className="text-center">
<img src="/profile_animated.svg" alt="Animated profile" />
      {/*<img
        className="rounded-circle mb-3"
        src="/profile.jpg"
        alt={data.name}
        width="120"
        height="120"
      />*/}
      <h1 className="fw-bold">{data.name}</h1>
      <p className="text-muted">{data.title} • {data.location}</p>
      <p className="lead mx-auto" style={{ maxWidth: 720 }}>{data.summary}</p>
      <div className="d-flex gap-2 justify-content-center mt-3">
        <a className="btn btn-primary" href={`mailto:${data.links.email}`}>Email</a>
        <a className="btn btn-outline-secondary" href={data.links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn btn-outline-secondary" href={data.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
