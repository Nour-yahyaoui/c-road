"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { chapters, sectionOrder, sectionLabels } from "@/lib/chapters";
import { useLocale, t, ui } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  const { locale } = useLocale();

  return (
    <nav className="flex flex-col gap-6 px-1">
      <Link
        href="/"
        onClick={onNavigate}
        className="mb-1 flex items-baseline gap-2 px-3 font-mono text-sm tracking-tight text-paper hover:text-cyan"
      >
        <span className="text-cyan">$</span> {t(ui.overview, locale)}
      </Link>
      <Link
        href="/examples"
        onClick={onNavigate}
        className="-mt-4 flex items-baseline gap-2 px-3 font-mono text-sm tracking-tight text-paper-dim hover:text-cyan"
      >
        <span className="text-cyan">$</span> {t(ui.examples, locale)}
      </Link>
      {sectionOrder.map((section) => {
        const items = chapters.filter((c) => c.section === section);
        if (items.length === 0) return null;
        return (
          <div key={section}>
            <div className="px-3 pb-2 font-mono text-[11px] uppercase tracking-widest text-paper-faint">
              {t(sectionLabels[section], locale)}
            </div>
            <ul className="flex flex-col gap-0.5">
              {items.map((c) => {
                const href = `/course/${c.slug}`;
                const active = pathname === href;
                return (
                  <li key={c.slug}>
                    <Link
                      href={href}
                      onClick={onNavigate}
                      aria-current={active ? "page" : undefined}
                      className={`group flex items-center gap-3 rounded-md px-3 py-1.5 text-[13.5px] transition-colors ${
                        active
                          ? "bg-surface-raised text-paper"
                          : "text-paper-dim hover:bg-surface hover:text-paper"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] tabular-nums ${
                          active ? "text-cyan" : "text-paper-faint group-hover:text-cyan"
                        }`}
                      >
                        {c.hex}
                      </span>
                      <span className="truncate">{t(c.title, locale)}</span>
                      {active && (
                        <span className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </nav>
  );
}

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-72 shrink-0 overflow-y-auto border-r border-surface-line bg-ink-soft py-8 lg:block">
      <div className="mb-6 px-4">
        <LanguageSwitcher />
      </div>
      <NavList />
    </aside>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { locale } = useLocale();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <div className="sticky top-0 z-40 flex items-center justify-between border-b border-surface-line bg-ink/95 px-4 py-3 backdrop-blur">
        <Link href="/" className="font-mono text-sm text-paper">
          <span className="text-cyan">$</span> {t(ui.overview, locale)}
        </Link>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            onClick={() => setOpen(true)}
            aria-label="Open chapter menu"
            className="flex items-center gap-2 rounded-md border border-surface-line px-3 py-1.5 font-mono text-xs text-paper-dim"
          >
            <span>{t(ui.menu, locale)}</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 3.5H13M1 7H13M1 10.5H13" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition-opacity ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-y-0 left-0 w-[85%] max-w-sm overflow-y-auto bg-ink-soft py-6 transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-paper-faint">
              {t(ui.chapters, locale)}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chapter menu"
              className="rounded-md border border-surface-line px-2 py-1 font-mono text-xs text-paper-dim"
            >
              {t(ui.esc, locale)}
            </button>
          </div>
          <NavList onNavigate={() => setOpen(false)} />
        </div>
      </div>
    </div>
  );
}
