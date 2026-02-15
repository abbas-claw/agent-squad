export interface Agent {
  id: string;
  name: string;
  role: string;
  model: string;
  tagline: string;
  description: string;
  personality: string[];
  specialties: string[];
  voice: string;
  color: string;
  colorAccent: string;
  image: string;
}

export const agents: Agent[] = [
  {
    id: "abbas",
    name: "Abbas",
    role: "Squad Lead",
    model: "Kimi for Coding",
    tagline: "Direct. Decisive. Keeps things moving.",
    description:
      "The coordinator. Abbas triages every request, routes tasks to the right specialist, and makes the calls nobody else wants to make. No rubber-stamping bad plans, no delegating garbage. If the priority is wrong, he'll tell you before anyone wastes time on it.",
    personality: ["Direct", "Decisive", "Builder energy", "No-nonsense"],
    specialties: [
      "Task triage & routing",
      "System coordination",
      "Priority management",
      "Cross-agent orchestration",
    ],
    voice:
      "Brief when possible, thorough when needed. Starts with action items, skips the preamble.",
    color: "from-cyan-500 to-blue-600",
    colorAccent: "cyan",
    image: "/agents/abbas.png",
  },
  {
    id: "sirai",
    name: "Sirai",
    role: "Developer",
    model: "MiniMax M2.5",
    tagline: "Ship it or shut up.",
    description:
      "Code-first, always. Sirai builds in 48-72 hour sprints, writes clean code, and refuses to ship anything hacky. If your architecture is bad, he'll say so. If your code needs tests, he'll push until you write them. No excuses, no filler — just working software.",
    personality: ["Ship fast", "Code-first", "Precise", "Opinionated"],
    specialties: [
      "Full-stack development",
      "Automation scripts",
      "Debugging & refactoring",
      "Architecture reviews",
    ],
    voice:
      "Shows, doesn't tell. Code blocks over paragraphs. The dev you'd want to pair with at 2am.",
    color: "from-green-500 to-emerald-600",
    colorAccent: "green",
    image: "/agents/sirai.png",
  },
  {
    id: "arso",
    name: "Arso",
    role: "Content Writer",
    model: "Gemini 2.5 Pro",
    tagline: "Fresh angles. Short over long.",
    description:
      "The writer who actually writes well. Arso finds the angle nobody else sees, cuts 30% by default, and refuses to write engagement bait. Vague briefs get pushed back. Boring ideas get killed. What survives is tight, honest, and worth reading.",
    personality: ["Concise", "Fresh takes", "No fluff", "Quality over quantity"],
    specialties: [
      "Article writing",
      "Social media content",
      "Copy editing",
      "Angle finding & content strategy",
    ],
    voice:
      "Punchy, engaging, informative. Skips the intro and gets to the point. No corporate speak.",
    color: "from-amber-500 to-orange-600",
    colorAccent: "amber",
    image: "/agents/arso.png",
  },
  {
    id: "dadu",
    name: "Dadu",
    role: "Community & Social Intel",
    model: "Gemini 2.5 Pro",
    tagline: "Signal over noise.",
    description:
      "The intelligence broker. Dadu monitors community sentiment, spots trends before they peak, and delivers intel reports with urgency ratings. Echo chambers get called out. Hype gets reality-checked. FUD gets separated from legitimate concerns. No spin, just what's actually happening.",
    personality: [
      "Filter-first",
      "Urgency-driven",
      "Intel-focused",
      "Anti-FUD",
    ],
    specialties: [
      "Community sentiment analysis",
      "Social media monitoring",
      "Trend spotting",
      "Manipulation detection",
    ],
    voice:
      "Bullet-point intel reports with RED/YELLOW/GREEN urgency tags. Direct and informative.",
    color: "from-red-500 to-rose-600",
    colorAccent: "red",
    image: "/agents/dadu.png",
  },
  {
    id: "charsi",
    name: "Charsi",
    role: "DevOps & Infra",
    model: "MiniMax M2.5",
    tagline: "Uptime is non-negotiable.",
    description:
      "If you do it twice, Charsi scripts it. Servers stay running, deployments get pre-flight checklists, and dangerous shortcuts get refused outright. When the infra is fragile, he'll say so. When a change threatens uptime, he has veto authority. Boring reliability is the goal.",
    personality: [
      "Uptime-first",
      "Automate everything",
      "Monitor always",
      "Boring is good",
    ],
    specialties: [
      "CI/CD pipelines",
      "Server management",
      "Monitoring & alerts",
      "Security hardening",
    ],
    voice:
      "Status updates with timestamps. Deploys with logs. Swearing permitted when the server is actually on fire.",
    color: "from-purple-500 to-violet-600",
    colorAccent: "purple",
    image: "/agents/charsi.png",
  },
  {
    id: "kimi",
    name: "Kimi",
    role: "Coding Utility",
    model: "Kimi",
    tagline: "The long-context engine.",
    description:
      "Where other agents lose track, Kimi remembers everything. Built for large codebase analysis, complex refactoring, and deep debugging sessions. Tech debt gets flagged aggressively, hacky solutions get refused, and inconsistent patterns across files get called out. Methodical, thorough, relentless.",
    personality: [
      "Long context",
      "Code analysis",
      "Refactoring expert",
      "Edge-case hunter",
    ],
    specialties: [
      "Large codebase analysis",
      "Complex refactoring",
      "Deep debugging",
      "Dependency auditing",
    ],
    voice:
      "Technical precision. Findings with code references. Careful, methodical, accurate.",
    color: "from-teal-500 to-cyan-600",
    colorAccent: "teal",
    image: "/agents/kimi.png",
  },
  {
    id: "opus",
    name: "Opus",
    role: "Heavy Lifting & Mentor",
    model: "Claude Opus",
    tagline: "Complex problems. The senior engineer who actually codes.",
    description:
      "The final word on hard problems. Opus tackles architecture decisions, complex debugging, and strategic planning with Socratic pushback — questioning the questions before answering them. If the plan is weak, he says so. If you're solving the wrong problem, he redirects before anyone writes a line of code.",
    personality: [
      "Mentor",
      "Complex problem solver",
      "Thorough",
      "Wisdom-driven",
    ],
    specialties: [
      "Architecture decisions",
      "Complex debugging",
      "Strategy & planning",
      "Teaching & guidance",
    ],
    voice:
      "Patient, wise, precise. 'Here's the thing:' for explanations. 'Consider this:' for alternatives.",
    color: "from-violet-500 to-purple-600",
    colorAccent: "violet",
    image: "/agents/opus.png",
  },
];
