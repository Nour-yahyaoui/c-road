import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "Every variable lives at some address in memory. A pointer is a variable whose value *is* an address — instead of holding a number or a character, it holds the location of one. This is the idea the rest of C's more advanced features are built on.",
      fr: "Chaque variable vit à une certaine adresse en mémoire. Un pointeur est une variable dont la valeur *est* une adresse — au lieu de contenir un nombre ou un caractère, il contient l'emplacement de l'un d'eux. C'est l'idée sur laquelle reposent les fonctionnalités plus avancées du C.",
      ar: "كل متغير يعيش عند عنوان معيّن في الذاكرة. المؤشر (pointer) هو متغير قيمته *هي* عنوان — فبدلًا من أن يحمل رقمًا أو حرفًا، فإنه يحمل موقع أحدهما. هذه هي الفكرة التي تُبنى عليها بقية ميزات C المتقدمة.",
    },
  },
  { type: "h2", text: { en: "Address-of and dereference", fr: "L'adresse-de et le déréférencement", ar: "أخذ العنوان وإلغاء الإشارة" } },
  {
    type: "code",
    code: {
      label: "basics.c",
      code: `int age = 19;\nint *p = &age;   // p now holds the address of age\n\nprintf("%d\\n", age);    // 19\nprintf("%p\\n", (void*)p);  // some address, e.g. 0x7ffee2a1c9ac\nprintf("%d\\n", *p);     // 19 — dereferencing p reads what it points to`,
    },
  },
  {
    type: "ul",
    items: [
      { en: "`&age` — \"the address of `age`.\"", fr: "`&age` — « l'adresse de `age` ».", ar: "`&age` — أي \"عنوان `age`\"." },
      { en: "`int *p` — declares `p` as a pointer to an `int`.", fr: "`int *p` — déclare `p` comme un pointeur vers un `int`.", ar: "`int *p` — يصرّح عن `p` كمؤشر يشير إلى `int`." },
      { en: "`*p` — \"the value at the address `p` holds,\" used both to read and to write through a pointer.", fr: "`*p` — « la valeur à l'adresse que contient `p` », utilisé à la fois pour lire et écrire à travers un pointeur.", ar: "`*p` — أي \"القيمة الموجودة عند العنوان الذي يحمله `p`\"، وتُستخدم للقراءة والكتابة عبر المؤشر." },
    ],
  },
  { type: "h2", text: { en: "Writing through a pointer", fr: "Écrire à travers un pointeur", ar: "الكتابة عبر مؤشر" } },
  { type: "code", code: { label: "write-through.c", code: `int age = 19;\nint *p = &age;\n\n*p = 20;               // changes age itself, not just p\nprintf("%d\\n", age);   // 20` } },
  {
    type: "p",
    text: {
      en: "This is exactly what makes `scanf(\"%d\", &age)` work: `scanf` receives the address of `age` and writes through it, which is the only way a function can modify a variable that belongs to its caller.",
      fr: "C'est exactement ce qui fait fonctionner `scanf(\"%d\", &age)` : `scanf` reçoit l'adresse de `age` et écrit à travers elle, ce qui est la seule façon pour une fonction de modifier une variable appartenant à son appelant.",
      ar: "هذا بالضبط ما يجعل `scanf(\"%d\", &age)` تعمل: تستقبل `scanf` عنوان `age` وتكتب عبره، وهي الطريقة الوحيدة التي يمكن لدالة أن تُعدّل بها متغيرًا يخص المستدعي (caller) الخاص بها.",
    },
  },
  { type: "h2", text: { en: "Pointers as function parameters", fr: "Les pointeurs comme paramètres de fonction", ar: "المؤشرات كمعاملات للدوال" } },
  {
    type: "p",
    text: {
      en: "Recall from 0x06 that C passes arguments by value — a function can't change the caller's variable directly. Passing a pointer works around this, since the function can dereference it to reach the original:",
      fr: "Rappelez-vous du chapitre 0x06 que le C passe les arguments par valeur — une fonction ne peut pas modifier directement la variable de l'appelant. Passer un pointeur contourne cela, puisque la fonction peut le déréférencer pour atteindre l'original :",
      ar: "تذكّر من الفصل 0x06 أن C تُمرّر الوسائط بالقيمة (by value) — لا يمكن للدالة تعديل متغير المستدعي مباشرة. تمرير مؤشر يتجاوز هذا القيد، حيث يمكن للدالة إلغاء الإشارة إليه (dereference) للوصول إلى الأصل:",
    },
  },
  { type: "code", code: { label: "swap.c", code: `void increment(int *n) {\n    *n = *n + 1;  // modifies the caller's variable\n}\n\nint main(void) {\n    int x = 5;\n    increment(&x);\n    printf("%d\\n", x);  // 6\n    return 0;\n}` } },
  { type: "h2", text: { en: "NULL and invalid pointers", fr: "NULL et les pointeurs invalides", ar: "NULL والمؤشرات غير الصالحة" } },
  {
    type: "p",
    text: {
      en: "A pointer that isn't pointing anywhere valid should be set to `NULL`, and checked before it's dereferenced:",
      fr: "Un pointeur qui ne pointe vers rien de valide doit être mis à `NULL`, et vérifié avant d'être déréférencé :",
      ar: "المؤشر الذي لا يشير إلى أي موضع صالح يجب أن يُضبط على `NULL`، ويُتحقق منه قبل إلغاء الإشارة إليه:",
    },
  },
  { type: "code", compact: true, code: { label: "null-check.c", code: `int *p = NULL;\n\nif (p != NULL) {\n    printf("%d\\n", *p);\n}` } },
  {
    type: "callout",
    kind: "error",
    title: { en: "Dereferencing NULL or garbage crashes your program", fr: "Déréférencer NULL ou une valeur aléatoire fait planter votre programme", ar: "إلغاء الإشارة إلى NULL أو قيمة عشوائية يُعطّل برنامجك" },
    text: {
      en: "Reading or writing through a pointer that's `NULL`, uninitialized, or already freed is undefined behavior — usually a crash, sometimes silent corruption. There's no automatic check; it's on you to know what a pointer points to before you use it.",
      fr: "Lire ou écrire à travers un pointeur `NULL`, non initialisé, ou déjà libéré est un comportement indéfini — généralement un plantage, parfois une corruption silencieuse. Il n'y a aucune vérification automatique ; c'est à vous de savoir vers quoi pointe un pointeur avant de l'utiliser.",
      ar: "القراءة أو الكتابة عبر مؤشر يساوي `NULL`، أو غير مُهيَّأ، أو سبق تحريره (freed)، هو سلوك غير معرَّف — عادة ما يكون انهيارًا، وأحيانًا فسادًا صامتًا في البيانات. لا يوجد تحقق تلقائي؛ الأمر متروك لك لمعرفة ما يشير إليه المؤشر قبل استخدامه.",
    },
  },
  { type: "h2", text: { en: "Pointer types matter", fr: "Le type du pointeur compte", ar: "نوع المؤشر مهم" } },
  {
    type: "p",
    text: {
      en: "A pointer's declared type tells the compiler how many bytes to read or write, and how far to move for arithmetic — an `int *` and a `double *` holding the same address behave very differently when dereferenced.",
      fr: "Le type déclaré d'un pointeur indique au compilateur combien d'octets lire ou écrire, et de combien se déplacer pour l'arithmétique — un `int *` et un `double *` contenant la même adresse se comportent très différemment lors du déréférencement.",
      ar: "نوع المؤشر المصرَّح عنه يخبر المترجم بعدد البايتات التي يجب قراءتها أو كتابتها، وبمقدار الانتقال عند إجراء الحساب — فَ`int *` وَ`double *` يحملان نفس العنوان لكنهما يتصرفان بشكل مختلف تمامًا عند إلغاء الإشارة.",
    },
  },
];

export default blocks;
