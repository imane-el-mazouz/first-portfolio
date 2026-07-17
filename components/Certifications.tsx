import { certificates } from "@/lib/data";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="section-inner">
        <p className="eyebrow">Recognitions</p>
        <h2 className="section-title">Certifications</h2>
        <p className="section-lead">
          Certifications that complement my technical and language background.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certificates.map((cert) => (
            <div
              key={cert.title}
              className="card p-6 text-center flex flex-col items-center hover:border-accent/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light text-2xl mb-4">
                <i className={`bi bi-${cert.icon}`} />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">{cert.title}</h3>
              <p className="text-xs text-zinc-500">{cert.issuer}</p>
              {cert.year && <p className="text-xs text-accent-light mt-2">{cert.year}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
