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

      <section id="education">
      <h2 className="mb-4">Education</h2>
        <ul className="list-unstyled m-0">
          {data.education.map((e) => (
            <li key={e.school} className="mb-2">
              <strong>{e.school}</strong> — {e.degree} ({e.year})
            </li>
          ))}
        </ul>
      </section>

      <section id="experience">
      <h2 className="mb-4">Experience</h2>
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
      </section>

    </div>
  );
}
