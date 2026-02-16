"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Agent } from "@/lib/agents";

const glowColors: Record<string, string> = {
  cyan: "rgba(6, 182, 212, 0.15)",
  green: "rgba(34, 197, 94, 0.15)",
  amber: "rgba(245, 158, 11, 0.15)",
  red: "rgba(239, 68, 68, 0.15)",
  purple: "rgba(168, 85, 247, 0.15)",
  teal: "rgba(20, 184, 166, 0.15)",
  violet: "rgba(139, 92, 246, 0.15)",
};

const accentClasses: Record<string, string> = {
  cyan: "text-cyan-400",
  green: "text-green-400",
  amber: "text-amber-400",
  red: "text-red-400",
  purple: "text-purple-400",
  teal: "text-teal-400",
  violet: "text-violet-400",
};

const dotClasses: Record<string, string> = {
  cyan: "bg-cyan-400",
  green: "bg-green-400",
  amber: "bg-amber-400",
  red: "bg-red-400",
  purple: "bg-purple-400",
  teal: "bg-teal-400",
  violet: "bg-violet-400",
};

export default function AgentCard({
  agent,
  index,
}: {
  agent: Agent;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`agent-card rounded-2xl overflow-hidden reveal reveal-delay-${index + 1}`}
      style={
        {
          "--card-glow": glowColors[agent.colorAccent] || glowColors.cyan,
        } as React.CSSProperties
      }
    >
      {/* Image section */}
      <div className="agent-image-wrap h-56 sm:h-64">
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-cover object-top scale-105 transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 -mt-12 px-6 pb-6">
        {/* Status + Role */}
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`w-1.5 h-1.5 rounded-full ${dotClasses[agent.colorAccent]} pulse-glow`}
          />
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-500">
            {agent.role}
          </span>
        </div>

        {/* Name */}
        <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
          {agent.name}
        </h3>

        {/* Tagline */}
        <p className={`text-sm font-medium ${accentClasses[agent.colorAccent]} mb-4`}>
          {agent.tagline}
        </p>

        {/* Model */}
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.03] border border-white/[0.06] text-zinc-500">
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            {agent.model}
          </span>
        </div>

        {/* Traits */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {agent.personality.map((trait) => (
            <span key={trait} className="tag">
              {trait}
            </span>
          ))}
        </div>

        {/* Separator */}
        <div className="separator mb-4" />

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between py-1 group/btn"
        >
          <span className="text-xs font-mono text-zinc-600 group-hover/btn:text-zinc-400 transition-colors uppercase tracking-wider">
            {expanded ? "Collapse" : "Expand"}
          </span>
          <svg
            className={`w-4 h-4 text-zinc-600 group-hover/btn:text-zinc-400 transition-all duration-300 ${expanded ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Expanded content */}
        {expanded && (
          <div className="mt-4 space-y-5 reveal">
            <p className="text-[13px] text-zinc-400 leading-relaxed">
              {agent.description}
            </p>

            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-600 mb-3">
                Specialties
              </h4>
              <div className="space-y-2">
                {agent.specialties.map((s) => (
                  <div
                    key={s}
                    className="flex items-center gap-2.5 text-[13px] text-zinc-500"
                  >
                    <span
                      className={`w-1 h-1 rounded-full ${dotClasses[agent.colorAccent]} shrink-0`}
                    />
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-mono uppercase tracking-[0.15em] text-zinc-600 mb-2">
                Voice
              </h4>
              <p className="text-[12px] text-zinc-600 italic leading-relaxed">
                &ldquo;{agent.voice}&rdquo;
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
