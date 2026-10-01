"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Note = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
};

export function NotesPreview({ notes }: { notes: Note[] }) {
  if (notes.length === 0) return null;
  return (
    <section
      id="notes"
      className="relative scroll-mt-20 border-t border-[var(--color-border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="mb-10 flex flex-col items-baseline justify-between gap-3 sm:mb-12 sm:flex-row">
          <h2 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl">
            Notes.
          </h2>
          <Link
            href="/notes"
            data-cursor="hover"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--color-fg-muted)] transition-colors hover:text-iri"
          >
            All notes
            <ArrowUpRight className="size-3.5" />
          </Link>
        </div>

        <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
          {notes.map((n, i) => (
            <motion.li
              key={n.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/notes/${n.slug}`}
                data-cursor="hover"
                className="group flex items-start justify-between gap-6 py-8 transition-colors hover:bg-[var(--color-bg-elev)]/40 sm:py-10"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-medium tracking-tight text-[var(--color-fg)] transition-colors group-hover:text-iri sm:text-2xl">
                    {n.title}
                  </h3>
                  <p className="mt-3 max-w-[68ch] text-base leading-relaxed text-[var(--color-fg-muted)]">
                    {n.description}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2 text-sm text-[var(--color-fg-muted)]">
                  <span>{n.date}</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
