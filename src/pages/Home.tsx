import content from "@/data/content.json";
import type { Content } from "@/types/content";

const data = content as Content;

export default function Home() {
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
