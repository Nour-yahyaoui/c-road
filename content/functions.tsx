import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "A function is a named, reusable block of code. Every C program already has at least one — `main` — and splitting logic into more of them is how you keep programs readable as they grow.",
      fr: "Une fonction est un bloc de code nommé et réutilisable. Tout programme C en possède déjà au moins une — `main` — et diviser la logique en davantage de fonctions permet de garder les programmes lisibles à mesure qu'ils grandissent.",
      ar: "الدالة (function) هي كتلة شيفرة قابلة لإعادة الاستخدام ولها اسم. كل برنامج C يحتوي أصلًا على دالة واحدة على الأقل — وهي `main` — وتقسيم المنطق إلى دوال أكثر هو ما يحافظ على وضوح البرامج مع نموّها.",
    },
  },
  { type: "h2", text: { en: "Defining and calling a function", fr: "Définir et appeler une fonction", ar: "تعريف الدالة واستدعاؤها" } },
  {
    type: "code",
    code: {
      label: "square.c",
      code: `#include <stdio.h>\n\nint square(int n) {\n    return n * n;\n}\n\nint main(void) {\n    int result = square(6);\n    printf("%d\\n", result);  // 36\n    return 0;\n}`,
    },
  },
  {
    type: "p",
    text: {
      en: "A function signature has three parts: a return type (`int`), a name (`square`), and a parameter list (`int n`). `return` both produces the function's result and immediately exits it.",
      fr: "Une signature de fonction comporte trois parties : un type de retour (`int`), un nom (`square`), et une liste de paramètres (`int n`). `return` produit le résultat de la fonction et en sort immédiatement.",
      ar: "توقيع الدالة (signature) يتكون من ثلاثة أجزاء: نوع القيمة المُعادة (`int`)، اسم الدالة (`square`)، وقائمة الوسائط (`int n`). تقوم `return` بإنتاج نتيجة الدالة والخروج منها فورًا في آن واحد.",
    },
  },
  { type: "h2", text: { en: "Declarations vs. definitions", fr: "Déclarations vs définitions", ar: "التصريحات مقابل التعريفات" } },
  {
    type: "p",
    text: {
      en: "C reads top to bottom, so a function normally has to appear before it's used. When you need to call a function before its full definition — often because two functions call each other — declare it first with a **prototype**:",
      fr: "Le C se lit de haut en bas, donc une fonction doit normalement apparaître avant d'être utilisée. Quand vous devez appeler une fonction avant sa définition complète — souvent parce que deux fonctions s'appellent mutuellement — déclarez-la d'abord avec un **prototype** :",
      ar: "تُقرأ C من الأعلى إلى الأسفل، لذا يجب عادة أن تظهر الدالة قبل استخدامها. عندما تحتاج إلى استدعاء دالة قبل تعريفها الكامل — غالبًا لأن دالتين تستدعي كل منهما الأخرى — صرّح عنها أولًا باستخدام **نموذج أولي (prototype)**:",
    },
  },
  {
    type: "code",
    code: {
      label: "prototype.c",
      code: `int square(int n);  // prototype: promises this function exists\n\nint main(void) {\n    printf("%d\\n", square(4));  // fine — the compiler trusts the prototype\n    return 0;\n}\n\nint square(int n) {  // full definition, can come later in the file\n    return n * n;\n}`,
    },
  },
  { type: "h2", text: { en: "void functions", fr: "Fonctions void", ar: "الدوال من نوع void" } },
  {
    type: "p",
    text: {
      en: "A function that doesn't return a value uses `void` as its return type:",
      fr: "Une fonction qui ne renvoie aucune valeur utilise `void` comme type de retour :",
      ar: "الدالة التي لا تُعيد أي قيمة تستخدم `void` كنوع للقيمة المُعادة:",
    },
  },
  { type: "code", code: { label: "greet.c", code: `void greet(const char *name) {\n    printf("Hello, %s!\\n", name);\n}` } },
  {
    type: "p",
    text: {
      en: "`const` here promises the function won't modify the string it's given — a useful signal to callers and to the compiler.",
      fr: "`const` ici garantit que la fonction ne modifiera pas la chaîne qu'on lui passe — un signal utile pour les appelants et pour le compilateur.",
      ar: "`const` هنا تَعِد بأن الدالة لن تُعدّل السلسلة النصية الممرّرة إليها — وهي إشارة مفيدة سواء للمستدعي (caller) أو للمترجم.",
    },
  },
  { type: "h2", text: { en: "Parameters are passed by value", fr: "Les paramètres sont passés par valeur", ar: "الوسائط تُمرَّر بالقيمة (by value)" } },
  {
    type: "p",
    text: {
      en: "C copies each argument into the function's parameters. Changes made inside the function don't affect the caller's variable:",
      fr: "Le C copie chaque argument dans les paramètres de la fonction. Les modifications faites à l'intérieur de la fonction n'affectent pas la variable de l'appelant :",
      ar: "تقوم C بنسخ كل وسيط (argument) إلى معاملات (parameters) الدالة. التغييرات التي تحدث داخل الدالة لا تؤثر على متغير المستدعي (caller):",
    },
  },
  {
    type: "code",
    code: {
      label: "by-value.c",
      code: `void increment(int n) {\n    n = n + 1;  // only changes the local copy\n}\n\nint main(void) {\n    int x = 5;\n    increment(x);\n    printf("%d\\n", x);  // still 5\n    return 0;\n}`,
    },
  },
  {
    type: "callout",
    kind: "note",
    title: {
      en: "To modify a caller's variable, pass its address",
      fr: "Pour modifier la variable d'un appelant, passez son adresse",
      ar: "لتعديل متغير المستدعي، مرّر عنوانه",
    },
    text: {
      en: "Functions that need to change a caller's data take a pointer parameter instead. This is covered once pointers are introduced in 0x09 — it's the same mechanism `scanf` uses.",
      fr: "Les fonctions qui doivent modifier les données d'un appelant prennent plutôt un paramètre pointeur. Cela sera couvert une fois les pointeurs introduits en 0x09 — c'est le même mécanisme qu'utilise `scanf`.",
      ar: "الدوال التي تحتاج إلى تغيير بيانات المستدعي تأخذ بدلًا من ذلك معاملًا من نوع مؤشر (pointer). سيُشرح هذا عند تقديم المؤشرات في الفصل 0x09 — وهي نفس الآلية التي تستخدمها `scanf`.",
    },
  },
  { type: "h2", text: { en: "Recursion", fr: "Récursivité", ar: "التكرار الذاتي (recursion)" } },
  {
    type: "p",
    text: {
      en: "A function can call itself. Every recursive function needs a **base case** that stops the recursion, or it will call itself forever (and eventually crash with a stack overflow):",
      fr: "Une fonction peut s'appeler elle-même. Toute fonction récursive a besoin d'un **cas de base** qui arrête la récursion, sinon elle s'appellera indéfiniment (et finira par planter avec un débordement de pile) :",
      ar: "يمكن للدالة أن تستدعي نفسها. كل دالة تكرارية ذاتيًا (recursive) تحتاج إلى **حالة أساس (base case)** توقف التكرار، وإلا فستستدعي نفسها إلى ما لا نهاية (وينتهي بها الأمر بانهيار بسبب فيضان المكدس، stack overflow):",
    },
  },
  { type: "code", code: { label: "factorial.c", code: `int factorial(int n) {\n    if (n <= 1) return 1;        // base case\n    return n * factorial(n - 1); // recursive case\n}` } },
];

export default blocks;
