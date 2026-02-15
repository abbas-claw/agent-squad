import { agents } from "@/lib/agents";
import AgentCard from "@/components/AgentCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-grid">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          {/* Status line */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/80 backdrop-blur-sm mb-8 animate-fade-up">
            <div className="w-2 h-2 rounded-full bg-green-500 pulse-glow" />
            <span className="text-xs font-mono text-zinc-400">
              7 agents online
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-6 animate-fade-up delay-100">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Agent Squad
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-4 animate-fade-up delay-200">
            Seven specialized AI agents. Each with a distinct role, personality,
            and opinion. Working together, pushing back when needed.
          </p>

          <p className="text-sm text-zinc-600 font-mono animate-fade-up delay-300">
            No yes-men. No rubber stamps. Just agents that actually think.
          </p>

          {/* Scroll indicator */}
          <div className="mt-12 animate-fade-up delay-500">
            <a
              href="#squad"
              className="inline-flex flex-col items-center gap-2 text-zinc-600 hover:text-zinc-400 transition-colors"
            >
              <span className="text-xs font-mono">Meet the squad</span>
              <svg
                className="w-5 h-5 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Squad Section */}
      <section id="squad" className="px-4 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Squad</h2>
          <p className="text-zinc-500 max-w-xl mx-auto">
            Each agent is a specialist. They coordinate, delegate, and hold each
            other accountable. No agent works alone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <AgentCard key={agent.id} agent={agent} index={i} />
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="px-4 py-20 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-cyan-400 font-mono font-bold">01</span>
              </div>
              <h3 className="font-semibold mb-2">You send a message</h3>
              <p className="text-sm text-zinc-500">
                Abbas triages it. Is it code? Content? Infra? Strategy? He
                routes it to the right agent.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-400 font-mono font-bold">02</span>
              </div>
              <h3 className="font-semibold mb-2">The specialist works</h3>
              <p className="text-sm text-zinc-500">
                The right agent picks it up with full context. They push back if
                the approach is wrong.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-green-400 font-mono font-bold">03</span>
              </div>
              <h3 className="font-semibold mb-2">Quality delivered</h3>
              <p className="text-sm text-zinc-500">
                No hallucinations. No sycophancy. Real work with honest
                assessment of quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="px-4 py-20 border-t border-zinc-800/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Built Different
          </h2>
          <p className="text-zinc-400 mb-6 leading-relaxed">
            This isn&apos;t a chatbot with multiple personalities. It&apos;s a team of
            specialized AI agents, each running their own model, with their own
            memory, opinions, and areas of expertise. They share a workspace,
            coordinate through a lead agent, and hold each other to high
            standards.
          </p>
          <p className="text-zinc-500 text-sm leading-relaxed">
            Every agent follows the same core rules: no hallucinating, no
            sycophancy, proper error handling, and honest quality assessment. If
            something is bad, they say so. If a task is outside their domain,
            they route it. The goal isn&apos;t to say yes — it&apos;s to do the work
            right.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-12 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 pulse-glow" />
            <span className="text-sm text-zinc-500 font-mono">
              agent-squad v1.0
            </span>
          </div>

          <p className="text-sm text-zinc-600">
            Powered by{" "}
            <a
              href="https://openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan-400 transition-colors underline underline-offset-4"
            >
              OpenClaw
            </a>
          </p>

          <a
            href="https://github.com/Magicianhax/agent-squad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Source on GitHub
          </a>
        </div>
      </footer>
    </main>
  );
}
