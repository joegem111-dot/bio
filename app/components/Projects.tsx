import { projects } from "../lib/data";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          03 — Projects
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Selected work
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 100}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-medium text-white">{p.title}</h3>
                <span className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M6 14L14 6M14 6H7M14 6V13"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-white/50">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/40"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
