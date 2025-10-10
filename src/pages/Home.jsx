import content from "../data/content.json";

export default function Home() {
  return (
    <section className="text-center">
      <img
        className="rounded-circle mb-3"
        src="/profile.jpg"
        alt={content.name}
        width="120"
        height="120"
      />
      <h1 className="fw-bold">{content.name}</h1>
      <p className="text-muted">{content.title} • {content.location}</p>
      <p className="lead mx-auto" style={{ maxWidth: 720 }}>{content.summary}</p>
      <div className="d-flex gap-2 justify-content-center mt-3">
        <a className="btn btn-primary" href={`mailto:${content.links.email}`}>Email</a>
        <a className="btn btn-outline-secondary" href={content.links.github} target="_blank" rel="noreferrer">GitHub</a>
        <a className="btn btn-outline-secondary" href={content.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
