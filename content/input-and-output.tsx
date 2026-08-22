import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "C has no built-in print statement — output is handled by ordinary library functions, the most common being `printf` and `scanf`, both declared in `<stdio.h>`. Both rely on a small template language called **format specifiers** to know how to interpret your data.",
      fr: "Le C n'a pas d'instruction d'affichage intégrée — la sortie est gérée par des fonctions de bibliothèque ordinaires, les plus courantes étant `printf` et `scanf`, toutes deux déclarées dans `<stdio.h>`. Les deux s'appuient sur un petit langage de gabarits appelé **spécificateurs de format** pour savoir comment interpréter vos données.",
      ar: "لا تمتلك C جملة طباعة مدمجة — تُعالَج عمليات الإخراج بواسطة دوال مكتبة عادية، أشهرها `printf` وَ`scanf`، وكلتاهما مصرَّح عنهما في `<stdio.h>`. تعتمد الدالتان على لغة قوالب صغيرة تُسمى **محددات التنسيق (format specifiers)** لمعرفة كيفية تفسير بياناتك.",
    },
  },
  { type: "h2", text: { en: "printf and format specifiers", fr: "printf et les spécificateurs de format", ar: "printf ومحددات التنسيق" } },
  {
    type: "code",
    code: {
      label: "printf.c",
      code: `#include <stdio.h>\n\nint main(void) {\n    int age = 19;\n    float gpa = 3.8f;\n    char initial = 'N';\n\n    printf("Age: %d\\n", age);\n    printf("GPA: %.2f\\n", gpa);\n    printf("Initial: %c\\n", initial);\n    printf("%s is %d years old\\n", "Nour", age);\n    return 0;\n}`,
    },
  },
  {
    type: "ul",
    items: [
      { en: "`%d` — a signed integer.", fr: "`%d` — un entier signé.", ar: "`%d` — عدد صحيح موقّع (signed)." },
      { en: "`%f` — a floating-point number; `%.2f` rounds to 2 decimal places.", fr: "`%f` — un nombre à virgule flottante ; `%.2f` arrondit à 2 décimales.", ar: "`%f` — عدد ذو فاصلة عائمة؛ `%.2f` يُقرّب إلى منزلتين عشريتين." },
      { en: "`%c` — a single character.", fr: "`%c` — un seul caractère.", ar: "`%c` — حرف واحد." },
      { en: "`%s` — a string (a `char*`, covered in 0x08).", fr: "`%s` — une chaîne de caractères (un `char*`, voir 0x08).", ar: "`%s` — سلسلة نصية (وهي `char*`، سيُشرح في الفصل 0x08)." },
      { en: "`%%` — a literal percent sign.", fr: "`%%` — un signe pourcentage littéral.", ar: "`%%` — رمز النسبة المئوية نفسه." },
    ],
  },
  {
    type: "callout",
    kind: "warning",
    title: { en: "Mismatched specifiers are undefined behavior", fr: "Des spécificateurs incohérents provoquent un comportement indéfini", ar: "المحددات غير المتطابقة تؤدي إلى سلوك غير معرَّف" },
    text: {
      en: "Passing a `double` where `printf` expects an `%d`, or vice versa, compiles but produces garbage output — the compiler doesn't check this for you by default. Modern `gcc` will warn about it with `-Wall`, which is worth always enabling.",
      fr: "Passer un `double` là où `printf` attend un `%d`, ou l'inverse, compile mais produit un résultat incohérent — le compilateur ne vérifie pas cela par défaut. Le `gcc` moderne vous avertira avec `-Wall`, qu'il vaut toujours la peine d'activer.",
      ar: "تمرير قيمة من نوع `double` حيث تتوقع `printf` قيمة `%d`، أو العكس، يُترجَم بنجاح لكنه يُنتج مخرجات عشوائية — المترجم لا يتحقق من ذلك افتراضيًا. سيحذّرك `gcc` الحديث من ذلك عبر الخيار `-Wall`، والذي يستحق التفعيل دائمًا.",
    },
  },
  { type: "h2", text: { en: "Reading input with scanf", fr: "Lire une entrée avec scanf", ar: "قراءة الإدخال باستخدام scanf" } },
  {
    type: "p",
    text: {
      en: "`scanf` reads formatted input and needs the **address** of each variable it fills in, using the `&` operator (more on addresses in 0x09):",
      fr: "`scanf` lit une entrée formatée et a besoin de l'**adresse** de chaque variable qu'elle remplit, via l'opérateur `&` (plus de détails sur les adresses en 0x09) :",
      ar: "تقوم `scanf` بقراءة إدخال منسَّق، وتحتاج إلى **عنوان (address)** كل متغير تقوم بملئه، باستخدام العامل `&` (سيُشرح المزيد عن العناوين في الفصل 0x09):",
    },
  },
  {
    type: "code",
    code: {
      label: "scanf.c",
      code: `#include <stdio.h>\n\nint main(void) {\n    int age;\n    printf("Enter your age: ");\n    scanf("%d", &age);\n    printf("You are %d years old.\\n", age);\n    return 0;\n}`,
    },
  },
  {
    type: "callout",
    kind: "note",
    title: { en: "Strings are the exception", fr: "Les chaînes de caractères sont l'exception", ar: "السلاسل النصية هي الاستثناء" },
    text: {
      en: "A plain array already refers to its own address, so reading a string with `scanf(\"%s\", name)` doesn't use `&`. This is explained fully once arrays and pointers connect in 0x0A.",
      fr: "Un simple tableau fait déjà référence à sa propre adresse, donc lire une chaîne avec `scanf(\"%s\", name)` n'utilise pas `&`. Cela sera expliqué en détail lorsque tableaux et pointeurs se rejoindront en 0x0A.",
      ar: "أي مصفوفة عادية تشير أصلًا إلى عنوانها الخاص، لذلك قراءة سلسلة نصية باستخدام `scanf(\"%s\", name)` لا تستخدم `&`. سيُشرح هذا بالكامل عندما تلتقي المصفوفات والمؤشرات في الفصل 0x0A.",
    },
  },
  { type: "h2", text: { en: "Escape sequences", fr: "Séquences d'échappement", ar: "رموز الهروب" } },
  {
    type: "p",
    text: {
      en: "Inside string literals, a backslash introduces a special character:",
      fr: "À l'intérieur des littéraux de chaîne, une barre oblique inversée introduit un caractère spécial :",
      ar: "داخل السلاسل النصية الحرفية (string literals)، يُقدّم الخط المائل العكسي (backslash) حرفًا خاصًا:",
    },
  },
  { type: "code", compact: true, code: { label: "escapes.c", code: `"\\n"   // newline\n"\\t"   // tab\n"\\\\"   // a literal backslash\n"\\""   // a literal double quote` } },
];

export default blocks;
