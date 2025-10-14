import content from "@/data/content.json";
import { SkillStars } from "@/components/SkillStars";
import type { Content } from "@/types/content";

const data = content as Content;

export default function Skills() {
  return (
    <section>
      <h2 className="mb-4">Skills</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data.skills.map((s) => (
          <div className="col" key={s.name}>
            <div className="card h-100 border-success project-card">
              <div className="card-body">
                <h5 className="card-title">{s.name}</h5>
              </div>
              <div className="card-footer d-flex">
                <SkillStars key={s.name} name={s.name} rating={s.rating} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
