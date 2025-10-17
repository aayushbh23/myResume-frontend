import { useGetHomeProfileQuery } from "@/features/api/home.api";

export default function Contact() {

const { data = [], isLoading, isError, refetch } = useGetHomeProfileQuery();

  if (isLoading) {
    return (
      <section className="container py-5">
        <h2 className="mb-4">Contact</h2>
        <div className="placeholder-glow">
          <div className="list-group">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="list-group-item placeholder-glow d-flex align-items-center"
              >
                <span
                  className="placeholder col-1 me-2"
                  style={{ width: 24, height: 24 }}
                />
                <span className="placeholder col-6"></span>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="container py-5">
        <h2 className="mb-4">Contact</h2>
        <div className="alert alert-danger d-flex justify-content-between align-items-center">
          <span>Failed to load contact info.</span>
          <button className="btn btn-sm btn-light" onClick={() => refetch()}>
            Retry
          </button>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-4">Contact</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="list-group">
            <a
              className="list-group-item list-group-item-action contact-card"
              href={`mailto:${data.links.email}`}
            >
              <i className="bi bi-envelope me-2" /> {data.links.email}
            </a>
            {data.links.github && (
              <a
                className="list-group-item list-group-item-action contact-card"
                href={data.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-github me-2" /> {data.links.github}
              </a>
            )}
            {data.links.website && (
              <a
                className="list-group-item list-group-item-action contact-card"
                href={data.links.website}
                target="_blank"
                rel="noreferrer"
              >
                <i className="bi bi-globe me-2" /> {data.links.website}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
