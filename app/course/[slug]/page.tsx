import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { chapters, getChapter, getAdjacent } from "@/lib/chapters";
import { ChapterShell } from "@/components/ChapterShell";
import { Blocks } from "@/components/Prose";
import { chapterContent } from "@/content";

export function generateStaticParams() {
  return chapters.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const chapter = getChapter(params.slug);
  if (!chapter) return {};
  return {
    title: `${chapter.hex} ${chapter.title.en}`,
    description: chapter.blurb.en,
  };
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = getChapter(params.slug);
  if (!chapter) notFound();

  const blocks = chapterContent[chapter.slug];
  const { prev, next } = getAdjacent(chapter.slug);

  return (
    <ChapterShell chapter={chapter} prev={prev} next={next}>
      {blocks ? <Blocks blocks={blocks} /> : <p>Content coming soon.</p>}
    </ChapterShell>
  );
}
