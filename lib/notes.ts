import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const NOTES_DIR = path.join(process.cwd(), "content", "notes");

export type Note = {
  slug: string;
  title: string;
  description: string;
  date: string;
  dateISO: string;
  readingTime: string;
  tags: string[];
  content: string;
};

function safeReadDir(dir: string): string[] {
  try {
    return fs.readdirSync(dir);
  } catch {
    return [];
  }
}

function estimateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / 220));
  return `${minutes} MIN READ`;
}

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return iso;
  }
}

export function getAllNotes(): Note[] {
  const files = safeReadDir(NOTES_DIR).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(NOTES_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const slug = file.replace(/\.mdx$/, "");
      return {
        slug,
        title: data.title ?? slug,
        description: data.description ?? "",
        date: formatDate(data.date ?? ""),
        dateISO: data.date ?? "",
        readingTime: estimateReadingTime(content),
        tags: data.tags ?? [],
        content,
      } as Note;
    })
    .sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1));
}

export function getNote(slug: string): Note | undefined {
  return getAllNotes().find((n) => n.slug === slug);
}
