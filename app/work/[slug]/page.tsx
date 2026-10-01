import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { getProject, projects, statusLabel, tagLabel } from "@/lib/projects";
import { Footer } from "@/components/chrome/Footer";

type RouteParams = { slug: string };

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return { title: "Project not found" };
  return {
    title: p.name,
    description: p.tagline,
    openGraph: { title: p.name, description: p.tagline },
  };
}

const statusDotColor: Record<string, string> = {
  shipped: "var(--color-status-live)",
  published: "var(--color-status-live)",
  "closed-beta": "var(--color-status-beta)",
  research: "var(--color-status-research)",
  wip: "var(--color-status-beta)",
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  // Find next & previous projects for footer nav
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  const prev = projects[(idx - 1 + projects.length) % projects.length];

  return (
    <>
      <article>
        {/* Header */}
        <header className="relative isolate scroll-mt-20 border-b border-[var(--color-border)] bg-grid pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-[420px] max-w-[1100px] opacity-50"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(75,108,255,0.3), transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
            <Link
              href="/work"
              data-cursor="hover"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] hover:text-iri"
            >
              <ArrowLeft className="size-3.5" /> All projects
            </Link>

            <div className="mt-8 grid gap-10 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="mb-5 flex flex-wrap items-center gap-3 text-sm text-[var(--color-fg-muted)]">
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden
                      className="inline-block size-1.5 rounded-full"
                      style={{ background: statusDotColor[project.status] }}
                    />
                    {statusLabel[project.status]}
                  </span>
                  <span className="text-[var(--color-fg-dim)]">·</span>
                  <span>{project.year}</span>
                </div>
                <h1 className="text-balance text-4xl font-medium leading-[0.95] tracking-[-0.02em] sm:text-5xl md:text-6xl">
                  {project.name}
                </h1>
                <p className="mt-5 max-w-[60ch] text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)] sm:text-xl">
                  {project.tagline}
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]"
                    >
                      {tagLabel[t]}
                    </span>
                  ))}
                </div>
                {project.links && project.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        data-cursor="hover"
                        className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-bright)] bg-[var(--color-bg-elev)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] hover:border-[var(--color-iri-violet)]"
                      >
                        {l.label}
                        <ArrowUpRight className="size-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* Meta panel */}
              <aside className="md:col-span-4">
                <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5 font-mono text-[11px]">
                  <div className="border-b border-[var(--color-border)] pb-3 text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                    SPEC SHEET
                  </div>
                  <dl className="space-y-2.5 pt-4">
                    <Row k="STATUS" v={statusLabel[project.status]} />
                    <Row k="YEAR" v={project.year} />
                    <Row k="ROLE" v={project.role} />
                  </dl>
                </div>
              </aside>
            </div>
          </div>
        </header>

        {/* Highlights bar */}
        <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-elev)]">
          <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-[var(--color-border)] px-5 sm:grid-cols-3 sm:px-8">
            {project.highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col gap-1.5 px-2 py-8 sm:px-5"
              >
                <span className="text-iri text-3xl font-medium tracking-tight sm:text-4xl">
                  {h.metric}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
                  {h.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Body */}
        <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 md:grid-cols-12 md:gap-16">
            {/* Stack */}
            <aside className="order-2 md:order-1 md:col-span-4">
              <div className="sticky top-24">
                <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                  Stack
                </h4>
                <ul className="flex flex-wrap gap-1.5">
                  {project.stack.map((s) => (
                    <li
                      key={s}
                      className="rounded-md border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-1 font-mono text-[10px] tracking-tight text-[var(--color-fg)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Sections */}
            <div className="order-1 flex flex-col gap-12 md:order-2 md:col-span-8">
              <Block heading="The problem" content={project.problem} />
              <BlockList heading="Approach" items={project.approach} />
              <BlockList heading="Outcome" items={project.outcome} />
            </div>
          </div>
        </section>

        {/* Footer nav */}
        <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-elev)]">
          <div className="mx-auto grid max-w-[1400px] divide-y divide-[var(--color-border)] md:grid-cols-2 md:divide-x md:divide-y-0">
            <NavCard direction="prev" project={prev} />
            <NavCard direction="next" project={next} />
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-3 text-[11px]">
      <dt className="shrink-0 text-[var(--color-fg-dim)]">{k}</dt>
      <dd className="text-right text-[var(--color-fg)]">{v}</dd>
    </div>
  );
}

function Block({ heading, content }: { heading: string; content: string }) {
  return (
    <div>
      <h2 className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
        <span className="text-iri">·</span>
        {heading}
      </h2>
      <p className="text-pretty text-lg leading-relaxed text-[var(--color-fg)]">
        {content}
      </p>
    </div>
  );
}

function BlockList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div>
      <h2 className="mb-4 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
        <span className="text-iri">·</span>
        {heading}
      </h2>
      <ul className="flex flex-col gap-3">
        {items.map((b, i) => (
          <li key={i} className="flex gap-3 text-base leading-relaxed text-[var(--color-fg)]">
            <span className="mt-2 inline-block size-1.5 shrink-0 rounded-full bg-[var(--color-iri-violet)]" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NavCard({
  direction,
  project,
}: {
  direction: "prev" | "next";
  project: { slug: string; name: string; tagline: string };
}) {
  return (
    <Link
      href={`/work/${project.slug}`}
      data-cursor="hover"
      className="group flex flex-col gap-2 p-8 transition-colors hover:bg-[var(--color-bg)]"
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
        {direction === "prev" ? "← Previous project" : "Next project →"}
      </span>
      <span className="text-xl font-medium tracking-tight transition-colors group-hover:text-iri">
        {project.name}
      </span>
      <span className="text-sm text-[var(--color-fg-muted)]">{project.tagline}</span>
    </Link>
  );
}
