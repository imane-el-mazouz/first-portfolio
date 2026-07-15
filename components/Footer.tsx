import { contactInfo, profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-surface-border pt-16 pb-8 px-6 text-center overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-2/3 bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-accent/10 blur-[100px]" />

      <div className="relative">
        <h3 className="font-display text-2xl font-semibold text-white mb-3">
          EL MAZOUZ <span className="text-accent">Imane</span>
        </h3>
        <p className="text-sm text-zinc-500 max-w-md mx-auto leading-relaxed mb-7">
          {profile.title}
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href={contactInfo.linkedin}
            target="_blank"
            aria-label="LinkedIn"
            className="h-10 w-10 rounded-full border border-surface-border flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent transition-colors"
          >
            <i className="bi bi-linkedin" />
          </a>
          <a
            href={contactInfo.github}
            target="_blank"
            aria-label="GitHub"
            className="h-10 w-10 rounded-full border border-surface-border flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent transition-colors"
          >
            <i className="bi bi-github" />
          </a>
          <a
            href={`mailto:${contactInfo.emails[0]}`}
            aria-label="Email"
            className="h-10 w-10 rounded-full border border-surface-border flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent transition-colors"
          >
            <i className="bi bi-envelope" />
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} <span className="text-zinc-400">EL MAZOUZ Imane</span> —
          Tous droits réservés
        </p>
      </div>
    </footer>
  );
}
