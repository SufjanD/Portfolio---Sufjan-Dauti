import React, { useState } from "react";

const MAIL = "sufjan.dauti12@hotmail.com";

const channels = [
  {
    label:  "Email",
    handle: MAIL,
    href:   `mailto:${MAIL}`,
    accent: "violet",
    note:   "Best for project briefs and freelance work.",
  },
  {
    label:  "LinkedIn",
    handle: "Sufjan Dauti",
    href:   "https://mk.linkedin.com/in/sufjan-dauti-601082343",
    accent: "cyan",
    note:   "Connect with me professionally.",
  },
  {
    label:  "Facebook",
    handle: "Sufjan Dauti",
    href:   "https://www.facebook.com/people/Sufjan-Dauti/61585029566438/",
    accent: "emerald",
    note:   "Follow my work and updates.",
  },
];

const channelAccents = {
  violet: {
    label:  "text-violet-300",
    bar:    "bg-gradient-to-b from-violet-400 to-indigo-500",
    border: "hover:border-violet-500/50",
    arrow:  "text-violet-400/50 group-hover:text-violet-300",
    glow:   "hover:shadow-violet-500/8",
  },
  cyan: {
    label:  "text-cyan-300",
    bar:    "bg-gradient-to-b from-cyan-400 to-teal-500",
    border: "hover:border-cyan-500/50",
    arrow:  "text-cyan-400/50 group-hover:text-cyan-300",
    glow:   "hover:shadow-cyan-500/8",
  },
  emerald: {
    label:  "text-emerald-300",
    bar:    "bg-gradient-to-b from-emerald-400 to-teal-500",
    border: "hover:border-emerald-500/50",
    arrow:  "text-emerald-400/50 group-hover:text-emerald-300",
    glow:   "hover:shadow-emerald-500/8",
  },
};

function ChannelLink({ channel }) {
  const a = channelAccents[channel.accent];
  const isMail = channel.href.startsWith("mailto:");

  return (
    <a
      href={channel.href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className={`shine-card group flex items-center justify-between rounded-xl border border-white/8 bg-[#0a1628]/60 px-5 py-4 backdrop-blur-sm transition-all duration-200 ${a.border} hover:bg-[#0a1628]/90 hover:shadow-lg ${a.glow}`}
    >
      <div className="flex min-w-0 items-center gap-4">
        <span className={`h-6 w-0.5 shrink-0 rounded-full ${a.bar}`} aria-hidden="true" />
        <div className="min-w-0">
          <p className={`font-mono text-[11px] uppercase tracking-[0.22em] ${a.label}`}>
            {channel.label}
          </p>
          <p className="mt-1 break-all text-sm font-medium text-slate-200">{channel.handle}</p>
          <p className="mt-0.5 text-xs text-slate-500">{channel.note}</p>
        </div>
      </div>
      <svg
        width="14" height="14" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        aria-hidden="true"
        className={`shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${a.arrow}`}
      >
        <path d="M7 17L17 7M9 7h8v8" />
      </svg>
    </a>
  );
}

export default function Contact() {
  const [form, setForm]     = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body    = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${MAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  };

  const fieldClass =
    "glow-input w-full rounded-lg border border-white/10 bg-[#060414]/70 px-4 py-3 text-sm text-white placeholder-slate-600 transition-all duration-200 focus:border-violet-500/50 focus:bg-[#060414]";

  const labelClass =
    "mb-2 block font-mono text-[11px] uppercase tracking-[0.22em] text-violet-500/60";

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#020817] px-6 py-24 text-white md:px-12"
    >
      <div
        className="animate-float pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-gradient-to-bl from-violet-600/10 via-indigo-600/5 to-transparent blur-3xl"
        style={{ animationDelay: "1s" }}
        aria-hidden="true"
      />
      <div
        className="animate-float-slow pointer-events-none absolute -left-24 bottom-1/4 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-600/8 via-teal-700/4 to-transparent blur-3xl"
        style={{ animationDelay: "6s" }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <header className="mb-16">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-emerald-500 to-transparent" aria-hidden="true" />
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-emerald-400/70">
              Contact
            </p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Let's build something great
          </h2>
          <p className="mt-3 max-w-xl text-slate-400">
            Reach out about digital products, websites, or freelance engineering.
            Short, specific messages get the fastest replies.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-10">
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Direct channels
              </h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
                I'm a Computer Engineering student in Skopje building digital
                products and websites. If you have a real project in mind, the
                fastest path is email.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {channels.map((channel) => (
                <ChannelLink key={channel.label} channel={channel} />
              ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="shine-card rounded-2xl border border-white/8 bg-[#0a1628]/60 p-6 backdrop-blur-sm sm:p-8"
            noValidate
          >
            <div className="mb-7 flex items-center gap-4">
              <span className="font-mono text-xs tracking-widest text-violet-400">03</span>
              <span className="h-px w-8 bg-gradient-to-r from-violet-500 to-indigo-400" aria-hidden="true" />
              <h3 className="text-lg font-semibold tracking-tight text-white">
                Send a message
              </h3>
            </div>

            <div className="mb-5">
              <label htmlFor="name" className={labelClass}>Name</label>
              <input
                id="name" name="name" type="text" required autoComplete="name"
                value={form.name} onChange={handleChange} placeholder="Your name"
                className={fieldClass}
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className={labelClass}>Email</label>
              <input
                id="email" name="email" type="email" required autoComplete="email"
                value={form.email} onChange={handleChange} placeholder="you@domain.com"
                className={fieldClass}
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className={labelClass}>Message</label>
              <textarea
                id="message" name="message" required rows={5}
                value={form.message} onChange={handleChange}
                placeholder="What are you trying to build?"
                className={`${fieldClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/25 transition-all duration-200 hover:from-violet-400 hover:to-indigo-400 hover:shadow-xl hover:shadow-violet-400/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#020817] sm:w-auto"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -translate-x-full skew-x-[-15deg] bg-gradient-to-r from-transparent via-white/12 to-transparent transition-transform duration-500 group-hover:translate-x-full"
              />
              {status === "sent" ? "Opening your mail client" : "Send message"}
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>

            <p className="mt-4 text-xs text-slate-600">
              Submitting opens your default mail client with the message pre-filled.
              Nothing is stored on a server.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
