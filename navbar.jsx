import React, { useState, useEffect } from "react";

const links = [
  { label: "Work",    href: "#work" },
  { label: "Skills",  href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      setScrolled(scrollTop > 40);
      const scrollHeight = el.scrollHeight - el.clientHeight;
      setProgress(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-violet-900/50 bg-[#020817]/96 shadow-lg shadow-violet-950/30"
          : "border-violet-900/30 bg-[#020817]/85"
      } backdrop-blur-md`}
    >
      {/* Scroll progress bar: violet → cyan → emerald */}
      <div className="absolute inset-x-0 top-0 h-[2px] overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-emerald-400 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
          aria-hidden="true"
        />
      </div>

      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
        <a
          href="#home"
          className="group inline-flex items-center gap-3"
          aria-label="Sufjan Dauti — home"
        >
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-violet-500/40 bg-gradient-to-br from-violet-900 to-[#0a1628] text-[11px] font-bold text-violet-300 shadow-sm shadow-violet-500/20 transition-all duration-300 group-hover:border-violet-400/70 group-hover:shadow-md group-hover:shadow-violet-400/30">
            SD
          </div>
          <span className="text-sm font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-violet-100">
            Sufjan Dauti
          </span>
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm text-slate-400 transition-colors duration-200 hover:text-violet-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-violet-400 after:to-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-violet-500/40 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300 transition-all duration-200 hover:border-violet-400/70 hover:bg-violet-500/20 hover:text-violet-100 hover:shadow-sm hover:shadow-violet-500/20"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full"
              />
              Message me
              <svg
                width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-violet-900/60 text-slate-300 transition-colors hover:border-violet-500/40 hover:text-violet-300 sm:hidden"
        >
          <svg
            width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-violet-900/30 sm:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-slate-300 transition-colors hover:bg-violet-900/20 hover:text-violet-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
