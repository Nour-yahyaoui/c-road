"use client";

import Link from "next/link";
import { chapters, sectionOrder, sectionLabels } from "@/lib/chapters";
import { useLocale, t, ui } from "@/lib/i18n";

const HERO_LINES = [
  { text: "gcc hello.c -o hello", prompt: true, delay: "0.1s" },
  { text: "./hello", prompt: true, delay: "1.3s" },
  { text: "Hello, world!", prompt: false, delay: "2.1s", accent: true },
];

export default function HomePage() {
  const { locale } = useLocale();
  const rtlText = locale === "ar" ? { dir: "rtl" as const, style: { textAlign: "right" as const } } : {};

  return (
    <main className="mx-auto max-w-5xl px-5 pb-32 pt-12 sm:px-8 sm:pt-20">
      {/* Hero */}
      <section className="relative">
        <div className="pointer-events-none absolute -inset-x-6 -top-10 h-72 bg-grid-map bg-grid-map opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_0%,black,transparent)]" />

        <div className="relative">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-surface-line bg-surface px-3 py-1 font-mono text-xs text-paper-faint">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
            {chapters.length} {t(ui.heroKicker, locale)}
          </div>

          <h1
            className="max-w-2xl font-mono text-[2.1rem] font-semibold leading-[1.15] tracking-tight text-paper sm:text-5xl"
            {...rtlText}
          >
            {t(ui.heroTitle, locale)}
          </h1>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-paper-dim" {...rtlText}>
            {t(ui.heroBody, locale)}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/course/${chapters[0].slug}`}
              className="inline-flex items-center gap-2 rounded-md bg-cyan px-5 py-2.5 font-mono text-sm font-medium text-ink transition hover:bg-cyan/90"
            >
              {t(ui.startAt, locale)} {chapters[0].hex}
              <span aria-hidden>→</span>
            </Link>
            <span className="font-mono text-xs text-paper-faint">
              {t(ui.jumpHint, locale)}
            </span>
          </div>

          {/* Terminal signature element */}
          <div className="mt-14 max-w-lg overflow-hidden rounded-lg border border-surface-line bg-surface-raised shadow-2xl shadow-black/40">
            <div className="flex items-center gap-2 border-b border-surface-line bg-ink-soft px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan/70" />
              <span className="ml-2 font-mono text-xs text-paper-faint">zsh</span>
            </div>
            <div className="space-y-2 px-5 py-5 font-mono text-[13px] sm:text-sm">
              {HERO_LINES.map((line, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 overflow-hidden whitespace-nowrap opacity-0"
                  style={{
                    animation: "fadeUp 0.4s ease-out forwards",
                    animationDelay: line.delay,
                  }}
                >
                  {line.prompt && <span className="text-cyan">$</span>}
                  <span className={line.accent ? "text-amber" : "text-paper"}>
                    {line.text}
                  </span>
                  {i === HERO_LINES.length - 1 && (
                    <span className="ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[1px] animate-blink bg-cyan" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chapter index, styled as a memory map / directory listing */}
      <section className="mt-28">
        <div className="mb-8 flex items-baseline justify-between gap-4 border-b border-surface-line pb-4">
          <h2 className="font-mono text-sm uppercase tracking-widest text-paper-faint">
            {t(ui.chapterIndex, locale)}
          </h2>
          <span className="font-mono text-xs text-paper-faint">
            {chapters.length} {t(ui.pages, locale)}
          </span>
        </div>

        <div className="flex flex-col gap-12">
          {sectionOrder.map((section) => {
            const items = chapters.filter((c) => c.section === section);
            if (items.length === 0) return null;
            return (
              <div key={section}>
                <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-cyan">
                  {t(sectionLabels[section], locale)}
                </h3>
                <ul className="grid gap-px overflow-hidden rounded-lg border border-surface-line bg-surface-line sm:grid-cols-2">
                  {items.map((c) => (
                    <li key={c.slug} className="bg-ink-soft">
                      <Link
                        href={`/course/${c.slug}`}
                        className="group flex h-full flex-col gap-1.5 px-5 py-4 transition-colors hover:bg-surface"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs tabular-nums text-paper-faint group-hover:text-cyan">
                            {c.hex}
                          </span>
                          <span className="font-medium text-paper" {...rtlText}>
                            {t(c.title, locale)}
                          </span>
                        </div>
                        <p className="text-sm leading-snug text-paper-faint" {...rtlText}>
                          {t(c.blurb, locale)}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
