"use client";

import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowUpRight, Mail } from "lucide-react";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 border-t border-[var(--color-border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="max-w-[820px]"
        >
          <h2 className="text-balance text-[clamp(2rem,5vw,3.75rem)] font-medium leading-[0.98] tracking-tight">
            Let&rsquo;s build the next{" "}
            <span className="text-iri">real-time AI</span> experience.
          </h2>
          <p className="mt-5 max-w-[55ch] text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] sm:text-lg">
            Open to engineering roles where AI and immersive tech overlap.
            Full-time, contract, and R&amp;D collaborations welcome. I respond
            within 24 hours.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] px-6 py-3.5 text-sm font-medium text-[var(--color-bg)] transition-opacity hover:opacity-90"
            >
              <Mail className="size-4" />
              {site.email}
            </a>
            <a
              href={site.resumeUrl}
              download
              data-cursor="hover"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-bright)] px-6 py-3.5 text-sm font-medium text-[var(--color-fg)] transition-colors hover:border-[var(--color-iri-violet)]"
            >
              <ArrowDownToLine className="size-4" />
              Download Résumé
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 border-t border-[var(--color-border)] pt-6 text-sm text-[var(--color-fg-muted)]">
            <li>
              <a
                href={site.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-iri"
              >
                LinkedIn
                <ArrowUpRight className="size-3.5" />
              </a>
            </li>
            <li>
              <a
                href={site.socials.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-iri"
              >
                GitHub
                <ArrowUpRight className="size-3.5" />
              </a>
            </li>
            <li>
              <a
                href={site.socials.x}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-iri"
              >
                X
                <ArrowUpRight className="size-3.5" />
              </a>
            </li>
            <li className="ml-auto text-[var(--color-fg-dim)]">
              {site.location}
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
