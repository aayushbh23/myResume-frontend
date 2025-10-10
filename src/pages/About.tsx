import content from "@/data/content.json";
import Section from "@/components/common/Section";
import type { Content } from "@/types/content";

const data = content as Content;

export default function About() {
  return (
    <Section title="About" subtitle="Who I am and how I work">
      <div className="row g-4 align-items-center">
        <div className="col-md-3 text-center">
          <img
            className="rounded-circle img-fluid"
            src="/profile.jpg"
            alt={data.name}
            width={160}
            height={160}
          />
        </div>
        <div className="col-md-9">
          <p className="lead">{data.summary}</p>
          <ul className="list-inline m-0">
            {data.skills.map((s) => (
              <li key={s} className="list-inline-item badge text-bg-secondary me-2 mb-2">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
