import content from "@/data/content.json";
import type { Content } from "@/types/content";

const data = content as Content;

export default function Projects() {
  return (
    <section>
      <h2 className="mb-4">Projects</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data.projects.map((p) => (
          <div className="col" key={p.name}>
                <div className="card h-100 border-success">
                        <img className="card-img-top project-image"
                             src={p.imageURL ?? "/placeholder.png"}
                             alt={p.name} />
                        <div className="card-body">
                            <h5 className="card-title">{p.name}</h5>
                            <p className="card-text text-muted">{p.description}</p>
                        </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <strong className="text-success">{p.tech.join(" · ")}</strong>
                        {p.projectURL && <a href={p.projectURL} target="_blank" className="btn btn-sm btn-outline-success" role="button">Code</a>}
                    </div>
                </div>
            </div>
        ))}
      </div>
    </section>
  );
}


