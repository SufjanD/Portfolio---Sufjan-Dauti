import React from "react";

const STARS = [
  { top: "7%",  left: "12%", size: 1.5, delay: "0s",   dur: "4.2s", cls: "bg-violet-200" },
  { top: "14%", left: "80%", size: 2,   delay: "0.9s",  dur: "5.1s", cls: "bg-cyan-200" },
  { top: "23%", left: "47%", size: 1,   delay: "1.6s",  dur: "3.8s", cls: "bg-slate-300" },
  { top: "36%", left: "90%", size: 1.5, delay: "2.3s",  dur: "4.7s", cls: "bg-emerald-200" },
  { top: "43%", left: "6%",  size: 2,   delay: "0.4s",  dur: "6.0s", cls: "bg-violet-200" },
  { top: "56%", left: "63%", size: 1,   delay: "3.2s",  dur: "3.5s", cls: "bg-cyan-200" },
  { top: "67%", left: "27%", size: 1.5, delay: "1.9s",  dur: "5.3s", cls: "bg-slate-300" },
  { top: "76%", left: "85%", size: 2,   delay: "2.7s",  dur: "4.0s", cls: "bg-violet-200" },
  { top: "88%", left: "52%", size: 1,   delay: "0.7s",  dur: "4.8s", cls: "bg-emerald-200" },
  { top: "19%", left: "35%", size: 1,   delay: "3.6s",  dur: "5.5s", cls: "bg-cyan-200" },
  { top: "61%", left: "16%", size: 1.5, delay: "1.3s",  dur: "3.9s", cls: "bg-violet-200" },
  { top: "31%", left: "71%", size: 1,   delay: "2.9s",  dur: "4.4s", cls: "bg-slate-300" },
  { top: "5%",  left: "58%", size: 1,   delay: "3.9s",  dur: "3.6s", cls: "bg-emerald-200" },
  { top: "50%", left: "41%", size: 1.5, delay: "1.7s",  dur: "4.9s", cls: "bg-violet-200" },
  { top: "92%", left: "74%", size: 1,   delay: "0.2s",  dur: "5.7s", cls: "bg-cyan-200" },
  { top: "80%", left: "8%",  size: 2,   delay: "2.0s",  dur: "4.3s", cls: "bg-violet-200" },
  { top: "11%", left: "95%", size: 1,   delay: "4.1s",  dur: "3.7s", cls: "bg-emerald-200" },
  { top: "70%", left: "44%", size: 1.5, delay: "0.6s",  dur: "5.9s", cls: "bg-cyan-200" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#020817] px-6 pb-28 pt-20 text-white md:px-12 md:pt-32"
    >
      {/* Twinkling star particles — violet / cyan / emerald / neutral */}
      {STARS.map((star, i) => (
        <span
          key={i}
          className={`animate-twinkle pointer-events-none absolute rounded-full ${star.cls}`}
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: star.delay,
            animationDuration: star.dur,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Glow orbs — violet top-left, cyan top-right, emerald bottom */}
      <div
        className="animate-float-slow pointer-events-none absolute -left-40 -top-40 h-[640px] w-[640px] rounded-full bg-gradient-to-br from-violet-700/22 via-indigo-700/10 to-transparent blur-3xl"
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-cyan-500/14 via-teal-600/7 to-transparent blur-3xl"
        style={{ animationDelay: "3s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float pointer-events-none absolute bottom-10 left-1/3 h-72 w-[400px] rounded-full bg-gradient-to-t from-emerald-600/10 via-teal-700/5 to-transparent blur-3xl"
        style={{ animationDelay: "1.5s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float-slow pointer-events-none absolute -bottom-20 right-1/4 h-60 w-60 rounded-full bg-gradient-to-tl from-violet-600/10 to-transparent blur-3xl"
        style={{ animationDelay: "5s" }}
        aria-hidden="true"
      />

      {/* Dot grid */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(200, 180, 255, 0.07) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Available badge — emerald (green = available, natural signal) */}
        <div className="mb-10 flex items-center gap-4">
          <span className="relative flex h-2.5 w-2.5 shrink-0">
            <span
              className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-emerald-400"
              aria-hidden="true"
            />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-md shadow-emerald-400/60" />
          </span>
          <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-emerald-400/70 sm:text-[11px] sm:tracking-[0.28em]">
            Available for freelance — Skopje, MK
          </p>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.5rem]">
          I build{" "}
          {/* violet shimmer — the hero word */}
          <span className="shimmer-text bg-gradient-to-r from-violet-400 via-fuchsia-200 to-violet-400 bg-clip-text text-transparent">
            honest
          </span>{" "}
          digital products from{" "}
          {/* indigo → violet depth */}
          <span className="bg-gradient-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
            zero
          </span>{" "}
          to{" "}
          {/* cyan → teal — motion, destination */}
          <span className="bg-gradient-to-r from-cyan-300 to-teal-300 bg-clip-text text-transparent">
            deployed
          </span>
          .
        </h1>

        {/* Terminal tech line — violet path, emerald cursor */}
        <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1">
          <span className="font-mono text-xs text-violet-500/40">~/dev</span>
          <span className="font-mono text-xs text-violet-500/25">›</span>
          <span className="font-mono text-xs text-slate-500">
            React · Tailwind · Node.js · Laravel · MySQL
          </span>
          <span className="animate-blink-cursor font-mono text-sm leading-none text-emerald-400/70">
            |
          </span>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          Computer Engineering student and full-stack developer based in Skopje.
          I design and build digital products and websites — from clean,
          responsive interfaces to backend logic, turning ideas into shipped
          software.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="animate-glow-pulse inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition-all duration-200 hover:from-violet-400 hover:to-indigo-400 hover:shadow-xl hover:shadow-violet-400/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020817]"
          >
            See my work
            <svg
              width="14" height="14" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-violet-700/50 bg-violet-950/30 px-5 py-3 text-sm font-medium text-violet-200 backdrop-blur-sm transition-all duration-200 hover:border-violet-400/60 hover:bg-violet-900/25 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
          >
            Start a project
          </a>
        </div>

        {/* Stats bar */}
        <dl className="mt-16 grid grid-cols-1 gap-y-8 border-t border-violet-900/30 pt-10 sm:mt-20 sm:grid-cols-3 sm:gap-x-6">
          {[
            { k: "Role",  v: "Full-stack developer" },
            { k: "Focus", v: "Digital products & websites" },
            { k: "Stack", v: "React · Node · Laravel" },
          ].map((item) => (
            <div key={item.k} className="group">
              <dt className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-500/50">
                {item.k}
              </dt>
              <dd className="mt-2 text-sm text-slate-200">{item.v}</dd>
              <div
                className="mt-2.5 h-px w-6 bg-gradient-to-r from-violet-500/50 to-transparent transition-all duration-500 group-hover:w-14 group-hover:from-violet-400/80"
                aria-hidden="true"
              />
            </div>
          ))}
        </dl>

        {/* Scroll hint */}
        <div className="mt-14 flex items-center gap-3" aria-hidden="true">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-violet-500/25">
            Scroll
          </p>
          <div className="flex flex-col gap-[3px]">
            <span className="h-px w-5 bg-violet-500/30" />
            <span className="ml-1 h-px w-4 bg-violet-500/20" />
            <span className="ml-2 h-px w-3 bg-violet-500/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
