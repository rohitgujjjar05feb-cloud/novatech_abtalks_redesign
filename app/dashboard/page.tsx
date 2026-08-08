 "use client";

import { useState } from "react";

const week = [
  { d: "M", n: "03", done: true }, { d: "T", n: "04", done: true },
  { d: "W", n: "05", done: true }, { d: "T", n: "06", done: true },
  { d: "F", n: "07", done: true }, { d: "S", n: "08", done: true },
  { d: "S", n: "09", done: false, today: true },
];

const achievements = [
  { icon: "🔥", title: "7 Day Streak", sub: "7 days kept", unlocked: true },
  { icon: "⚡", title: "First Ship", sub: "First build published", unlocked: true },
  { icon: "◈", title: "Halfway", sub: "30 days completed", unlocked: false },
];

export default function Dashboard() {
  const [menu, setMenu] = useState(false);

  return (
    <main className="min-h-screen bg-[#07060b] text-zinc-100">
      <header className="sticky top-0 z-30 border-b border-white/6 bg-[#07060b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <a href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-500/15 ring-1 ring-violet-400/25">
              <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,.8)]" />
            </span>
            <span className="text-sm font-bold">AB<span className="text-violet-400">Talks</span></span>
          </a>
          <div className="hidden items-center gap-5 md:flex">
            <a href="/dashboard" className="text-xs font-semibold text-white">Dashboard</a>
            <a href="/day/12" className="text-xs text-zinc-500 hover:text-white">Challenge</a>
            <button className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[10px] font-semibold text-zinc-300">S</button>
          </div>
          <button onClick={() => setMenu(!menu)} className="rounded-xl border border-white/10 px-3 py-2 text-xs md:hidden">
            {menu ? "×" : "•••"}
          </button>
        </div>
        {menu && (
          <div className="mx-5 mb-3 rounded-2xl border border-white/8 bg-[#100d17] p-2 md:hidden">
            <a href="/dashboard" className="block rounded-xl px-3 py-3 text-xs font-semibold">Dashboard</a>
            <a href="/day/12" className="block rounded-xl px-3 py-3 text-xs text-zinc-400">Challenge Day 12</a>
          </div>
        )}
      </header>

      <section className="mx-auto max-w-5xl px-5 pb-28 pt-7">
        <div className="mb-7 flex items-end justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[.2em] text-violet-400">Student / Dashboard</p>
            <h1 className="mt-2 text-2xl font-black tracking-tight">
  Good evening, Team Novatech.
            </h1>
            <p className="mt-1 text-xs text-zinc-500">One more build. Keep the signal alive.</p>
          </div>
          <div className="hidden rounded-2xl border border-emerald-400/15 bg-emerald-400/5 px-3 py-2 text-right sm:block">
            <p className="text-[9px] font-bold text-emerald-300">STATUS</p>
            <p className="text-xs font-bold">ON TRACK</p>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[1.1fr_.9fr]">
          <article className="glass glow relative overflow-hidden rounded-[28px] p-5">
            <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-violet-600/20 blur-3xl" />
            <div className="relative flex items-start justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">Current streak</p>
                <p className="mt-2 text-5xl font-black tracking-[-.06em]">12<span className="ml-1 text-lg text-zinc-600">days</span></p>
              </div>
              <span className="text-3xl">🔥</span>
            </div>
            <div className="relative mt-6 flex items-center gap-1.5">
              {Array.from({length: 12}).map((_, i) => (
                <span key={i} className="h-1.5 flex-1 rounded-full bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,.3)]" />
              ))}
            </div>
            <div className="relative mt-3 flex justify-between text-[9px] text-zinc-600">
              <span>DAY 01</span><span>DAY 12</span>
            </div>
          </article>

          <article className="glass rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">Challenge progress</p>
              <span className="font-mono text-xs font-bold text-violet-300">20%</span>
            </div>
            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/5">
              <div className="h-full w-[20%] rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-400 shadow-[0_0_18px_rgba(139,92,246,.45)]" />
            </div>
            <div className="mt-3 flex justify-between text-[10px] text-zinc-600">
              <span>12 completed</span><span>48 remaining</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-xl border border-white/6 bg-white/[.025] p-2.5"><p className="text-lg font-black">12</p><p className="text-[9px] text-zinc-600">Builds</p></div>
              <div className="rounded-xl border border-white/6 bg-white/[.025] p-2.5"><p className="text-lg font-black">11</p><p className="text-[9px] text-zinc-600">Posts</p></div>
              <div className="rounded-xl border border-white/6 bg-white/[.025] p-2.5"><p className="text-lg font-black">3</p><p className="text-[9px] text-zinc-600">Badges</p></div>
            </div>
          </article>
        </div>
        <article className="mt-3 rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-violet-300">
                Streak Shield
              </p>
              <h3 className="mt-2 text-lg font-bold text-white">
                Protect your streak
              </h3>
            </div>
            <span className="rounded-full bg-violet-500/20 px-3 py-1 text-[10px] font-bold text-violet-300">
              1 available
            </span>
          </div>

          <p className="mt-3 text-xs leading-6 text-zinc-400">
            Missed yesterday? Activate your monthly Streak Shield to protect
            your current streak and continue the 60-day challenge without
            losing your momentum.
          </p>

          <button className="mt-5 w-full rounded-2xl bg-violet-500 py-3 text-xs font-bold text-white transition hover:bg-violet-400">
            Activate Shield
          </button>
        </article>

        <article className="mt-3 overflow-hidden rounded-[28px] border border-violet-400/15 bg-gradient-to-br from-violet-500/[.12] to-white/[.02] p-5 shadow-[0_20px_70px_rgba(0,0,0,.2)]">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-violet-300">Today · Day 12</p>
              <h2 className="mt-2 text-xl font-black tracking-tight">Build a URL Shortener</h2>
            </div>
            <span className="rounded-full border border-violet-400/15 bg-violet-400/10 px-2.5 py-1 text-[9px] font-bold text-violet-300">45–60 MIN</span>
          </div>
          <p className="mt-3 max-w-xl text-xs leading-6 text-zinc-500">Turn a long URL into a short, shareable link. Focus on the core flow, clean states, and a working redirect.</p>
          <div className="mt-5 flex gap-2">
            <a href="/day/12" className="rounded-xl bg-violet-500 px-4 py-3 text-xs font-bold text-white transition hover:bg-violet-400">Continue challenge →</a>
            <button className="rounded-xl border border-white/8 bg-white/[.03] px-4 py-3 text-xs font-semibold text-zinc-400">View brief</button>
          </div>
        </article>

        <section className="mt-3 grid gap-3 md:grid-cols-[1.1fr_.9fr]">
          <article className="glass rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">Weekly consistency</p>
                <h3 className="mt-1 text-sm font-bold">6 / 7 days kept</h3>
              </div>
              <span className="text-xs font-bold text-emerald-300">86%</span>
            </div>
            <div className="mt-6 grid grid-cols-7 gap-2">
              {week.map(x => (
                <div key={x.n} className="text-center">
                  <p className="mb-2 text-[9px] text-zinc-600">{x.d}</p>
                  <div className={`mx-auto grid aspect-square max-w-9 place-items-center rounded-xl border text-[9px] font-bold ${x.done ? "border-violet-400/20 bg-violet-500/80 text-white" : x.today ? "border-violet-300/50 bg-violet-500/10 text-violet-300" : "border-white/6 bg-white/[.02] text-zinc-700"}`}>{x.done ? "✓" : x.n}</div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[10px] leading-5 text-zinc-600">Missed a day? Don&apos;t restart. Your history stays intact — just complete today&apos;s build and continue.</p>
          </article>
                
          <article className="glass rounded-[28px] p-5">
            <div className="flex items-center justify-between">
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">Achievements</p>
              <span className="text-[9px] text-zinc-600">2 / 3 unlocked</span>
            </div>
            <div className="mt-4 space-y-2">
  {achievements.map((achievement) => (
    <div
      key={achievement.title}
      className={`flex items-center gap-3 rounded-2xl border p-3 ${
        achievement.unlocked
          ? "border-white/7 bg-white/[.025]"
          : "border-white/5 bg-black/10 opacity-40"
      }`}
    >
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500/10 text-lg">
        {achievement.icon}
      </span>

      <div>
        <p className="text-[11px] font-bold">{achievement.title}</p>
        <p className="text-[9px] text-zinc-600">{achievement.sub}</p>
      </div>

      {achievement.unlocked && (
        <span className="ml-auto text-[10px] text-emerald-300">✓</span>
      )}
    </div>
  ))}
  
</div>
          </article>
        </section>

        <article className="glass mt-3 rounded-[28px] p-5">
          <div className="flex items-center justify-between">
            <div><p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">Leaderboard</p><h3 className="mt-1 text-sm font-bold">Your standing</h3></div>
            <span className="font-mono text-[10px] text-violet-300">#48 / 312</span>
          </div>
          <div className="mt-4 space-y-2">
            {[["01","Rohit","38 days","99%"],["02","Nikita","34 days","96%"],["48","Shivam","12 days","88%"]].map(([rank,name,streak,score]) => (
              <div key={rank} className={`flex items-center gap-3 rounded-2xl border px-3 py-3 ${name === "Shivam" ? "border-violet-400/20 bg-violet-500/[.08]" : "border-white/5 bg-white/[.02]"}`}>
                <span className="w-6 font-mono text-[10px] text-zinc-600">#{rank}</span>
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 text-[10px] font-bold">{name[0]}</span>
                <span className="text-xs font-semibold">{name}</span>
                <span className="ml-auto text-[10px] text-zinc-500">{streak}</span>
                <span className="w-8 text-right text-[10px] font-bold text-violet-300">{score}</span>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  );
}