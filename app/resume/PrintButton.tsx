"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      data-cursor="hover"
      className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border-bright)] bg-[var(--color-bg)] px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-fg)] transition-colors hover:border-[var(--color-iri-violet)]"
    >
      <Printer className="size-3" />
      Print
    </button>
  );
}
