export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="px-6 pt-10 pb-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300">
          ABTalks 2.0
        </div>

        <h1 className="mt-6 text-5xl font-bold leading-tight">
          Build for
          <br />
          <span className="text-purple-400">60 days.</span>
        </h1>

        <p className="mt-4 text-base leading-7 text-gray-400">
          Stay consistent, ship every day, and turn your GitHub into proof of
          work that recruiters can actually see.
        </p>

        <button className="mt-8 w-full rounded-2xl bg-purple-500 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/20">
          Join the challenge
        </button>
      </section>

      <section className="px-6 py-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Current streak</p>
              <h2 className="mt-1 text-4xl font-bold">18</h2>
            </div>
            <div className="rounded-2xl bg-purple-500/20 px-3 py-2 text-sm text-purple-300">
              +3 this week
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            {[1, 1, 1, 1, 1, 1, 0].map((v, i) => (
              <div
                key={i}
                className={`h-12 flex-1 rounded-xl ${
                  v ? "bg-purple-500" : "bg-white/10"
                }`}
              />
            ))}
          </div>

          <p className="mt-3 text-sm text-gray-400">
            6 of the last 7 days completed
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <h3 className="text-xl font-semibold">How it works</h3>

        <div className="mt-5 space-y-4">
          {[
            {
              title: "Build daily",
              text: "Complete one practical coding task every day.",
            },
            {
              title: "Push to GitHub",
              text: "Maintain a public commit streak and project portfolio.",
            },
            {
              title: "Share your progress",
              text: "Publish a LinkedIn post and grow your visibility.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <p className="text-sm text-purple-300">
                0{i + 1}
              </p>
              <h4 className="mt-2 text-lg font-semibold">
                {item.title}
              </h4>
              <p className="mt-1 text-sm leading-6 text-gray-400">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-blue-500/10 p-6">
          <p className="text-sm text-purple-300">Trusted by students</p>
          <h3 className="mt-2 text-3xl font-bold">12,000+ learners</h3>
          <p className="mt-3 text-sm leading-6 text-gray-300">
            Consistency beats intensity. The challenge is designed to help
            students build real projects and a visible portfolio.
          </p>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="rounded-3xl bg-white text-black p-6 text-center">
          <h3 className="text-2xl font-bold">Start your 60-day streak</h3>
          <p className="mt-3 text-gray-600">
            One project every day. One visible portfolio by the end of the
            challenge.
          </p>

          <button className="mt-6 w-full rounded-2xl bg-black py-4 text-white font-semibold">
            Begin day 1
          </button>
        </div>
      </section>
    </main>
  );
}