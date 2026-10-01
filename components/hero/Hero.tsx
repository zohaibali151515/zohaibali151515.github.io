"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowRight, Github } from "lucide-react";
import { site } from "@/lib/site";

const HeroCanvas = dynamic(
  () => import("./HeroCanvas").then((m) => m.HeroCanvas),
  { ssr: false }
);

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-[72svh] items-center overflow-hidden border-b border-[var(--color-border)]"
    >
      {/* Interactive iridescent blob — cursor-parallax wired in HeroCanvas */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-90">
        <HeroCanvas />
        {/* Left-to-right vignette so headline stays crisp; blob lives on the right */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, var(--color-bg) 0%, color-mix(in srgb, var(--color-bg) 60%, transparent) 35%, transparent 65%)",
          }}
        />
        {/* Soft fade into next section */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-28"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, var(--color-bg) 92%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 py-16 sm:px-10 sm:py-20">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-12">
          {/* LEFT — narrative */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[var(--color-fg-muted)]"
            >
              <span className="inline-block size-1.5 rounded-full bg-[var(--color-status-live)]" />
              Available · open to roles
              <span className="text-[var(--color-fg-dim)]">/</span>
              <span className="text-[var(--color-fg-dim)]">{site.location}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="text-balance text-[clamp(2.25rem,5.8vw,4.75rem)] font-medium leading-[0.96] tracking-[-0.025em]"
            >
              I ship the bridge between{" "}
              <span className="text-iri">AI</span> and{" "}
              <span className="text-iri">real-time worlds</span>
              <span className="text-[var(--color-fg-muted)]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-5 max-w-[60ch] text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] sm:text-lg"
            >
              {site.name}, software engineer. Production AI infrastructure, native
              Unreal Engine plugins, an MCP server, and a real consumer brand on
              shelves. Five years and a dozen shipped systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-7 flex flex-wrap items-center gap-3"
            >
              <a
                href={site.resumeUrl}
                download
                data-cursor="hover"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-5 py-2.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
              >
                <ArrowDownToLine className="size-4" />
                Download Résumé
              </a>
              <a
                href="#work"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-bright)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-iri-violet)]"
              >
                View Work
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-border-bright)] hover:text-[var(--color-fg)]"
              >
                <Github className="size-4" />
                9 repos
              </a>
            </motion.div>
          </div>

          {/* RIGHT — data strip: dense facts, no fluff */}
          <motion.aside
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="md:col-span-5"
          >
            <div className="rounded-2xl border border-[var(--color-border-bright)] bg-[var(--color-bg-elev)]/70 backdrop-blur-sm">
              <header className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-2 text-[10px] font-mono uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
                <span>STATUS</span>
                <span className="text-[var(--color-status-live)]">● ACTIVE</span>
              </header>
              <dl className="grid grid-cols-2 divide-x divide-[var(--color-border)]">
                <Cell metric="12+" label="Systems shipped" />
                <Cell metric="9" label="Repos public" />
              </dl>
              <dl className="grid grid-cols-2 divide-x divide-[var(--color-border)] border-t border-[var(--color-border)]">
                <Cell metric="1" label="NPM · MCP Registry" />
                <Cell metric="5+" label="Years across stack" />
              </dl>
              <ul className="border-t border-[var(--color-border)] divide-y divide-[var(--color-border)] text-sm">
                <Row k="Stack" v="AI · UE5 · TS · PY · C++" />
                <Row k="Domains" v="AI · Real-time 3D · Product" />
                <Row k="Open to" v="Mid-level engineering roles" />
                <Row k="Email" v={site.email} href={`mailto:${site.email}`} />
              </ul>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Cell({ metric, label }: { metric: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5 px-4 py-3.5">
      <span className="text-2xl font-medium tracking-tight text-[var(--color-iri-violet)] sm:text-3xl">
        {metric}
      </span>
      <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
        {label}
      </span>
    </div>
  );
}

function Row({
  k,
  v,
  href,
}: {
  k: string;
  v: string;
  href?: string;
}) {
  const value = href ? (
    <a
      href={href}
      className="text-[var(--color-fg)] hover:text-[var(--color-iri-violet)]"
    >
      {v}
    </a>
  ) : (
    <span className="text-[var(--color-fg)]">{v}</span>
  );
  return (
    <li className="flex items-center justify-between gap-3 px-4 py-2.5">
      <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
        {k}
      </span>
      <span className="text-right text-sm">{value}</span>
    </li>
  );
}
