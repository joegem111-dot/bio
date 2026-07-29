import { skills } from "../lib/data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          01 — Stack
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Tools I work with
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 flex flex-wrap gap-3">
          {skills.map((s) => (
            <span
              key={s.label}
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/70 backdrop-blur transition-all duration-200 hover:border-white/20 hover:text-white"
            >
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              {s.label}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
