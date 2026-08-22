import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "C is a small language that sits close to the hardware. It has no garbage collector, no built-in string type, and no safety net for most mistakes — the compiler trusts you to know what you're doing. That sounds intimidating, but it's also why C is worth learning: once you understand it, most other languages start to feel like C with extra decoration.",
      fr: "Le C est un petit langage qui reste proche du matériel. Il n'a pas de ramasse-miettes (garbage collector), pas de type chaîne intégré, et aucun filet de sécurité pour la plupart des erreurs — le compilateur vous fait confiance. Cela peut sembler intimidant, mais c'est aussi ce qui rend le C intéressant à apprendre : une fois qu'on le comprend, la plupart des autres langages ressemblent à du C avec de la décoration en plus.",
      ar: "لغة C هي لغة صغيرة وقريبة جدًا من العتاد (hardware). لا تملك ذاكرة تُدار تلقائيًا (garbage collector)، ولا نوع سلسلة نصية مدمج، ولا أي شبكة أمان لمعظم الأخطاء — المترجم (compiler) يثق بأنك تعرف ما تفعله. قد يبدو هذا مخيفًا، لكنه أيضًا السبب الذي يجعل تعلّم C مفيدًا: بمجرد فهمها، ستبدو معظم اللغات الأخرى وكأنها C مع بعض الزخرفة الإضافية.",
    },
  },
  {
    type: "p",
    text: {
      en: "Every C program starts life as plain text and goes through a pipeline before it can run:",
      fr: "Tout programme C commence comme un simple fichier texte et traverse un pipeline avant de pouvoir s'exécuter :",
      ar: "كل برنامج C يبدأ كملف نصي بسيط، ويمر عبر سلسلة من المراحل قبل أن يصبح قابلًا للتشغيل:",
    },
  },
  {
    type: "h2",
    text: { en: "From source code to a running program", fr: "Du code source au programme en cours d'exécution", ar: "من الشيفرة المصدرية إلى برنامج قيد التشغيل" },
  },
  {
    type: "ul",
    items: [
      {
        en: "**Preprocessing** — lines starting with `#` are expanded (covered in 0x0E).",
        fr: "**Prétraitement (preprocessing)** — les lignes commençant par `#` sont développées (voir 0x0E).",
        ar: "**المعالجة المسبقة (preprocessing)** — يتم توسيع الأسطر التي تبدأ بـ `#` (سيُشرح في الفصل 0x0E).",
      },
      {
        en: "**Compiling** — your C code is translated into assembly, then into machine code for your CPU.",
        fr: "**Compilation** — votre code C est traduit en assembleur, puis en code machine pour votre processeur.",
        ar: "**الترجمة (compiling)** — تتحول شيفرة C إلى لغة تجميع (assembly)، ثم إلى شيفرة آلية (machine code) خاصة بالمعالج.",
      },
      {
        en: "**Linking** — your compiled code is joined with library code (like the functions behind `printf`) into a single executable file.",
        fr: "**Édition de liens (linking)** — votre code compilé est assemblé avec le code des bibliothèques (comme les fonctions derrière `printf`) en un seul fichier exécutable.",
        ar: "**الربط (linking)** — يتم دمج الشيفرة المترجمة مع شيفرة المكتبات (كالدوال التي تقف خلف `printf`) في ملف تنفيذي واحد.",
      },
    ],
  },
  {
    type: "p",
    text: {
      en: "A **compiler** does all three steps for you. The most common ones are `gcc` and `clang`. If you don't have one installed, search for \"install gcc\" plus your operating system.",
      fr: "Un **compilateur** effectue ces trois étapes pour vous. Les plus courants sont `gcc` et `clang`. Si vous n'en avez pas, cherchez « installer gcc » suivi du nom de votre système d'exploitation.",
      ar: "يقوم **المترجم (compiler)** بتنفيذ هذه المراحل الثلاث نيابة عنك. أشهر المترجمات هي `gcc` و`clang`. إذا لم يكن أي منهما مثبتًا لديك، ابحث عن \"install gcc\" مع اسم نظام التشغيل الخاص بك.",
    },
  },
  { type: "h2", text: { en: "Your first program", fr: "Votre premier programme", ar: "برنامجك الأول" } },
  {
    type: "p",
    text: {
      en: "Every C program needs a function called `main` — it's where execution begins. Save this as `hello.c`:",
      fr: "Tout programme C a besoin d'une fonction nommée `main` — c'est là que l'exécution commence. Enregistrez ceci sous `hello.c` :",
      ar: "كل برنامج C يحتاج إلى دالة تُسمى `main` — فهي نقطة انطلاق التنفيذ. احفظ هذا الملف باسم `hello.c`:",
    },
  },
  {
    type: "code",
    code: {
      label: "hello.c",
      code: `#include <stdio.h>

int main(void) {
    printf("Hello, world!\\n");
    return 0;
}`,
    },
  },
  {
    type: "p",
    text: {
      en: "Then compile and run it from a terminal:",
      fr: "Puis compilez-le et exécutez-le depuis un terminal :",
      ar: "ثم قم بترجمته وتشغيله من الطرفية (terminal):",
    },
  },
  { type: "code", code: { label: "terminal", code: `gcc hello.c -o hello\n./hello` } },
  { type: "h2", text: { en: "Reading the program line by line", fr: "Lecture du programme ligne par ligne", ar: "قراءة البرنامج سطرًا بسطر" } },
  {
    type: "ul",
    items: [
      {
        en: "`#include <stdio.h>` pulls in declarations for the standard input/output functions, including `printf`.",
        fr: "`#include <stdio.h>` importe les déclarations des fonctions d'entrée/sortie standard, dont `printf`.",
        ar: "`#include <stdio.h>` تستورد تصريحات دوال الإدخال/الإخراج القياسية، بما فيها `printf`.",
      },
      {
        en: "`int main(void)` declares a function named `main` that takes no arguments and returns an `int`.",
        fr: "`int main(void)` déclare une fonction nommée `main` qui ne prend aucun argument et renvoie un `int`.",
        ar: "`int main(void)` تصرّح عن دالة تُسمى `main` لا تأخذ أي وسائط (arguments) وتُعيد قيمة من نوع `int`.",
      },
      {
        en: "`printf(...)` writes text to the terminal. `\\n` is an escape sequence for a newline.",
        fr: "`printf(...)` écrit du texte dans le terminal. `\\n` est une séquence d'échappement représentant un retour à la ligne.",
        ar: "`printf(...)` تكتب نصًا في الطرفية. `\\n` هو رمز هروب (escape sequence) يمثل الانتقال إلى سطر جديد.",
      },
      {
        en: "`return 0;` hands control back to the operating system. By convention, `0` means \"the program succeeded.\"",
        fr: "`return 0;` rend la main au système d'exploitation. Par convention, `0` signifie « le programme s'est terminé avec succès ».",
        ar: "`return 0;` تُعيد التحكم إلى نظام التشغيل. بالاصطلاح، تعني `0` أن \"البرنامج نجح\".",
      },
    ],
  },
  {
    type: "callout",
    kind: "note",
    title: { en: "Why int main(void) and not just main()", fr: "Pourquoi int main(void) et pas simplement main()", ar: "لماذا int main(void) وليس main() فقط" },
    text: {
      en: "Older C code sometimes omits `void` or the return type. Modern C requires an explicit return type, and `void` explicitly says \"this function takes no arguments\" rather than leaving it unspecified.",
      fr: "Le vieux code C omet parfois `void` ou le type de retour. Le C moderne exige un type de retour explicite, et `void` indique clairement « cette fonction ne prend aucun argument » plutôt que de laisser cela non spécifié.",
      ar: "شيفرة C القديمة أحيانًا تحذف `void` أو نوع القيمة المُعادة. لغة C الحديثة تتطلب نوعًا صريحًا للقيمة المُعادة، و`void` تقول بوضوح \"هذه الدالة لا تأخذ أي وسائط\" بدلًا من ترك الأمر غير محدد.",
    },
  },
  { type: "h2", text: { en: "Statements and semicolons", fr: "Instructions et points-virgules", ar: "الجمل البرمجية والفواصل المنقوطة" } },
  {
    type: "p",
    text: {
      en: "C doesn't care about line breaks or indentation the way Python does. Every statement ends with a semicolon, and whitespace is only there for humans. This means both programs below behave identically — but only one of them is worth writing:",
      fr: "Le C ne se soucie pas des retours à la ligne ni de l'indentation comme le fait Python. Chaque instruction se termine par un point-virgule, et les espaces ne sont là que pour les humains. Cela signifie que les deux programmes ci-dessous se comportent de façon identique — mais un seul d'entre eux vaut la peine d'être écrit :",
      ar: "لغة C لا تهتم بفواصل الأسطر أو المسافات البادئة كما تفعل بايثون. كل جملة برمجية تنتهي بفاصلة منقوطة، والمسافات موجودة فقط من أجل القارئ البشري. هذا يعني أن البرنامجين أدناه يتصرفان بنفس الطريقة تمامًا — لكن واحدًا منهما فقط يستحق أن يُكتب:",
    },
  },
  { type: "code", compact: true, code: { label: "equivalent.c", code: `int main(void) { printf("hi\\n"); return 0; }` } },
  {
    type: "p",
    text: {
      en: "Consistent formatting matters purely for readability. Pick a style — this course indents with four spaces — and stick with it.",
      fr: "Un formatage cohérent n'a d'importance que pour la lisibilité. Choisissez un style — ce cours utilise une indentation de quatre espaces — et gardez-le.",
      ar: "التنسيق المتّسق مهم فقط من أجل سهولة القراءة. اختر أسلوبًا — هذه الدورة تستخدم مسافة بادئة من أربع فراغات — والتزم به.",
    },
  },
  {
    type: "callout",
    kind: "warning",
    title: { en: "Every statement needs a semicolon", fr: "Chaque instruction nécessite un point-virgule", ar: "كل جملة برمجية تحتاج إلى فاصلة منقوطة" },
    text: {
      en: "Forgetting a semicolon is the single most common beginner error. The compiler will point at the line *after* the mistake, which can be confusing the first few times it happens.",
      fr: "Oublier un point-virgule est l'erreur de débutant la plus fréquente. Le compilateur signalera la ligne *suivant* l'erreur, ce qui peut être déroutant les premières fois.",
      ar: "نسيان الفاصلة المنقوطة هو أكثر خطأ يقع فيه المبتدئون. سيشير المترجم إلى السطر *الذي يلي* الخطأ، وهو أمر قد يسبب ارتباكًا في أول مرات حدوثه.",
    },
  },
];

export default blocks;
