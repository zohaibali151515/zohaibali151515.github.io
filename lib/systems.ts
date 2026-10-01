export type SystemNode = {
  glyph: string;
  title: string;
  subtitle: string;
};

export type SystemPipeline = {
  slug: string;
  name: string;
  detail: string;
  meta: { label: string; value: string }[];
  nodes: SystemNode[];
  projectSlug?: string;
};

export const pipelines: SystemPipeline[] = [
  {
    slug: "product3d",
    name: "Product3D Studio — capture-to-commerce pipeline",
    detail:
      "A 30-second product video goes in. A shoppable 3D viewer plus a Shopify-ready bundle comes out.",
    meta: [
      { label: "DURATION", value: "minutes" },
      { label: "GPU STAGES", value: "4" },
      { label: "OUTPUT", value: "viewer + AR + variants" },
    ],
    projectSlug: "product3d-studio",
    nodes: [
      { glyph: "01", title: "Capture", subtitle: "30s phone clip" },
      { glyph: "02", title: "COLMAP", subtitle: "Structure-from-Motion" },
      { glyph: "03", title: "Nerfstudio", subtitle: "splatfacto training" },
      { glyph: "04", title: "SparkJS", subtitle: "per-splat SDF edit" },
      { glyph: "05", title: "Bundle", subtitle: "Shopify embed + AR" },
    ],
  },
  {
    slug: "mcp",
    name: "Unreal MCP Server — agent control plane",
    detail:
      "An MCP-aware AI assistant drives Unreal Engine through a native C++ Automation Bridge — typed, sandboxed, and version-stable across UE 5.0–5.7.",
    meta: [
      { label: "TOOL CATEGORIES", value: "10+" },
      { label: "UE VERSIONS", value: "5.0–5.7" },
      { label: "TRANSPORT", value: "stdio + native IPC" },
    ],
    projectSlug: "zohaib-portfolio-mcp",
    nodes: [
      { glyph: "01", title: "LLM Client", subtitle: "Claude / Cursor" },
      { glyph: "02", title: "MCP Server", subtitle: "TypeScript + Rust/WASM" },
      { glyph: "03", title: "C++ Bridge", subtitle: "Automation plugin" },
      { glyph: "04", title: "UE5 Editor", subtitle: "engine-native ops" },
    ],
  },
  {
    slug: "lowpoly",
    name: "LowPoly Shorts Engine — prompt-to-MP4",
    detail:
      "Single prompt becomes an original 9:16 short — concept, scene plan, voiceover, captions, hook overlay, single MP4. Validated on a 4 GB laptop GPU.",
    meta: [
      { label: "OUTPUT", value: "9:16 MP4" },
      { label: "MIN GPU", value: "4 GB" },
      { label: "DETERMINISM", value: "seeded" },
    ],
    projectSlug: "lowpoly-shorts-engine",
    nodes: [
      { glyph: "01", title: "Prompt", subtitle: "freeform input" },
      { glyph: "02", title: "Plan", subtitle: "hook + 5–7 scenes" },
      { glyph: "03", title: "Scenes", subtitle: "SDXL-Turbo + parallax" },
      { glyph: "04", title: "Audio", subtitle: "TTS + word captions" },
      { glyph: "05", title: "MP4", subtitle: "single deliverable" },
    ],
  },
];
