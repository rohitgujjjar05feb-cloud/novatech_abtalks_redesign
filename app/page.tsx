 "use client";

import { useState } from "react";

const features = [
  { n: "01", title: "One task. Every day.", body: "Small, focused builds turn 60 days into a portfolio you can actually show." },
  { n: "02", title: "Proof, not promises.", body: "Log your GitHub commit and LinkedIn post. Your progress stays visible." },
  { n: "03", title: "Never lose the streak.", body: "A daily progress signal makes it easier to return tomorrow and keep momentum." },
];

const days = ["01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20"];

export default function Home() {
  const [menu, setMenu] = useState(false);

  return (
    <main className="noise relative min-h-screen overflow-hidden">
      <div className="grid-bg pointer-events-none absolute inset-x-0 top-0 h-[720px]" />

      <nav className="relative z-20 mx-auto flex max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <a href="/" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500/15 ring-1 ring-violet-400/30">
            <span className="h-3 w-3 rotate-45 rounded-[3px] bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,.8)]" />
          </span>
          <span className="text-[15px] font-bold tracking-tight">AB<span className="text-violet-400">Talks</span></span>
        </a>

        <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <a href="#how" className="transition hover:text-white">How it works</a>
          <a href="#proof" className="transition hover:text-white">Why it works</a>
          <a href="#challenge" className="transition hover:text-white">The challenge</a>
        </div>

        <button
          onClick={() => setMenu(!menu)}
          className="rounded-xl border border-white/10 bg-white/[.04] px-3 py-2 text-xs font-semibold text-zinc-200 md:hidden"
        >
          {menu ? "Close" : "Menu"}
        </button>

        <a href="#start" className="hidden rounded-xl bg-white px-4 py-2.5 text-xs font-bold text-black transition hover:bg-violet-100 md:block">
          Start challenge
        </a>
      </nav>

      {menu && (
        <div className="relative z-20 mx-5 rounded-2xl border border-white/10 bg-[#100d17]/95 p-3 backdrop-blur-xl md:hidden">
          <a className="block rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5" href="#how">How it works</a>
          <a className="block rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5" href="#proof">Why it works</a>
          <a className="block rounded-xl px-3 py-3 text-sm text-zinc-300 hover:bg-white/5" href="#challenge">The challenge</a>
        </div>
      )}

      <section className="relative mx-auto max-w-6xl px-5 pb-20 pt-14 md:px-8 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.2em] text-violet-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
            60-day build protocol
          </div>

          <h1 className="text-[42px] font-black leading-[.98] tracking-[-.055em] sm:text-6xl md:text-7xl">
            Stop learning in silence.
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-white bg-clip-text text-transparent">
              Build in public.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-[15px] leading-7 text-zinc-400 sm:text-base">
            One focused coding task every day for 60 days. Ship it. Commit it. Share it.
            Leave the challenge with a visible streak and proof of work.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a id="start" href="/dashboard" className="glow rounded-2xl bg-violet-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-violet-400">
              Start your 60-day challenge <span className="ml-2">→</span>
            </a>
            <a href="#how" className="rounded-2xl border border-white/10 bg-white/[.03] px-6 py-4 text-sm font-semibold text-zinc-200 transition hover:bg-white/[.06]">
              See how it works
            </a>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-md md:max-w-xl">
          <div className="glass glow relative overflow-hidden rounded-[28px] p-4 sm:p-5">
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="relative flex items-center justify-between border-b border-white/8 pb-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[.18em] text-zinc-500">Live challenge signal</p>
                <p className="mt-1 text-sm font-bold">Your progress, visualized.</p>
              </div>
              <span className="rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1 text-[10px] font-bold text-emerald-300">ON TRACK</span>
            </div>

            <div className="relative mt-5 flex items-end justify-between">
              <div>
                <p className="text-5xl font-black tracking-tight">12<span className="text-xl text-zinc-600">/60</span></p>
                <p className="mt-1 text-xs text-zinc-500">days completed</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-bold text-violet-300">12 day streak</p>
                <p className="text-xs text-zinc-500">Keep the chain alive</p>
              </div>
            </div>

            <div className="relative mt-5 grid grid-cols-10 gap-1.5">
              {days.map((day, i) => (
                <div key={day} className={`aspect-square rounded-md border text-[8px] font-bold grid place-items-center ${i < 12 ? "border-violet-400/20 bg-violet-500/80 text-white shadow-[0_0_12px_rgba(139,92,246,.25)]" : "border-white/6 bg-white/[.025] text-zinc-700"}`}>
                  {day}
                </div>
              ))}
            </div>

            <div className="relative mt-5 flex items-center justify-between rounded-2xl bg-black/20 px-4 py-3">
              <span className="text-xs text-zinc-400">Today&apos;s mission</span>
              <span className="text-xs font-bold text-white">Build a URL shortener →</span>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="relative mx-auto max-w-6xl border-t border-white/6 px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-400">The protocol</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Consistency becomes visible.</h2>
          <p className="mt-4 text-sm leading-6 text-zinc-500">The challenge removes the hardest part of side projects: deciding what to do next.</p>
        </div>

        <div className="mt-10 grid gap-3 md:grid-cols-3">
          {features.map((f) => (
            <article key={f.n} className="glass rounded-3xl p-5">
              <span className="font-mono text-xs text-violet-400">{f.n} //</span>
              <h3 className="mt-10 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{f.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="proof" className="relative mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-20">
        <div className="glass overflow-hidden rounded-[32px] p-6 sm:p-10">
          <div className="grid gap-10 md:grid-cols-[1.1fr_.9fr] md:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-400">Proof of work</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Your streak is more than a number.</h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-500">
                Every completed day becomes a small public signal: code shipped, lesson learned, progress shared.
                By day 60, you have a trail recruiters can understand.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {["GitHub commit", "LinkedIn post", "Daily build", "60-day proof"].map(x => (
                  <span key={x} className="rounded-full border border-white/8 bg-white/[.03] px-3 py-2 text-[11px] font-semibold text-zinc-300">{x}</span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/8 bg-black/20 p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-zinc-300">STREAK INTEGRITY</span>
                <span className="font-mono text-[10px] text-emerald-300">verified</span>
              </div>
              <div className="mt-6 space-y-3">
                {["Code committed", "Task completed", "Proof shared"].map((x, i) => (
                  <div key={x} className="flex items-center gap-3 rounded-2xl border border-white/6 bg-white/[.025] px-3 py-3">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-violet-500/15 text-xs text-violet-300">✓</span>
                    <span className="text-xs text-zinc-300">{x}</span>
                    <span className="ml-auto font-mono text-[9px] text-zinc-600">DAY_{String(i + 12).padStart(2,"0")}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="challenge" className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 text-center md:px-8 md:pb-32">
        <div className="mx-auto max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[.2em] text-violet-400">Day 01 → Day 60</p>
          <h2 className="mt-3 text-4xl font-black tracking-[-.04em] sm:text-5xl">Give your future self proof.</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-6 text-zinc-500">
            No giant syllabus. No passive watching. Just a daily build, a public signal, and one more day kept.
          </p>
          <a href="/dashboard" className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 text-sm font-bold text-black transition hover:bg-violet-100">
            Enter ABTalks <span className="ml-2">↗</span>
          </a>
        </div>
      </section>

      <footer className="border-t border-white/6 px-5 py-7 text-center text-[11px] text-zinc-600">
        ABTalks · 60 days of building in public
      </footer>
    </main>
  );
}