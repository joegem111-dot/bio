import Link from "next/link";

export default function Nav() {
  const links = [
    { href: "#skills", label: "Skills" },
    { href: "#knowledge", label: "Knowledge" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
      <nav className="mx-auto max-w-5xl px-6 h-14 flex items-center justify-between">
        <Link href="#top" className="font-mono text-sm tracking-tight text-white/90">
          alex<span className="text-white/40">.dev</span>
        </Link>
        <ul className="flex items-center gap-6 text-sm text-white/60">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-white transition-colors duration-200">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
