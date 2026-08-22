"use client";

import { exampleFiles } from "@/lib/examples";
import { useLocale, t, ui } from "@/lib/i18n";

export default function ExamplesPage() {
  const { locale } = useLocale();
  const rtlText = locale === "ar" ? { dir: "rtl" as const, style: { textAlign: "right" as const } } : {};

  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pt-16">
      <div className="mb-8 font-mono text-xs text-paper-faint">
        <span className="text-cyan">$</span> ls c-examples/
      </div>

      <h1 className="font-mono text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
        {t(ui.examplesTitle, locale)}
      </h1>
      <p className="mt-3 text-lg text-paper-dim" {...rtlText}>
        {t(ui.examplesIntro, locale)}
      </p>

      <ul className="mt-10 flex flex-col gap-3">
        {exampleFiles.map((file, i) => {
          const num = String(i + 1).padStart(2, "0");
          const href = `/c-examples/${file.filename}`;
          return (
            <li
              key={file.filename}
              className="rounded-lg border border-surface-line bg-surface-raised px-5 py-4"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs tabular-nums text-cyan">{num}</span>
                  <span className="font-medium text-paper">{t(file.title, locale)}</span>
                </div>
                <code className="text-xs text-paper-faint">{file.filename}</code>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-paper-faint" {...rtlText}>
                {t(file.description, locale)}
              </p>
              <div className="mt-3 flex items-center gap-4 font-mono text-xs">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan hover:underline"
                >
                  {t(ui.viewSource, locale)}
                </a>
                <a href={href} download className="text-paper-faint hover:text-paper">
                  {t(ui.download, locale)}
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
