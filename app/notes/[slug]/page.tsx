import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllNotes, getNote } from "@/lib/notes";
import { Footer } from "@/components/chrome/Footer";

type RouteParams = { slug: string };

export async function generateStaticParams() {
  return getAllNotes().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = getNote(slug);
  if (!n) return { title: "Note not found" };
  return { title: n.title, description: n.description };
}

const mdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="mt-12 text-balance text-3xl font-medium tracking-tight first:mt-0 sm:text-4xl"
      {...props}
    />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mt-12 text-balance text-2xl font-medium tracking-tight first:mt-0"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-8 text-xl font-medium tracking-tight" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mt-5 text-pretty text-base leading-[1.75] text-[var(--color-fg)] sm:text-[17px]"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-5 flex flex-col gap-2 pl-5" {...props} />
  ),
  ol: (props: React.OlHTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mt-5 flex list-decimal flex-col gap-2 pl-5 marker:text-[var(--color-fg-dim)]"
      {...props}
    />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li
      className="text-pretty text-base leading-[1.75] text-[var(--color-fg)] sm:text-[17px]"
      {...props}
    />
  ),
  a: ({
    href,
    ...props
  }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      className="text-iri underline decoration-[var(--color-iri-violet)] decoration-from-font underline-offset-4 hover:decoration-[var(--color-iri-pink)]"
      {...props}
    />
  ),
  blockquote: (props: React.BlockquoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-6 border-l-2 border-[var(--color-iri-violet)] bg-[var(--color-bg-elev)] py-3 pl-5 pr-4 italic text-[var(--color-fg-muted)]"
      {...props}
    />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="rounded bg-[var(--color-bg-elev)] px-1.5 py-0.5 font-mono text-[0.9em] text-[var(--color-fg)]"
      {...props}
    />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl border border-[var(--color-border)] bg-[var(--color-bg-elev)] p-5 font-mono text-[13px] leading-relaxed"
      {...props}
    />
  ),
  hr: (props: React.HTMLAttributes<HTMLHRElement>) => (
    <hr
      className="my-10 border-t border-dashed border-[var(--color-border-bright)]"
      {...props}
    />
  ),
};

export default async function NotePage({
  params,
}: {
  params: Promise<RouteParams>;
}) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <>
      <article>
        <header className="relative isolate scroll-mt-20 border-b border-[var(--color-border)] bg-grid pt-32 pb-16 sm:pt-40 sm:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-20 mx-auto h-[380px] max-w-[1100px] opacity-40"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(138,75,255,0.3), transparent 70%)",
              filter: "blur(50px)",
            }}
          />
          <div className="relative mx-auto max-w-[820px] px-5 sm:px-8">
            <Link
              href="/notes"
              data-cursor="hover"
              className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)] hover:text-iri"
            >
              <ArrowLeft className="size-3.5" /> All notes
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-fg-muted)]">
              <span>{note.date}</span>
              <span>·</span>
              <span>{note.readingTime}</span>
              {note.tags.length > 0 && (
                <>
                  <span>·</span>
                  <span className="flex gap-1.5">
                    {note.tags.map((t: string) => (
                      <span key={t}>{t}</span>
                    ))}
                  </span>
                </>
              )}
            </div>
            <h1 className="mt-5 text-balance text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl">
              {note.title}
            </h1>
            <p className="mt-5 text-pretty text-lg leading-relaxed text-[var(--color-fg-muted)]">
              {note.description}
            </p>
          </div>
        </header>

        <section className="border-b border-[var(--color-border)] bg-[var(--color-bg)] py-16 sm:py-24">
          <div className="mx-auto max-w-[820px] px-5 sm:px-8">
            <MDXRemote source={note.content} components={mdxComponents} />
          </div>
        </section>
      </article>
      <Footer />
    </>
  );
}
