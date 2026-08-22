"use client";

import Link from "next/link";
import type { Chapter, SectionId } from "@/lib/chapters";
import { sectionLabels } from "@/lib/chapters";
import { useLocale, t } from "@/lib/i18n";

export function ChapterShell({
  chapter,
  prev,
  next,
  children,
}: {
  chapter: Chapter;
  prev: Chapter | null;
  next: Chapter | null;
  children: React.ReactNode;
}) {
  const { locale } = useLocale();
  const rtlText = locale === "ar" ? { dir: "rtl" as const, style: { textAlign: "right" as const } } : {};

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
      <div className="mb-8 flex items-center gap-3 font-mono text-xs text-paper-faint">
        <Link href="/" className="hover:text-cyan">
          overview
        </Link>
        <span>/</span>
        <span className="text-cyan">{chapter.hex}</span>
        <span className="text-paper-faint">·</span>
        <span>{t(sectionLabels[chapter.section as SectionId], locale)}</span>
      </div>

      <h1 className="font-mono text-3xl font-semibold tracking-tight text-paper sm:text-4xl" {...rtlText}>
        {t(chapter.title, locale)}
      </h1>
      <p className="mt-3 text-lg text-paper-dim" {...rtlText}>
        {t(chapter.blurb, locale)}
      </p>

      <div className="prose-c mt-10">{children}</div>

      <div className="mt-20 grid grid-cols-1 gap-3 border-t border-surface-line pt-8 sm:grid-cols-2">
        {prev ? (
          <Link
            href={`/course/${prev.slug}`}
            className="group flex flex-col gap-1 rounded-md border border-surface-line px-4 py-3 transition hover:border-cyan/40 hover:bg-surface"
          >
            <span className="font-mono text-xs text-paper-faint">← {prev.hex}</span>
            <span className="text-sm text-paper group-hover:text-cyan">{t(prev.title, locale)}</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/course/${next.slug}`}
            className="group flex flex-col gap-1 rounded-md border border-surface-line px-4 py-3 text-right transition hover:border-cyan/40 hover:bg-surface sm:col-start-2"
          >
            <span className="font-mono text-xs text-paper-faint">{next.hex} →</span>
            <span className="text-sm text-paper group-hover:text-cyan">{t(next.title, locale)}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </main>
  );
}
