import content from "@/data/content.json";
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
      <section id="education">
        <h2 className="mb-4">Education</h2>
        <ul className="list-unstyled m-0">
          {data.education.map((e) => (
            <li key={e._id} className="mb-2">
              <strong>{e.school}</strong> — {e.degree} ({e.year})
            </li>
          ))}
        </ul>
      </section>

      <section id="experience">
        <h2 className="mb-4">Experience</h2>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
          {data.experience.map((job) => (
            <div className="col" key={job._id}>
              <div className="card h-100 border-success project-card">
                {job.companyURL && (
                  <a
                    href={job.companyURL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-reset"
                  >
                    <div className="card-body d-flex justify-content-between align-items-start">
                      <div>
                        {" "}
                        <h5 className="card-title">{job.role}</h5>
                        <p className="m-0 text-muted">{job.company}</p>
                      </div>
                      <DateRange start={job.start} end={job.end} />
                    </div>
                    <div className="card-footer d-flex">
                      <ul className="mt-3 mb-0">
                        {job.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
