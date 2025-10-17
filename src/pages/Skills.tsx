import { useGetSkillsQuery } from "@/features/api/skills.api";
import { SkillStars } from "@/components/SkillStars";

export default function Skills() {
  const { data = [], isLoading, isError, refetch } = useGetSkillsQuery();

  if (isLoading) {
    return (
      <section className="container py-4">
        <h2 className="mb-4">Skills</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="col" key={i}>
              <div className="card h-100 border-success">
                <div className="card-body placeholder-glow">
                  <div className="d-flex align-items-center gap-3">
                    <span className="placeholder rounded" style={{ width: 36, height: 36 }} />
                    <h6 className="card-title mb-0 placeholder col-6"></h6>
                  </div>
                  <p className="card-text mt-3 placeholder col-8"></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="container py-4">
        <div className="alert alert-danger d-flex justify-content-between align-items-center">
          <span>Failed to load skills.</span>
          <button className="btn btn-sm btn-light" onClick={() => refetch()}>Retry</button>
        </div>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-4">Skills</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {data.map((s) => (
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
