import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "A variable in C is a named piece of memory with a fixed **type**. The type tells the compiler how many bytes to reserve and how to interpret the bits stored there — this is the core trade C makes: you get precise control over memory, in exchange for stating types up front.",
      fr: "Une variable en C est un emplacement mémoire nommé, avec un **type** fixe. Le type indique au compilateur combien d'octets réserver et comment interpréter les bits qui y sont stockés — c'est le compromis central du C : vous obtenez un contrôle précis sur la mémoire, en échange de la déclaration des types à l'avance.",
      ar: "المتغير في لغة C هو موضع في الذاكرة له اسم و**نوع (type)** ثابت. النوع يخبر المترجم بعدد البايتات (bytes) التي يجب حجزها، وكيفية تفسير البتات المخزَّنة هناك — وهذا هو جوهر المقايضة (trade-off) التي تقدمها C: تحكم دقيق في الذاكرة، مقابل تحديد الأنواع مسبقًا.",
    },
  },
  { type: "h2", text: { en: "Declaring variables", fr: "Déclarer des variables", ar: "تعريف المتغيرات" } },
  {
    type: "code",
    code: {
      label: "variables.c",
      code: `int age = 19;\nfloat price = 4.50f;\nchar grade = 'A';\ndouble distance = 384400.0;`,
    },
  },
  {
    type: "p",
    text: {
      en: "A declaration reserves space; an initializer (the part after `=`) gives it a starting value. Uninitialized local variables hold whatever garbage was already in that memory — always initialize before you read a variable.",
      fr: "Une déclaration réserve de l'espace ; un initialiseur (la partie après `=`) lui donne une valeur de départ. Les variables locales non initialisées contiennent des restes de données déjà présents dans cette mémoire — initialisez toujours une variable avant de la lire.",
      ar: "التصريح (declaration) يحجز مساحة؛ أما المُهيّئ (initializer، وهو الجزء بعد `=`) فيعطيها قيمة بداية. المتغيرات المحلية غير المُهيَّأة تحتوي على أي بيانات كانت موجودة سلفًا في تلك الذاكرة — قم دائمًا بتهيئة المتغير قبل قراءته.",
    },
  },
  { type: "h2", text: { en: "The built-in types", fr: "Les types intégrés", ar: "الأنواع المدمجة" } },
  {
    type: "ul",
    items: [
      { en: "`int` — a whole number, typically 4 bytes on modern systems.", fr: "`int` — un nombre entier, généralement 4 octets sur les systèmes modernes.", ar: "`int` — عدد صحيح، وعادة ما يشغل 4 بايتات على الأنظمة الحديثة." },
      { en: "`char` — a single byte, usually holding one ASCII character.", fr: "`char` — un seul octet, contenant généralement un caractère ASCII.", ar: "`char` — بايت واحد، يحمل عادة رمز حرف ASCII واحد." },
      { en: "`float` — a single-precision decimal number (about 7 significant digits).", fr: "`float` — un nombre décimal en simple précision (environ 7 chiffres significatifs).", ar: "`float` — عدد عشري أحادي الدقة (بحوالي 7 أرقام معنوية)." },
      { en: "`double` — a double-precision decimal number (about 15 significant digits), the default choice for decimal math.", fr: "`double` — un nombre décimal en double précision (environ 15 chiffres significatifs), le choix par défaut pour les calculs décimaux.", ar: "`double` — عدد عشري مضاعف الدقة (بحوالي 15 رقمًا معنويًا)، وهو الخيار الافتراضي لعمليات الحساب العشرية." },
    ],
  },
  {
    type: "p",
    text: {
      en: "These come in modified forms too: `short` and `long` change the size, and `unsigned` removes the sign, doubling the largest representable positive value at the cost of never going negative.",
      fr: "Ces types existent aussi sous des formes modifiées : `short` et `long` changent la taille, et `unsigned` supprime le signe, doublant la plus grande valeur positive représentable au prix de ne jamais pouvoir être négatif.",
      ar: "توجد أيضًا أشكال معدَّلة من هذه الأنواع: `short` وَ`long` تغيّران الحجم، بينما `unsigned` تزيل الإشارة (sign)، مما يضاعف أكبر قيمة موجبة يمكن تمثيلها مقابل عدم القدرة على أن تكون القيمة سالبة أبدًا.",
    },
  },
  { type: "code", compact: true, code: { label: "modifiers.c", code: `short small = 12;\nlong big = 3000000000L;\nunsigned int positive_only = 42u;` } },
  { type: "h2", text: { en: "How much space things take", fr: "Combien d'espace chaque chose occupe", ar: "كم من المساحة يشغلها كل نوع" } },
  {
    type: "p",
    text: {
      en: "The exact size of a type isn't fixed by the language — it depends on the platform. Use `sizeof` to check, rather than assuming:",
      fr: "La taille exacte d'un type n'est pas fixée par le langage — elle dépend de la plateforme. Utilisez `sizeof` pour vérifier, plutôt que de supposer :",
      ar: "الحجم الدقيق لأي نوع ليس ثابتًا في اللغة نفسها — بل يعتمد على المنصة (platform). استخدم `sizeof` للتحقق، بدلًا من الافتراض:",
    },
  },
  {
    type: "code",
    code: {
      label: "sizes.c",
      code: `#include <stdio.h>\n\nint main(void) {\n    printf("int: %zu bytes\\n", sizeof(int));\n    printf("double: %zu bytes\\n", sizeof(double));\n    printf("char: %zu bytes\\n", sizeof(char));\n    return 0;\n}`,
    },
  },
  {
    type: "callout",
    kind: "note",
    title: { en: "sizeof is not a function call", fr: "sizeof n'est pas un appel de fonction", ar: "sizeof ليست استدعاء دالة" },
    text: {
      en: "`sizeof` is an operator evaluated at compile time. You'll usually see it written like a function, but it works differently — it never runs your code, it just computes a size.",
      fr: "`sizeof` est un opérateur évalué à la compilation. On l'écrit généralement comme une fonction, mais il fonctionne différemment — il n'exécute jamais votre code, il calcule simplement une taille.",
      ar: "`sizeof` هي عامل (operator) يُحسَب وقت الترجمة (compile time). عادة ما تُكتب كأنها استدعاء دالة، لكنها تعمل بشكل مختلف — فهي لا تُشغّل شيفرتك أبدًا، بل تحسب فقط حجمًا.",
    },
  },
  { type: "h2", text: { en: "Naming and constants", fr: "Nommage et constantes", ar: "التسمية والثوابت" } },
  {
    type: "p",
    text: {
      en: "Variable names can contain letters, digits, and underscores, but can't start with a digit. C is case-sensitive, so `total` and `Total` are different names.",
      fr: "Les noms de variables peuvent contenir des lettres, des chiffres et des underscores, mais ne peuvent pas commencer par un chiffre. Le C est sensible à la casse, donc `total` et `Total` sont des noms différents.",
      ar: "يمكن أن تحتوي أسماء المتغيرات على حروف وأرقام وشرطات سفلية (underscore)، لكن لا يمكن أن تبدأ برقم. لغة C حساسة لحالة الأحرف (case-sensitive)، لذا `total` وَ`Total` اسمان مختلفان.",
    },
  },
  {
    type: "p",
    text: {
      en: "Mark a variable as unchangeable with `const` — the compiler will reject any code that tries to modify it afterward:",
      fr: "Marquez une variable comme non modifiable avec `const` — le compilateur rejettera tout code qui tente de la modifier par la suite :",
      ar: "يمكنك جعل متغير غير قابل للتغيير باستخدام `const` — سيرفض المترجم أي شيفرة تحاول تعديله لاحقًا:",
    },
  },
  { type: "code", compact: true, code: { code: `const double PI = 3.14159;` } },
  {
    type: "callout",
    kind: "warning",
    title: { en: "Integer division truncates", fr: "La division entière tronque le résultat", ar: "قسمة الأعداد الصحيحة تقتصّ الناتج" },
    text: {
      en: "`7 / 2` evaluates to `3`, not `3.5`, because both operands are integers. Make at least one operand a `float` or `double` if you want a fractional result — chapter 0x02 covers this in detail.",
      fr: "`7 / 2` donne `3`, et non `3.5`, car les deux opérandes sont des entiers. Faites de l'un des deux opérandes un `float` ou un `double` si vous voulez un résultat fractionnaire — le chapitre 0x02 détaille ce point.",
      ar: "`7 / 2` تُعطي `3`، وليس `3.5`، لأن كلا الطرفين (operands) عددان صحيحان. اجعل أحد الطرفين على الأقل من نوع `float` أو `double` إذا أردت نتيجة كسرية — سيُشرح هذا بالتفصيل في الفصل 0x02.",
    },
  },
];

export default blocks;
