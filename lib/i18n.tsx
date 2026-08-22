"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Locale = "en" | "fr" | "ar";

export type LocText = { en: string; fr: string; ar: string };

export const locales: { code: Locale; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
];

const STORAGE_KEY = "c-course-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "en",
  setLocale: () => {},
});

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (saved === "en" || saved === "fr" || saved === "ar") {
      setLocaleState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("lang", locale);
    // Layout direction intentionally stays "ltr" for every language —
    // only the text content itself follows the language's natural
    // reading direction (handled per text block).
    document.documentElement.setAttribute("dir", "ltr");
  }, [locale]);

  function setLocale(l: Locale) {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function t(text: LocText, locale: Locale): string {
  return text[locale] ?? text.en;
}

// UI chrome strings. Names of C constructs (printf, struct, pointer syntax,
// etc.) are never part of this dictionary — those live untranslated inside
// chapter content as inline `code`.
export const ui = {
  overview: { en: "overview", fr: "aperçu", ar: "نظرة عامة" },
  chapters: { en: "chapters", fr: "chapitres", ar: "الفصول" },
  menu: { en: "menu", fr: "menu", ar: "القائمة" },
  esc: { en: "esc", fr: "fermer", ar: "إغلاق" },
  chapterIndex: { en: "Chapter index", fr: "Sommaire", ar: "فهرس الفصول" },
  pages: { en: "pages", fr: "pages", ar: "صفحات" },
  startAt: { en: "Start at", fr: "Commencer à", ar: "ابدأ من" },
  jumpHint: {
    en: "or jump to any chapter below",
    fr: "ou accédez directement à un chapitre ci-dessous",
    ar: "أو انتقل مباشرة إلى أي فصل أدناه",
  },
  heroKicker: {
    en: "chapters · beginner to systems-ready",
    fr: "chapitres · du niveau débutant à la programmation système",
    ar: "فصلاً · من المبتدئ إلى الجاهزية لبرمجة الأنظمة",
  },
  heroTitle: {
    en: "Learn C by reading what the machine actually does.",
    fr: "Apprenez le C en comprenant ce que fait réellement la machine.",
    ar: "تعلّم لغة C من خلال فهم ما تفعله الآلة فعليًا.",
  },
  heroBody: {
    en: "A straight path from your first compiled program to pointers, manual memory management, and the handful of habits that keep C programs correct. No prior systems experience assumed.",
    fr: "Un parcours clair, du premier programme compilé jusqu'aux pointeurs et à la gestion manuelle de la mémoire, en passant par les quelques habitudes qui gardent un programme C correct. Aucune expérience système préalable n'est nécessaire.",
    ar: "مسار واضح ينطلق من أول برنامج تُترجمه إلى المؤشرات (pointers) وإدارة الذاكرة يدويًا، مرورًا بالعادات القليلة التي تحافظ على صحة برامج C. لا حاجة لأي خبرة مسبقة في برمجة الأنظمة.",
  },
  copy: { en: "copy", fr: "copier", ar: "نسخ" },
  copied: { en: "copied", fr: "copié", ar: "تم النسخ" },
  note: { en: "note", fr: "remarque", ar: "ملاحظة" },
  warning: { en: "warning", fr: "avertissement", ar: "تحذير" },
  error: { en: "error", fr: "erreur", ar: "خطأ" },
  contentSoon: {
    en: "Content coming soon.",
    fr: "Contenu à venir.",
    ar: "المحتوى قادم قريبًا.",
  },
  createdBy: { en: "Created by", fr: "Créé par", ar: "من إنشاء" },
  examples: { en: "Examples", fr: "Exemples", ar: "أمثلة" },
  examplesTitle: {
    en: "C example programs",
    fr: "Programmes C d'exemple",
    ar: "برامج C توضيحية",
  },
  examplesIntro: {
    en: "Ten standalone, compilable .c files — each with its own main() and comments throughout in English. Download them, compile with gcc, and run them yourself.",
    fr: "Dix fichiers .c autonomes et compilables — chacun avec son propre main() et des commentaires en anglais tout du long. Téléchargez-les, compilez-les avec gcc, et exécutez-les vous-même.",
    ar: "عشرة ملفات .c مستقلة وقابلة للترجمة — لكل منها دالة main() خاصة بها وتعليقات باللغة الإنجليزية في كل مكان. حمّلها، ترجمها باستخدام gcc، وشغّلها بنفسك.",
  },
  viewSource: { en: "view source", fr: "voir le code", ar: "عرض الشيفرة" },
  download: { en: "download", fr: "télécharger", ar: "تنزيل" },
} satisfies Record<string, LocText>;
