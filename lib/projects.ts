export type ProjectStatus =
  | "shipped"
  | "closed-beta"
  | "research"
  | "published"
  | "wip";
export type ProjectTag = "ai" | "unreal" | "xr" | "product" | "infra" | "marketing";

export type Project = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  status: ProjectStatus;
  tags: ProjectTag[];
  year: string;
  role: string;
  stack: string[];
  cover?: string;
  video?: string;
  featured?: boolean;
  links?: { label: string; href: string }[];
  problem: string;
  approach: string[];
  outcome: string[];
  highlights: { metric: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "product3d-studio",
    name: "Product3D Studio",
    shortName: "Product3D",
    tagline: "Shoppable 3D pages from a 30-second product video.",
    summary:
      "Commerce-grade Gaussian Splatting pipeline that turns real product footage into photoreal 3D viewers, AR-ready files, and Shopify embeds.",
    status: "closed-beta",
    tags: ["ai", "product", "infra"],
    year: "2025",
    role: "Solo build — pipeline, backend, frontend, product",
    stack: [
      "React 19",
      "TypeScript",
      "Three.js",
      "SparkJS",
      "FastAPI",
      "Celery",
      "PostgreSQL",
      "Redis",
      "MinIO/S3",
      "COLMAP",
      "Nerfstudio",
      "Stripe",
      "Shopify",
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zohaibaliqureshi15/product3d-studio",
      },
    ],
    problem:
      "E-commerce stores can't afford the studio time or 3D-artist budget to produce shoppable 3D product pages. The bar for photoreal product 3D is COLMAP + Nerfstudio + a GPU pipeline — not a workflow most merchants will run themselves.",
    approach: [
      "Built a capture → quality → isolated-product → export-bundle → Shopify-publish pipeline as a SaaS foundation",
      "COLMAP for Structure-from-Motion, Nerfstudio (splatfacto) for Gaussian Splatting training, SparkJS for per-splat SDF color editing in the browser",
      "FastAPI + async SQLAlchemy + Celery GPU task queue for long-running training jobs with SSE progress streams",
      "React 19 + @react-three/fiber viewer with variant support and embeddable Shopify widget",
    ],
    outcome: [
      "End-to-end pipeline working in closed beta — 30s phone capture in, shoppable 3D viewer + AR file out",
      "Architected for multi-tenancy with per-tenant storage isolation and Stripe billing wiring",
      "Production-grade docs: architecture audit, baseline benchmarks, production-gap tracking, roadmap",
    ],
    highlights: [
      { metric: "30s", label: "capture time" },
      { metric: "4", label: "GPU stages" },
      { metric: "1", label: "Shopify-ready bundle" },
    ],
  },
  {
    slug: "smartwheels",
    name: "SmartWheels",
    shortName: "SmartWheels",
    tagline: "UE5 + AR car configurator — my Bachelor's FYP, shipped to the family business.",
    summary:
      "A real-time 3D and Augmented Reality car configurator for my family's automotive business. Unreal Engine 5 on desktop with an Android AR companion app. Built end-to-end as my Final Year Project.",
    status: "shipped",
    tags: ["unreal", "xr", "product"],
    year: "2022",
    role: "Solo build — UE5 project, AR app, asset pipeline, FYP deliverables",
    stack: ["Unreal Engine 5", "Blueprint", "UE Variant Manager", "Android AR"],
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zohaibaliqureshi15/smartwheels",
      },
    ],
    problem:
      "My family runs a car business. Customers couldn't visualise how a paint job, rim choice, or accessory would look on their actual model before buying. The off-the-shelf configurators were SaaS-priced and not built for the inventory we carried.",
    approach: [
      "Modeled the project around our actual stock catalogue, paint options, and accessory SKUs",
      "Built the UE5 desktop configurator (Blueprint + Variant Manager) for showroom use",
      "Built an Android AR companion (UE5 ARCore) so customers could see the configured car on their own driveway",
      "Sourced and prepped 3D assets for the cars and accessories; tied UI in UMG",
    ],
    outcome: [
      "Shipped as the FYP — defended, certificates received, thesis submitted",
      "In production use at the family business as the customer-facing configurator",
      "Foundation for the web-native follow-up — Product3D Studio and GS Configurator",
    ],
    highlights: [
      { metric: "FYP", label: "shipped + defended" },
      { metric: "2", label: "platforms (desktop + AR)" },
      { metric: "Family", label: "business in use" },
    ],
  },
  {
    slug: "lowpoly-shorts-engine",
    name: "LowPoly Shorts Engine",
    shortName: "LowPoly",
    tagline: "Prompt in, 9:16 short out. Different every time.",
    summary:
      "AI video engine that turns a single prompt into a finished vertical Short — concept, scene plan, voiceover, captions, hook overlay, single MP4. Runs on a 4 GB laptop GPU.",
    status: "closed-beta",
    tags: ["ai", "infra", "product"],
    year: "2025",
    role: "Solo build — engine, worker, web",
    stack: [
      "Python",
      "SDXL-Turbo",
      "PyTorch",
      "FastAPI",
      "Next.js",
      "pnpm workspaces",
      "Docker",
      "SSE",
    ],
    featured: true,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zohaibaliqureshi15/lowpoly-shorts-engine",
      },
    ],
    problem:
      "Faceless vertical-short creators spend hours stitching prompts → TTS → captions → editing. Existing tools are either too generic (no original concept) or too expensive (cloud-only with $/minute pricing).",
    approach: [
      "Single-prompt → VideoPlan (title, hook, 5–7 scenes, VO, CTA) → SDXL-Turbo + parallax scene clips → TTS + word-level captions → hook overlay → final MP4",
      "Monorepo: apps/api (FastAPI), apps/web (Next.js), apps/worker (Python GPU), shared content packs",
      "Optimized for laptop GPUs — validated on a 4 GB GTX 1650 — with optional LAN worker fallback for heavier model variants",
      "Production checklist, manual QA harness, launch matrix, real-project QA reports all version-controlled",
    ],
    outcome: [
      "Engine production-tested on a single host; SaaS layer being hardened toward production",
      "Reproducible: same prompt + seed = same video; same prompt without seed = a different video every time",
      "Closed-beta-grade docs (launch matrix, QA reports, contributing guide)",
    ],
    highlights: [
      { metric: "9:16", label: "vertical native" },
      { metric: "4GB", label: "min GPU" },
      { metric: "1", label: "prompt in" },
    ],
  },
  {
    slug: "piyoright",
    name: "PiyoRight Mineral Water",
    shortName: "PiyoRight",
    tagline: "From label design to launch — a real consumer brand I founded.",
    summary:
      "Founded and operated a bottled mineral water brand: brand identity, packaging design, regulatory compliance, retail and digital marketing. The lessons of running it now live in a small ops dashboard demo.",
    status: "shipped",
    tags: ["product", "marketing"],
    year: "2023–2024",
    role: "Founder / brand & product",
    stack: [
      "Brand strategy",
      "Packaging design",
      "Regulatory (Punjab Food Authority, PSQCA)",
      "Digital marketing",
      "Next.js (ops demo)",
    ],
    featured: true,
    links: [
      {
        label: "Ops demo (GitHub)",
        href: "https://github.com/zohaibaliqureshi15/piyoright-ops",
      },
    ],
    problem:
      "Most of my work lives in software. PiyoRight was the chance to take a physical consumer product all the way through brand, packaging, compliance, retail, and marketing — and learn what that requires firsthand.",
    approach: [
      "Designed brand identity, bottle labels, caps, and supporting collateral",
      "Obtained Punjab Food Authority and PSQCA approvals required for sale",
      "Ran Instagram-led digital marketing and QR-driven retail acquisition",
      "Built the ops dashboard demo (Next.js) post-hoc, encoding the patterns I actually needed during the business",
    ],
    outcome: [
      "A real product on shelves with full regulatory paperwork, end-to-end branding, and a live digital marketing footprint",
      "Small but honest ops dashboard published as a portfolio demo of the ops thinking",
    ],
    highlights: [
      { metric: "End-to-end", label: "brand + product" },
      { metric: "PFA", label: "compliant" },
      { metric: "Retail", label: "+ digital" },
    ],
  },
  {
    slug: "zohaib-portfolio-mcp",
    name: "Zohaib Portfolio MCP",
    shortName: "Portfolio MCP",
    tagline: "An MCP server that exposes my portfolio as queryable tools for AI assistants.",
    summary:
      "A small Model Context Protocol server I wrote so AI assistants — Claude Desktop, Cursor, anything MCP-aware — can answer questions about my work directly through tools like list_projects, get_project, list_experience, list_notes, and search.",
    status: "published",
    tags: ["ai", "infra"],
    year: "2025",
    role: "Creator & maintainer",
    stack: ["TypeScript", "@modelcontextprotocol/sdk", "Node.js"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zohaibaliqureshi15/zohaib-portfolio-mcp",
      },
    ],
    problem:
      "When recruiters and collaborators talk to AI assistants about me, those assistants either fabricate or scrape my site. There's no structured surface for an LLM to query.",
    approach: [
      "Wrote a small, focused MCP server in TypeScript using the official @modelcontextprotocol/sdk",
      "Exposed five tools — list_projects, get_project, list_experience, list_notes, search — backed by static portfolio data",
      "Designed for stdio transport so it drops cleanly into Claude Desktop, Cursor, and similar clients",
    ],
    outcome: [
      "A clean, self-contained MCP server demonstrating MCP authoring (not just usage)",
      "Installable in any MCP client; ~250 LoC; minimal dependencies beyond the SDK",
    ],
    highlights: [
      { metric: "5", label: "MCP tools" },
      { metric: "MIT", label: "open source" },
      { metric: "Stdio", label: "transport" },
    ],
  },
  {
    slug: "ultimate-3dgs-importer",
    name: "Ultimate 3DGS Importer",
    shortName: "Ultimate 3DGS",
    tagline: "Native hierarchical 3DGS architecture for Unreal Engine — design + scaffolding.",
    summary:
      "A long-form plan + early plugin scaffolding for first-class hierarchical 3D Gaussian Splatting in Unreal Engine 5.7. Architecture document shipped; runtime in progress.",
    status: "wip",
    tags: ["unreal", "xr", "ai"],
    year: "2025",
    role: "Author — architecture + plugin scaffolding",
    stack: ["Unreal Engine 5.7", "C++", "HLSL", "3D Gaussian Splatting"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zohaibaliqureshi15/ultimate-3dgs-importer",
      },
    ],
    problem:
      "Unreal Engine 5 has no native importer for 3D Gaussian Splats. Existing community plugins don't integrate with World Partition, can't be lit or collided with, and don't stream large captures efficiently.",
    approach: [
      "Wrote a strategic architecture document covering hierarchical LOD, World Partition integration, streaming, runtime data formats",
      "Built the plugin scaffolding (uplugin manifest, build rules, module entry) and adjacent runtime tooling (EQS generator, CSV utilities used in capture sessions)",
      "Authored a Python setup script that bootstraps the next-iteration plugin layout from the architecture document",
    ],
    outcome: [
      "Architecture published as a public reference",
      "Scaffolding committed; runtime work in progress",
      "Honest about the state — the design is shipped, the splat runtime isn't yet",
    ],
    highlights: [
      { metric: "Design", label: "shipped" },
      { metric: "Scaffold", label: "committed" },
      { metric: "WIP", label: "runtime" },
    ],
  },
  {
    slug: "advanced-sessions",
    name: "Web Session Bootstrap (for AdvancedSessions)",
    shortName: "AdvSessions Web",
    tagline: "URL-driven multiplayer session joins for Moshpit's web-driven UE concerts.",
    summary:
      "A thin Unreal Engine plugin that wraps Joshua Statzer's open-source AdvancedSessions plugin and adds a URL-bootstrap flow — audience opens a link, UE client joins the right session. Built at Moshpit Studios; published openly with the upstream credited.",
    status: "shipped",
    tags: ["unreal"],
    year: "2024",
    role: "Author — wrapper plugin on top of Mordentral's AdvancedSessions (MIT)",
    stack: ["Unreal Engine", "C++", "OnlineSubsystem", "AdvancedSessions"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zohaibaliqureshi15/advanced-sessions-web-bootstrap",
      },
      {
        label: "Upstream (Mordentral)",
        href: "https://github.com/mordentral/AdvancedSessionsPlugin",
      },
    ],
    problem:
      "UE's built-in session APIs don't expose a clean web-driven join flow. For Moshpit's virtual concerts the audience needed to click a URL and have the UE client land in the right session — without manual lobby flow.",
    approach: [
      "Built on top of the open-source AdvancedSessions plugin by Mordentral (MIT, not vendored — installed as a dependency)",
      "Wrote a small wrapper plugin: URL parser, command-line entry point, Blueprint helpers",
      "Documented an OS-level custom protocol registration (Windows / macOS / Linux) for the web → engine handoff",
      "Designed a token-validated URL schema with explicit syntactic-vs-cryptographic split",
    ],
    outcome: [
      "Reusable URL-bootstrap pattern used across Moshpit's virtual-concert builds",
      "Open-sourced as a portable wrapper anyone running AdvancedSessions can install",
      "Upstream credit + license preserved (no re-publishing of AdvancedSessions itself)",
    ],
    highlights: [
      { metric: "URL → join", label: "single-click" },
      { metric: "MIT", label: "open source" },
    ],
  },
  {
    slug: "lidar-twin",
    name: "Lidar System in Unreal Twin",
    shortName: "Lidar Twin",
    tagline: "Bounding-box LiDAR scanning that exports XYZRGB point clouds from inside UE.",
    summary:
      "A UE digital-twin scanning system: place a bounding box, the plugin generates a sample grid, fires complex line traces, samples colour via SceneCapture2D, and exports XYZRGB. Built at Moshpit Studios; the portable algorithm is open-sourced.",
    status: "shipped",
    tags: ["unreal", "xr"],
    year: "2025",
    role: "Engineer — designed the sample-grid algorithm + UE C++ implementation for a Moshpit client engagement",
    stack: ["Unreal Engine", "C++", "Python", "Scene rendering APIs"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zohaibaliqureshi15/lidar-twin-ue",
      },
    ],
    problem:
      "Digital twins need physically-grounded sensor data — LiDAR in particular — to feed downstream perception, mapping, and 3DGS reconstruction.",
    approach: [
      "Bounding-box → X/Y grid → multi-layer perimeter sample points (configurable inner inset rings)",
      "From each sample origin, fire many complex (triangle-precise) line traces up to max Range",
      "For each hit, project world → pixel via SceneCapture2D and sample colour → XYZRGB",
      "Dedupe/filter and export CSV / XYZ / XYZRGB for downstream splat or point-cloud reconstruction",
    ],
    outcome: [
      "Working LiDAR simulation in a UE digital twin, feeding downstream perception experiments",
      "Sample-grid algorithm open-sourced in portable Python with unit tests; engine-bound parts remain in client repo",
    ],
    highlights: [
      { metric: "Complex", label: "triangle-precise traces" },
      { metric: "XYZRGB", label: "exports" },
      { metric: "Configurable", label: "grid / margins / layers" },
    ],
  },
  {
    slug: "agentic-cinematographer",
    name: "Agentic Cinematographer",
    shortName: "Agentic Cine",
    tagline: "An LLM-driven camera operator for real-time scenes.",
    summary:
      "Technical plan + agent-loop scaffold for an LLM-driven director that frames, blocks, and cuts shots inside real-time engines. The plan and the portable contract are open; the production UE actuation lives in client repos.",
    status: "research",
    tags: ["ai", "unreal"],
    year: "2025",
    role: "Author of the technical plan + agent-loop scaffold; built at Moshpit Studios for a client engagement",
    stack: ["LLM agents", "TypeScript", "Unreal Engine", "Sequencer", "MCP"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/zohaibaliqureshi15/agentic-cinematographer",
      },
    ],
    problem:
      "Virtual production and game cinematics still rely on hand-keyed cameras. There's no agent that can read a scene and decide where to point the camera.",
    approach: [
      "Wrote a technical plan framing the agent loop, scene-state schema, shot grammar, and actuation contract",
      "Built a portable TypeScript scaffold: Scene → Director Agent (LLM) → ShotChoice → deterministic ShotCommand translator",
      "Designed to compose with an MCP-style tool surface for in-engine actuation",
    ],
    outcome: [
      "Technical plan published (open-sourced as PDF)",
      "Agent-loop contract committed with a runnable deterministic demo (no LLM keys required)",
      "Production UE actuation remains proprietary to the Moshpit client engagement",
    ],
    highlights: [
      { metric: "Plan", label: "published" },
      { metric: "Scaffold", label: "runnable" },
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const tagLabel: Record<ProjectTag, string> = {
  ai: "AI",
  unreal: "Unreal",
  xr: "XR",
  product: "Product",
  infra: "Infra",
  marketing: "Marketing",
};

export const statusLabel: Record<ProjectStatus, string> = {
  shipped: "SHIPPED",
  "closed-beta": "CLOSED BETA",
  research: "RESEARCH",
  published: "PUBLISHED",
  wip: "WORK IN PROGRESS",
};
