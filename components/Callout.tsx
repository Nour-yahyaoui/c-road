"use client";

import { useLocale, t, ui, type LocText } from "@/lib/i18n";

const STYLES: Record<
  string,
  { text: string; border: string; dot: string }
> = {
  note: { text: "text-cyan", border: "border-l-cyan", dot: "bg-cyan" },
  warning: { text: "text-amber", border: "border-l-amber", dot: "bg-amber" },
  error: { text: "text-coral", border: "border-l-coral", dot: "bg-coral" },
};

export function Callout({
  kind = "note",
  title,
  children,
}: {
  kind?: "note" | "warning" | "error";
  title?: LocText;
  children: React.ReactNode;
}) {
  const { locale } = useLocale();
  const s = STYLES[kind];
  const kindLabel = t(ui[kind], locale);
  const titleLabel = title ? t(title, locale) : undefined;

  return (
    <div
      className={`my-6 rounded-md border border-surface-line ${s.border} border-l-4 bg-surface px-5 py-4`}
    >
      <div className="mb-1.5 flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
        <span className={`font-mono text-xs font-semibold uppercase tracking-wide ${s.text}`}>
          {kindLabel}
          {titleLabel ? `: ${titleLabel}` : ""}
        </span>
      </div>
      <div className="text-[0.95rem] leading-relaxed text-paper-dim">{children}</div>
    </div>
  );
}
