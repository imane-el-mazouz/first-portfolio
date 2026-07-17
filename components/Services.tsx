import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="section bg-surface-raised/40">
      <div className="section-inner">
        <p className="eyebrow">What I offer</p>
        <h2 className="section-title">Services</h2>
        <p className="section-lead">
          Complete, tailored solutions in Full Stack web development, along with UX/UI design
          services for an optimal user experience.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="card p-6 hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light text-2xl mb-4">
                <i className={`bi bi-${service.icon}`} />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{service.title}</h4>
              <p className="text-sm text-zinc-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
