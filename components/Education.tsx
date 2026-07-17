import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="formation" className="section bg-surface-raised/40">
      <div className="section-inner">
        <p className="eyebrow">Academic background</p>
        <h2 className="section-title">Education</h2>
        <p className="section-lead">
          A multidisciplinary academic path, spanning engineering, computer science and data.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {education.map((item) => (
            <div
              key={item.title}
              className={`card p-6 flex flex-col hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 ${
                item.featured ? "border-accent shadow-[0_0_40px_-15px_rgba(149,0,255,0.5)]" : ""
              }`}
            >
              <h3 className="text-base font-semibold text-white leading-snug mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-zinc-500 mb-3">{item.description}</p>
              <p className="text-xs text-accent-light uppercase tracking-wide mb-4">
                {item.school} · {item.year}
              </p>
              <ul className="space-y-2 mt-auto pt-2 border-t border-surface-border">
                {item.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-zinc-400">
                    <i className="bi bi-check text-accent-light mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
