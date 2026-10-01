import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownToLine, ArrowLeft } from "lucide-react";
import { site } from "@/lib/site";
import {
  certifications,
  education,
  experience,
  profile,
  softSkills,
  technicalSkills,
} from "@/lib/experience";
import { Footer } from "@/components/chrome/Footer";
import { PrintButton } from "./PrintButton";

export const metadata: Metadata = {
  title: "Résumé",
  description:
    "Résumé of Zohaib Ali — Software Engineer specializing in Unreal Engine, AI systems, and immersive technology.",
};

export default function ResumePage() {
  return (
    <>
      <article className="resume-page">
        {/* Toolbar — hidden in print */}
        <section className="border-b border-[var(--color-border)] bg-[var(--color-bg-elev)] pt-28 pb-8 print:hidden sm:pt-32">
          <div className="mx-auto flex max-w-[920px] flex-wrap items-center justify-between gap-4 px-5 sm:px-8">
            <Link
              href="/"
              data-cursor="hover"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] hover:text-iri"
            >
              <ArrowLeft className="size-3.5" /> Back to site
            </Link>
            <div className="flex items-center gap-2">
              <PrintButton />
              <a
                href={site.resumeUrl}
                download
                data-cursor="hover"
                className="group inline-flex items-center gap-2 rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-bg)] shimmer-iri"
              >
                <ArrowDownToLine className="size-3" />
                PDF
              </a>
            </div>
          </div>
        </section>

        {/* Resume body */}
        <section className="bg-[var(--color-bg)] py-16 print:py-0 sm:py-20">
          <div className="resume-sheet mx-auto max-w-[920px] px-5 sm:px-8 print:max-w-full print:px-0">
            {/* Header */}
            <header className="border-b border-[var(--color-border)] pb-10 print:pb-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h1 className="text-balance text-5xl font-medium leading-none tracking-[-0.02em] sm:text-6xl">
                    Zohaib <span className="text-iri">Ali</span>
                  </h1>
                  <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--color-fg-muted)]">
                    {profile.title}
                  </p>
                </div>
                <div className="mt-6 grid gap-1 font-mono text-[11px] sm:mt-0 sm:text-right">
                  <ContactRow k="EMAIL" v={site.email} href={`mailto:${site.email}`} />
                  <ContactRow k="PHONE" v={site.phone} />
                  <ContactRow k="LOCATION" v={site.location} />
                  <ContactRow k="WEB" v="zohaibali.vercel.app" href={site.url} />
                </div>
              </div>
            </header>

            {/* Profile */}
            <Section title="Profile" index="01">
              <p className="text-pretty text-[15px] leading-[1.7] text-[var(--color-fg)] print:text-[12.5px]">
                {profile.blurb}
              </p>
            </Section>

            {/* Experience */}
            <Section title="Experience" index="02">
              <ol className="flex flex-col gap-8">
                {experience.map((role) => (
                  <li
                    key={role.range + role.company}
                    className="grid gap-3 md:grid-cols-12 md:gap-6"
                  >
                    <div className="md:col-span-4">
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-iri-violet)]">
                        {role.range}
                      </div>
                      <h3 className="mt-2 text-base font-medium tracking-tight">
                        {role.title}
                      </h3>
                      <div className="text-sm text-[var(--color-fg-muted)]">
                        {role.company}
                      </div>
                      {role.location && (
                        <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-dim)]">
                          {role.location}
                        </div>
                      )}
                    </div>
                    <div className="md:col-span-8">
                      <ul className="flex flex-col gap-2 text-[14px] leading-[1.7] text-[var(--color-fg)] print:text-[12px]">
                        {role.bullets.map((b) => (
                          <li key={b} className="flex gap-2.5">
                            <span className="mt-2 inline-block size-1 shrink-0 rounded-full bg-[var(--color-iri-violet)]" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      {role.tags && (
                        <div className="mt-3 flex flex-wrap gap-1.5 print:hidden">
                          {role.tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg-elev)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--color-fg-muted)]"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </li>
                ))}
              </ol>
            </Section>

            {/* Education + Certifications */}
            <Section title="Education & Certifications" index="03">
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                    Education
                  </h4>
                  <ul className="flex flex-col gap-3">
                    {education.map((e) => (
                      <li
                        key={e.title}
                        className="border-l border-[var(--color-iri-violet)]/50 pl-4"
                      >
                        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)]">
                          {e.range}
                        </div>
                        <div className="text-sm font-medium">{e.title}</div>
                        <div className="text-sm text-[var(--color-fg-muted)]">
                          {e.institution}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                    Certifications
                  </h4>
                  <ul className="flex flex-col gap-1.5 text-sm">
                    {certifications.map((c) => (
                      <li
                        key={c.title}
                        className="flex items-baseline justify-between gap-3 border-b border-[var(--color-border)] pb-1.5 last:border-b-0"
                      >
                        <span>{c.title}</span>
                        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-fg-dim)]">
                          {c.year}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* Skills */}
            <Section title="Technical & Soft Skills" index="04" last>
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                    Technical
                  </h4>
                  <ul className="grid gap-1.5 text-sm">
                    {technicalSkills.map((s) => (
                      <li key={s} className="flex items-baseline gap-2">
                        <span className="inline-block size-1 shrink-0 rounded-full bg-[var(--color-iri-blue)]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-dim)]">
                    Soft
                  </h4>
                  <ul className="grid gap-1.5 text-sm">
                    {softSkills.map((s) => (
                      <li key={s} className="flex items-baseline gap-2">
                        <span className="inline-block size-1 shrink-0 rounded-full bg-[var(--color-iri-pink)]" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* Print footer */}
            <footer className="mt-16 hidden border-t border-[var(--color-border)] pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-fg-muted)] print:flex print:items-center print:justify-between">
              <span>Zohaib Ali · {site.email}</span>
              <span>{site.url}</span>
            </footer>
          </div>
        </section>
      </article>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}

function ContactRow({
  k,
  v,
  href,
}: {
  k: string;
  v: string;
  href?: string;
}) {
  const value = href ? (
    <a className="hover:text-iri" href={href}>
      {v}
    </a>
  ) : (
    <span>{v}</span>
  );
  return (
    <div className="flex items-baseline justify-between gap-3 sm:justify-end">
      <span className="text-[var(--color-fg-dim)]">{k}</span>
      <span className="text-[var(--color-fg)]">{value}</span>
    </div>
  );
}

function Section({
  title,
  index,
  children,
  last,
}: {
  title: string;
  index: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section
      className={`pt-10 ${last ? "" : "border-b border-[var(--color-border)] pb-10"} print:pt-6 print:pb-6 print:break-inside-avoid`}
    >
      <header className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
        <span className="text-iri">{index}</span>
        <span>{title}</span>
        <span
          aria-hidden
          className="h-px flex-1 bg-gradient-to-r from-[var(--color-iri-violet)]/40 via-[var(--color-border-bright)] to-transparent"
        />
      </header>
      {children}
    </section>
  );
}
