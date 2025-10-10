import content from "../data/content.json";

export default function Projects() {
  return (
    <section>
      <h2 className="mb-4">Projects</h2>
      <div className="row g-4">
        {content.projects.map((p) => (
          <div className="col-md-6" key={p.name}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.description}</p>
                <p className="small text-muted">{p.tech.join(" · ")}</p>
              </div>
              <div className="card-footer d-flex gap-2">
                {p.url && <a className="btn btn-sm btn-primary" href={p.url} target="_blank" rel="noreferrer">Live</a>}
                {p.repo && <a className="btn btn-sm btn-outline-secondary" href={p.repo} target="_blank" rel="noreferrer">Code</a>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
