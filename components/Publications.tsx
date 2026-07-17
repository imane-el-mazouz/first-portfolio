import { publications } from "@/lib/data";

export default function Publications() {
  return (
    <section className="section">
      <div className="section-inner">
        <p className="eyebrow">Insights and sharing</p>
        <h2 className="section-title">My Articles & Publications</h2>
        <p className="section-lead">
          Explore my publications to discover my ideas and contributions in the field of
          development and design.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {publications.map((pub) => (
            <a
              key={pub.title}
              href={pub.link}
              target="_blank"
              className="card p-6 flex gap-4 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="h-12 w-12 shrink-0 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light text-2xl">
                <i className={`bi bi-${pub.icon}`} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-2">{pub.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed mb-3">{pub.description}</p>
                <span className="text-sm text-accent-light inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                  View on LinkedIn <i className="bi bi-arrow-right" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
