"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Chrome() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300 print:hidden",
          scrolled
            ? "border-b border-[var(--color-border)] bg-[color-mix(in_srgb,var(--color-bg)_85%,transparent)] backdrop-blur-md"
            : "border-b border-transparent"
        )}
      >
        <div className="mx-auto flex h-14 max-w-[1400px] items-center justify-between px-5 sm:px-8">
          {/* Identity */}
          <Link href="/" className="group flex items-center gap-2.5 font-mono text-xs">
            <span
              className="inline-block size-1.5 rounded-full bg-[var(--color-status-live)] text-[var(--color-status-live)] pulse-dot"
              aria-hidden
            />
            <span className="font-semibold tracking-[0.2em] text-[var(--color-fg)]">
              ZOHAIB.ALI
            </span>
            <span className="hidden text-[var(--color-fg-dim)] sm:inline">/</span>
            <span className="hidden text-[var(--color-fg-muted)] sm:inline">
              AI × IMMERSIVE
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[11px] tracking-wider text-[var(--color-fg-muted)] transition-colors hover:text-[var(--color-fg)]"
              >
                <span className="text-[var(--color-fg-dim)] group-hover:text-iri">
                  {item.index}
                </span>
                <span className="uppercase">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-2">
            <a
              href={site.resumeUrl}
              download
              className="hidden rounded-full border border-[var(--color-border-bright)] bg-[var(--color-bg-elev)]/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-wider text-[var(--color-fg)] transition-colors hover:border-[var(--color-iri-violet)] sm:inline-block"
            >
              Resume
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex size-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-fg)] md:hidden"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-14 z-40 border-b border-[var(--color-border)] bg-[var(--color-bg)] md:hidden"
          >
            <nav className="mx-auto flex max-w-[1400px] flex-col px-5 py-4 sm:px-8">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 border-b border-[var(--color-border)] py-3 font-mono text-xs uppercase tracking-wider last:border-b-0"
                >
                  <span className="text-[var(--color-fg-dim)]">{item.index}</span>
                  <span>{item.label}</span>
                </a>
              ))}
              <a
                href={site.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center rounded-full px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-[var(--color-bg)] shimmer-iri"
              >
                ↓ Download Resume
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
}
