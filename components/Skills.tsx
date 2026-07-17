import { skillGroups } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <p className="eyebrow">Toolbox</p>
        <h2 className="section-title">Skills</h2>
        <p className="section-lead">
          A broad technical foundation, from Full Stack development to data engineering.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="card p-6 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent-light text-lg">
                  <i className={`bi bi-${group.icon}`} />
                </div>
                <h3 className="text-white font-semibold">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs rounded-full border border-surface-border px-3 py-1.5 text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
