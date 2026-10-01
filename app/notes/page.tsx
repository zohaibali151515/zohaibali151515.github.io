import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getAllNotes } from "@/lib/notes";
import { SectionHeader } from "@/components/chrome/SectionHeader";
import { Footer } from "@/components/chrome/Footer";

export const metadata: Metadata = {
  title: "Notes",
  description:
    "Working notes, research write-ups, and field reports on AI, Unreal Engine, immersive technology, and the intersection of all three.",
};

export default function NotesIndex() {
  const notes = getAllNotes();

  return (
    <>
      <section className="relative isolate scroll-mt-20 border-b border-[var(--color-border)] bg-grid pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <SectionHeader index="N" title="Notes & research." kicker="LIVE NOTEBOOK" />
              <p className="mt-6 max-w-[60ch] text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] sm:text-lg">
                Working notes from building AI infra, Unreal Engine plugins, and the
                bridges between them. Less &ldquo;hot take&rdquo;, more lab notebook.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          {notes.length === 0 ? (
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-10 text-center">
              <h3 className="text-2xl font-medium">No notes yet.</h3>
              <p className="mt-2 text-[var(--color-fg-muted)]">
                MDX posts will appear here once added to{" "}
                <code className="font-mono text-[var(--color-fg)]">content/notes</code>.
              </p>
            </div>
          ) : (
            <ul className="grid divide-y divide-[var(--color-border)]">
              {notes.map((n, i) => (
                <li key={n.slug}>
                  <Link
                    href={`/notes/${n.slug}`}
                    data-cursor="hover"
                    className="group grid items-baseline gap-3 py-7 transition-colors hover:bg-[var(--color-bg-elev)] md:grid-cols-12 md:gap-6"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)] md:col-span-1">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="md:col-span-7">
                      <h3 className="text-balance text-xl font-medium tracking-tight transition-colors group-hover:text-iri sm:text-2xl">
                        {n.title}
                      </h3>
                      <p className="mt-2 max-w-[70ch] text-pretty text-sm leading-relaxed text-[var(--color-fg-muted)]">
                        {n.description}
                      </p>
                      {n.tags.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {n.tags.map((t: string) => (
                            <span
                              key={t}
                              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] md:col-span-2">
                      {n.readingTime}
                    </div>
                    <div className="flex items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] md:col-span-2 md:justify-end">
                      <span>{n.date}</span>
                      <ArrowUpRight className="size-4 text-[var(--color-fg-dim)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-iri" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
