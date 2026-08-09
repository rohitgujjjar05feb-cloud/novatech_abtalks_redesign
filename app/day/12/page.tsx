"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

export default function ChallengeDay() {
  const [checks, setChecks] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const completedChecks = useMemo(
    () => checks.filter(Boolean).length,
    [checks],
  );

  const canSubmit =
    completedChecks === 4 &&
    github.trim().length > 0 &&
    linkedin.trim().length > 0;

  const toggle = (index: number) => {
    setChecks((current) =>
      current.map((value, itemIndex) =>
        itemIndex === index ? !value : value,
      ),
    );
  };

  const handleSubmit = () => {
    if (!canSubmit) return;

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#07060b] text-white">
      {/* =====================================================
          HEADER
      ====================================================== */}
      <header className="sticky top-0 z-30 border-b border-white/[.06] bg-[#07060b]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <Link
            href="/dashboard"
            className="text-xs font-semibold text-zinc-400 transition hover:text-white"
          >
            ← Dashboard
          </Link>

          <div className="text-center">
            <p className="font-mono text-[9px] font-bold uppercase tracking-[.18em] text-violet-400">
              Day 12 / 60
            </p>

            <p className="mt-1 text-[9px] text-zinc-600">
              Daily build protocol
            </p>
          </div>

          <div className="rounded-full border border-violet-400/15 bg-violet-500/10 px-3 py-1.5">
            <span className="font-mono text-[10px] font-bold text-violet-300">
              20%
            </span>
          </div>
        </div>
      </header>

      {/* =====================================================
          PROGRESS STRIP
      ====================================================== */}
      <div className="border-b border-white/[.05] bg-white/[.015]">
        <div className="mx-auto max-w-5xl px-5 py-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-600">
                Today&apos;s progress
              </p>

              <p className="mt-1 text-xs font-bold">
                Day 12 of 60
              </p>
            </div>

            <div className="text-right">
              <p className="text-lg font-black">12🔥</p>

              <p className="text-[9px] text-zinc-600">
                Current streak
              </p>
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
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <section className="mx-auto max-w-3xl px-5 pb-24 pt-7">
        {/* ===================================================
            INTRO
        ==================================================== */}
        <div className="mb-5">
          <p className="font-mono text-[9px] uppercase tracking-[.2em] text-violet-400">
            Daily build protocol
          </p>

          <h1 className="mt-2 text-3xl font-black tracking-[-.04em] sm:text-4xl">
            Build a URL Shortener.
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-500">
            Take a long URL, create a short alias, and redirect the alias
            back to the original URL.
          </p>
        </div>

        {/* ===================================================
            QUICK INFO
        ==================================================== */}
        <div className="rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/[.06] bg-white/[.025] p-3">
              <p className="text-[9px] text-zinc-600">TIME</p>
              <p className="mt-1 text-xs font-bold">45–60 min</p>
            </div>

            <div className="rounded-2xl border border-white/[.06] bg-white/[.025] p-3">
              <p className="text-[9px] text-zinc-600">LEVEL</p>
              <p className="mt-1 text-xs font-bold">Intermediate</p>
            </div>

            <div className="rounded-2xl border border-white/[.06] bg-white/[.025] p-3">
              <p className="text-[9px] text-zinc-600">OUTPUT</p>
              <p className="mt-1 text-xs font-bold">Working web app</p>
            </div>
          </div>
        </div>

        {/* ===================================================
            WHAT TO BUILD + LEARNING OBJECTIVE
        ==================================================== */}
        <section className="mt-3 grid gap-3 md:grid-cols-2">
          <article className="rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
            <p className="text-[9px] font-bold uppercase tracking-[.18em] text-violet-400">
              What to build
            </p>

            <ul className="mt-4 space-y-3 text-xs leading-5 text-zinc-400">
              <li className="flex gap-2">
                <span className="text-violet-400">01</span>
                Create an input for a long URL.
              </li>

              <li className="flex gap-2">
                <span className="text-violet-400">02</span>
                Generate a short, unique code.
              </li>

              <li className="flex gap-2">
                <span className="text-violet-400">03</span>
                Show the short URL after creation.
              </li>

              <li className="flex gap-2">
                <span className="text-violet-400">04</span>
                Make the short URL redirect correctly.
              </li>
            </ul>
          </article>

          <article className="rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
            <p className="text-[9px] font-bold uppercase tracking-[.18em] text-violet-400">
              Learning objective
            </p>

            <h2 className="mt-3 text-base font-bold">
              Understand a complete request → response flow.
            </h2>

            <p className="mt-2 text-xs leading-6 text-zinc-500">
              Practice form handling, API design, unique IDs, persistence,
              and redirects without overbuilding the product.
            </p>
          </article>
        </section>

        {/* ===================================================
            BUILD CHECKLIST
        ==================================================== */}
        <section className="mt-3 rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">
                Build checklist
              </p>

              <h2 className="mt-1 text-sm font-bold">
                Ship the essentials first.
              </h2>
            </div>

            <span className="font-mono text-[10px] text-violet-300">
              {completedChecks}/4
            </span>
          </div>

          <div className="mt-4 space-y-2">
            {[
              "Create URL input + validation",
              "Generate and store short code",
              "Implement redirect route",
              "Test the complete user flow",
            ].map((item, index) => {
              const checked = checks[index];

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggle(index)}
                  className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                    checked
                      ? "border-violet-400/20 bg-violet-500/[.08]"
                      : "border-white/[.06] bg-white/[.02] hover:bg-white/[.04]"
                  }`}
                >
                  <span
                    className={`grid h-7 w-7 shrink-0 place-items-center rounded-lg border text-xs ${
                      checked
                        ? "border-violet-400/30 bg-violet-500 text-white"
                        : "border-white/10 text-zinc-700"
                    }`}
                  >
                    {checked ? "✓" : index + 1}
                  </span>

                  <span
                    className={`text-xs ${
                      checked
                        ? "text-white line-through decoration-violet-400/60"
                        : "text-zinc-400"
                    }`}
                  >
                    {item}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-violet-500 transition-all duration-500"
              style={{
                width: `${(completedChecks / 4) * 100}%`,
              }}
            />
          </div>
        </section>

        {/* ===================================================
            PROOF OF WORK
        ==================================================== */}
        <section className="mt-3 rounded-[28px] border border-white/[.06] bg-white/[.025] p-5">
          <div className="mb-5">
            <p className="text-[9px] font-bold uppercase tracking-[.18em] text-zinc-500">
              Proof of work
            </p>

            <h2 className="mt-1 text-sm font-bold">
              Show that you shipped it.
            </h2>

            <p className="mt-2 text-[10px] leading-5 text-zinc-600">
              Paste the exact links you want attached to today&apos;s
              submission.
            </p>
          </div>

          {/* GITHUB */}
          <label
            htmlFor="github"
            className="block text-[10px] font-bold text-zinc-400"
          >
            GitHub repository / commit
          </label>

          <input
            id="github"
            type="url"
            value={github}
            onChange={(event) => setGithub(event.target.value)}
            placeholder="https://github.com/you/project/commit/..."
            disabled={submitted}
            className="mt-2 w-full rounded-2xl border border-white/[.08] bg-black/20 px-4 py-3 text-xs text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 disabled:cursor-not-allowed disabled:opacity-50"
          />

          {/* LINKEDIN */}
          <label
            htmlFor="linkedin"
            className="mt-4 block text-[10px] font-bold text-zinc-400"
          >
            LinkedIn post
          </label>

          <input
            id="linkedin"
            type="url"
            value={linkedin}
            onChange={(event) => setLinkedin(event.target.value)}
            placeholder="https://linkedin.com/posts/..."
            disabled={submitted}
            className="mt-2 w-full rounded-2xl border border-white/[.08] bg-black/20 px-4 py-3 text-xs text-white outline-none placeholder:text-zinc-700 focus:border-violet-400/40 disabled:cursor-not-allowed disabled:opacity-50"
          />

          {/* VALIDATION MESSAGE */}
          {!submitted && !canSubmit && (
            <div className="mt-4 rounded-2xl border border-amber-400/10 bg-amber-400/[.04] p-3">
              <p className="text-[10px] leading-5 text-amber-200/70">
                Complete all 4 checklist items and add both GitHub and
                LinkedIn proof before submitting.
              </p>
            </div>
          )}

          {/* SUBMIT */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!canSubmit || submitted}
            className="mt-5 w-full rounded-2xl bg-violet-500 px-5 py-4 text-xs font-bold text-white shadow-[0_0_30px_rgba(139,92,246,.2)] transition hover:bg-violet-400 disabled:cursor-not-allowed disabled:bg-white/5 disabled:text-zinc-700"
          >
            {submitted
              ? "✓ Day 12 submitted"
              : "Submit proof of work →"}
          </button>

          {/* SUCCESS */}
          {submitted && (
            <div className="mt-4 rounded-2xl border border-emerald-400/15 bg-emerald-400/[.05] p-4">
              <div className="flex items-start gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-emerald-400/10 text-emerald-300">
                  ✓
                </span>

                <div>
                  <p className="text-xs font-bold text-emerald-200">
                    Proof submitted successfully
                  </p>

                  <p className="mt-1 text-[10px] leading-5 text-emerald-300/60">
                    Nice. Your Day 12 progress signal has been recorded.
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* ===================================================
            COMPLETION REWARD
            ONLY AFTER SUBMISSION
        ==================================================== */}
        {submitted && (
          <section className="mt-3 rounded-[28px] border border-violet-400/15 bg-gradient-to-br from-violet-500/[.10] to-white/[.02] p-5 shadow-[0_20px_70px_rgba(124,58,237,.08)]">
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
              You completed today&apos;s challenge and submitted your proof
              of work. Every finished day adds visible proof to your portfolio
              and strengthens your consistency streak.
            </p>

            <div className="mt-5 grid grid-cols-3 gap-2">
              <div className="rounded-2xl border border-white/[.06] bg-white/[.03] p-3 text-center">
                <p className="text-lg font-black text-violet-300">
                  +1
                </p>

                <p className="text-[9px] text-zinc-600">
                  Day kept
                </p>
              </div>

              <div className="rounded-2xl border border-white/[.06] bg-white/[.03] p-3 text-center">
                <p className="text-lg font-black text-violet-300">
                  +1
                </p>

                <p className="text-[9px] text-zinc-600">
                  Proof logged
                </p>
              </div>

              <div className="rounded-2xl border border-white/[.06] bg-white/[.03] p-3 text-center">
                <p className="text-lg font-black text-violet-300">
                  13
                </p>

                <p className="text-[9px] text-zinc-600">
                  Next day
                </p>
              </div>
            </div>

            <Link
              href="/dashboard"
              className="mt-5 flex w-full items-center justify-center rounded-2xl border border-white/[.08] bg-white/[.03] px-4 py-3 text-xs font-bold text-zinc-300 transition hover:bg-white/[.06] hover:text-white"
            >
              Back to dashboard →
            </Link>
          </section>
        )}

        {/* ===================================================
            FOOTER
        ==================================================== */}
        <div className="mt-4 flex items-center justify-between text-[9px] text-zinc-700">
          <span>ABT / BUILD_PROTOCOL / 12</span>

          <span>Next: Day 13 →</span>
        </div>
      </section>
    </main>
  );
}