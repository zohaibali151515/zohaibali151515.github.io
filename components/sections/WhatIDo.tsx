"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Card = {
  number: string;
  title: string;
  body: string;
  examples: { name: string; slug: string }[];
};

const cards: Card[] = [
  {
    number: "01",
    title: "AI Systems",
    body: "LLM applications, agentic tooling, and the infrastructure underneath. Generative video pipelines, RAG, MCP servers, and AI that integrates cleanly with real-time engines — production code, not demos.",
    examples: [
      { name: "Zohaib Portfolio MCP", slug: "zohaib-portfolio-mcp" },
      { name: "LowPoly Shorts Engine", slug: "lowpoly-shorts-engine" },
      { name: "Product3D Studio", slug: "product3d-studio" },
    ],
  },
  {
    number: "02",
    title: "Real-Time 3D",
    body: "Native Unreal Engine work and immersive systems. Custom C++ plugins, 3D Gaussian Splatting, pixel streaming, multiplayer, and virtual production — shipped across UE 5.0 through 5.7.",
    examples: [
      { name: "Ultimate 3DGS Importer", slug: "ultimate-3dgs-importer" },
      { name: "Lidar Twin", slug: "lidar-twin" },
      { name: "Zohaib Portfolio MCP", slug: "zohaib-portfolio-mcp" },
    ],
  },
  {
    number: "03",
    title: "Product Engineering",
    body: "Owning the whole delivery — engineering, product, and go-to-market. Five years across B2B and B2C, from commerce-grade infrastructure to a physical consumer brand on shelves.",
    examples: [
      { name: "Product3D Studio", slug: "product3d-studio" },
      { name: "PiyoRight Mineral Water", slug: "piyoright" },
    ],
  },
];

export function WhatIDo() {
  return (
    <section
      id="about"
      className="relative scroll-mt-20 border-t border-[var(--color-border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="mb-10 max-w-[720px] sm:mb-12">
          <h2 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl">
            What I do.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] sm:text-lg">
            Three surfaces, one practitioner. AI systems, real-time 3D, and the
            product engineering that ties them to something shippable.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col gap-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-6 transition-colors hover:border-[var(--color-iri-violet)] sm:p-7"
            >
              <span className="text-iri text-xs font-mono uppercase tracking-[0.22em]">
                {c.number}
              </span>
              <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                {c.title}
              </h3>
              <p className="text-pretty text-base leading-relaxed text-[var(--color-fg-muted)]">
                {c.body}
              </p>
              <div className="mt-auto border-t border-[var(--color-border)] pt-5">
                <ul className="flex flex-col gap-1.5">
                  {c.examples.map((ex) => (
                    <li key={ex.slug}>
                      <Link
                        href={`/work/${ex.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm text-[var(--color-fg)] transition-colors hover:text-iri"
                      >
                        <span>{ex.name}</span>
                        <span className="text-[var(--color-fg-dim)]">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
