import content from "@/data/content.json";
import Section from "@/components/common/Section";
import type { Content } from "@/types/content";

const data = content as Content;

function DateRange({ start, end }: { start: string; end: string }) {
  return (
    <span className="text-muted">
      {start} – {end}
    </span>
  );
}

export default function Resume() {
  return (
    <div className="d-flex flex-column gap-4">
      <Section id="experience" title="Experience">
        <div className="vstack gap-4">
          {data.experience.map((job) => (
            <article key={job.company + job.role} className="border rounded-3 p-3 bg-white">
              <header className="d-flex justify-content-between align-items-start flex-column flex-md-row">
                <div>
                  <h3 className="h5 m-0">{job.role}</h3>
                  <p className="m-0 text-muted">{job.company}</p>
                </div>
                <DateRange start={job.start} end={job.end} />
              </header>
              <ul className="mt-3 mb-0">
                {job.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      <Section id="projects" title="Selected Projects">
        <div className="row g-4">
          {data.projects.map((p) => (
            <div className="col-md-6" key={p.name}>
              <div className="card h-100">
                <div className="card-body">
                  <h4 className="card-title h5">{p.name}</h4>
                  <p className="card-text">{p.description}</p>
                  <p className="small text-muted">{p.tech.join(" · ")}</p>
                </div>
                <div className="card-footer d-flex gap-2">
                  {p.url && (
                    <a className="btn btn-sm btn-primary" href={p.url} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                  {p.repo && (
                    <a className="btn btn-sm btn-outline-secondary" href={p.repo} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="education" title="Education">
        <ul className="list-unstyled m-0">
          {data.education.map((e) => (
            <li key={e.school} className="mb-2">
              <strong>{e.school}</strong> — {e.degree} ({e.year})
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}
