export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-sky-500/5 blur-[100px]" />
      </div>

      <div className="relative fade-up">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          Backend Developer
        </p>
        <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
          Alex
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/50 sm:text-lg">
          Python · FastAPI · PostgreSQL
          <br />
          Building robust APIs and reliable backend architectures.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm text-white/90 backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/10"
          >
            View work
          </a>
          <a
            href="#contact"
            className="rounded-full px-6 py-2.5 text-sm text-white/50 transition-colors duration-200 hover:text-white"
          >
            Contact
          </a>
        </div>
      </div>

      <a
        href="#skills"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 transition-colors hover:text-white/60"
        aria-label="Scroll down"
      >
        <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
          <rect x="0.5" y="0.5" width="19" height="31" rx="9.5" stroke="currentColor" />
          <circle cx="10" cy="9" r="2" fill="currentColor">
            <animate
              attributeName="cy"
              values="9;20;9"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </a>
    </section>
  );
}
