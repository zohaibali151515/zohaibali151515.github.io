"use client";

import { motion } from "framer-motion";
import { experience, education } from "@/lib/experience";

export function Timeline() {
  return (
    <section
      id="experience"
      className="relative scroll-mt-20 border-t border-[var(--color-border)] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10">
        <div className="mb-10 max-w-[720px] sm:mb-12">
          <h2 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl">
            Experience.
          </h2>
          <p className="mt-4 text-pretty text-base leading-relaxed text-[var(--color-fg-muted)] sm:text-lg">
            Five years across delivery — engineering, project coordination, and
            game art.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:gap-14">
          <ol className="md:col-span-8">
            {experience.map((role, i) => (
              <motion.li
                key={role.range + role.company}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border-t border-[var(--color-border)] py-10 first:border-t-0 first:pt-0 last:pb-0"
              >
                <div className="grid gap-6 md:grid-cols-12">
                  <div className="text-sm text-[var(--color-fg-muted)] md:col-span-3">
                    {role.range}
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-xl font-medium tracking-tight sm:text-2xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-base text-[var(--color-fg-muted)]">
                      {role.company}
                      {role.location ? ` · ${role.location}` : ""}
                    </p>
                    <ul className="mt-5 flex flex-col gap-2.5 text-base leading-relaxed text-[var(--color-fg-muted)]">
                      {role.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>

          <div className="md:col-span-4">
            <h3 className="text-sm font-medium tracking-tight text-[var(--color-fg)]">
              Education
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {education.map((e) => (
                <li key={e.title}>
                  <div className="text-sm text-[var(--color-fg-muted)]">
                    {e.range}
                  </div>
                  <div className="mt-1 text-base font-medium tracking-tight">
                    {e.title}
                  </div>
                  <div className="text-base text-[var(--color-fg-muted)]">
                    {e.institution}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
