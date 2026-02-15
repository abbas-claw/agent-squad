"use client";

import { useState } from "react";
import Image from "next/image";
import { Agent } from "@/lib/agents";

export default function AgentCard({
  agent,
  index,
}: {
  agent: Agent;
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`card-glow hover-lift rounded-2xl bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 overflow-hidden animate-fade-up delay-${(index + 1) * 100}`}
    >
      {/* Header with image */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-20`}
        />
        <Image
          src={agent.image}
          alt={agent.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

        {/* Name badge */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-2 h-2 rounded-full bg-green-500 pulse-glow" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Online
            </span>
          </div>
          <h3 className="text-2xl font-bold text-white">{agent.name}</h3>
          <p
            className={`text-sm font-medium bg-gradient-to-r ${agent.color} bg-clip-text text-transparent`}
          >
            {agent.role}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Tagline */}
        <p className="text-zinc-300 font-medium mb-3 italic">
          &ldquo;{agent.tagline}&rdquo;
        </p>

        {/* Model badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-zinc-800 text-zinc-400 border border-zinc-700/50">
            {agent.model}
          </span>
        </div>

        {/* Personality traits */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {agent.personality.map((trait) => (
            <span
              key={trait}
              className={`px-2 py-0.5 rounded-md text-xs font-medium bg-gradient-to-r ${agent.color} bg-clip-text text-transparent border border-zinc-700/50`}
            >
              {trait}
            </span>
          ))}
        </div>

        {/* Expandable section */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left group"
        >
          <div className="flex items-center justify-between text-sm text-zinc-500 hover:text-zinc-300 transition-colors">
            <span>{expanded ? "Less" : "More details"}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </button>

        {expanded && (
          <div className="mt-4 space-y-4 animate-fade-up">
            {/* Description */}
            <p className="text-sm text-zinc-400 leading-relaxed">
              {agent.description}
            </p>

            {/* Specialties */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                Specialties
              </h4>
              <ul className="space-y-1">
                {agent.specialties.map((s) => (
                  <li key={s} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${agent.color} shrink-0`} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Voice */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                Voice
              </h4>
              <p className="text-sm text-zinc-500 italic">{agent.voice}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
