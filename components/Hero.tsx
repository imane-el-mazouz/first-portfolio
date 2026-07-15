"use client";

import { useEffect, useState } from "react";
import { contactInfo } from "@/lib/data";

const words = ["Data Engineer Junior", "Développeuse Full Stack"];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    const speed = deleting ? 35 : 60;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, display.length + 1);
        setDisplay(next);
        if (next === current) setTimeout(() => setDeleting(true), 1400);
      } else {
        const next = current.slice(0, display.length - 1);
        setDisplay(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-accent/25 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-accent-dark/30 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="text-center max-w-3xl">
        <p className="eyebrow mb-6">Bienvenue sur mon portfolio</p>
        <h1 className="text-4xl md:text-6xl font-display font-bold text-white leading-tight">
          EL MAZOUZ Imane
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-zinc-400 h-8">
          Je suis <span className="text-accent-light font-medium">{display}</span>
          <span className="animate-pulse">|</span>
        </p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#contact" className="btn-accent">
            Me contacter <i className="bi bi-arrow-right" />
          </a>
          <a href="#portfolio" className="btn-outline">
            Voir mes projets
          </a>
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href={contactInfo.github}
            target="_blank"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-white text-xl transition-colors"
          >
            <i className="bi bi-github" />
          </a>
          <a
            href={contactInfo.linkedin}
            target="_blank"
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-white text-xl transition-colors"
          >
            <i className="bi bi-linkedin" />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <i className="bi bi-chevron-down text-2xl" />
      </a>
    </section>
  );
}
