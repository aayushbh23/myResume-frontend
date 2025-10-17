import { useGetHomeProfileQuery } from "@/features/api/home.api";

export default function Home() {
  const { data, isLoading, isError, refetch } = useGetHomeProfileQuery();

if (isLoading) {
    return (
      <section className="container py-5">
        <div className="placeholder-glow">
          <div className="d-flex gap-3 align-items-center">
            <span className="placeholder rounded-circle" style={{ width: 120, height: 120 }} />
            <div className="w-100">
              <h1 className="placeholder col-7"></h1>
              <p className="placeholder col-5"></p>
            </div>
          </div>
          <p className="placeholder col-8 mt-4"></p>
          <p className="placeholder col-6"></p>
        </div>
      </section>
    );
  }

  if (isError || !data) {
    return (
      <section className="container py-5">
        <div className="alert alert-danger d-flex justify-content-between align-items-center">
          <span>Failed to load profile.</span>
          <button className="btn btn-sm btn-light" onClick={() => refetch()}>Retry</button>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-4"></h2>
      <div className="row align-items-center">
        <div className="col-auto">
          <img
            className="rounded-circle"
            src={data.profileURL}
            alt={data.name}
            width="120"
            height="120"
          />
        </div>
        <div className="col">
          <h1 className="fw-bold mb-1">{data.name}</h1>
          <p className="text-muted mb-2">
            {data.title} • {data.location}
          </p>
          <p className="lead mb-3">{data.summary}</p>

          <div className="d-flex flex-wrap gap-2">
            <a className="btn btn-outline-secondary" href={`mailto:${data.links.email}`}>
              Email
            </a>
            <a
              className="btn btn-outline-secondary"
              href={data.links.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
