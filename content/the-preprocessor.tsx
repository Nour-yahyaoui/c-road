import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "Before your code is compiled, it passes through the **preprocessor** — a text-substitution step that handles every line starting with `#`. It doesn't understand C; it just rewrites your source file according to a small set of directives, and hands the result to the compiler.",
      fr: "Avant que votre code ne soit compilé, il passe par le **préprocesseur** — une étape de substitution de texte qui traite chaque ligne commençant par `#`. Il ne comprend pas le C ; il réécrit simplement votre fichier source selon un petit ensemble de directives, et transmet le résultat au compilateur.",
      ar: "قبل ترجمة شيفرتك، تمر عبر **المعالج المسبق (preprocessor)** — وهي مرحلة استبدال نصي تتعامل مع كل سطر يبدأ بـ `#`. هو لا يفهم لغة C؛ بل يقوم فقط بإعادة كتابة ملفك المصدري وفق مجموعة صغيرة من التوجيهات (directives)، ويُسلّم النتيجة إلى المترجم.",
    },
  },
  { type: "h2", text: { en: "#include", fr: "#include", ar: "#include" } },
  {
    type: "p",
    text: {
      en: "You've used this since chapter 0x00. It literally pastes the contents of another file in place:",
      fr: "Vous l'utilisez depuis le chapitre 0x00. Il colle littéralement le contenu d'un autre fichier à cet endroit :",
      ar: "لقد استخدمت هذا منذ الفصل 0x00. فهو حرفيًا يلصق محتوى ملف آخر في ذلك الموضع:",
    },
  },
  { type: "code", code: { label: "include.c", code: `#include <stdio.h>   // a standard library header, in angle brackets\n#include "helpers.h"  // a header file of your own, in quotes` } },
  {
    type: "p",
    text: {
      en: "Angle brackets tell the compiler to look in the system's standard include paths; quotes look in your project first.",
      fr: "Les chevrons indiquent au compilateur de chercher dans les chemins d'inclusion standard du système ; les guillemets cherchent d'abord dans votre projet.",
      ar: "الأقواس الزاوية تخبر المترجم بالبحث في مسارات الإدراج (include paths) القياسية للنظام؛ أما علامات الاقتباس فتبحث في مشروعك أولًا.",
    },
  },
  { type: "h2", text: { en: "#define: constants and macros", fr: "#define : constantes et macros", ar: "#define: الثوابت والماكرو" } },
  { type: "code", code: { label: "define.c", code: `#define MAX_USERS 100\n#define PI 3.14159\n\nint users[MAX_USERS];\nfloat area = PI * radius * radius;` } },
  {
    type: "p",
    text: {
      en: "Every occurrence of `MAX_USERS` is replaced with `100` before compilation even begins — the compiler never sees the name `MAX_USERS` at all. `const` variables (0x01) are usually preferred for simple constants today, since they have a real type the compiler can check.",
      fr: "Chaque occurrence de `MAX_USERS` est remplacée par `100` avant même le début de la compilation — le compilateur ne voit jamais le nom `MAX_USERS`. Les variables `const` (0x01) sont aujourd'hui généralement préférées pour les constantes simples, car elles ont un vrai type que le compilateur peut vérifier.",
      ar: "كل ظهور لـ `MAX_USERS` يُستبدَل بـ `100` حتى قبل بدء الترجمة — لا يرى المترجم اسم `MAX_USERS` إطلاقًا. تُفضَّل اليوم عادة متغيرات `const` (0x01) للثوابت البسيطة، لأن لها نوعًا حقيقيًا يمكن للمترجم التحقق منه.",
    },
  },
  { type: "h2", text: { en: "Function-like macros", fr: "Macros de type fonction", ar: "الماكرو الشبيه بالدالة" } },
  { type: "code", code: { label: "macro.c", code: `#define SQUARE(x) ((x) * (x))\n\nint result = SQUARE(5);       // expands to ((5) * (5))` } },
  {
    type: "callout",
    kind: "warning",
    title: { en: "Macros are pasted text, not function calls", fr: "Les macros sont du texte collé, pas des appels de fonction", ar: "الماكرو هو نص مُلصق، وليس استدعاء دالة" },
    code: { label: "macro-trap.c", code: `#define SQUARE(x) x * x\n\nSQUARE(2 + 3);  // expands to 2 + 3 * 2 + 3  →  11, not 25` },
    text: {
      en: "Without parentheses around both the parameter and the whole expression, operator precedence rewrites the macro in surprising ways. Always parenthesize every parameter, and the full expansion, in a function-like macro.",
      fr: "Sans parenthèses autour du paramètre et de l'expression entière, la priorité des opérateurs réécrit la macro de façon surprenante. Mettez toujours entre parenthèses chaque paramètre, ainsi que le développement complet, dans une macro de type fonction.",
      ar: "بدون أقواس حول كل من المعامل والتعبير بأكمله، تعيد أسبقية العوامل (operator precedence) كتابة الماكرو بطرق مفاجئة. ضع دائمًا كل معامل بين أقواس، وكذلك التوسّع الكامل، في أي ماكرو شبيه بدالة.",
    },
  },
  { type: "h2", text: { en: "Conditional compilation", fr: "Compilation conditionnelle", ar: "الترجمة الشرطية" } },
  {
    type: "p",
    text: {
      en: "`#ifdef` and related directives include or exclude code before compilation, commonly used for platform-specific code or debug-only logging:",
      fr: "`#ifdef` et les directives associées incluent ou excluent du code avant la compilation, couramment utilisées pour du code spécifique à une plateforme ou des journaux réservés au débogage :",
      ar: "توجيه `#ifdef` والتوجيهات المرتبطة به تُدرج أو تستبعد شيفرة قبل الترجمة، وتُستخدم عادة للشيفرة الخاصة بمنصة معينة أو لتسجيل معلومات التصحيح (debug) فقط:",
    },
  },
  { type: "code", code: { label: "ifdef.c", code: `#define DEBUG\n\n#ifdef DEBUG\n    printf("Debug: entering main\\n");\n#endif` } },
  { type: "h2", text: { en: "Include guards", fr: "Gardes d'inclusion", ar: "حراس الإدراج (include guards)" } },
  {
    type: "p",
    text: {
      en: "Header files use a guard to prevent being pasted into the same file twice — essential once a project has multiple files including the same header, covered next in 0x0F:",
      fr: "Les fichiers d'en-tête utilisent une garde pour éviter d'être collés deux fois dans le même fichier — essentiel dès qu'un projet a plusieurs fichiers incluant le même en-tête, ce qui sera vu au chapitre 0x0F :",
      ar: "تستخدم ملفات الترويسة (header files) حارسًا (guard) لمنع لصقها مرتين في نفس الملف — وهذا أمر ضروري بمجرد أن يحتوي المشروع على عدة ملفات تُدرج نفس الترويسة، وسيُشرح ذلك في الفصل 0x0F:",
    },
  },
  { type: "code", code: { label: "guard.h", code: `#ifndef HELPERS_H\n#define HELPERS_H\n\n// declarations go here\n\n#endif` } },
];

export default blocks;
