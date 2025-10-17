import { useGetProjectsQuery } from "@/features/api/projects.api";

export default function Projects() {

  const { data = [], isLoading, isError, refetch } = useGetProjectsQuery();

  if (isLoading) {
    return (
      <section className="container py-4">
        <h2 className="mb-4">Projects</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="col" key={i}>
              <div className="card h-100 border-success">
                <div className="placeholder-glow">
                  <div className="card-img-top" style={{ height: 180, background: "var(--bs-secondary-bg,#eee)" }} />
                  <div className="card-body">
                    <h5 className="card-title placeholder col-7"></h5>
                    <p className="card-text placeholder col-10"></p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <span className="placeholder col-8"></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container py-4">
        <div className="alert alert-danger d-flex justify-content-between align-items-center">
          <span>Failed to load projects.</span>
          <button className="btn btn-sm btn-light" onClick={() => refetch()}>Retry</button>
        </div>
      </section>
    );
  }


  return (
    <section>
      <h2 className="mb-4">Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data.map((p) => (
          <div className="col" key={p._id}>
            <div className="card h-100 border-success project-card">
              {p.projectURL && (
                <a
                  href={p.projectURL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none text-reset"
                >
                  <img
                    className="card-img-top project-image"
                    src={p.imageURL ?? "/placeholder.png"}
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text text-muted">{p.description}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <strong className="text-success">{p.tech.join(" · ")}</strong>
                  </div>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
