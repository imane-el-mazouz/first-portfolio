import Image from "next/image";
import { profile } from "@/lib/data";

const points = [
  "Travail en équipe pour atteindre des objectifs communs.",
  "Gestion efficace du temps pour respecter les échéances.",
  "Autonomie dans la gestion et l'exécution des projets.",
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <p className="eyebrow">Qui suis-je</p>
        <h2 className="section-title">À propos</h2>

        <div className="grid md:grid-cols-[minmax(0,320px)_1fr] gap-12 items-start mt-12">
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-surface-border">
            <Image
              src="/img/portfolio/dev.jpg"
              alt="Imane El Mazouz"
              fill
              className="object-cover"
              sizes="320px"
            />
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">{profile.title}</h3>
            <p className="text-zinc-400 leading-relaxed mb-6">{profile.bio}</p>

            <ul className="space-y-3 mb-8">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-zinc-300">
                  <i className="bi bi-check2-all text-accent-light mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <a href="/cv.pdf" download className="btn-accent">
              <i className="bi bi-upload" /> Télécharger mon CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
