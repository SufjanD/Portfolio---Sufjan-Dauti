import React from "react";
import imgFoodOrder from "./images/Screenshot 2026-05-09 034329.png";
import imgSCPS from "./images/Screenshot 2026-05-09 034343.png";
import imgOttoman from "./images/Screenshot 2026-05-09 034401.png";

const projects = [
  {
    title: "Food Order App",
    description:
      "A dynamic food ordering web application with an interactive menu, cart system, and smooth checkout flow. Built with vanilla web technologies for fast load times and zero dependencies.",
    tags: ["HTML", "CSS", "JavaScript"],
    href: "https://github.com/SufjanD/food-order-app",
    siteHref: "https://food-order-app-three-lake.vercel.app/",
    image: imgFoodOrder,
    accent: "violet",
    linkType: "github",
  },
  {
    title: "Smart Campus Parking System",
    description:
      "A full-stack parking management system for university campuses. Features real-time spot availability, student booking, and an admin dashboard backed by a Node.js REST API and SQLite database.",
    tags: ["React", "Vite", "Tailwind", "Node.js", "Express", "SQLite"],
    href: "https://github.com/SufjanD/SCPS",
    siteHref: "https://scps-ten.vercel.app/",
    image: imgSCPS,
    accent: "cyan",
    linkType: "github",
  },
  {
    title: "Ottoman Exclusive",
    description:
      "A high-performance landing page for a physical perfume shop. Focused on premium UI/UX, fast paint times, and a refined typographic system that mirrors the in-store experience.",
    tags: ["HTML", "Tailwind CSS", "Vanilla JS", "Vite"],
    href: "https://www.ottomanexclusive.mk",
    image: imgOttoman,
    accent: "emerald",
    linkType: "website",
  },
];

const accents = {
  violet: {
    border:  "hover:border-violet-500/60",
    glowBg:  "bg-gradient-to-br from-violet-500/12 via-violet-600/5 to-transparent",
    tag:     "text-violet-300 border-violet-500/30 bg-violet-500/8",
    button:  "from-violet-500 to-indigo-500 hover:from-violet-400 hover:to-indigo-400 shadow-violet-500/20 hover:shadow-violet-400/35",
    halo:    "from-violet-500/22 to-transparent",
    number:  "text-violet-400",
    imageBg: "from-violet-950/60",
    scanClr: "rgba(200,180,255,0.55)",
  },
  cyan: {
    border:  "hover:border-cyan-500/60",
    glowBg:  "bg-gradient-to-br from-cyan-500/12 via-cyan-600/5 to-transparent",
    tag:     "text-cyan-300 border-cyan-500/30 bg-cyan-500/8",
    button:  "from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 shadow-cyan-500/20 hover:shadow-cyan-400/35",
    halo:    "from-cyan-500/22 to-transparent",
    number:  "text-cyan-400",
    imageBg: "from-cyan-950/60",
    scanClr: "rgba(165,243,252,0.55)",
  },
  emerald: {
    border:  "hover:border-emerald-500/60",
    glowBg:  "bg-gradient-to-br from-emerald-500/12 via-emerald-600/5 to-transparent",
    tag:     "text-emerald-300 border-emerald-500/30 bg-emerald-500/8",
    button:  "from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 shadow-emerald-500/20 hover:shadow-emerald-400/35",
    halo:    "from-emerald-500/22 to-transparent",
    number:  "text-emerald-400",
    imageBg: "from-emerald-950/60",
    scanClr: "rgba(167,243,208,0.55)",
  },
};

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

function ProjectCard({ project, index }) {
  const a = accents[project.accent];

  return (
    <article
      className={`shine-card group relative flex flex-col justify-between rounded-2xl border border-white/8 bg-[#0a1628]/70 p-7 backdrop-blur-sm transition-all duration-300 ${a.border} hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-0.5`}
    >
      {/* Hover glow */}
      <div
        className={`pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${a.glowBg}`}
        aria-hidden="true"
      />
      {/* Corner halo */}
      <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 overflow-hidden rounded-tr-2xl" aria-hidden="true">
        <div className={`absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br ${a.halo} blur-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
      </div>

      <div className="relative z-[1]">
        {/* Preview image */}
        <div className="relative mb-7 h-48 w-full overflow-hidden rounded-xl border border-white/8 bg-[#050d1f]">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.06]"
          />
          <div
            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${a.imageBg} via-transparent to-transparent opacity-70`}
            aria-hidden="true"
          />
          {/* Scan line on hover */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[1px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 animate-scan-line"
            aria-hidden="true"
            style={{ background: `linear-gradient(to right, transparent, ${a.scanClr}, transparent)` }}
          />
          <div className="absolute bottom-3 left-3 flex items-center gap-2">
            <span className={`font-mono text-xs tracking-widest opacity-70 ${a.number}`}>
              0{index + 1}
            </span>
            <span className="h-px w-5 bg-white/15" />
          </div>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-white/90">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors duration-200 ${a.tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-[1] mt-7 flex flex-wrap gap-2">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group/btn relative inline-flex items-center gap-2 overflow-hidden rounded-md bg-gradient-to-r px-4 py-2 text-sm font-medium text-white shadow-lg transition-all duration-200 ${a.button}`}
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-500 group-hover/btn:translate-x-full"
          />
          {project.linkType === "github" ? "View on GitHub" : "Visit Website"}
          {project.linkType === "github" ? <GitHubIcon /> : <ExternalLinkIcon />}
        </a>
        {project.siteHref && (
          <a
            href={project.siteHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            Live Preview
            <ExternalLinkIcon />
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsGrid() {
  return (
    <section
      id="work"
      className="relative bg-[#020817] px-6 py-24 text-white md:px-12"
    >
      <div
        className="animate-float pointer-events-none absolute right-0 top-1/3 h-[480px] w-[480px] rounded-full bg-gradient-to-bl from-violet-700/8 via-indigo-700/4 to-transparent blur-3xl"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-0 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-cyan-600/7 to-transparent blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-transparent" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-violet-400/70">
              Work
            </p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Shipped projects
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            Real projects — deployed, functional, and built to solve actual problems.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
