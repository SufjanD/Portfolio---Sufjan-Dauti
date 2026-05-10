import React from "react";

const categories = [
  {
    title: "Full Stack Developer",
    label: "01",
    accent: "violet",
    tools: [
      { name: "HTML5",       proficiency: 95 },
      { name: "CSS3",        proficiency: 90 },
      { name: "TailwindCSS", proficiency: 92 },
      { name: "JavaScript",  proficiency: 85 },
      { name: "React",       proficiency: 88 },
      { name: "Node.js",     proficiency: 78 },
      { name: "MySQL",       proficiency: 76 },
      { name: "PHP",         proficiency: 73 },
      { name: "Laravel",     proficiency: 70 },
    ],
  },
  {
    title: "AI & Workflows",
    label: "02",
    accent: "emerald",
    tools: [
      { name: "Claude",          proficiency: 92 },
      { name: "Claude Code CLI", proficiency: 90 },
      { name: "Gemini",          proficiency: 80 },
      { name: "Perplexity",      proficiency: 82 },
    ],
  },
];

const accents = {
  violet: {
    label:      "text-violet-300",
    bar:        "from-violet-500 to-indigo-400",
    chipBorder: "border-violet-900/50 hover:border-violet-500/50",
    chipDot:    "bg-violet-400 group-hover:shadow-violet-400/60",
    chipText:   "hover:text-violet-200",
    progress:   "from-violet-500 to-indigo-400",
  },
  emerald: {
    label:      "text-emerald-300",
    bar:        "from-emerald-500 to-teal-400",
    chipBorder: "border-emerald-900/50 hover:border-emerald-500/50",
    chipDot:    "bg-emerald-400 group-hover:shadow-emerald-400/60",
    chipText:   "hover:text-emerald-200",
    progress:   "from-emerald-500 to-teal-400",
  },
};

function Category({ category }) {
  const a = accents[category.accent];

  return (
    <div className="relative">
      <div className="mb-8 flex items-center gap-4">
        <span className={`font-mono text-xs tracking-widest ${a.label}`}>
          {category.label}
        </span>
        <span
          className={`h-px w-8 bg-gradient-to-r ${a.bar}`}
          aria-hidden="true"
        />
        <h3 className="text-lg font-semibold tracking-tight text-white">
          {category.title}
        </h3>
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {category.tools.map((tool) => (
          <li
            key={tool.name}
            className={`group flex flex-col rounded-lg border bg-[#0a1628]/60 px-4 py-3 backdrop-blur-sm transition-all duration-200 ${a.chipBorder} hover:bg-[#0a1628]/90`}
          >
            <div className="flex items-center gap-3">
              <span
                className={`h-1.5 w-1.5 shrink-0 rounded-full opacity-50 shadow-sm transition-all duration-200 group-hover:opacity-100 group-hover:shadow ${a.chipDot}`}
                aria-hidden="true"
              />
              <span className={`text-sm tracking-tight text-slate-300 transition-colors duration-200 ${a.chipText}`}>
                {tool.name}
              </span>
            </div>
            {/* Proficiency bar */}
            <div className="mt-2.5 h-[2px] w-full overflow-hidden rounded-full bg-white/8">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${a.progress} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
                style={{ width: `${tool.proficiency}%` }}
                aria-label={`${tool.proficiency}% proficiency`}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Stack() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#020817] px-6 py-24 text-white md:px-12"
    >
      <div
        className="animate-float-slow pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-gradient-to-br from-violet-600/10 via-indigo-600/5 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute bottom-1/4 right-0 h-64 w-64 rounded-full bg-gradient-to-bl from-emerald-500/8 via-teal-600/4 to-transparent blur-3xl"
        style={{ animationDelay: "4s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-500 to-transparent" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-cyan-400/70">
              Skills
            </p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Technologies I work with
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            The tools and languages I use to build digital products and websites,
            from UI to database.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-12">
          {categories.map((category) => (
            <Category key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
