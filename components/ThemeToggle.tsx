"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Changer de thème"
      className="h-9 w-9 shrink-0 rounded-full border border-surface-border flex items-center justify-center text-zinc-300 hover:text-white hover:border-accent transition-colors"
    >
      <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`} />
    </button>
  );
}
