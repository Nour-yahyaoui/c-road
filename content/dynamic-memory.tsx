import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "Every array you've written so far had a size fixed at compile time. Often you don't know how much space you need until the program is running — the number of lines in a file, or how many items a user enters. For that, C lets you request memory from the **heap** directly, using functions from `<stdlib.h>`.",
      fr: "Chaque tableau écrit jusqu'ici avait une taille fixée à la compilation. Souvent, on ne sait pas de combien d'espace on a besoin avant que le programme ne s'exécute — le nombre de lignes d'un fichier, ou le nombre d'éléments saisis par un utilisateur. Pour cela, le C permet de demander de la mémoire directement au **tas (heap)**, via des fonctions de `<stdlib.h>`.",
      ar: "كل مصفوفة كتبتها حتى الآن كان حجمها ثابتًا عند وقت الترجمة (compile time). في كثير من الأحيان لا تعرف كمية المساحة التي تحتاجها إلا أثناء تشغيل البرنامج — مثل عدد الأسطر في ملف، أو عدد العناصر التي يُدخلها المستخدم. من أجل ذلك، تسمح لك C بطلب ذاكرة مباشرة من **الكومة (heap)**، باستخدام دوال من `<stdlib.h>`.",
    },
  },
  { type: "h2", text: { en: "malloc and free", fr: "malloc et free", ar: "malloc وَfree" } },
  {
    type: "code",
    code: {
      label: "malloc.c",
      code: `#include <stdlib.h>\n\nint *nums = malloc(5 * sizeof(int));\n\nif (nums == NULL) {\n    // malloc failed — the system is out of memory\n    return 1;\n}\n\nfor (int i = 0; i < 5; i++) {\n    nums[i] = i * i;\n}\n\nfree(nums);   // give the memory back when you're done\nnums = NULL;  // avoid leaving a dangling pointer around`,
    },
  },
  {
    type: "p",
    text: {
      en: "`malloc` takes a number of bytes and returns a pointer to that much freshly reserved memory — or `NULL` if the request couldn't be satisfied. Unlike a local array, memory from `malloc` survives after the function that allocated it returns, until you explicitly `free` it.",
      fr: "`malloc` prend un nombre d'octets et renvoie un pointeur vers cette quantité de mémoire fraîchement réservée — ou `NULL` si la demande n'a pas pu être satisfaite. Contrairement à un tableau local, la mémoire de `malloc` survit après le retour de la fonction qui l'a allouée, jusqu'à ce que vous appeliez explicitement `free`.",
      ar: "تأخذ `malloc` عددًا من البايتات وتُعيد مؤشرًا يشير إلى تلك المساحة المحجوزة حديثًا — أو `NULL` إذا تعذّر تلبية الطلب. على عكس المصفوفة المحلية، تبقى الذاكرة الصادرة عن `malloc` موجودة حتى بعد عودة الدالة التي خصصتها، إلى أن تستدعي `free` عليها صراحة.",
    },
  },
  {
    type: "callout",
    kind: "warning",
    title: { en: "Every malloc needs exactly one matching free", fr: "Chaque malloc a besoin d'exactement un free correspondant", ar: "كل malloc يحتاج إلى استدعاء free واحد مطابق بالضبط" },
    text: {
      en: "Forgetting to `free` memory you're done with is a **memory leak** — the program keeps holding memory it no longer needs. Calling `free` twice on the same pointer, or using a pointer after it's freed, is undefined behavior and a common source of crashes.",
      fr: "Oublier de `free` la mémoire dont vous n'avez plus besoin est une **fuite de mémoire (memory leak)** — le programme continue de retenir une mémoire dont il n'a plus besoin. Appeler `free` deux fois sur le même pointeur, ou utiliser un pointeur après l'avoir libéré, est un comportement indéfini et une source fréquente de plantages.",
      ar: "نسيان استدعاء `free` على ذاكرة انتهيت من استخدامها هو **تسريب ذاكرة (memory leak)** — يستمر البرنامج في الاحتفاظ بذاكرة لم يعد بحاجة إليها. استدعاء `free` مرتين على نفس المؤشر، أو استخدام مؤشر بعد تحريره، هو سلوك غير معرَّف ومصدر شائع للانهيارات.",
    },
  },
  { type: "h2", text: { en: "calloc: allocate and zero-initialize", fr: "calloc : allouer et initialiser à zéro", ar: "calloc: التخصيص مع التهيئة إلى صفر" } },
  { type: "code", compact: true, code: { label: "calloc.c", code: `int *nums = calloc(5, sizeof(int));\n// equivalent to malloc(5 * sizeof(int)) but every byte starts at 0` } },
  { type: "h2", text: { en: "realloc: change an allocation's size", fr: "realloc : changer la taille d'une allocation", ar: "realloc: تغيير حجم تخصيص موجود" } },
  {
    type: "code",
    code: {
      label: "realloc.c",
      code: `int *nums = malloc(5 * sizeof(int));\n// ... fill it, then decide you need more room ...\n\nint *bigger = realloc(nums, 10 * sizeof(int));\nif (bigger == NULL) {\n    // realloc failed — the original 'nums' is still valid and unchanged\n    free(nums);\n    return 1;\n}\nnums = bigger;`,
    },
  },
  {
    type: "p",
    text: {
      en: "`realloc` may move the block to a new address if it can't grow in place, copying the existing contents for you. This is why the result is always reassigned rather than assumed to be the same pointer.",
      fr: "`realloc` peut déplacer le bloc vers une nouvelle adresse s'il ne peut pas grandir sur place, en copiant le contenu existant pour vous. C'est pourquoi le résultat est toujours réassigné plutôt que supposé être le même pointeur.",
      ar: "قد تنقل `realloc` الكتلة إلى عنوان جديد إذا لم تستطع التوسع في مكانها، وتنسخ المحتوى الحالي نيابة عنك. لهذا السبب تُعاد إعادة إسناد (reassign) النتيجة دائمًا بدلًا من افتراض أنها نفس المؤشر.",
    },
  },
  { type: "h2", text: { en: "Stack vs. heap", fr: "Pile vs tas", ar: "المكدس مقابل الكومة" } },
  {
    type: "ul",
    items: [
      {
        en: "**Stack** — local variables and function parameters. Automatically created and destroyed as functions are called and return. Fast, but limited in size and scope.",
        fr: "**Pile (stack)** — variables locales et paramètres de fonction. Créée et détruite automatiquement lors des appels et retours de fonctions. Rapide, mais limitée en taille et en portée.",
        ar: "**المكدس (stack)** — المتغيرات المحلية ومعاملات الدوال. تُنشأ وتُتلف تلقائيًا مع استدعاء الدوال وعودتها. سريعة، لكنها محدودة في الحجم والنطاق.",
      },
      {
        en: "**Heap** — memory you request explicitly with `malloc`. Lives until you `free` it, which means it can outlive the function that created it — and also means nothing cleans it up automatically.",
        fr: "**Tas (heap)** — mémoire que vous demandez explicitement avec `malloc`. Elle vit jusqu'à ce que vous la libériez avec `free`, ce qui signifie qu'elle peut survivre à la fonction qui l'a créée — et aussi que rien ne la nettoie automatiquement.",
        ar: "**الكومة (heap)** — ذاكرة تطلبها صراحة باستخدام `malloc`. تبقى موجودة حتى تُحررها بـ `free`، مما يعني أنها يمكن أن تدوم أطول من الدالة التي أنشأتها — ويعني أيضًا أنه لا شيء يُنظّفها تلقائيًا.",
      },
    ],
  },
  {
    type: "callout",
    kind: "error",
    title: { en: "Never return a pointer to a local variable", fr: "Ne renvoyez jamais un pointeur vers une variable locale", ar: "لا تُعِد أبدًا مؤشرًا يشير إلى متغير محلي" },
    code: { label: "dangling.c", code: `int *broken(void) {\n    int local = 42;\n    return &local;  // local's stack memory is gone once this function returns\n}` },
    text: {
      en: "The address is technically returned, but the memory it points to no longer belongs to anything. Reading through it afterward is undefined behavior. If a function needs to hand back memory that outlives it, that memory must come from `malloc`.",
      fr: "L'adresse est techniquement renvoyée, mais la mémoire qu'elle désigne n'appartient plus à rien. La lire ensuite est un comportement indéfini. Si une fonction doit rendre une mémoire qui lui survit, cette mémoire doit provenir de `malloc`.",
      ar: "يتم إرجاع العنوان تقنيًا، لكن الذاكرة التي يشير إليها لم تعد تخص أي شيء. قراءتها لاحقًا هو سلوك غير معرَّف. إذا كانت الدالة بحاجة إلى إعادة ذاكرة تدوم أطول منها، يجب أن تأتي تلك الذاكرة من `malloc`.",
    },
  },
];

export default blocks;
