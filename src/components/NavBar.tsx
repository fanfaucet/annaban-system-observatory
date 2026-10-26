"use client";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#core", label: "Core Systems" },
  { href: "#stacks", label: "Operational Stacks" },
  { href: "#modules", label: "Modules" },
  { href: "#governance", label: "Governance" },
  { href: "#feed", label: "Live Feed" },
  { href: "#admin", label: "Admin" },
];

export function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-500/20 text-sky-400 font-bold text-sm">
            AO
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-tight text-white sm:text-base">
              AnnabanAI System Observatory
            </h1>
            <p className="text-[11px] text-slate-400">
              Source of truth · Conceptual architecture
            </p>
          </div>
        </div>
        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <span className="hidden rounded-full border border-violet-500/30 bg-violet-500/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-violet-300 sm:inline-flex">
            Simulated Live
          </span>
        </div>
      </div>
    </header>
  );
}
