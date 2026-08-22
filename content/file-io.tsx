import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "File access in C goes through a `FILE *`, a pointer to a structure the standard library uses to track an open file's position and buffering. The functions that operate on it mirror `printf` and `scanf` closely, since `stdin` and `stdout` are themselves just pre-opened `FILE *` streams.",
      fr: "L'accès aux fichiers en C se fait via un `FILE *`, un pointeur vers une structure que la bibliothèque standard utilise pour suivre la position et la mise en tampon d'un fichier ouvert. Les fonctions qui l'utilisent ressemblent beaucoup à `printf` et `scanf`, puisque `stdin` et `stdout` ne sont eux-mêmes que des flux `FILE *` déjà ouverts.",
      ar: "الوصول إلى الملفات في C يتم عبر `FILE *`، وهو مؤشر إلى بنية تستخدمها المكتبة القياسية لتتبع موقع الملف المفتوح والتخزين المؤقت (buffering) الخاص به. الدوال التي تعمل عليه تشبه إلى حد كبير `printf` وَ`scanf`، حيث أن `stdin` وَ`stdout` أنفسهما ما هما إلا مجريات (streams) من نوع `FILE *` مفتوحة سلفًا.",
    },
  },
  { type: "h2", text: { en: "Opening and closing a file", fr: "Ouvrir et fermer un fichier", ar: "فتح ملف وإغلاقه" } },
  {
    type: "code",
    code: {
      label: "open.c",
      code: `#include <stdio.h>\n\nFILE *file = fopen("data.txt", "r");\n\nif (file == NULL) {\n    printf("Could not open file.\\n");\n    return 1;\n}\n\n// ... work with the file ...\n\nfclose(file);`,
    },
  },
  {
    type: "p",
    text: {
      en: "The second argument to `fopen` is the mode: `\"r\"` for reading, `\"w\"` for writing (creates the file, or erases it if it already exists), `\"a\"` for appending. `fopen` returns `NULL` on failure — a missing file, no permission, and so on — and that always has to be checked before use.",
      fr: "Le second argument de `fopen` est le mode : `\"r\"` pour la lecture, `\"w\"` pour l'écriture (crée le fichier, ou l'efface s'il existe déjà), `\"a\"` pour l'ajout. `fopen` renvoie `NULL` en cas d'échec — fichier manquant, absence de permission, etc. — et cela doit toujours être vérifié avant utilisation.",
      ar: "الوسيط الثاني لـ `fopen` هو نمط الفتح: `\"r\"` للقراءة، `\"w\"` للكتابة (تُنشئ الملف، أو تمحوه إذا كان موجودًا مسبقًا)، `\"a\"` للإضافة (append). تُعيد `fopen` القيمة `NULL` عند الفشل — كملف مفقود، أو عدم وجود صلاحية، وما إلى ذلك — ويجب دائمًا التحقق من ذلك قبل الاستخدام.",
    },
  },
  { type: "h2", text: { en: "Writing to a file", fr: "Écrire dans un fichier", ar: "الكتابة إلى ملف" } },
  { type: "code", code: { label: "write.c", code: `FILE *file = fopen("output.txt", "w");\nif (file == NULL) return 1;\n\nfprintf(file, "Score: %d\\n", 95);\nfprintf(file, "Name: %s\\n", "Nour");\n\nfclose(file);` } },
  {
    type: "p",
    text: {
      en: "`fprintf` works exactly like `printf`, but takes the target stream as its first argument.",
      fr: "`fprintf` fonctionne exactement comme `printf`, mais prend le flux cible comme premier argument.",
      ar: "تعمل `fprintf` تمامًا مثل `printf`، لكنها تأخذ المجرى (stream) الهدف كوسيطها الأول.",
    },
  },
  { type: "h2", text: { en: "Reading a file line by line", fr: "Lire un fichier ligne par ligne", ar: "قراءة ملف سطرًا بسطر" } },
  { type: "code", code: { label: "read.c", code: `FILE *file = fopen("data.txt", "r");\nif (file == NULL) return 1;\n\nchar line[256];\nwhile (fgets(line, sizeof(line), file) != NULL) {\n    printf("%s", line);\n}\n\nfclose(file);` } },
  {
    type: "p",
    text: {
      en: "`fgets` returns `NULL` once it reaches the end of the file, which is what naturally ends the loop above — no separate \"end of file\" check needed.",
      fr: "`fgets` renvoie `NULL` une fois qu'elle atteint la fin du fichier, ce qui termine naturellement la boucle ci-dessus — aucune vérification séparée de « fin de fichier » n'est nécessaire.",
      ar: "تُعيد `fgets` القيمة `NULL` عند وصولها إلى نهاية الملف، وهذا ما ينهي الحلقة أعلاه بشكل طبيعي — دون الحاجة إلى فحص منفصل لـ \"نهاية الملف\".",
    },
  },
  {
    type: "callout",
    kind: "warning",
    title: { en: "Always close what you open", fr: "Fermez toujours ce que vous ouvrez", ar: "أغلق دائمًا ما تفتحه" },
    text: {
      en: "A `FILE *` you forget to `fclose` may leave buffered writes never actually reaching disk, and ties up a limited operating-system resource until the program exits. Every `fopen` should have a matching `fclose`, the same discipline as `malloc` and `free`.",
      fr: "Un `FILE *` que vous oubliez de `fclose` peut laisser des écritures mises en tampon ne jamais atteindre le disque, et occupe une ressource limitée du système d'exploitation jusqu'à la fin du programme. Chaque `fopen` devrait avoir un `fclose` correspondant, la même discipline que `malloc` et `free`.",
      ar: "أي `FILE *` تنسى استدعاء `fclose` عليه قد يتسبب في عدم وصول الكتابات المخزنة مؤقتًا (buffered) إلى القرص فعليًا، ويشغل مورد نظام تشغيل محدود إلى أن يُنهي البرنامج عمله. يجب أن يقابل كل `fopen` استدعاء `fclose`، بنفس انضباط `malloc` وَ`free`.",
    },
  },
  { type: "h2", text: { en: "Reading structured data", fr: "Lire des données structurées", ar: "قراءة بيانات منظَّمة" } },
  {
    type: "p",
    text: {
      en: "`fscanf` reads formatted data from a file the same way `scanf` reads from the keyboard:",
      fr: "`fscanf` lit des données formatées depuis un fichier de la même façon que `scanf` lit depuis le clavier :",
      ar: "تقرأ `fscanf` بيانات منسَّقة من ملف بنفس الطريقة التي تقرأ بها `scanf` من لوحة المفاتيح:",
    },
  },
  { type: "code", compact: true, code: { label: "fscanf.c", code: `int id;\nfloat score;\nfscanf(file, "%d %f", &id, &score);` } },
];

export default blocks;
