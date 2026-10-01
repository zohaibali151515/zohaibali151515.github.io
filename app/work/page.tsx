import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, statusLabel, tagLabel } from "@/lib/projects";
import { SectionHeader } from "@/components/chrome/SectionHeader";
import { Footer } from "@/components/chrome/Footer";

export const metadata: Metadata = {
  title: "Work",
  description:
    "All projects — AI infrastructure, Unreal Engine plugins, MCP servers, immersive experiences, and consumer products.",
};

export default function WorkIndex() {
  return (
    <>
      <section className="relative isolate scroll-mt-20 border-b border-[var(--color-border)] bg-grid pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionHeader index="01" title="Selected works." kicker="ALL PROJECTS" />
              <p className="mt-6 max-w-[60ch] text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] sm:text-lg">
                Eight projects across AI infrastructure, Unreal Engine, immersive
                pipelines, and consumer product — sorted by recency.
              </p>
            </div>
            <div className="md:col-span-5 md:mt-auto">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5 font-mono text-[10px] uppercase tracking-[0.2em]">
                <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-3 text-[var(--color-fg-muted)]">
                  <span>SUMMARY</span>
                  <span className="text-[var(--color-status-live)]">● {projects.length} TOTAL</span>
                </div>
                <dl className="mt-3 space-y-1.5 text-[var(--color-fg)]">
                  <Row k="SHIPPED" v={`${projects.filter((p) => p.status === "shipped" || p.status === "published").length}`} />
                  <Row k="CLOSED BETA" v={`${projects.filter((p) => p.status === "closed-beta").length}`} />
                  <Row k="RESEARCH" v={`${projects.filter((p) => p.status === "research").length}`} />
                  <Row k="DOMAINS" v="AI · UE5 · XR · Product" />
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <ul className="grid divide-y divide-[var(--color-border)]">
            {projects.map((p, i) => (
              <li key={p.slug}>
                <Link
                  href={`/work/${p.slug}`}
                  data-cursor="hover"
                  className="group grid items-center gap-3 py-6 transition-colors hover:bg-[var(--color-bg-elev)] md:grid-cols-12 md:gap-6"
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)] md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="text-xl font-medium tracking-tight transition-colors group-hover:text-iri sm:text-2xl">
                      {p.name}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                      {p.tagline}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 md:col-span-3">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]"
                      >
                        {tagLabel[t]}
                      </span>
                    ))}
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] md:col-span-2">
                    {statusLabel[p.status]}
                  </div>
                  <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] md:col-span-2 md:justify-end">
                    <span>{p.year}</span>
                    <ArrowUpRight className="size-4 text-[var(--color-fg-dim)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-iri" />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <dt className="text-[var(--color-fg-muted)]">{k}</dt>
      <dd>{v}</dd>
    </div>
  );
}
