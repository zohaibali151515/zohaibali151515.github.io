import { Hero } from "@/components/hero/Hero";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { WhatIDo } from "@/components/sections/WhatIDo";
import { Timeline } from "@/components/sections/Timeline";
import { NotesPreview } from "@/components/sections/NotesPreview";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/chrome/Footer";
import { getAllNotes } from "@/lib/notes";

export default function HomePage() {
  const notes = getAllNotes()
    .slice(0, 3)
    .map((n) => ({
      slug: n.slug,
      title: n.title,
      description: n.description,
      date: n.date,
      readingTime: n.readingTime,
    }));

  return (
    <>
      <Hero />
      <FeaturedWork />
      <WhatIDo />
      <Timeline />
      <NotesPreview notes={notes} />
      <Contact />
      <Footer />
    </>
  );
}
