"use client";

import { useRef, useState } from "react";
import { portfolioItems, PortfolioCategory } from "@/lib/data";

const filters: ("Tous" | PortfolioCategory)[] = [
  "Tous",
  "Full Stack",
  "Back End",
  "Front End",
  "Data & IA",
];

const categoryIcon: Record<PortfolioCategory, string> = {
  "Full Stack": "layers",
  "Back End": "hdd-network",
  "Front End": "display",
  "Data & IA": "cpu",
};

export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("Tous");
  const trackRef = useRef<HTMLDivElement>(null);

  const items =
    active === "Tous" ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  const scroll = (dir: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild?.clientWidth ?? 320;
    track.scrollBy({ left: dir === "next" ? cardWidth + 24 : -(cardWidth + 24), behavior: "smooth" });
  };

  return (
    <section id="portfolio" className="section">
      <div className="section-inner">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">Mes réalisations</p>
            <h2 className="section-title">Portfolio</h2>
            <p className="section-lead">
              Découvrez quelques-uns de mes projets réalisés avec passion et expertise.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => scroll("prev")}
              aria-label="Projet précédent"
              className="h-11 w-11 rounded-full border border-surface-border flex items-center justify-center text-zinc-300 hover:text-white hover:border-accent transition-colors"
            >
              <i className="bi bi-chevron-left" />
            </button>
            <button
              onClick={() => scroll("next")}
              aria-label="Projet suivant"
              className="h-11 w-11 rounded-full border border-surface-border flex items-center justify-center text-zinc-300 hover:text-white hover:border-accent transition-colors"
            >
              <i className="bi bi-chevron-right" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-10 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all border ${
                active === filter
                  ? "bg-accent border-accent text-white"
                  : "border-surface-border text-zinc-400 hover:text-white hover:border-accent"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto pb-4 -mx-6 md:-mx-10 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="card p-6 flex flex-col shrink-0 w-[85%] sm:w-[320px] snap-start"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="h-12 w-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent-light text-2xl">
                <i className={`bi bi-${categoryIcon[item.category]}`} />
              </div>
              <a
                href={item.github}
                target="_blank"
                aria-label="Voir le code sur GitHub"
                className="h-9 w-9 rounded-full border border-surface-border flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent transition-colors"
              >
                <i className="bi bi-github" />
              </a>
            </div>

            <span className="text-xs uppercase tracking-wider text-accent-light">
              {item.category}
            </span>
            <h4 className="text-lg font-semibold text-white mt-1 mb-2">{item.title}</h4>
            <p className="text-sm text-zinc-400 leading-relaxed mb-5">{item.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-surface-border">
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="text-xs rounded-full border border-surface-border px-3 py-1.5 text-zinc-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
