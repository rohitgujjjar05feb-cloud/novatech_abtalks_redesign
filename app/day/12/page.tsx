 "use client";

import { useState } from "react";

export default function ChallengeDay() {
  const [checks, setChecks] = useState([false, false, false, false]);
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const toggle = (i: number) => setChecks(c => c.map((v, n) => n === i ? !v : v));

  return (
    <main className="min-h-screen bg-[#07060b] text-zinc-100">
      <header className="sticky top-0 z-30 border-b border-white/6 bg-[#07060b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-5 py-4">
          <a href="/dashboard" className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-white">← Dashboard</a>
          <span className="font-mono text-[10px] font-bold tracking-[.15em] text-violet-400">DAY_12 / 60</span>
          <span className="rounded-full border border-violet-400/15 bg-violet-500/10 px-2 py-1 text-[9px] font-bold text-violet-300">20%</span>
        </div>
      </header>
          <div className="glass mb-5 rounded-[28px] p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[.18em] text-violet-400">
            Today's progress
          </p>
          <h2 className="mt-2 text-xl font-black">
            Day 12 of 60
          </h2>
        </div>
        <div className="text-right">
          <p className="text-2xl font-black text-violet-300">12🔥</p>
          <p className="text-[10px] text-zinc-500">Current streak</p>
        </div>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/5">
        <div className="h-full w-[20%] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-400" />
      </div>

      <div className="mt-3 flex justify-between text-[10px] text-zinc-500">
        <span>12 completed</span>
        <span>48 remaining</span>
      </div>
    </div>
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-7">
        <div className="mb-5">
          <p className="font-mono text-[9px] uppercase tracking-[.2em] text-violet-400">Daily build protocol</p>
          <h1 className="mt-2 text-3xl font-black tracking-[-.04em] sm:text-4xl">Build a URL Shortener.</h1>
          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">Take a long URL, create a short alias, and redirect the alias back to the original URL.</p>
        </div>

        <div className="glass rounded-[28px] p-5">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/6 bg-white/[.025] p-3"><p className="text-[9px] text-zinc-600">TIME</p><p className="mt-1 text-xs font-bold">45–60 min</p></div>
            <div className="rounded-2xl border border-white/6 bg-white/[.025] p-3"><p className="text-[9px] text-zinc-600">LEVEL</p><p className="mt-1 text-xs font-bold">Intermediate</p></div>
            <div className="rounded-2xl border border-white/6 bg-white/[.025] p-3"><p className="text-[9px] text-zinc-600">OUTPUT</p><p className="mt-1 text-xs font-bold">Working web app</p></div>
          </div>
        </div>

        <section className="mt-3 grid gap-3 md:grid-cols-2">
          <article className="glass rounded-[28px] p-5">
            <p className="text-[9px] font-bold uppercase tracking-[.18em] text-violet-400">What to build</p>
            <ul className="mt-4 space-y-3 text-xs leading-5 text-zinc-400">
              <li className="flex gap-2"><span className="text-violet-400">01</span>Create an input for a long URL.</li>
              <li className="flex gap-2"><span className="text-violet-400">02</span>Generate a short, unique code.</li>
              <li className="flex gap-2"><span className="text-violet-400">03</span>Show the short URL after creation.</li>
              <li className="flex gap-2"><span className="text-violet-400">04</span>Make the short URL redirect correctly.</li>
            </ul>
          </article>
          <article className="glass rounded-[28px] p-5">
            <p className="text-[9px] font-bold uppercase tracking-[.18em] text-violet-400">Learning objective</p>
            <h2 className="mt-3 text-base font-bold">Understand a complete request → response flow.</h2>
            <p className="mt-2 text-xs leading-6 text-zinc-500">Practice form handling, API design, unique IDs, persistence, and redirects without overbuilding the product.</p>
          </article>
        </section>

        <section className="glass mt-3 rounded-[28px] p-5">
          <div className="flex items-center justify-between">
            <div><p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">Build checklist</p><h2 className="mt-1 text-sm font-bold">Ship the essentials first.</h2></div>
            <span className="font-mono text-[10px] text-violet-300">{checks.filter(Boolean).length}/4</span>
          </div>
          <div className="mt-4 space-y-2">
            {["Create URL input + validation","Generate and store short code","Implement redirect route","Test the complete user flow"].map((item, i) => (
              <button key={item} onClick={() => toggle(i)} className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${checks[i] ? "border-violet-400/20 bg-violet-500/[.08]" : "border-white/6 bg-white/[.02]"}`}>
                <span className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border text-xs ${checks[i] ? "border-violet-400/30 bg-violet-500 text-white" : "border-white/10 text-zinc-700"}`}>{checks[i] ? "✓" : i + 1}</span>
                <span className={`text-xs ${checks[i] ? "text-white line-through decoration-violet-400/60" : "text-zinc-400"}`}>{item}</span>
              </button>
            ))}
          </div>
        </section>

        <section className="glass mt-3 rounded-[28px] p-5">
          <div className="mb-5">
            <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">Proof of work</p>
            <h2 className="mt-1 text-sm font-bold">Show that you shipped it.</h2>
            <p className="mt-2 text-[10px] leading-5 text-zinc-600">Paste the exact links you want attached to today&apos;s submission.</p>
          </div>

          <label className="block text-[10px] font-bold text-zinc-400">GitHub repository / commit</label>
          <input value={github} onChange={e => setGithub(e.target.value)} placeholder="https://github.com/you/project/commit/..." className="mt-2 w-full rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-xs text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40" />

          <label className="mt-4 block text-[10px] font-bold text-zinc-400">LinkedIn post</label>
          <input value={linkedin} onChange={e => setLinkedin(e.target.value)} placeholder="https://linkedin.com/posts/..." className="mt-2 w-full rounded-2xl border border-white/8 bg-black/20 px-4 py-3 text-xs text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40" />

          <button
            onClick={() => setSubmitted(true)}
            disabled={checks.filter(Boolean).length < 4 || !github || !linkedin}
            className="mt-5 w-full rounded-2xl bg-violet-500 px-5 py-4 text-xs font-bold text-white shadow-[0_0_30px_rgba(139,92,246,.2)] transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:bg-white/5 disabled:text-zinc-700"
          >
            {submitted ? "✓ Day 12 submitted" : "Submit proof of work →"}
          </button>
          {submitted && <p className="mt-3 text-center text-[10px] text-emerald-300">Nice. Your progress signal has been recorded for Day 12.</p>}
        </section>
            <section className="glass mt-3 rounded-[28px] p-5">
      <div className="flex items-center gap-3">
        <span className="text-2xl">🏆</span>
        <div>
          <p className="text-[9px] font-bold uppercase tracking-[.18em] text-violet-400">
            Completion reward
          </p>
          <h2 className="mt-1 text-sm font-bold">
            Day 12 milestone unlocked
          </h2>
        </div>
      </div>

      <p className="mt-3 text-xs leading-6 text-zinc-500">
        Complete today's challenge and unlock the next milestone. Every finished
        day adds visible proof to your portfolio and strengthens your consistency
        streak.
      </p>

      <div className="mt-5 grid grid-cols-3 gap-2">
        <div className="rounded-2xl border border-white/6 bg-white/[.03] p-3 text-center">
          <p className="text-lg font-black text-violet-300">+1</p>
          <p className="text-[9px] text-zinc-600">Day kept</p>
        </div>
        <div className="rounded-2xl border border-white/6 bg-white/[.03] p-3 text-center">
          <p className="text-lg font-black text-violet-300">+1</p>
          <p className="text-[9px] text-zinc-600">Proof logged</p>
        </div>
        <div className="rounded-2xl border border-white/6 bg-white/[.03] p-3 text-center">
          <p className="text-lg font-black text-violet-300">13</p>
          <p className="text-[9px] text-zinc-600">Next day</p>
        </div>
      </div>
    </section>

        <div className="mt-4 flex items-center justify-between text-[9px] text-zinc-700">
          <span>ABT / BUILD_PROTOCOL / 12</span>
          <span>Next: Day 13 →</span>
        </div>
      </section>
    </main>
  );
}