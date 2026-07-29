export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="font-mono text-xs text-white/30">© {new Date().getFullYear()} Alex</p>
        <p className="font-mono text-xs text-white/30">Built with Next.js · Tailwind</p>
      </div>
    </footer>
  );
}
