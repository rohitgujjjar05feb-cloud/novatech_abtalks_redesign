"use client";

import { useState } from "react";
import Link from "next/link";

/*
  ABTalks 60-Day Challenge
  Dashboard.

  To test different states, change ONLY these values:

  FIRST DAY
  profileComplete: true
  challengeStarted: false

  ACTIVE
  profileComplete: true
  challengeStarted: true
  completedDays: 12
  missedToday: false

  MISSED DAY
  profileComplete: true
  challengeStarted: true
  completedDays: 12
  missedToday: true

  EMPTY PROFILE
  profileComplete: false
*/

const mockUser = {
  name: "Shivam",

  profileComplete: true,

  challengeStarted: true,

  completedDays: 12,

  lastCompletedDay: 12,

  missedToday: false,

  builds: 12,

  linkedinPosts: 11,

  badges: 3,

  streakShieldAvailable: true,

  weeklyCompleted: 6,

  leaderboardRank: 48,

  leaderboardTotal: 312,
};

type UserState = "firstDay" | "active" | "missedDay" | "emptyProfile";

const week = [
  { d: "M", n: "03", done: true },
  { d: "T", n: "04", done: true },
  { d: "W", n: "05", done: true },
  { d: "T", n: "06", done: true },
  { d: "F", n: "07", done: true },
  { d: "S", n: "08", done: true },
  { d: "S", n: "09", done: false, today: true },
];

const achievements = [
  {
    icon: "🔥",
    title: "7 Day Streak",
    sub: "7 days kept",
    unlocked: true,
  },
  {
    icon: "⚡",
    title: "First Ship",
    sub: "First build published",
    unlocked: true,
  },
  {
    icon: "◈",
    title: "Halfway",
    sub: "30 days completed",
    unlocked: false,
  },
];

const leaderboard = [
  ["01", "Rohit", "38 days", "99%"],
  ["02", "Nikita", "34 days", "96%"],
  ["48", "Shivam", "12 days", "88%"],
];

