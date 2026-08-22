"use client";

import { useLocale, locales } from "@/lib/i18n";

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`inline-flex items-center gap-0.5 rounded-md border border-surface-line bg-surface p-0.5 font-mono text-xs ${className}`}
    >
      {locales.map((l) => (
        <button
          key={l.code}
          onClick={() => setLocale(l.code)}
          aria-pressed={locale === l.code}
          className={`rounded px-2 py-1 transition-colors ${
            locale === l.code
              ? "bg-surface-raised text-cyan"
              : "text-paper-faint hover:text-paper"
          }`}
        >
          {l.label}
        </button>
      ))}
    </div>
  );
}
