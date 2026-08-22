import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "Arrays and pointers are different types, but they're linked so closely in C that understanding one clarifies the other. This chapter connects the array indexing from 0x07 with the pointer mechanics from 0x09.",
      fr: "Les tableaux et les pointeurs sont des types différents, mais ils sont si étroitement liés en C que comprendre l'un clarifie l'autre. Ce chapitre relie l'indexation des tableaux du chapitre 0x07 aux mécanismes de pointeurs du chapitre 0x09.",
      ar: "المصفوفات والمؤشرات نوعان مختلفان، لكنهما مرتبطان في C بشكل وثيق لدرجة أن فهم أحدهما يوضّح الآخر. يربط هذا الفصل بين فهرسة المصفوفات من الفصل 0x07 وآليات المؤشرات من الفصل 0x09.",
    },
  },
  { type: "h2", text: { en: "An array's name is (almost) a pointer", fr: "Le nom d'un tableau est (presque) un pointeur", ar: "اسم المصفوفة هو (تقريبًا) مؤشر" } },
  {
    type: "p",
    text: {
      en: "In most expressions, an array's name automatically \"decays\" into a pointer to its first element:",
      fr: "Dans la plupart des expressions, le nom d'un tableau se « transforme » automatiquement en pointeur vers son premier élément :",
      ar: "في معظم التعبيرات، يتحول اسم المصفوفة تلقائيًا (decay) إلى مؤشر يشير إلى عنصرها الأول:",
    },
  },
  { type: "code", code: { label: "decay.c", code: `int nums[] = {10, 20, 30};\nint *p = nums;         // same as int *p = &nums[0];\n\nprintf("%d\\n", *p);     // 10\nprintf("%d\\n", nums[0]); // 10 — same value, two ways to write it` } },
  { type: "h2", text: { en: "Indexing is pointer arithmetic", fr: "L'indexation est de l'arithmétique de pointeurs", ar: "الفهرسة هي حساب على المؤشرات" } },
  {
    type: "p",
    text: {
      en: "`nums[i]` and `*(nums + i)` compile to the identical instructions. Adding `i` to a pointer doesn't move it by `i` bytes — it moves it by `i` elements, using `sizeof` of the pointer's type to work out the actual byte offset:",
      fr: "`nums[i]` et `*(nums + i)` compilent en des instructions identiques. Ajouter `i` à un pointeur ne le déplace pas de `i` octets — il le déplace de `i` éléments, en utilisant le `sizeof` du type du pointeur pour calculer le décalage réel en octets :",
      ar: "تُترجَم `nums[i]` وَ`*(nums + i)` إلى نفس التعليمات تمامًا. إضافة `i` إلى مؤشر لا تُحرّكه بمقدار `i` بايت — بل تُحرّكه بمقدار `i` عنصر، باستخدام `sizeof` نوع المؤشر لحساب الإزاحة الفعلية بالبايت:",
    },
  },
  { type: "code", code: { label: "pointer-arithmetic.c", code: `int nums[] = {10, 20, 30};\nint *p = nums;\n\n*(p + 1);     // 20\np[1];         // 20 — pointers can even use bracket syntax\n*(p + 2);     // 30` } },
  {
    type: "callout",
    kind: "note",
    title: { en: "This is why array types matter for arithmetic", fr: "C'est pourquoi le type d'un tableau compte pour l'arithmétique", ar: "لهذا السبب يهم نوع المصفوفة في العمليات الحسابية" },
    text: {
      en: "`p + 1` on an `int *` moves forward 4 bytes (on most systems); the same expression on a `double *` moves forward 8. The compiler uses the pointed-to type to compute the correct step.",
      fr: "`p + 1` sur un `int *` avance de 4 octets (sur la plupart des systèmes) ; la même expression sur un `double *` avance de 8. Le compilateur utilise le type pointé pour calculer le bon pas.",
      ar: "التعبير `p + 1` على مؤشر `int *` يتقدم بمقدار 4 بايتات (على معظم الأنظمة)؛ نفس التعبير على مؤشر `double *` يتقدم بمقدار 8. يستخدم المترجم نوع المُشار إليه لحساب الخطوة الصحيحة.",
    },
  },
  { type: "h2", text: { en: "Where the analogy breaks down", fr: "Là où l'analogie s'arrête", ar: "أين ينهار هذا التشابه" } },
  {
    type: "p",
    text: {
      en: "Despite behaving alike in expressions, arrays and pointers are not the same thing:",
      fr: "Bien qu'ils se comportent de manière similaire dans les expressions, les tableaux et les pointeurs ne sont pas la même chose :",
      ar: "على الرغم من تصرفهما بشكل متشابه داخل التعبيرات، فإن المصفوفات والمؤشرات ليستا نفس الشيء:",
    },
  },
  { type: "code", code: { label: "difference.c", code: `int nums[5] = {1, 2, 3, 4, 5};\nint *p = nums;\n\nsizeof(nums);   // 20 — 5 ints, the array's true size\nsizeof(p);      // 8  — the size of a pointer itself, on most 64-bit systems\n\nnums = p;       // compile error — an array name isn't reassignable\np = nums;       // fine — p is an ordinary variable` } },
  {
    type: "p",
    text: {
      en: "This is exactly why the `sizeof(arr) / sizeof(arr[0])` trick from 0x07 only works on the original array — once it's been passed to a function and decayed into a pointer parameter, `sizeof` can no longer see the original length.",
      fr: "C'est exactement pourquoi l'astuce `sizeof(arr) / sizeof(arr[0])` du chapitre 0x07 ne fonctionne que sur le tableau d'origine — une fois passé à une fonction et transformé en paramètre pointeur, `sizeof` ne peut plus voir la longueur d'origine.",
      ar: "هذا بالضبط سبب أن حيلة `sizeof(arr) / sizeof(arr[0])` من الفصل 0x07 تعمل فقط على المصفوفة الأصلية — فبمجرد تمريرها إلى دالة وتحوّلها (decay) إلى معامل مؤشر، لم يعد بإمكان `sizeof` رؤية الطول الأصلي.",
    },
  },
  { type: "h2", text: { en: "Passing arrays to functions, correctly", fr: "Passer des tableaux aux fonctions, correctement", ar: "تمرير المصفوفات إلى الدوال بشكل صحيح" } },
  { type: "code", code: { label: "pass-array.c", code: `int sum(int *arr, int length) {\n    int total = 0;\n    for (int i = 0; i < length; i++) {\n        total += arr[i];\n    }\n    return total;\n}\n\nint main(void) {\n    int nums[] = {4, 8, 15, 16, 23, 42};\n    int total = sum(nums, 6);\n    printf("%d\\n", total);\n    return 0;\n}` } },
  {
    type: "p",
    text: {
      en: "Writing the parameter as `int arr[]` instead of `int *arr` is allowed and means exactly the same thing — both are pointer parameters. Either way, the length has to be passed explicitly.",
      fr: "Écrire le paramètre comme `int arr[]` plutôt que `int *arr` est autorisé et signifie exactement la même chose — ce sont tous deux des paramètres pointeurs. Dans les deux cas, la longueur doit être passée explicitement.",
      ar: "كتابة المعامل بصيغة `int arr[]` بدلًا من `int *arr` مسموحة وتعني بالضبط نفس الشيء — كلاهما معاملان من نوع مؤشر. في كلتا الحالتين، يجب تمرير الطول بشكل صريح.",
    },
  },
];

export default blocks;
