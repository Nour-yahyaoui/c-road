"use client";

import { useLocale, t, ui } from "@/lib/i18n";

export function Footer() {
  const { locale } = useLocale();
  return (
    <footer className="border-t border-surface-line px-5 py-6 sm:px-8">
      <p className="font-mono text-xs text-paper-faint">
        {t(ui.createdBy, locale)}{" "}
        <span className="text-paper-dim">Nour Yahyaoui</span>
        {" · "}
        <a
          href="https://github.com/Nour-yahyaoui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan hover:underline"
        >
          github.com/Nour-yahyaoui
        </a>
      </p>
    </footer>
  );
}
