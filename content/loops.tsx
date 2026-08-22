import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "C gives you three loop constructs. They're interchangeable in power — anything you can write with one, you can write with another — but each communicates a different intent to the reader.",
      fr: "Le C offre trois structures de boucle. Elles sont équivalentes en puissance — tout ce qu'on peut écrire avec l'une, on peut l'écrire avec une autre — mais chacune communique une intention différente au lecteur.",
      ar: "توفّر لغة C ثلاث تراكيب للحلقات (loops). وهي متكافئة من حيث القدرة — أي شيء يمكن كتابته بواحدة، يمكن كتابته بأخرى — لكن كل واحدة تُوصل نيّة مختلفة للقارئ.",
    },
  },
  { type: "h2", text: { en: "while: repeat while a condition holds", fr: "while : répéter tant qu'une condition est vraie", ar: "while: التكرار طالما الشرط صحيح" } },
  { type: "code", code: { label: "while.c", code: `int count = 0;\n\nwhile (count < 5) {\n    printf("%d\\n", count);\n    count++;\n}` } },
  {
    type: "p",
    text: {
      en: "The condition is checked *before* each iteration. If it's false the first time, the body never runs at all.",
      fr: "La condition est vérifiée *avant* chaque itération. Si elle est fausse dès le début, le corps ne s'exécute jamais.",
      ar: "يُفحَص الشرط *قبل* كل تكرار (iteration). إذا كان خاطئًا من المرة الأولى، فإن جسم الحلقة لا يُنفَّذ إطلاقًا.",
    },
  },
  { type: "h2", text: { en: "do-while: run at least once", fr: "do-while : s'exécute au moins une fois", ar: "do-while: تُنفَّذ مرة واحدة على الأقل" } },
  { type: "code", code: { label: "do-while.c", code: `int input;\n\ndo {\n    printf("Enter a positive number: ");\n    scanf("%d", &input);\n} while (input <= 0);` } },
  {
    type: "p",
    text: {
      en: "The condition is checked *after* the body, so it always runs at least once — a natural fit for input validation, where you need to ask before you can check the answer.",
      fr: "La condition est vérifiée *après* le corps, donc il s'exécute toujours au moins une fois — un choix naturel pour la validation d'entrée, où il faut poser la question avant de pouvoir vérifier la réponse.",
      ar: "يُفحَص الشرط *بعد* جسم الحلقة، لذا فهي تُنفَّذ دائمًا مرة واحدة على الأقل — وهذا مناسب طبيعيًا للتحقق من الإدخال، حيث تحتاج إلى طرح السؤال أولًا قبل أن تتمكن من فحص الإجابة.",
    },
  },
  { type: "h2", text: { en: "for: repeat a known number of times", fr: "for : répéter un nombre de fois connu", ar: "for: التكرار عددًا معلومًا من المرات" } },
  { type: "code", code: { label: "for.c", code: `for (int i = 0; i < 5; i++) {\n    printf("%d\\n", i);\n}` } },
  {
    type: "p",
    text: {
      en: "The three parts of a `for` loop are init, condition, and update — run once, checked before every iteration, and run after every iteration, respectively. It's the standard choice whenever you're counting or walking through a fixed range, like the indices of an array.",
      fr: "Les trois parties d'une boucle `for` sont l'initialisation, la condition et la mise à jour — exécutée une fois, vérifiée avant chaque itération, et exécutée après chaque itération, respectivement. C'est le choix standard dès que vous comptez ou parcourez une plage fixe, comme les indices d'un tableau.",
      ar: "أجزاء حلقة `for` الثلاثة هي: التهيئة (init)، الشرط (condition)، والتحديث (update) — تُنفَّذ مرة واحدة، وتُفحَص قبل كل تكرار، وتُنفَّذ بعد كل تكرار على التوالي. وهي الخيار المعتاد كلما كنت تعدّ أو تمر عبر نطاق ثابت، مثل فهارس (indices) مصفوفة.",
    },
  },
  { type: "h2", text: { en: "break and continue", fr: "break et continue", ar: "break وَcontinue" } },
  {
    type: "code",
    code: {
      label: "break-continue.c",
      code: `for (int i = 0; i < 10; i++) {\n    if (i == 3) continue;  // skip this iteration\n    if (i == 7) break;     // exit the loop entirely\n    printf("%d\\n", i);\n}\n// prints: 0 1 2 4 5 6`,
    },
  },
  {
    type: "callout",
    kind: "warning",
    title: { en: "Watch for infinite loops", fr: "Attention aux boucles infinies", ar: "احذر الحلقات اللانهائية" },
    code: { label: "infinite.c", code: `int i = 0;\nwhile (i < 10) {\n    printf("%d\\n", i);\n    // forgot i++  — this never terminates\n}` },
    text: {
      en: "A `while` or `for` loop whose condition never becomes false will run forever. This usually happens from forgetting to update the loop variable, or updating the wrong one:",
      fr: "Une boucle `while` ou `for` dont la condition ne devient jamais fausse s'exécutera indéfiniment. Cela vient souvent d'un oubli de mise à jour de la variable de boucle, ou de la mise à jour de la mauvaise variable :",
      ar: "أي حلقة `while` أو `for` لا يصبح شرطها خاطئًا أبدًا ستعمل إلى ما لا نهاية. يحدث هذا عادة بسبب نسيان تحديث متغير الحلقة، أو تحديث متغير خاطئ:",
    },
  },
  { type: "h2", text: { en: "Nested loops", fr: "Boucles imbriquées", ar: "الحلقات المتداخلة" } },
  {
    type: "p",
    text: {
      en: "Loops can contain other loops — common for working through a grid or table. `break` and `continue` only affect the innermost loop they're written in:",
      fr: "Les boucles peuvent en contenir d'autres — courant lorsqu'on parcourt une grille ou un tableau. `break` et `continue` n'affectent que la boucle la plus intérieure dans laquelle ils sont écrits :",
      ar: "يمكن أن تحتوي الحلقات على حلقات أخرى — وهذا شائع عند العمل عبر شبكة (grid) أو جدول. `break` وَ`continue` تؤثران فقط على الحلقة الأعمق (innermost) التي كُتبتا داخلها:",
    },
  },
  {
    type: "code",
    code: {
      label: "nested.c",
      code: `for (int row = 0; row < 3; row++) {\n    for (int col = 0; col < 3; col++) {\n        printf("(%d,%d) ", row, col);\n    }\n    printf("\\n");\n}`,
    },
  },
];

export default blocks;
