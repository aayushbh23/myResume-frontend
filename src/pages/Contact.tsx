import content from "@/data/content.json";
import Section from "@/components/common/Section";
import type { Content } from "@/types/content";

const data = content as Content;

export default function Contact() {
  return (
    <Section title="Contact" subtitle="Say hello or request my résumé PDF">
      <div className="row g-4">
        <div className="col-md-6">
          <div className="list-group">
            <a className="list-group-item list-group-item-action" href={`mailto:${data.links.email}`}>
              <i className="bi bi-envelope me-2" /> {data.links.email}
            </a>
            {data.links.github && (
              <a className="list-group-item list-group-item-action" href={data.links.github} target="_blank" rel="noreferrer">
                <i className="bi bi-github me-2" /> GitHub
              </a>
            )}
            {data.links.linkedin && (
              <a className="list-group-item list-group-item-action" href={data.links.linkedin} target="_blank" rel="noreferrer">
                <i className="bi bi-linkedin me-2" /> LinkedIn
              </a>
            )}
            {data.links.website && (
              <a className="list-group-item list-group-item-action" href={data.links.website} target="_blank" rel="noreferrer">
                <i className="bi bi-globe me-2" /> Website
              </a>
            )}
          </div>
        </div>
        <div className="col-md-6">
          <form className="vstack gap-3" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="form-label">Name</label>
              <input id="name" className="form-control" placeholder="Your name" required />
            </div>
            <div>
              <label htmlFor="email" className="form-label">Email</label>
              <input id="email" type="email" className="form-control" placeholder="you@example.com" required />
            </div>
            <div>
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-control" rows={4} placeholder="How can I help?" required />
            </div>
            <button className="btn btn-primary" type="submit">Send</button>
          </form>
        </div>
      </div>
    </Section>
  );
}
