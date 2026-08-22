import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "Branching lets a program take different paths depending on a condition. In C, any nonzero value counts as \"true\" and `0` counts as \"false\" — there's no separate boolean type to reason about, just numbers.",
      fr: "Le branchement permet à un programme de suivre différents chemins selon une condition. En C, toute valeur non nulle compte comme « vraie » et `0` compte comme « faux » — il n'y a pas de type booléen distinct, juste des nombres.",
      ar: "التفرع (branching) يسمح للبرنامج باتخاذ مسارات مختلفة حسب شرط معيّن. في C، أي قيمة غير صفرية تُعتبر \"صحيحة\" (true) وَ`0` تُعتبر \"خاطئة\" (false) — لا يوجد نوع منطقي منفصل نتعامل معه، بل مجرد أرقام.",
    },
  },
  { type: "h2", text: { en: "if, else if, else", fr: "if, else if, else", ar: "if وَelse if وَelse" } },
  {
    type: "code",
    code: {
      label: "grade.c",
      code: `#include <stdio.h>\n\nint main(void) {\n    int score = 82;\n\n    if (score >= 90) {\n        printf("A\\n");\n    } else if (score >= 80) {\n        printf("B\\n");\n    } else if (score >= 70) {\n        printf("C\\n");\n    } else {\n        printf("F\\n");\n    }\n    return 0;\n}`,
    },
  },
  {
    type: "p",
    text: {
      en: "Conditions are checked top to bottom, and the first true branch runs — the rest are skipped, even if they'd also be true.",
      fr: "Les conditions sont vérifiées de haut en bas, et la première branche vraie s'exécute — les autres sont ignorées, même si elles seraient également vraies.",
      ar: "تُفحَص الشروط من الأعلى إلى الأسفل، ويُنفَّذ أول فرع صحيح — أما البقية فتُتجاوَز، حتى لو كانت صحيحة أيضًا.",
    },
  },
  {
    type: "callout",
    kind: "warning",
    title: {
      en: "Braces are optional for single statements — use them anyway",
      fr: "Les accolades sont facultatives pour une seule instruction — utilisez-les quand même",
      ar: "الأقواس المعقوفة اختيارية لجملة واحدة — استخدمها رغم ذلك",
    },
    code: {
      label: "dangling-else.c",
      code: `if (score >= 90)\n    printf("A\\n");\n    printf("Great job!\\n");  // runs unconditionally, despite the indentation`,
    },
    text: {
      en: "Indentation doesn't create a block in C. The second `printf` above always runs, because only the first statement belongs to the `if`. Wrapping the body in `{ }` avoids this trap entirely.",
      fr: "L'indentation ne crée pas de bloc en C. Le second `printf` ci-dessus s'exécute toujours, car seule la première instruction appartient au `if`. Entourer le corps avec `{ }` évite complètement ce piège.",
      ar: "المسافة البادئة (indentation) لا تُنشئ كتلة (block) في C. الدالة `printf` الثانية أعلاه تُنفَّذ دائمًا، لأن الجملة الأولى فقط هي التي تنتمي إلى `if`. إحاطة الجسم بـ `{ }` يتجنب هذا الفخ تمامًا.",
    },
  },
  { type: "h2", text: { en: "switch", fr: "switch", ar: "switch" } },
  {
    type: "p",
    text: {
      en: "A `switch` compares one value against several constant cases — clearer than a long `if`/`else if` chain when you're testing a single variable for equality:",
      fr: "Un `switch` compare une valeur à plusieurs cas constants — plus clair qu'une longue chaîne `if`/`else if` lorsque vous testez l'égalité d'une seule variable :",
      ar: "تقارن جملة `switch` قيمة واحدة بعدة حالات (cases) ثابتة — وهذا أوضح من سلسلة طويلة من `if`/`else if` عندما تختبر مساواة متغير واحد:",
    },
  },
  {
    type: "code",
    code: {
      label: "switch.c",
      code: `int day = 3;\n\nswitch (day) {\n    case 1:\n        printf("Monday\\n");\n        break;\n    case 2:\n        printf("Tuesday\\n");\n        break;\n    case 3:\n        printf("Wednesday\\n");\n        break;\n    default:\n        printf("Some other day\\n");\n}`,
    },
  },
  {
    type: "callout",
    kind: "error",
    title: { en: "Forgetting break falls through", fr: "Oublier break provoque une continuation (fall-through)", ar: "نسيان break يؤدي إلى الانزلاق (fall-through)" },
    text: {
      en: "Without `break`, execution continues into the *next* case regardless of whether it matches. This is sometimes intentional (grouping cases with shared behavior), but it's the source of many switch-statement bugs. Always add `break` unless fall-through is exactly what you want — and comment it when it is.",
      fr: "Sans `break`, l'exécution continue dans le case *suivant*, qu'il corresponde ou non. C'est parfois intentionnel (regrouper des cas au comportement partagé), mais c'est la source de nombreux bugs liés à `switch`. Ajoutez toujours `break`, sauf si le fall-through est exactement ce que vous voulez — et commentez-le dans ce cas.",
      ar: "بدون `break`، يستمر التنفيذ إلى الحالة (case) *التالية* بغض النظر عن تطابقها. هذا أحيانًا مقصود (لتجميع حالات ذات سلوك مشترك)، لكنه مصدر للكثير من أخطاء جملة switch. أضف `break` دائمًا ما لم يكن الانزلاق (fall-through) هو المطلوب تحديدًا — وعلّق على ذلك عندما يكون كذلك.",
    },
  },
  { type: "h2", text: { en: "The ternary operator", fr: "L'opérateur ternaire", ar: "العامل الثلاثي (ternary)" } },
  {
    type: "p",
    text: {
      en: "For a simple choice between two values, the ternary operator `?:` is a compact alternative to a full `if`/`else`:",
      fr: "Pour un choix simple entre deux valeurs, l'opérateur ternaire `?:` est une alternative compacte à un `if`/`else` complet :",
      ar: "من أجل اختيار بسيط بين قيمتين، يُعد العامل الثلاثي `?:` بديلاً مختصرًا عن جملة `if`/`else` الكاملة:",
    },
  },
  { type: "code", compact: true, code: { label: "ternary.c", code: `int max = (a > b) ? a : b;\n// equivalent to:\n// int max; if (a > b) { max = a; } else { max = b; }` } },
];

export default blocks;
