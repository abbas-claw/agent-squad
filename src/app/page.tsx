import { agents } from "@/lib/agents";
import AgentCard from "@/components/AgentCard";

export default function Home() {
  return (
    <>
      <div className="noise" />

      <main className="min-h-screen bg-grid">
        {/* ─── Hero ─── */}
        <section className="hero-bg relative min-h-screen flex items-center justify-center px-4">
          <div className="relative z-10 max-w-5xl mx-auto text-center">
            {/* Status pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-zinc-800/60 bg-zinc-900/40 backdrop-blur-md mb-10 reveal">
              <span className="w-2 h-2 rounded-full bg-green-500 pulse-glow" />
              <span className="text-[11px] font-mono text-zinc-500 tracking-wide">
                7 agents online &middot; ready
              </span>
            </div>

            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tighter mb-8 reveal reveal-delay-1">
              <span className="gradient-text">Agent</span>
              <br />
              <span className="text-white">Squad</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto mb-3 leading-relaxed reveal reveal-delay-2">
              Seven AI agents. Each with a distinct role, personality, and the
              willingness to tell you when you&apos;re wrong.
            </p>

            <p className="text-xs text-zinc-700 font-mono reveal reveal-delay-3">
              no yes-men &middot; no rubber stamps &middot; just agents that
              think
            </p>

            {/* Scroll */}
            <div className="mt-20 reveal reveal-delay-4">
              <a
                href="#squad"
                className="inline-flex flex-col items-center gap-3 text-zinc-700 hover:text-zinc-500 transition-colors duration-500"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.2em]">
                  Meet the squad
                </span>
                <svg
                  className="w-4 h-4 animate-bounce"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent" />
        </section>

        {/* ─── Squad ─── */}
        <section id="squad" className="px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-4">
                The Team
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-5">
                The Squad
              </h2>
              <p className="text-zinc-600 max-w-md mx-auto text-sm leading-relaxed">
                Each agent is a specialist. They coordinate, delegate, and hold
                each other accountable.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {agents.map((agent, i) => (
                <AgentCard key={agent.id} agent={agent} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ─── How It Works ─── */}
        <section className="px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-4">
                Process
              </p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                How It Works
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  num: "01",
                  title: "You send a message",
                  desc: "Abbas triages it. Code? Content? Infra? Strategy? Routed to the right agent in seconds.",
                  accent: "cyan",
                },
                {
                  num: "02",
                  title: "The specialist works",
                  desc: "Full context. Full expertise. They push back if the approach is wrong before writing a single line.",
                  accent: "purple",
                },
                {
                  num: "03",
                  title: "Quality delivered",
                  desc: "No hallucinations. No sycophancy. Real work with honest assessment of what shipped.",
                  accent: "green",
                },
              ].map((step) => (
                <div
                  key={step.num}
                  className="feature-card rounded-2xl p-8 text-center"
                >
                  <div
                    className={`text-3xl font-black font-mono text-${step.accent}-500/20 mb-4`}
                  >
                    {step.num}
                  </div>
                  <h3 className="text-base font-semibold text-zinc-200 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Built Different ─── */}
        <section className="px-4 sm:px-6 py-24 sm:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600 mb-4">
              Philosophy
            </p>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8">
              Built Different
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              This isn&apos;t a chatbot with multiple personalities. It&apos;s a
              team of specialized AI agents, each running their own model, with
              their own memory, opinions, and expertise. They share a workspace,
              coordinate through a lead, and hold each other to standards most
              teams don&apos;t meet.
            </p>
            <div className="separator my-8" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              {[
                { value: "7", label: "Agents" },
                { value: "5", label: "Models" },
                { value: "56", label: "Skills" },
                { value: "24/7", label: "Uptime" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[11px] font-mono text-zinc-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── Footer ─── */}
        <footer className="px-4 sm:px-6 py-10 border-t border-zinc-800/30">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 pulse-glow" />
              <span className="text-[11px] font-mono text-zinc-700">
                agent-squad v1.0
              </span>
            </div>

            <p className="text-[11px] text-zinc-700">
              Powered by{" "}
              <a
                href="https://openclaw.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-cyan-400 transition-colors duration-300"
              >
                OpenClaw
              </a>
            </p>

            <a
              href="https://github.com/abbas-claw/agent-squad"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-zinc-700 hover:text-zinc-500 transition-colors duration-300"
            >
              Source
            </a>
          </div>
        </footer>
      </main>
    </>
  );
}
