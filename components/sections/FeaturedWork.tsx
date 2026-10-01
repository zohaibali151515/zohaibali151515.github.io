"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function FeaturedWork() {
  // Show 6 across all categories — featured first, then any others that round it out
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const visible = [...featured, ...others].slice(0, 6);

  return (
    <section
      id="work"
      className="section-seam relative scroll-mt-20 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="mb-10 flex flex-col items-baseline justify-between gap-3 sm:flex-row sm:mb-12">
          <h2 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl">
            Selected work.
          </h2>
          <Link
            href="/work"
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-iri-violet)]"
          >
            All 9 projects
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => {
            const headline = p.highlights[0];
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
              >
                <Link
                  href={`/work/${p.slug}`}
                  data-cursor="hover"
                  className="group flex h-full flex-col justify-between gap-5 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5 transition-colors hover:border-[var(--color-iri-violet)] sm:p-6"
                >
                  <div>
                    <div className="mb-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                      {p.tags[0]?.toUpperCase()} · {p.year}
                    </div>
                    <h3 className="text-balance text-lg font-medium leading-tight tracking-tight sm:text-xl">
                      {p.name}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[var(--color-fg-muted)]">
                      {p.tagline}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-4 border-t border-[var(--color-border)] pt-4">
                    {headline ? (
                      <div className="flex flex-col gap-0.5">
                        <span className="text-2xl font-medium tracking-tight text-[var(--color-iri-violet)]">
                          {headline.metric}
                        </span>
                        <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-[var(--color-fg-muted)]">
                          {headline.label}
                        </span>
                      </div>
                    ) : (
                      <span />
                    )}
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-iri-violet)]">
                      Case study
                      <ArrowUpRight className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
