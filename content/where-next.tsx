import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "Everything up to this point — variables, control flow, functions, arrays, pointers, memory, and files — is enough to build real programs. The rest of C is mostly combinations and refinements of these same ideas.",
      fr: "Tout ce qui précède — variables, structures de contrôle, fonctions, tableaux, pointeurs, mémoire et fichiers — suffit pour construire de vrais programmes. Le reste du C n'est essentiellement que des combinaisons et des raffinements de ces mêmes idées.",
      ar: "كل ما سبق — المتغيرات، والتحكم في التدفق، والدوال، والمصفوفات، والمؤشرات، والذاكرة، والملفات — يكفي لبناء برامج حقيقية. بقية لغة C هي في معظمها توليفات وتحسينات لهذه الأفكار نفسها.",
    },
  },
  { type: "h2", text: { en: "Projects worth building", fr: "Des projets qui valent la peine d'être réalisés", ar: "مشاريع تستحق البناء" } },
  {
    type: "ul",
    items: [
      {
        en: "**A command-line to-do list** — practice structs, arrays, and file I/O together by saving tasks to disk.",
        fr: "**Une liste de tâches en ligne de commande** — pratiquez les structures, les tableaux et les fichiers en sauvegardant des tâches sur disque.",
        ar: "**قائمة مهام عبر سطر الأوامر** — تدرّب على البنى والمصفوفات والملفات معًا عبر حفظ المهام على القرص.",
      },
      {
        en: "**A simple text adventure** — practice control flow, strings, and program structure across multiple files.",
        fr: "**Une simple aventure textuelle** — pratiquez les structures de contrôle, les chaînes de caractères et l'organisation de programme sur plusieurs fichiers.",
        ar: "**مغامرة نصية بسيطة** — تدرّب على التحكم في التدفق والسلاسل النصية وتنظيم البرنامج عبر عدة ملفات.",
      },
      {
        en: "**A linked list from scratch** — the natural next data structure once pointers and `malloc` feel comfortable; it's a small, self-contained way to practice both.",
        fr: "**Une liste chaînée à partir de zéro** — la structure de données naturelle suivante une fois à l'aise avec les pointeurs et `malloc` ; c'est un moyen compact et autonome de pratiquer les deux.",
        ar: "**قائمة مترابطة (linked list) من الصفر** — بنية البيانات الطبيعية التالية بمجرد أن تصبح مرتاحًا مع المؤشرات وَ`malloc`؛ وهي طريقة صغيرة ومستقلة لممارسة الاثنين معًا.",
      },
      {
        en: "**A basic hash table or dynamic array** — forces you to think carefully about `realloc` and memory ownership.",
        fr: "**Une table de hachage basique ou un tableau dynamique** — vous oblige à réfléchir soigneusement à `realloc` et à la propriété de la mémoire.",
        ar: "**جدول تجزئة أساسي (hash table) أو مصفوفة ديناميكية** — يجبرك على التفكير بعناية في `realloc` وملكية الذاكرة.",
      },
    ],
  },
  { type: "h2", text: { en: "Topics beyond this course", fr: "Sujets au-delà de ce cours", ar: "مواضيع تتجاوز هذه الدورة" } },
  {
    type: "ul",
    items: [
      {
        en: "**Linked lists, stacks, queues, and trees** — data structures built directly from structs and pointers.",
        fr: "**Listes chaînées, piles, files et arbres** — des structures de données construites directement à partir de structures et de pointeurs.",
        ar: "**القوائم المترابطة والمكدسات والطوابير والأشجار** — بنى بيانات تُبنى مباشرة من البنى والمؤشرات.",
      },
      {
        en: "**Function pointers** — storing and passing functions themselves as values.",
        fr: "**Pointeurs de fonction** — stocker et passer des fonctions elles-mêmes comme des valeurs.",
        ar: "**مؤشرات الدوال (function pointers)** — تخزين الدوال نفسها وتمريرها كقيم.",
      },
      {
        en: "**The standard library in depth** — `<math.h>`, `<time.h>`, and `<ctype.h>` cover most everyday needs beyond what this course touched.",
        fr: "**La bibliothèque standard en profondeur** — `<math.h>`, `<time.h>` et `<ctype.h>` couvrent la plupart des besoins quotidiens au-delà de ce que ce cours a abordé.",
        ar: "**المكتبة القياسية بتعمق** — `<math.h>` وَ`<time.h>` وَ`<ctype.h>` تغطي معظم الاحتياجات اليومية بما يتجاوز ما تطرقت إليه هذه الدورة.",
      },
      {
        en: "**Bitwise operators** — `&`, `|`, `^`, `<<`, `>>`, for working directly with individual bits.",
        fr: "**Opérateurs bit à bit** — `&`, `|`, `^`, `<<`, `>>`, pour travailler directement avec des bits individuels.",
        ar: "**العوامل على مستوى البتات (bitwise)** — `&`، `|`، `^`، `<<`، `>>`، للعمل مباشرة مع بتات فردية.",
      },
      {
        en: "**Build systems** — `make` or `CMake`, for projects with many source files.",
        fr: "**Systèmes de build** — `make` ou `CMake`, pour les projets avec de nombreux fichiers sources.",
        ar: "**أنظمة البناء (build systems)** — `make` أو `CMake`، للمشاريع ذات الملفات المصدرية الكثيرة.",
      },
      {
        en: "**How C connects to systems programming** — processes, the standard library's relationship to system calls, and eventually reading real-world C codebases.",
        fr: "**Comment le C se connecte à la programmation système** — les processus, la relation entre la bibliothèque standard et les appels système, et éventuellement la lecture de vraies bases de code C.",
        ar: "**كيف ترتبط C ببرمجة الأنظمة** — العمليات (processes)، وعلاقة المكتبة القياسية باستدعاءات النظام (system calls)، وفي النهاية قراءة قواعد شيفرة C حقيقية.",
      },
    ],
  },
  {
    type: "code",
    code: {
      label: "checklist.c",
      code: `/* Before moving on, you should be comfortable:\n * - reading a compiler warning and knowing what it means\n * - tracing what a pointer points to, by hand, on paper\n * - explaining why every malloc needs a free\n * - splitting a small program across a .c and .h file\n */`,
    },
  },
  {
    type: "callout",
    kind: "note",
    title: {
      en: "The best next step is a project, not another tutorial",
      fr: "La meilleure prochaine étape est un projet, pas un autre tutoriel",
      ar: "أفضل خطوة تالية هي مشروع، وليس درسًا آخر",
    },
    text: {
      en: "Pick something slightly beyond your comfort level from the list above and build it end to end. You will hit real bugs — that's where the ideas in 0x10 actually stick.",
      fr: "Choisissez quelque chose légèrement au-delà de votre zone de confort dans la liste ci-dessus et réalisez-le de bout en bout. Vous rencontrerez de vrais bugs — c'est là que les idées du chapitre 0x10 s'ancrent réellement.",
      ar: "اختر شيئًا يتجاوز قليلًا مستوى راحتك من القائمة أعلاه وابنِه من البداية إلى النهاية. ستصادف أخطاءً حقيقية — وهذا هو المكان الذي ترسخ فيه أفكار الفصل 0x10 فعليًا.",
    },
  },
];

export default blocks;
