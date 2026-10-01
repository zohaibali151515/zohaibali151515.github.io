export const profile = {
  title: "Software Engineer",
  blurb:
    "Software engineer with 5+ years across the intersection of technology, creativity, and strategy. I've led cross-functional teams, owned product development lifecycles, and run marketing campaigns end-to-end. My current focus is Unreal Engine development, virtual production, and AI — across both B2B and B2C contexts. I enjoy aligning technical work with business goals and being useful across the gap between code, product, and audience.",
};

export const technicalSkills = [
  "Unreal Engine 5 (C++ & Blueprint)",
  "Pixel Streaming & Multiplayer",
  "AI / LLM systems & MCP",
  "3D Gaussian Splatting & Photogrammetry",
  "Python · TypeScript · C++",
  "Virtual Production",
  "Gameplay & System Design",
  "Project Management",
];

export const softSkills = [
  "UX/UI design",
  "Brand strategy",
  "Technical communication",
  "Stakeholder management",
  "Adaptability",
  "Teamwork & mentorship",
];

export type Role = {
  range: string;
  start: string;
  end: string;
  title: string;
  company: string;
  location?: string;
  bullets: string[];
  tags?: string[];
};

export const experience: Role[] = [
  {
    range: "2022 — Present",
    start: "2022",
    end: "Present",
    title: "Unreal Engine Developer",
    company: "Moshpit Studios",
    location: "Lahore, Pakistan",
    bullets: [
      "Lead project planning and task execution for interactive virtual concerts and metaverse events.",
      "Ship pixel-streamed and multiplayer Unreal experiences end-to-end — from packaging through deployment.",
      "Collaborate with designers, developers, and marketing teams to align technical builds with concert and event timelines.",
      "Translate client requirements into technical deliverables; refine internal workflows and automation pipelines.",
    ],
    tags: ["Unreal Engine", "Pixel Streaming", "Multiplayer", "Metaverse Concerts"],
  },
  {
    range: "2020 — 2022",
    start: "2020",
    end: "2022",
    title: "Technical Project Coordinator",
    company: "TectBrains.co",
    bullets: [
      "Managed end-to-end project lifecycle for website and app development projects.",
      "Acted as the liaison between clients and technical teams — kept scope, timeline, and stakeholders aligned.",
      "Gathered business requirements and authored technical documentation and timelines.",
      "Contributed to marketing strategy, client outreach, and service pitching alongside delivery.",
    ],
    tags: ["Project Management", "Stakeholder Comms", "Marketing"],
  },
  {
    range: "2018 — 2019",
    start: "2018",
    end: "2019",
    title: "Junior Game Artist",
    company: "Sitara Games",
    bullets: [
      "Created visual assets — UI, characters, animations — while supporting game prototyping.",
      "Participated in product design and early-stage planning for 2D mobile games.",
      "Mentored design interns and contributed to improving team output quality.",
    ],
    tags: ["Game Art", "2D Mobile", "Prototyping"],
  },
];

export const education = [
  {
    range: "2018 — 2022",
    title: "Bachelor in Software Engineering",
    institution: "CECOS University",
  },
];

export const certifications = [
  { year: "2025", title: "Anthropic AI Fluency", issuer: "Anthropic" },
  { year: "2020", title: "Digital Marketing", issuer: "Self-paced" },
  { year: "2019", title: "Google Digital Garage", issuer: "Google" },
  { year: "2017", title: "Computer Programming", issuer: "Self-paced" },
  { year: "2016", title: "Graphic Designing", issuer: "Self-paced" },
];

export type Capability = {
  pillar: "AI" | "Unreal" | "XR" | "Product" | "Marketing";
  items: { label: string; projectSlug?: string }[];
};

export const capabilities: Capability[] = [
  {
    pillar: "AI",
    items: [
      { label: "LLM apps, agents & tool-use", projectSlug: "zohaib-portfolio-mcp" },
      { label: "Generative video pipelines", projectSlug: "lowpoly-shorts-engine" },
      { label: "AI ↔ Unreal real-time integration", projectSlug: "zohaib-portfolio-mcp" },
      { label: "ML engineering & fine-tuning" },
      { label: "RAG & multi-agent orchestration" },
    ],
  },
  {
    pillar: "Unreal",
    items: [
      { label: "Pixel streaming (cloud-rendered UE)" },
      { label: "Multiplayer & networked experiences", projectSlug: "advanced-sessions" },
      { label: "Custom C++ plugins & engine packaging", projectSlug: "ultimate-3dgs-importer" },
      { label: "Concert / metaverse worlds" },
      { label: "Niagara, Sequencer, Blueprint graph work" },
    ],
  },
  {
    pillar: "XR",
    items: [
      { label: "3D Gaussian Splatting in UE5", projectSlug: "ultimate-3dgs-importer" },
      { label: "Photoreal capture pipelines (COLMAP, Nerfstudio)", projectSlug: "product3d-studio" },
      { label: "Lidar simulation & digital twins", projectSlug: "lidar-twin" },
      { label: "Spatial-ready asset bundling" },
    ],
  },
  {
    pillar: "Product",
    items: [
      { label: "End-to-end product lifecycle ownership", projectSlug: "product3d-studio" },
      { label: "Stakeholder & client communication" },
      { label: "Roadmap, scope, and delivery management" },
      { label: "Consumer brand operations", projectSlug: "piyoright" },
    ],
  },
  {
    pillar: "Marketing",
    items: [
      { label: "Brand identity & packaging design", projectSlug: "piyoright" },
      { label: "Regulatory compliance (PFA, PSQCA)", projectSlug: "piyoright" },
      { label: "Digital marketing & client outreach" },
      { label: "Technical communication & dev-rel writing" },
    ],
  },
];