export default function Dashboard() {
  const [menu, setMenu] = useState(false);
  const [shieldActive, setShieldActive] = useState(false);

  /*
    ============================================================
    AUTOMATIC USER STATE
    ============================================================
  */

  let userState: UserState;

  if (!mockUser.profileComplete) {
    userState = "emptyProfile";
  } else if (!mockUser.challengeStarted) {
    userState = "firstDay";
  } else if (mockUser.missedToday) {
    userState = "missedDay";
  } else {
    userState = "active";
  }

  const isFirstDay = userState === "firstDay";
  const isActive = userState === "active";
  const isMissedDay = userState === "missedDay";
  const isEmptyProfile = userState === "emptyProfile";

  const hasStartedChallenge = isActive || isMissedDay;

  /*
    ============================================================
    DASHBOARD DATA
    ============================================================
  */

  const completedDays =
    isFirstDay || isEmptyProfile
      ? 0
      : mockUser.completedDays;

  const remainingDays = Math.max(60 - completedDays, 0);

  const progress = Math.round((completedDays / 60) * 100);

  const currentStreak =
    isFirstDay || isEmptyProfile
      ? 0
      : isMissedDay
        ? Math.max(mockUser.completedDays - 1, 0)
        : mockUser.completedDays;

  const buildCount =
    isFirstDay || isEmptyProfile
      ? 0
      : isMissedDay
        ? Math.max(mockUser.builds - 1, 0)
        : mockUser.builds;

  const postCount =
    isFirstDay || isEmptyProfile
      ? 0
      : isMissedDay
        ? Math.max(mockUser.linkedinPosts - 1, 0)
        : mockUser.linkedinPosts;

  const badgeCount =
    isFirstDay || isEmptyProfile
      ? 0
      : mockUser.badges;

  const weeklyKept =
    isFirstDay || isEmptyProfile
      ? 0
      : isMissedDay
        ? Math.max(mockUser.weeklyCompleted - 1, 0)
        : mockUser.weeklyCompleted;

  const weeklyPercentage = Math.round((weeklyKept / 7) * 100);

  /*
    ============================================================
    HEADER / INTRO
    ============================================================
  */

  const greeting = isFirstDay
    ? "Welcome to ABTalks."
    : isEmptyProfile
      ? "Let's finish your setup."
      : "Good evening, Team Novatech.";

  const introText = isFirstDay
    ? "Your public learning journey starts with one small build."
    : isMissedDay
      ? "You missed a day. That's okay — your journey continues."
      : isEmptyProfile
        ? "A few details will make your challenge profile complete."
        : "One more build. Keep the signal alive.";

  const statusLabel = isFirstDay
    ? "READY TO START"
    : isMissedDay
      ? "NEEDS RECOVERY"
      : isEmptyProfile
        ? "PROFILE INCOMPLETE"
        : "ON TRACK";

  return (
    <main className="min-h-screen bg-[#07060b] text-white">
      {/* ======================================================
          HEADER
      ======================================================= */}

      <header className="sticky top-0 z-30 border-b border-white/[.06] bg-[#07060b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-violet-500/15 ring-1 ring-violet-400/25">
              <span className="h-2.5 w-2.5 rotate-45 rounded-[2px] bg-violet-400 shadow-[0_0_15px_rgba(167,139,250,.8)]" />
            </span>

            <span className="text-sm font-bold">
              AB<span className="text-violet-400">Talks</span>
            </span>
          </Link>

          <div className="hidden items-center gap-5 md:flex">
            <Link
              href="/dashboard"
              className="text-xs font-semibold text-white"
            >
              Dashboard
            </Link>

            <Link
              href="/day/12"
              className="text-xs text-zinc-500 transition hover:text-white"
            >
              Challenge
            </Link>

            <button
              type="button"
              className="rounded-full border border-white/10 bg-white/[.04] px-3 py-1.5 text-[10px] font-semibold text-zinc-300"
            >
              {mockUser.name.charAt(0).toUpperCase()}
            </button>
          </div>

          <button
            type="button"
            aria-label="Open navigation"
            aria-expanded={menu}
            onClick={() => setMenu((value) => !value)}
            className="rounded-xl border border-white/10 px-3 py-2 text-xs transition hover:bg-white/[.04] md:hidden"
          >
            {menu ? "×" : "•••"}
          </button>
        </div>

        {menu && (
          <div className="mx-5 mb-3 rounded-2xl border border-white/[.08] bg-[#100d17] p-2 md:hidden">
            <Link
              href="/dashboard"
              onClick={() => setMenu(false)}
              className="block rounded-xl px-3 py-3 text-xs font-semibold transition hover:bg-white/[.04]"
            >
              Dashboard
            </Link>

            <Link
              href="/day/12"
              onClick={() => setMenu(false)}
              className="block rounded-xl px-3 py-3 text-xs text-zinc-400 transition hover:bg-white/[.04] hover:text-white"
            >
              Challenge Day 12
            </Link>
          </div>
        )}
      </header>

      {/* ======================================================
          MAIN
      ======================================================= */}

      <section className="mx-auto max-w-5xl px-5 pb-28 pt-7">
        {/* ====================================================
            INTRO
        ===================================================== */}

        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[.2em] text-violet-400">
              Student / Dashboard
            </p>

            <h1 className="mt-2 text-2xl font-black tracking-tight">
              {greeting}
            </h1>

            <p className="mt-1 max-w-md text-xs leading-5 text-zinc-500">
              {introText}
            </p>
          </div>

          <div
            className={`hidden rounded-2xl border px-3 py-2 text-right sm:block ${
              isMissedDay
                ? "border-amber-400/15 bg-amber-400/5"
                : isFirstDay
                  ? "border-violet-400/15 bg-violet-400/5"
                  : isEmptyProfile
                    ? "border-cyan-400/15 bg-cyan-400/5"
                    : "border-emerald-400/15 bg-emerald-400/5"
            }`}
          >
            <p
              className={`text-[9px] font-bold ${
                isMissedDay
                  ? "text-amber-300"
                  : isFirstDay
                    ? "text-violet-300"
                    : isEmptyProfile
                      ? "text-cyan-300"
                      : "text-emerald-300"
              }`}
            >
              STATUS
            </p>

            <p className="text-xs font-bold">
              {statusLabel}
            </p>
          </div>
        </div>

        {/* ====================================================
            EMPTY PROFILE
            IMPORTANT:
            Do NOT show streak, progress, today's challenge,
            proof of work, achievements or leaderboard here.
        ===================================================== */}

        {isEmptyProfile ? (
          <>
            <article className="overflow-hidden rounded-[28px] border border-cyan-400/15 bg-gradient-to-br from-cyan-500/10 to-white/[.02] p-5 shadow-[0_20px_70px_rgba(0,0,0,.18)]">
              <div className="flex items-start gap-4">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cyan-500/10 text-xl ring-1 ring-cyan-400/15">
                  👋
                </div>

                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-cyan-300">
                    Profile setup
                  </p>

                  <h2 className="mt-2 text-xl font-black tracking-tight">
                    Make your challenge profile yours.
                  </h2>
                </div>
              </div>

              <p className="mt-4 text-xs leading-6 text-zinc-400">
                Add your name, learning track, and GitHub profile so your
                public challenge identity is ready when you start shipping.
              </p>

              <div className="mt-5 space-y-2">
                <div className="flex items-center justify-between rounded-2xl border border-white/[.06] bg-black/10 px-4 py-3">
                  <span className="text-[10px] text-zinc-500">
                    Name
                  </span>

                  <span className="text-[10px] font-bold text-cyan-300">
                    Missing
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/[.06] bg-black/10 px-4 py-3">
                  <span className="text-[10px] text-zinc-500">
                    Learning track
                  </span>

                  <span className="text-[10px] font-bold text-cyan-300">
                    Missing
                  </span>
                </div>

                <div className="flex items-center justify-between rounded-2xl border border-white/[.06] bg-black/10 px-4 py-3">
                  <span className="text-[10px] text-zinc-500">
                    GitHub
                  </span>

                  <span className="text-[10px] font-bold text-cyan-300">
                    Missing
                  </span>
                </div>
              </div>

              <button
                type="button"
                className="mt-5 w-full rounded-2xl bg-cyan-500 py-3 text-xs font-bold text-[#041014] transition hover:bg-cyan-400"
              >
                Complete Profile →
              </button>
            </article>

            <article className="mt-3 rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">
                Before you start
              </p>

              <h3 className="mt-2 text-lg font-bold">
                Your 60-day journey starts here.
              </h3>

              <div className="mt-4 space-y-3">
                <div className="flex gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet-500/10">
                    1
                  </span>

                  <div>
                    <p className="text-xs font-bold">
                      Complete your profile
                    </p>

                    <p className="mt-1 text-[9px] leading-5 text-zinc-600">
                      Tell the community what you are learning.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet-500/10">
                    2
                  </span>

                  <div>
                    <p className="text-xs font-bold">
                      Start your first challenge
                    </p>

                    <p className="mt-1 text-[9px] leading-5 text-zinc-600">
                      Build something small and useful.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-violet-500/10">
                    3
                  </span>

                  <div>
                    <p className="text-xs font-bold">
                      Share proof of work
                    </p>

                    <p className="mt-1 text-[9px] leading-5 text-zinc-600">
                      GitHub commit + LinkedIn post.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </>
        ) : (
          <>
            {/* ====================================================
                FIRST DAY
            ===================================================== */}

            {isFirstDay && (
              <article className="mb-3 overflow-hidden rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-violet-500/15 via-indigo-500/[.07] to-white/[.02] p-5 shadow-[0_20px_70px_rgba(124,58,237,.12)]">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-500/15 text-xl ring-1 ring-violet-400/15">
                    🚀
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.18em] text-violet-400">
                      First day
                    </p>

                    <h2 className="mt-2 text-xl font-black tracking-tight">
                      Start your 60-day challenge
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-zinc-400">
                  Complete today&apos;s challenge, make one GitHub commit,
                  and publish one LinkedIn post to begin your public
                  learning streak.
                </p>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-2xl border border-white/[.06] bg-black/10 p-3">
                    <p className="text-base">💻</p>
                    <p className="mt-2 text-[10px] font-bold">
                      Build
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[.06] bg-black/10 p-3">
                    <p className="text-base">🐙</p>
                    <p className="mt-2 text-[10px] font-bold">
                      GitHub
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/[.06] bg-black/10 p-3">
                    <p className="text-base">💼</p>
                    <p className="mt-2 text-[10px] font-bold">
                      LinkedIn
                    </p>
                  </div>
                </div>

                <Link
                  href="/day/12"
                  className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-violet-500 px-4 py-3 text-xs font-bold text-white transition hover:bg-violet-400"
                >
                  Start Day 1 →
                </Link>

                <p className="mt-3 text-center text-[9px] text-zinc-600">
                  Your streak begins after today&apos;s proof of work is
                  submitted.
                </p>
              </article>
            )}

            {/* ====================================================
                MISSED DAY
            ===================================================== */}

            {isMissedDay && (
              <article className="mb-3 overflow-hidden rounded-[28px] border border-amber-400/20 bg-gradient-to-br from-amber-500/10 to-white/[.02] p-5">
                <div className="flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-amber-500/10 text-xl ring-1 ring-amber-400/15">
                    ⚠️
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.18em] text-amber-300">
                      Missed day
                    </p>

                    <h2 className="mt-2 text-xl font-black tracking-tight">
                      Don&apos;t restart. Recover.
                    </h2>
                  </div>
                </div>

                <p className="mt-4 text-xs leading-6 text-zinc-400">
                  You missed a day, but your learning history stays intact.
                  Complete today&apos;s build and keep moving forward.
                </p>

                <div className="mt-5 rounded-2xl border border-white/[.06] bg-black/10 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-zinc-500">
                      Previous streak
                    </span>

                    <span className="text-xs font-bold">
                      {currentStreak} days
                    </span>
                  </div>

                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-amber-400"
                      style={{
                        width: `${Math.min(
                          Math.max((currentStreak / 60) * 100, 0),
                          100
                        )}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-2 sm:grid-cols-2">
                  <Link
                    href="/day/12"
                    className="inline-flex items-center justify-center rounded-2xl bg-violet-500 px-4 py-3 text-xs font-bold text-white transition hover:bg-violet-400"
                  >
                    Continue Today →
                  </Link>

                  <button
                    type="button"
                    onClick={() => setShieldActive(true)}
                    disabled={
                      shieldActive ||
                      !mockUser.streakShieldAvailable
                    }
                    className="rounded-2xl border border-amber-400/20 bg-amber-400/[.06] px-4 py-3 text-xs font-bold text-amber-200 transition hover:bg-amber-400/10 disabled:cursor-default disabled:opacity-70"
                  >
                    {shieldActive
                      ? "Shield Activated ✓"
                      : "Use Streak Shield"}
                  </button>
                </div>
              </article>
            )}

            {/* ====================================================
                STREAK + PROGRESS
            ===================================================== */}

            <div className="grid gap-3 lg:grid-cols-[1.1fr_.9fr]">
              {/* STREAK */}

              <article className="relative overflow-hidden rounded-[28px] border border-white/[.06] bg-white/[.025] p-5 shadow-[0_20px_70px_rgba(0,0,0,.15)]">
                <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-violet-600/20 blur-3xl" />

                <div className="relative flex items-start justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">
                      Current streak
                    </p>

                    <p className="mt-2 text-5xl font-black tracking-[-.06em]">
                      {currentStreak}

                      <span className="ml-1 text-lg text-zinc-600">
                        days
                      </span>
                    </p>
                  </div>

                  <span className="text-3xl">
                    {isFirstDay
                      ? "🌱"
                      : isMissedDay
                        ? "🛡️"
                        : "🔥"}
                  </span>
                </div>

                <div className="relative mt-6 flex items-center gap-1.5">
                  {Array.from({ length: 12 }).map((_, index) => {
                    const completed = index < currentStreak;

                    return (
                      <span
                        key={index}
                        className={`h-1.5 flex-1 rounded-full ${
                          completed
                            ? "bg-violet-500 shadow-[0_0_10px_rgba(139,92,246,.3)]"
                            : "bg-white/[.06]"
                        }`}
                      />
                    );
                  })}
                </div>

                <div className="relative mt-3 flex justify-between text-[9px] text-zinc-600">
                  <span>DAY 01</span>
                  <span>DAY 12</span>
                </div>
              </article>

              {/* PROGRESS */}

              <article className="rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">
                    Challenge progress
                  </p>

                  <span className="font-mono text-xs font-bold text-violet-300">
                    {progress}%
                  </span>
                </div>

                <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-400 shadow-[0_0_18px_rgba(139,92,246,.45)] transition-all duration-700"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="mt-3 flex justify-between text-[10px] text-zinc-600">
                  <span>{completedDays} completed</span>

                  <span>{remainingDays} remaining</span>
                </div>

                <div className="mt-5 grid grid-cols-3 gap-2">
                  <div className="rounded-xl border border-white/[.06] bg-white/[.025] p-2.5">
                    <p className="text-lg font-black">
                      {buildCount}
                    </p>

                    <p className="text-[9px] text-zinc-600">
                      Builds
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[.06] bg-white/[.025] p-2.5">
                    <p className="text-lg font-black">
                      {postCount}
                    </p>

                    <p className="text-[9px] text-zinc-600">
                      Posts
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/[.06] bg-white/[.025] p-2.5">
                    <p className="text-lg font-black">
                      {badgeCount}
                    </p>

                    <p className="text-[9px] text-zinc-600">
                      Badges
                    </p>
                  </div>
                </div>
              </article>
            </div>

            {/* ====================================================
                STREAK SHIELD
            ===================================================== */}

            {hasStartedChallenge && (
              <article className="mt-3 rounded-[28px] border border-violet-400/20 bg-gradient-to-br from-violet-500/10 to-indigo-500/5 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.18em] text-violet-300">
                      Streak Shield
                    </p>

                    <h3 className="mt-2 text-lg font-bold text-white">
                      Protect your streak
                    </h3>
                  </div>

                  <span className="shrink-0 rounded-full bg-violet-500/20 px-3 py-1 text-[10px] font-bold text-violet-300">
                    {shieldActive ? "Activated" : "1 available"}
                  </span>
                </div>

                <p className="mt-3 text-xs leading-6 text-zinc-400">
                  Missed a day? Your history stays intact. Use your monthly
                  Streak Shield when you need a little breathing room and
                  keep your challenge moving forward.
                </p>

                <button
                  type="button"
                  onClick={() => setShieldActive(true)}
                  disabled={
                    shieldActive ||
                    !mockUser.streakShieldAvailable
                  }
                  className="mt-5 w-full rounded-2xl bg-violet-500 py-3 text-xs font-bold text-white transition hover:bg-violet-400 disabled:cursor-default disabled:bg-violet-500/60"
                >
                  {shieldActive
                    ? "Shield Activated ✓"
                    : "Activate Shield"}
                </button>
              </article>
            )}

            {/* ====================================================
                TODAY'S CHALLENGE
            ===================================================== */}

            <article className="mt-3 overflow-hidden rounded-[28px] border border-violet-400/15 bg-gradient-to-br from-violet-500/[.12] to-white/[.02] p-5 shadow-[0_20px_70px_rgba(0,0,0,.2)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-violet-300">
                    {isFirstDay
                      ? "Your first challenge"
                      : "Today · Day 12"}
                  </p>

                  <h2 className="mt-2 text-xl font-black tracking-tight">
                    Build a URL Shortener
                  </h2>
                </div>

                <span className="w-fit rounded-full border border-violet-400/15 bg-violet-400/10 px-2.5 py-1 text-[9px] font-bold text-violet-300">
                  45–60 MIN
                </span>
              </div>

              <p className="mt-3 max-w-xl text-xs leading-6 text-zinc-500">
                Turn a long URL into a short, shareable link. Focus on the
                core flow, clean states, and a working redirect.
              </p>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/day/12"
                  className="rounded-xl bg-violet-500 px-4 py-3 text-center text-xs font-bold text-white transition hover:bg-violet-400"
                >
                  {isFirstDay
                    ? "Start Day 1 →"
                    : "Continue challenge →"}
                </Link>

                <Link
                  href="/day/12"
                  className="rounded-xl border border-white/[.08] bg-white/[.03] px-4 py-3 text-center text-xs font-semibold text-zinc-400 transition hover:bg-white/[.06] hover:text-white"
                >
                  View brief
                </Link>
              </div>
            </article>

            {/* ====================================================
                PROOF OF WORK
            ===================================================== */}

            <article className="mt-3 rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">
                    Proof of work
                  </p>

                  <h3 className="mt-1 text-sm font-bold">
                    Keep your public streak alive
                  </h3>
                </div>

                <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[9px] font-bold text-emerald-300">
                  {isFirstDay ? "0 / 3" : "2 / 3"}
                </span>
              </div>

              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-3 rounded-2xl border border-white/[.06] bg-black/10 p-3">
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-xl ${
                      isFirstDay
                        ? "bg-white/[.04] text-zinc-600"
                        : "bg-emerald-400/10 text-emerald-300"
                    }`}
                  >
                    {isFirstDay ? "1" : "✓"}
                  </span>

                  <div>
                    <p className="text-[10px] font-bold">
                      Build completed
                    </p>

                    <p className="text-[9px] text-zinc-600">
                      Ship today&apos;s project.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/[.06] bg-black/10 p-3">
                  <span
                    className={`grid h-8 w-8 place-items-center rounded-xl ${
                      isFirstDay
                        ? "bg-white/[.04] text-zinc-600"
                        : "bg-emerald-400/10 text-emerald-300"
                    }`}
                  >
                    {isFirstDay ? "2" : "✓"}
                  </span>

                  <div>
                    <p className="text-[10px] font-bold">
                      GitHub commit
                    </p>

                    <p className="text-[9px] text-zinc-600">
                      Push proof of your work.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-white/[.06] bg-black/10 p-3">
                  <span className="grid h-8 w-8 place-items-center rounded-xl bg-white/[.04] text-zinc-600">
                    3
                  </span>

                  <div>
                    <p className="text-[10px] font-bold">
                      LinkedIn post
                    </p>

                    <p className="text-[9px] text-zinc-600">
                      Share what you learned.
                    </p>
                  </div>
                </div>
              </div>
            </article>

            {/* ====================================================
                WEEKLY + ACHIEVEMENTS
            ===================================================== */}

            <section className="mt-3 grid gap-3 md:grid-cols-[1.1fr_.9fr]">
              {/* WEEKLY */}

              <article className="rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">
                      Weekly consistency
                    </p>

                    <h3 className="mt-1 text-sm font-bold">
                      {weeklyKept} / 7 days kept
                    </h3>
                  </div>

                  <span
                    className={`text-xs font-bold ${
                      isMissedDay
                        ? "text-amber-300"
                        : isFirstDay
                          ? "text-violet-300"
                          : "text-emerald-300"
                    }`}
                  >
                    {weeklyPercentage}%
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-7 gap-2">
                  {week.map((item) => {
                    const displayDone = isMissedDay
                      ? item.n !== "09" && item.n !== "08"
                      : item.done;

                    return (
                      <div key={item.n} className="text-center">
                        <p className="mb-2 text-[9px] text-zinc-600">
                          {item.d}
                        </p>

                        <div
                          className={`mx-auto grid aspect-square max-w-9 place-items-center rounded-xl border text-[9px] font-bold ${
                            displayDone
                              ? "border-violet-400/20 bg-violet-500/80 text-white"
                              : item.today
                                ? "border-violet-300/50 bg-violet-500/10 text-violet-300"
                                : "border-white/[.06] bg-white/[.02] text-zinc-700"
                          }`}
                        >
                          {displayDone ? "✓" : item.n}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-5 text-[10px] leading-5 text-zinc-600">
                  Missed a day? Don&apos;t restart. Your history stays intact
                  — complete today&apos;s build and continue.
                </p>
              </article>

              {/* ACHIEVEMENTS */}

              <article className="rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
                <div className="flex items-center justify-between">
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">
                    Achievements
                  </p>

                  <span className="text-[9px] text-zinc-600">
                    {isFirstDay ? "0 / 3" : "2 / 3"} unlocked
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  {achievements.map((achievement, index) => {
                    const unlocked = isFirstDay
                      ? false
                      : achievement.unlocked;

                    return (
                      <div
                        key={achievement.title}
                        className={`flex items-center gap-3 rounded-2xl border p-3 ${
                          unlocked
                            ? "border-white/[.07] bg-white/[.025]"
                            : "border-white/[.05] bg-black/10 opacity-40"
                        }`}
                      >
                        <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet-500/10 text-lg">
                          {unlocked
                            ? achievement.icon
                            : index === 2
                              ? "🔒"
                              : "○"}
                        </span>

                        <div>
                          <p className="text-[11px] font-bold">
                            {achievement.title}
                          </p>

                          <p className="text-[9px] text-zinc-600">
                            {achievement.sub}
                          </p>
                        </div>

                        {unlocked && (
                          <span className="ml-auto text-[10px] text-emerald-300">
                            ✓
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            </section>

            {/* ====================================================
                LEADERBOARD
            ===================================================== */}

            <article className="mt-3 rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">
                    Leaderboard
                  </p>

                  <h3 className="mt-1 text-sm font-bold">
                    Your standing
                  </h3>
                </div>

                <span className="font-mono text-[10px] text-violet-300">
                  #
                  {String(mockUser.leaderboardRank).padStart(2, "0")} /{" "}
                  {mockUser.leaderboardTotal}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                {leaderboard.map(([rank, name, streak, score]) => (
                  <div
                    key={rank}
                    className={`flex items-center gap-3 rounded-2xl border px-3 py-3 ${
                      name === mockUser.name
                        ? "border-violet-400/20 bg-violet-500/[.08]"
                        : "border-white/[.05] bg-white/[.02]"
                    }`}
                  >
                    <span className="w-6 font-mono text-[10px] text-zinc-600">
                      #{rank}
                    </span>

                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/5 text-[10px] font-bold">
                      {name[0]}
                    </span>

                    <span className="text-xs font-semibold">
                      {name}
                    </span>

                    <span className="ml-auto text-[10px] text-zinc-500">
                      {streak}
                    </span>

                    <span className="w-8 text-right text-[10px] font-bold text-violet-300">
                      {score}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          </>
        )}

        {/* ======================================================
            FOOTER
        ======================================================= */}

        <div className="mt-8 text-center">
          <p className="text-[9px] uppercase tracking-[.16em] text-zinc-700">
            ABTalks · Build in public · Day by day
          </p>
        </div>
      </section>
    </main>
  );
}