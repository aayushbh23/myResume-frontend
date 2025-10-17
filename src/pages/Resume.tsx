import { useGetExperienceQuery } from "@/features/api/experience.api";
import { useGetEducationQuery } from "@/features/api/education.api";

function DateRange({ start, end }: { start: string; end: string }) {
  return (
    <span className="text-muted">
      {start} – {end}
    </span>
  );
}

export default function Resume() {

  const {
    data: eduData,
    isLoading: eduLoading,
    isError: eduError,
    refetch: refetchEdu,
  } = useGetEducationQuery();

  const {
    data: expData,
    isLoading: expLoading,
    isError: expError,
    refetch: refetchExp,
  } = useGetExperienceQuery();

  const loading = eduLoading || expLoading;
  const error = eduError || expError;

  if (loading) {
    return (
      <div className="container py-4 d-flex flex-column gap-4">
        <section id="education">
          <h2 className="mb-4">Education</h2>
          <ul className="list-unstyled m-0">
            {Array.from({ length: 3 }).map((_, i) => (
              <li key={i} className="mb-2 placeholder-glow">
                <strong className="placeholder col-4"></strong>{" "}
                <span className="placeholder col-3"></span>{" "}
                <span className="placeholder col-2"></span>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience">
          <h2 className="mb-4">Experience</h2>
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div className="col" key={i}>
                <div className="card h-100 border-success">
                  <div className="card-body placeholder-glow">
                    <h5 className="card-title placeholder col-6"></h5>
                    <p className="m-0 text-muted placeholder col-5"></p>
                    <div className="mt-3">
                      <p className="placeholder col-10"></p>
                      <p className="placeholder col-8"></p>
                      <p className="placeholder col-6"></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-4 d-flex flex-column gap-4">
        <div className="alert alert-danger d-flex justify-content-between align-items-center">
          <span>Failed to load resume content.</span>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-light" onClick={() => refetchEdu()}>Retry Education</button>
            <button className="btn btn-sm btn-light" onClick={() => refetchExp()}>Retry Experience</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-4">
      <section id="education">
        <h2 className="mb-4">Education</h2>
        <ul className="list-unstyled m-0">
          {eduData.map((e) => (
            <li key={e._id} className="mb-2">
              <strong>{e.school}</strong> — {e.degree} ({e.year})
            </li>
          ))}
        </ul>
      </section>

      <section id="experience">
        <h2 className="mb-4">Experience</h2>
        <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
          {expData.map((job) => (
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
