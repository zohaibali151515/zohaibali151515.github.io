import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg)]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-6 py-16 sm:px-10 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-5">
          <div className="text-base font-medium tracking-tight">
            Zohaib Ali
          </div>
          <p className="max-w-[40ch] text-base text-[var(--color-fg-muted)]">
            Building AI and immersive systems at the edge of real-time. Based in{" "}
            {site.location}.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-2 inline-flex w-fit text-base text-[var(--color-fg)] hover:text-iri"
          >
            {site.email}
          </a>
        </div>

        <div className="flex flex-col gap-3 text-base text-[var(--color-fg-muted)] md:col-span-3">
          <div className="text-sm text-[var(--color-fg-dim)]">Site</div>
          <Link href="/" className="hover:text-iri">
            Home
          </Link>
          <Link href="/work" className="hover:text-iri">
            Work
          </Link>
          <Link href="/notes" className="hover:text-iri">
            Notes
          </Link>
          <Link href="/resume" className="hover:text-iri">
            Résumé
          </Link>
        </div>

        <div className="flex flex-col gap-3 text-base text-[var(--color-fg-muted)] md:col-span-4">
          <div className="text-sm text-[var(--color-fg-dim)]">Elsewhere</div>
          <a href={site.socials.linkedin} className="hover:text-iri">
            LinkedIn
          </a>
          <a href={site.socials.github} className="hover:text-iri">
            GitHub
          </a>
          <a href={site.socials.x} className="hover:text-iri">
            X
          </a>
        </div>
      </div>

      <div className="border-t border-[var(--color-border)]">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-6 text-sm text-[var(--color-fg-dim)] sm:px-10">
          <span>© {new Date().getFullYear()} Zohaib Ali</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
