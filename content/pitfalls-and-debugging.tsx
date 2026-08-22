import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "C's compiler will happily compile code that has serious problems — this chapter is a field guide to the mistakes almost everyone makes at least once, and the tools that catch them.",
      fr: "Le compilateur C compilera volontiers du code présentant de graves problèmes — ce chapitre est un guide de terrain sur les erreurs que presque tout le monde commet au moins une fois, et les outils qui les détectent.",
      ar: "مترجم C سيقوم بترجمة شيفرة تحتوي على مشاكل خطيرة دون تردد — هذا الفصل دليل ميداني للأخطاء التي يقع فيها الجميع تقريبًا ولو مرة واحدة، والأدوات التي تكتشفها.",
    },
  },
  { type: "h2", text: { en: "The recurring theme: undefined behavior", fr: "Le thème récurrent : le comportement indéfini", ar: "الموضوع المتكرر: السلوك غير المعرَّف" } },
  {
    type: "p",
    text: {
      en: "Many C mistakes don't produce an error — they produce **undefined behavior**, where the language spec makes no promises about what happens next. Sometimes it crashes. Sometimes it silently produces the wrong answer. Sometimes it appears to work correctly, until you change an unrelated part of the program and it stops. Every pitfall below is a specific case of this.",
      fr: "De nombreuses erreurs en C ne produisent pas d'erreur — elles produisent un **comportement indéfini**, où la spécification du langage ne fait aucune promesse sur ce qui se passe ensuite. Parfois ça plante. Parfois ça produit silencieusement une mauvaise réponse. Parfois ça semble fonctionner correctement, jusqu'à ce que vous modifiiez une partie sans rapport du programme et que ça s'arrête. Chaque piège ci-dessous en est un cas particulier.",
      ar: "الكثير من أخطاء C لا تُنتج خطأ ترجمة — بل تُنتج **سلوكًا غير معرَّف (undefined behavior)**، حيث لا تقدم مواصفات اللغة أي وعود حول ما سيحدث بعد ذلك. أحيانًا ينهار البرنامج. وأحيانًا يُنتج إجابة خاطئة بصمت. وأحيانًا يبدو أنه يعمل بشكل صحيح، إلى أن تُغيّر جزءًا غير ذي صلة من البرنامج فيتوقف عن العمل. كل فخ أدناه هو حالة خاصة من هذا.",
    },
  },
  { type: "h2", text: { en: "Turn on warnings — and read them", fr: "Activez les avertissements — et lisez-les", ar: "فعّل التحذيرات — واقرأها" } },
  { type: "code", code: { label: "terminal", code: `gcc -Wall -Wextra program.c -o program` } },
  {
    type: "p",
    text: {
      en: "`-Wall -Wextra` catches a large fraction of common mistakes at compile time: unused variables, mismatched `printf` specifiers, comparisons that are always true, and more. There's little reason not to compile with these flags enabled from day one.",
      fr: "`-Wall -Wextra` détecte une grande partie des erreurs courantes à la compilation : variables inutilisées, spécificateurs `printf` incohérents, comparaisons toujours vraies, et plus encore. Il y a peu de raisons de ne pas compiler avec ces options activées dès le premier jour.",
      ar: "يكتشف الخياران `-Wall -Wextra` جزءًا كبيرًا من الأخطاء الشائعة وقت الترجمة: متغيرات غير مستخدمة، محددات `printf` غير متطابقة، مقارنات دائمًا صحيحة، والمزيد. لا يوجد سبب وجيه لعدم الترجمة بهذين الخيارين مفعّلين منذ اليوم الأول.",
    },
  },
  { type: "h2", text: { en: "Uninitialized variables", fr: "Variables non initialisées", ar: "المتغيرات غير المُهيَّأة" } },
  { type: "code", compact: true, code: { label: "uninitialized.c", code: `int total;              // holds garbage\nprintf("%d\\n", total);  // unpredictable output` } },
  {
    type: "p",
    text: {
      en: "Always give local variables an initial value before reading them.",
      fr: "Donnez toujours une valeur initiale aux variables locales avant de les lire.",
      ar: "أعطِ دائمًا للمتغيرات المحلية قيمة ابتدائية قبل قراءتها.",
    },
  },
  { type: "h2", text: { en: "Off-by-one errors", fr: "Erreurs de décalage d'un (off-by-one)", ar: "أخطاء الانحراف بواحد (off-by-one)" } },
  { type: "code", compact: true, code: { label: "off-by-one.c", code: `int arr[5];\nfor (int i = 0; i <= 5; i++) {  // should be i < 5\n    arr[i] = 0;                  // writes one past the end on the last iteration\n}` } },
  { type: "h2", text: { en: "Comparing floating-point numbers with ==", fr: "Comparer des nombres à virgule flottante avec ==", ar: "مقارنة الأعداد ذات الفاصلة العائمة باستخدام ==" } },
  { type: "code", compact: true, code: { label: "float-compare.c", code: `float a = 0.1f + 0.2f;\nif (a == 0.3f) { ... }  // often false — floating-point rounding` } },
  {
    type: "p",
    text: {
      en: "Compare against a small tolerance instead: `fabs(a - 0.3f) < 0.0001`.",
      fr: "Comparez plutôt avec une petite tolérance : `fabs(a - 0.3f) < 0.0001`.",
      ar: "قارن بدلًا من ذلك مع هامش تسامح صغير: `fabs(a - 0.3f) < 0.0001`.",
    },
  },
  { type: "h2", text: { en: "Memory mistakes", fr: "Erreurs de mémoire", ar: "أخطاء الذاكرة" } },
  {
    type: "ul",
    items: [
      { en: "**Memory leak** — `malloc` without a matching `free`.", fr: "**Fuite de mémoire** — `malloc` sans `free` correspondant.", ar: "**تسريب ذاكرة (memory leak)** — استدعاء `malloc` بدون `free` مطابق." },
      { en: "**Use-after-free** — dereferencing a pointer after it's been freed.", fr: "**Use-after-free** — déréférencer un pointeur après qu'il a été libéré.", ar: "**الاستخدام بعد التحرير (use-after-free)** — إلغاء الإشارة إلى مؤشر بعد تحريره." },
      { en: "**Double free** — calling `free` twice on the same pointer.", fr: "**Double free** — appeler `free` deux fois sur le même pointeur.", ar: "**التحرير المزدوج (double free)** — استدعاء `free` مرتين على نفس المؤشر." },
      { en: "**Buffer overflow** — writing past the end of an array or allocated block.", fr: "**Débordement de tampon (buffer overflow)** — écrire au-delà de la fin d'un tableau ou d'un bloc alloué.", ar: "**فيضان المخزن (buffer overflow)** — الكتابة بعد نهاية مصفوفة أو كتلة مخصصة." },
    ],
  },
  {
    type: "callout",
    kind: "note",
    title: { en: "Tools that catch these automatically", fr: "Des outils qui détectent cela automatiquement", ar: "أدوات تكتشف هذه الأخطاء تلقائيًا" },
    text: {
      en: "`valgrind` (Linux/macOS) runs your program and reports memory leaks and invalid accesses. Compiling with `-fsanitize=address` builds similar checks directly into the executable. Both are worth learning early — they turn silent, intermittent bugs into a clear error message pointing at the exact line.",
      fr: "`valgrind` (Linux/macOS) exécute votre programme et signale les fuites de mémoire et les accès invalides. Compiler avec `-fsanitize=address` intègre des vérifications similaires directement dans l'exécutable. Les deux valent la peine d'être appris tôt — ils transforment des bugs silencieux et intermittents en un message d'erreur clair pointant vers la ligne exacte.",
      ar: "تُشغّل أداة `valgrind` (على Linux/macOS) برنامجك وتُبلغ عن تسريبات الذاكرة والوصول غير الصالح. الترجمة باستخدام `-fsanitize=address` تُدمج فحوصًا مشابهة مباشرة داخل الملف التنفيذي. تستحق كلتا الأداتين التعلم مبكرًا — فهما تحولان الأخطاء الصامتة والمتقطعة إلى رسالة خطأ واضحة تشير إلى السطر بالتحديد.",
    },
  },
  { type: "h2", text: { en: "A minimal debugging checklist", fr: "Une check-list minimale de débogage", ar: "قائمة تحقق بسيطة للتصحيح" } },
  {
    type: "ul",
    items: [
      { en: "Compile with `-Wall -Wextra` and fix every warning.", fr: "Compilez avec `-Wall -Wextra` et corrigez chaque avertissement.", ar: "ترجم باستخدام `-Wall -Wextra` وأصلح كل تحذير." },
      { en: "Add `printf` statements to check values at key points.", fr: "Ajoutez des instructions `printf` pour vérifier les valeurs à des points clés.", ar: "أضف جملًا من `printf` للتحقق من القيم في نقاط رئيسية." },
      {
        en: "Isolate the smallest program that still reproduces the bug — it's far easier to reason about ten lines than a thousand.",
        fr: "Isolez le plus petit programme qui reproduit encore le bug — il est bien plus facile de raisonner sur dix lignes que sur mille.",
        ar: "اعزل أصغر برنامج لا يزال يُعيد إنتاج الخطأ — من الأسهل بكثير التفكير في عشرة أسطر مقارنة بألف سطر.",
      },
      {
        en: "Check every array index, every pointer for `NULL`, and every `malloc` result before trusting it.",
        fr: "Vérifiez chaque indice de tableau, chaque pointeur pour `NULL`, et chaque résultat de `malloc` avant de lui faire confiance.",
        ar: "تحقق من كل فهرس مصفوفة، وكل مؤشر مقابل `NULL`، وكل نتيجة لـ `malloc` قبل الوثوق بها.",
      },
    ],
  },
];

export default blocks;
