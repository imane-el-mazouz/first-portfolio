"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#formation", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/80 backdrop-blur-md border-b border-surface-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4">
        <a href="#hero" className="font-display text-xl font-semibold text-white whitespace-nowrap">
          EL MAZOUZ <span className="text-accent">Imane</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-300 hover:text-accent-light transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/cv.pdf"
            download
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-all hover:bg-accent-light"
          >
            <i className="bi bi-download" /> CV
          </a>

          <ThemeToggle />

          <button
            aria-label="Menu"
            className="md:hidden text-white text-2xl"
            onClick={() => setOpen((o) => !o)}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden bg-surface border-t border-surface-border px-6 py-4 flex flex-col gap-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-zinc-300 hover:text-accent-light transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/cv.pdf"
            download
            className="inline-flex w-fit items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white"
          >
            <i className="bi bi-download" /> Download CV
          </a>
        </nav>
      )}
    </header>
  );
}
