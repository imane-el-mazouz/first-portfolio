"use client";

import { useState } from "react";
import { portfolioItems, PortfolioCategory } from "@/lib/data";

const filters: ("All" | PortfolioCategory)[] = [
  "All",
  "Full Stack",
  "Back End",
  "Front End",
  "Data & AI",
];

const categoryIcon: Record<PortfolioCategory, string> = {
  "Full Stack": "layers",
  "Back End": "hdd-network",
  "Front End": "display",
  "Data & AI": "cpu",
};

const PAGE_SIZE = 6;

export default function Portfolio() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const [page, setPage] = useState(1);

  const items =
    active === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === active);

  const totalPages = Math.max(1, Math.ceil(items.length / PAGE_SIZE));
  const pageItems = items.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleFilter = (filter: (typeof filters)[number]) => {
    setActive(filter);
    setPage(1);
  };

  return (
    <section id="portfolio" className="section">
      <div className="section-inner">
        <div>
          <p className="eyebrow">My work</p>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-lead">
            Discover some of the projects I built with passion and expertise.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mt-10 mb-10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilter(filter)}
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageItems.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-2xl border border-surface-border bg-surface-raised/60 p-6 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10"
            >
              <div className="flex h-32 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 mb-5 text-4xl text-accent-light">
                <i className={`bi bi-${categoryIcon[item.category]}`} />
              </div>

              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="text-xs uppercase tracking-wider text-accent-light">
                  {item.category}
                </span>
                <a
                  href={item.github}
                  target="_blank"
                  aria-label="View code on GitHub"
                  className="h-9 w-9 shrink-0 rounded-full border border-surface-border flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent transition-colors"
                >
                  <i className="bi bi-github" />
                </a>
              </div>

              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
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

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-12">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              aria-label="Previous page"
              className="h-10 w-10 rounded-full border border-surface-border flex items-center justify-center text-zinc-300 hover:text-white hover:border-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <i className="bi bi-chevron-left" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`h-10 w-10 rounded-full text-sm font-medium transition-all border ${
                  page === p
                    ? "bg-accent border-accent text-white"
                    : "border-surface-border text-zinc-400 hover:text-white hover:border-accent"
                }`}
              >
                {p}
              </button>
            ))}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              aria-label="Next page"
              className="h-10 w-10 rounded-full border border-surface-border flex items-center justify-center text-zinc-300 hover:text-white hover:border-accent transition-colors disabled:opacity-30 disabled:pointer-events-none"
            >
              <i className="bi bi-chevron-right" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
