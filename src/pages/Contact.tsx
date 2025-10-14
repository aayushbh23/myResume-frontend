import content from "@/data/content.json";
import Section from "@/components/common/Section";
import type { Content } from "@/types/content";

const data = content as Content;

export default function Contact() {
  return (
    <section>
      <h2 className="mb-4">Contact</h2>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="list-group">
            <a className="list-group-item list-group-item-action border-success project-card" href={`mailto:${data.links.email}`}>
              <i className="bi bi-envelope me-2" /> {data.links.email}
            </a>
            {data.links.github && (
              <a className="list-group-item list-group-item-action border-success project-card" href={data.links.github} target="_blank" rel="noreferrer">
                <i className="bi bi-github me-2" /> {data.links.github}
              </a>
            )}
            {data.links.website && (
              <a className="list-group-item list-group-item-action border-success project-card" href={data.links.website} target="_blank" rel="noreferrer">
                <i className="bi bi-globe me-2" /> {data.links.website}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
