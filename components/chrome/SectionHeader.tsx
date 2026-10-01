import { cn } from "@/lib/utils";

type Props = {
  index: string;
  title: string;
  kicker?: string;
  description?: string;
  className?: string;
};

export function SectionHeader({
  index,
  title,
  kicker,
  description,
  className,
}: Props) {
  return (
    <div className={cn("flex flex-col gap-3", className)}>
      <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-fg-muted)]">
        <span className="inline-flex size-6 items-center justify-center rounded-full border border-[var(--color-border-bright)] bg-[var(--color-bg-elev)] text-[10px] text-iri">
          {index}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-iri-violet)]/40 via-[var(--color-border-bright)] to-transparent" />
        {kicker && <span>{kicker}</span>}
      </div>
      <h2 className="text-balance text-3xl font-medium leading-[1.05] tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-[62ch] text-pretty text-sm leading-relaxed text-[var(--color-fg-muted)] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
