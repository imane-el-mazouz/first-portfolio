import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section bg-surface-raised/40">
      <div className="section-inner">
        <p className="eyebrow">Professional background</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-lead">
          An overview of my Full Stack development assignments, from design to production
          deployment.
        </p>

        <div className="relative mt-14 pl-8 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 w-px bg-surface-border" />

          <div className="space-y-10">
            {experiences.map((exp) => (
              <div key={`${exp.company}-${exp.period}`} className="relative">
                <span
                  className={`absolute -left-8 md:-left-10 top-1.5 h-3 w-3 rounded-full ring-4 ring-surface ${
                    exp.current ? "bg-accent" : "bg-zinc-600"
                  }`}
                />
                <div className="card p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.role} <span className="text-zinc-500">·</span>{" "}
                      <span className="text-accent-light">{exp.company}</span>
                    </h3>
                    {exp.current && (
                      <span className="text-xs rounded-full bg-accent/15 text-accent-light px-3 py-1">
                        Current position
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 mb-4">
                    {exp.period}
                    {exp.type ? ` · ${exp.type}` : ""}
                  </p>
                  <ul className="space-y-2">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-zinc-400">
                        <i className="bi bi-arrow-right-short text-accent-light mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-surface-border">
                      {exp.stack.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs rounded-full border border-surface-border px-3 py-1.5 text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
