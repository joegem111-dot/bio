import Reveal from "./Reveal";

const contacts = [
  { label: "Telegram", value: "@ooopev", href: "https://t.me/ooopev" },
  { label: "GitHub", value: "doaks1638-netizen", href: "https://github.com/doaks1638-netizen" },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40">
          04 — Contact
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let&apos;s connect
        </h2>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                  {c.label}
                </p>
                <p className="mt-1 text-lg text-white">{c.value}</p>
              </div>
              <span className="text-white/30 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white">
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
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
