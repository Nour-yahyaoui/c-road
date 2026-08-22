import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "An array is a fixed-size, contiguous block of memory holding values of the same type. \"Contiguous\" is the key word — it's what makes indexing fast, and it's the property pointers will later exploit directly.",
      fr: "Un tableau est un bloc de mémoire de taille fixe et contigu, contenant des valeurs du même type. « Contigu » est le mot clé — c'est ce qui rend l'indexation rapide, et c'est la propriété que les pointeurs exploiteront directement par la suite.",
      ar: "المصفوفة (array) هي كتلة ذاكرة ثابتة الحجم ومتجاورة (contiguous)، تحمل قيمًا من نفس النوع. كلمة \"متجاورة\" هي المفتاح هنا — فهي ما يجعل الفهرسة (indexing) سريعة، وهي الخاصية التي ستستغلها المؤشرات لاحقًا بشكل مباشر.",
    },
  },
  { type: "h2", text: { en: "Declaring and initializing", fr: "Déclaration et initialisation", ar: "التصريح والتهيئة" } },
  {
    type: "code",
    code: {
      label: "arrays.c",
      code: `int scores[5];                        // 5 uninitialized ints\nint primes[5] = {2, 3, 5, 7, 11};     // explicit values\nint zeros[5] = {0};                   // first element 0, rest zero-filled\nint inferred[] = {1, 2, 3};           // size inferred: 3`,
    },
  },
  { type: "h2", text: { en: "Indexing", fr: "Indexation", ar: "الفهرسة" } },
  {
    type: "p",
    text: {
      en: "Elements are accessed with square brackets, and indexing starts at `0`. The last valid index is always `length - 1`:",
      fr: "Les éléments sont accessibles avec des crochets, et l'indexation commence à `0`. Le dernier indice valide est toujours `length - 1` :",
      ar: "يتم الوصول إلى العناصر باستخدام الأقواس المربعة، والفهرسة تبدأ من `0`. آخر فهرس صالح هو دائمًا `length - 1`:",
    },
  },
  {
    type: "code",
    code: {
      label: "indexing.c",
      code: `int primes[] = {2, 3, 5, 7, 11};\n\nprintf("%d\\n", primes[0]);   // 2, the first element\nprintf("%d\\n", primes[4]);   // 11, the last element\n\nprimes[2] = 6;                // overwrite an element`,
    },
  },
  {
    type: "callout",
    kind: "error",
    title: { en: "C does not check array bounds", fr: "Le C ne vérifie pas les limites d'un tableau", ar: "لغة C لا تتحقق من حدود المصفوفة" },
    text: {
      en: "`primes[5]` or `primes[-1]` compiles without complaint. At runtime it reads or writes whatever memory happens to sit there — sometimes it crashes immediately, sometimes it silently corrupts an unrelated variable, and sometimes it appears to work until it doesn't. Keeping indices inside `[0, length)` is entirely your responsibility.",
      fr: "`primes[5]` ou `primes[-1]` compilent sans aucune plainte. À l'exécution, cela lit ou écrit dans la mémoire qui se trouve là — parfois cela plante immédiatement, parfois cela corrompt silencieusement une variable sans rapport, et parfois cela semble fonctionner jusqu'à ce que cela cesse. Garder les indices dans `[0, length)` est entièrement votre responsabilité.",
      ar: "الشيفرة `primes[5]` أو `primes[-1]` تُترجَم دون أي اعتراض. عند التشغيل، تقرأ أو تكتب في أي ذاكرة تصادف وجودها هناك — أحيانًا تنهار فورًا، وأحيانًا تُفسد بصمت متغيرًا آخر لا علاقة له، وأحيانًا تبدو وكأنها تعمل حتى تتوقف عن العمل. الحفاظ على الفهارس ضمن `[0, length)` هي مسؤوليتك الكاملة.",
    },
  },
  { type: "h2", text: { en: "Iterating over an array", fr: "Parcourir un tableau", ar: "المرور عبر مصفوفة" } },
  {
    type: "code",
    code: {
      label: "sum.c",
      code: `int nums[] = {4, 8, 15, 16, 23, 42};\nint length = sizeof(nums) / sizeof(nums[0]);\nint sum = 0;\n\nfor (int i = 0; i < length; i++) {\n    sum += nums[i];\n}\nprintf("Sum: %d\\n", sum);`,
    },
  },
  {
    type: "p",
    text: {
      en: "`sizeof(nums) / sizeof(nums[0])` is the standard way to get an array's length: total bytes divided by the size of one element. It only works on the original array variable, not on a pointer to it — a distinction that becomes important in 0x0A.",
      fr: "`sizeof(nums) / sizeof(nums[0])` est la façon standard d'obtenir la longueur d'un tableau : le total des octets divisé par la taille d'un élément. Cela ne fonctionne que sur la variable de tableau d'origine, pas sur un pointeur vers celui-ci — une distinction qui devient importante en 0x0A.",
      ar: "`sizeof(nums) / sizeof(nums[0])` هي الطريقة المعتادة للحصول على طول مصفوفة: مجموع البايتات مقسومًا على حجم عنصر واحد. تعمل هذه الطريقة فقط على متغير المصفوفة الأصلي، وليس على مؤشر يشير إليها — وهو فرق سيصبح مهمًا في الفصل 0x0A.",
    },
  },
  { type: "h2", text: { en: "Multidimensional arrays", fr: "Tableaux multidimensionnels", ar: "المصفوفات متعددة الأبعاد" } },
  {
    type: "p",
    text: {
      en: "An array of arrays models a grid. Rows are still contiguous in memory, laid out one after another:",
      fr: "Un tableau de tableaux modélise une grille. Les lignes restent contiguës en mémoire, disposées les unes après les autres :",
      ar: "المصفوفة التي تحتوي على مصفوفات تُمثّل شبكة (grid). تبقى الصفوف متجاورة في الذاكرة، مرتبة واحدة تلو الأخرى:",
    },
  },
  {
    type: "code",
    code: {
      label: "grid.c",
      code: `int grid[2][3] = {\n    {1, 2, 3},\n    {4, 5, 6}\n};\n\nfor (int row = 0; row < 2; row++) {\n    for (int col = 0; col < 3; col++) {\n        printf("%d ", grid[row][col]);\n    }\n}\n// prints: 1 2 3 4 5 6`,
    },
  },
  {
    type: "callout",
    kind: "note",
    title: { en: "Arrays passed to functions decay to pointers", fr: "Les tableaux passés à des fonctions se transforment en pointeurs (decay)", ar: "المصفوفات المُمرَّرة إلى الدوال تتحول إلى مؤشرات (decay)" },
    text: {
      en: "When you pass an array as a function argument, the function actually receives a pointer to its first element — it has no way to know the original length. That's why array-processing functions almost always take a length parameter alongside the array itself, as in the `sum` example above.",
      fr: "Lorsque vous passez un tableau comme argument de fonction, la fonction reçoit en réalité un pointeur vers son premier élément — elle n'a aucun moyen de connaître la longueur d'origine. C'est pourquoi les fonctions traitant des tableaux prennent presque toujours un paramètre de longueur en plus du tableau lui-même, comme dans l'exemple `sum` ci-dessus.",
      ar: "عندما تُمرّر مصفوفة كوسيط لدالة، تستقبل الدالة في الواقع مؤشرًا يشير إلى عنصرها الأول — وليس لديها أي طريقة لمعرفة الطول الأصلي. لهذا السبب تأخذ الدوال التي تعالج المصفوفات دائمًا تقريبًا معاملًا للطول إلى جانب المصفوفة نفسها، كما في مثال `sum` أعلاه.",
    },
  },
];

export default blocks;
