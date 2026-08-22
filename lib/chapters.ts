import type { LocText } from "@/lib/i18n";

export type SectionId =
  | "foundations"
  | "control-flow"
  | "functions-data"
  | "pointers-memory"
  | "system"
  | "onward";

export const sectionLabels: Record<SectionId, LocText> = {
  foundations: { en: "Foundations", fr: "Fondations", ar: "الأساسيات" },
  "control-flow": { en: "Control Flow", fr: "Structures de contrôle", ar: "التحكم في التدفق" },
  "functions-data": { en: "Functions & Data", fr: "Fonctions & données", ar: "الدوال والبيانات" },
  "pointers-memory": { en: "Pointers & Memory", fr: "Pointeurs & mémoire", ar: "المؤشرات والذاكرة" },
  system: { en: "Working With The System", fr: "Travailler avec le système", ar: "التعامل مع النظام" },
  onward: { en: "Onward", fr: "Pour la suite", ar: "إلى الأمام" },
};

export const sectionOrder: SectionId[] = [
  "foundations",
  "control-flow",
  "functions-data",
  "pointers-memory",
  "system",
  "onward",
];

export type Chapter = {
  slug: string;
  hex: string;
  title: LocText;
  blurb: LocText;
  section: SectionId;
};

export const chapters: Chapter[] = [
  {
    slug: "getting-started",
    hex: "0x00",
    title: { en: "Getting Started", fr: "Premiers pas", ar: "البداية" },
    blurb: {
      en: "What C is, how a program becomes an executable, and your first build.",
      fr: "Ce qu'est le C, comment un programme devient un exécutable, et votre première compilation.",
      ar: "ما هي لغة C، وكيف يتحول البرنامج إلى ملف تنفيذي، وأول عملية بناء (build) تقوم بها.",
    },
    section: "foundations",
  },
  {
    slug: "variables-and-types",
    hex: "0x01",
    title: { en: "Variables & Types", fr: "Variables & types", ar: "المتغيرات والأنواع" },
    blurb: {
      en: "Declaring storage, the built-in types, and how much room each one takes.",
      fr: "Déclarer un espace mémoire, les types intégrés, et la place que prend chacun.",
      ar: "تعريف مساحة تخزين، الأنواع المدمجة (types)، وحجم كل نوع منها في الذاكرة.",
    },
    section: "foundations",
  },
  {
    slug: "operators-and-expressions",
    hex: "0x02",
    title: { en: "Operators & Expressions", fr: "Opérateurs & expressions", ar: "العوامل والتعبيرات" },
    blurb: {
      en: "Arithmetic, comparison, logic, and the precedence rules that bind them.",
      fr: "Arithmétique, comparaison, logique, et les règles de priorité qui les régissent.",
      ar: "العمليات الحسابية، والمقارنة، والمنطق، وقواعد الأسبقية (precedence) التي تربط بينها.",
    },
    section: "foundations",
  },
  {
    slug: "input-and-output",
    hex: "0x03",
    title: { en: "Input & Output", fr: "Entrées & sorties", ar: "الإدخال والإخراج" },
    blurb: {
      en: "Talking to the terminal with printf and scanf, and their format specifiers.",
      fr: "Communiquer avec le terminal avec printf et scanf, et leurs spécificateurs de format.",
      ar: "التواصل مع الطرفية (terminal) باستخدام printf وscanf، ومحددات التنسيق (format specifiers) الخاصة بهما.",
    },
    section: "foundations",
  },
  {
    slug: "conditionals",
    hex: "0x04",
    title: { en: "Conditionals", fr: "Conditions", ar: "الجمل الشرطية" },
    blurb: {
      en: "Branching with if, else, and switch — and how truth works in C.",
      fr: "Bifurquer avec if, else et switch — et comment la vérité fonctionne en C.",
      ar: "التفرع باستخدام if وelse وswitch — وكيف تُفهم القيمة الصحيحة (true) في لغة C.",
    },
    section: "control-flow",
  },
  {
    slug: "loops",
    hex: "0x05",
    title: { en: "Loops", fr: "Boucles", ar: "الحلقات التكرارية" },
    blurb: {
      en: "Repetition with while, do-while, and for, plus break and continue.",
      fr: "La répétition avec while, do-while et for, ainsi que break et continue.",
      ar: "التكرار باستخدام while وdo-while وfor، بالإضافة إلى break وcontinue.",
    },
    section: "control-flow",
  },
  {
    slug: "functions",
    hex: "0x06",
    title: { en: "Functions", fr: "Fonctions", ar: "الدوال" },
    blurb: {
      en: "Splitting programs into reusable pieces: declarations, scope, and recursion.",
      fr: "Diviser un programme en blocs réutilisables : déclarations, portée et récursivité.",
      ar: "تقسيم البرنامج إلى أجزاء قابلة لإعادة الاستخدام: التصريحات (declarations)، النطاق (scope)، والتكرار الذاتي (recursion).",
    },
    section: "functions-data",
  },
  {
    slug: "arrays",
    hex: "0x07",
    title: { en: "Arrays", fr: "Tableaux", ar: "المصفوفات" },
    blurb: {
      en: "Contiguous blocks of the same type, indexing, and iterating over them.",
      fr: "Des blocs contigus d'un même type, l'indexation, et comment les parcourir.",
      ar: "كتل متجاورة من نفس النوع، والفهرسة (indexing)، وكيفية المرور عليها.",
    },
    section: "functions-data",
  },
  {
    slug: "strings",
    hex: "0x08",
    title: { en: "Strings", fr: "Chaînes de caractères", ar: "السلاسل النصية" },
    blurb: {
      en: "Why C strings are just arrays of char ending in a zero byte.",
      fr: "Pourquoi une chaîne en C n'est qu'un tableau de char terminé par un octet zéro.",
      ar: "لماذا السلسلة النصية في C هي ببساطة مصفوفة من char تنتهي بـ byte يساوي صفرًا.",
    },
    section: "functions-data",
  },
  {
    slug: "pointers",
    hex: "0x09",
    title: { en: "Pointers", fr: "Pointeurs", ar: "المؤشرات" },
    blurb: {
      en: "Variables that hold addresses: the idea that everything else builds on.",
      fr: "Des variables qui contiennent des adresses : l'idée sur laquelle tout le reste repose.",
      ar: "متغيرات تحمل عناوين ذاكرة: الفكرة التي يُبنى عليها كل ما تبقى.",
    },
    section: "pointers-memory",
  },
  {
    slug: "pointers-and-arrays",
    hex: "0x0A",
    title: { en: "Pointers & Arrays", fr: "Pointeurs & tableaux", ar: "المؤشرات والمصفوفات" },
    blurb: {
      en: "Why arr[i] and *(arr + i) are the same thing, and what decays.",
      fr: "Pourquoi arr[i] et *(arr + i) sont identiques, et ce qu'est le decay.",
      ar: "لماذا arr[i] و*(arr + i) هما نفس الشيء، وما المقصود بـ decay.",
    },
    section: "pointers-memory",
  },
  {
    slug: "dynamic-memory",
    hex: "0x0B",
    title: { en: "Dynamic Memory", fr: "Mémoire dynamique", ar: "الذاكرة الديناميكية" },
    blurb: {
      en: "Asking the heap for space with malloc, and giving it back with free.",
      fr: "Demander de l'espace au tas (heap) avec malloc, et le restituer avec free.",
      ar: "طلب مساحة من الكومة (heap) باستخدام malloc، وإعادتها باستخدام free.",
    },
    section: "pointers-memory",
  },
  {
    slug: "structs-and-unions",
    hex: "0x0C",
    title: { en: "Structs & Unions", fr: "Structures & unions", ar: "البنى والاتحادات" },
    blurb: {
      en: "Grouping related values into one type, and passing them around.",
      fr: "Regrouper des valeurs liées en un seul type, et les faire circuler dans le programme.",
      ar: "تجميع قيم مترابطة في نوع واحد، وتمريرها بين أجزاء البرنامج.",
    },
    section: "pointers-memory",
  },
  {
    slug: "file-io",
    hex: "0x0D",
    title: { en: "File I/O", fr: "Fichiers (E/S)", ar: "الإدخال والإخراج من الملفات" },
    blurb: {
      en: "Reading and writing files on disk with FILE pointers.",
      fr: "Lire et écrire des fichiers sur le disque avec des pointeurs FILE.",
      ar: "قراءة الملفات وكتابتها على القرص باستخدام مؤشرات FILE.",
    },
    section: "system",
  },
  {
    slug: "the-preprocessor",
    hex: "0x0E",
    title: { en: "The Preprocessor", fr: "Le préprocesseur", ar: "المعالج المسبق" },
    blurb: {
      en: "#include, #define, and macros — text substitution before compilation.",
      fr: "#include, #define et les macros — la substitution de texte avant la compilation.",
      ar: "#include وَ#define والماكرو (macros) — استبدال نصي يحدث قبل الترجمة (compilation).",
    },
    section: "system",
  },
  {
    slug: "multi-file-programs",
    hex: "0x0F",
    title: { en: "Multi-File Programs", fr: "Programmes multi-fichiers", ar: "البرامج متعددة الملفات" },
    blurb: {
      en: "Header files, the compile-then-link model, and keeping code organized.",
      fr: "Les fichiers d'en-tête, le modèle compilation-puis-liaison, et l'organisation du code.",
      ar: "ملفات الترويسة (header files)، ونموذج الترجمة ثم الربط (compile-then-link)، وتنظيم الشيفرة.",
    },
    section: "system",
  },
  {
    slug: "pitfalls-and-debugging",
    hex: "0x10",
    title: { en: "Pitfalls & Debugging", fr: "Pièges & débogage", ar: "الأخطاء الشائعة والتصحيح" },
    blurb: {
      en: "The mistakes every C programmer makes once, and how to catch them.",
      fr: "Les erreurs que tout programmeur C commet un jour, et comment les repérer.",
      ar: "الأخطاء التي يقع فيها كل مبرمج C ولو مرة واحدة، وكيفية اكتشافها.",
    },
    section: "onward",
  },
  {
    slug: "where-next",
    hex: "0x11",
    title: { en: "Where To Go Next", fr: "Et après ?", ar: "إلى أين بعد ذلك" },
    blurb: {
      en: "Projects to build and topics to explore once the basics are solid.",
      fr: "Des projets à réaliser et des sujets à explorer une fois les bases acquises.",
      ar: "مشاريع يمكن بناؤها ومواضيع يمكن استكشافها بعد إتقان الأساسيات.",
    },
    section: "onward",
  },
];

export function getChapter(slug: string) {
  return chapters.find((c) => c.slug === slug);
}

export function getAdjacent(slug: string) {
  const idx = chapters.findIndex((c) => c.slug === slug);
  return {
    prev: idx > 0 ? chapters[idx - 1] : null,
    next: idx >= 0 && idx < chapters.length - 1 ? chapters[idx + 1] : null,
  };
}
