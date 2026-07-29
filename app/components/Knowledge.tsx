"use client";

import { useState } from "react";
import { knowledge } from "../lib/data";
import Reveal from "./Reveal";

export default function Knowledge() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="knowledge" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          02 — Knowledge Base
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          What I know, in depth
        </h2>
      </Reveal>

      <div className="mt-10 divide-y divide-white/5 border-y border-white/5">
        {knowledge.map((group, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={group.title} delay={i * 60}>
              <div>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3 text-lg font-medium text-white">
                    <span className="text-xl">{group.icon}</span>
                    {group.title}
                  </span>
                  <span
                    className={`text-white/40 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 1v16M1 9h16" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </span>
                </button>
                <div className={`accordion-content ${isOpen ? "open" : ""}`}>
                  <div>
                    <div className="pb-6 space-y-5">
                      {group.sections.map((section) => (
                        <div key={section.heading}>
                          <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                            {section.heading}
                          </p>
                          <ul className="mt-2 space-y-1.5">
                            {section.items.map((item) => (
                              <li
                                key={item}
                                className="text-sm leading-relaxed text-white/60"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
