import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "Real C programs are rarely one file. Splitting code across multiple `.c` files keeps related logic together and lets each file be compiled independently — only the files that changed need to be recompiled, which matters once a project grows large.",
      fr: "Les vrais programmes C tiennent rarement en un seul fichier. Diviser le code en plusieurs fichiers `.c` regroupe la logique liée et permet de compiler chaque fichier indépendamment — seuls les fichiers modifiés doivent être recompilés, ce qui compte lorsqu'un projet grandit.",
      ar: "برامج C الحقيقية نادرًا ما تكون ملفًا واحدًا. تقسيم الشيفرة عبر عدة ملفات `.c` يُبقي المنطق المترابط معًا، ويسمح بترجمة كل ملف بشكل مستقل — فقط الملفات التي تغيّرت تحتاج إلى إعادة الترجمة، وهذا أمر مهم عندما يكبر حجم المشروع.",
    },
  },
  { type: "h2", text: { en: "Header files declare, source files define", fr: "Les en-têtes déclarent, les sources définissent", ar: "ملفات الترويسة تُصرّح، وملفات المصدر تُعرّف" } },
  {
    type: "p",
    text: {
      en: "A header (`.h`) lists what a module offers, without the implementation. A source file (`.c`) provides the actual code:",
      fr: "Un en-tête (`.h`) liste ce qu'un module offre, sans l'implémentation. Un fichier source (`.c`) fournit le code réel :",
      ar: "ملف الترويسة (`.h`) يسرد ما يوفره الوحدة (module) دون التنفيذ الفعلي. أما ملف المصدر (`.c`) فيوفر الشيفرة الفعلية:",
    },
  },
  { type: "code", code: { label: "math_utils.h", code: `#ifndef MATH_UTILS_H\n#define MATH_UTILS_H\n\nint square(int n);\nint cube(int n);\n\n#endif` } },
  { type: "code", code: { label: "math_utils.c", code: `#include "math_utils.h"\n\nint square(int n) {\n    return n * n;\n}\n\nint cube(int n) {\n    return n * n * n;\n}` } },
  { type: "code", code: { label: "main.c", code: `#include <stdio.h>\n#include "math_utils.h"\n\nint main(void) {\n    printf("%d\\n", square(4));\n    printf("%d\\n", cube(3));\n    return 0;\n}` } },
  { type: "h2", text: { en: "Compiling multiple files", fr: "Compiler plusieurs fichiers", ar: "ترجمة عدة ملفات" } },
  { type: "code", code: { label: "terminal", code: `gcc main.c math_utils.c -o program\n./program` } },
  {
    type: "p",
    text: {
      en: "Each `.c` file is compiled separately into an **object file**, then the linker (0x00) combines them into one executable. `main.c` only needs the header to know `square` and `cube` exist — it doesn't need to see how they're implemented.",
      fr: "Chaque fichier `.c` est compilé séparément en un **fichier objet**, puis l'éditeur de liens (0x00) les combine en un seul exécutable. `main.c` n'a besoin que de l'en-tête pour savoir que `square` et `cube` existent — il n'a pas besoin de voir comment ils sont implémentés.",
      ar: "يُترجَم كل ملف `.c` بشكل منفصل إلى **ملف كائن (object file)**، ثم يجمعها الرابط (linker، الفصل 0x00) في ملف تنفيذي واحد. لا يحتاج `main.c` إلا إلى الترويسة ليعرف أن `square` وَ`cube` موجودتان — لا يحتاج إلى معرفة كيفية تنفيذهما.",
    },
  },
  {
    type: "callout",
    kind: "note",
    title: { en: "Why the split matters as projects grow", fr: "Pourquoi cette séparation compte à mesure que les projets grandissent", ar: "لماذا يهم هذا التقسيم مع نمو المشاريع" },
    text: {
      en: "With larger projects, you compile each changed file into an object file (`gcc -c file.c`) and link the object files together, so an edit to one file doesn't require recompiling everything. Build tools like `make` automate exactly this.",
      fr: "Avec des projets plus grands, vous compilez chaque fichier modifié en un fichier objet (`gcc -c file.c`) et liez les fichiers objets ensemble, afin qu'une modification d'un fichier n'exige pas de tout recompiler. Des outils de build comme `make` automatisent exactement cela.",
      ar: "في المشاريع الأكبر، تُترجم كل ملف تغيّر إلى ملف كائن (`gcc -c file.c`) ثم تربط ملفات الكائن معًا، بحيث لا يتطلب تعديل ملف واحد إعادة ترجمة كل شيء. أدوات البناء (build tools) مثل `make` تُؤتمت هذا بالضبط.",
    },
  },
  { type: "h2", text: { en: "What goes in a header", fr: "Ce qui va dans un en-tête", ar: "ما الذي يوضع في ملف الترويسة" } },
  {
    type: "ul",
    items: [
      { en: "Function prototypes (declarations, not definitions).", fr: "Les prototypes de fonctions (déclarations, pas définitions).", ar: "النماذج الأولية للدوال (function prototypes، أي تصريحات وليست تعريفات)." },
      { en: "`struct` and `typedef` definitions shared across files.", fr: "Les définitions `struct` et `typedef` partagées entre fichiers.", ar: "تعريفات `struct` وَ`typedef` المشتركة بين الملفات." },
      { en: "`#define` constants meant to be shared.", fr: "Les constantes `#define` destinées à être partagées.", ar: "ثوابت `#define` المقصود مشاركتها." },
    ],
  },
  {
    type: "callout",
    kind: "error",
    title: { en: "Don't put function bodies in headers", fr: "Ne mettez pas de corps de fonction dans les en-têtes", ar: "لا تضع أجسام الدوال داخل ملفات الترويسة" },
    text: {
      en: "If a header with a full function definition is included by two different `.c` files, the linker sees that function defined twice and refuses to build — a \"multiple definition\" error. Headers declare; exactly one source file defines.",
      fr: "Si un en-tête contenant une définition complète de fonction est inclus par deux fichiers `.c` différents, l'éditeur de liens voit cette fonction définie deux fois et refuse de construire — une erreur de « définition multiple ». Les en-têtes déclarent ; exactement un fichier source définit.",
      ar: "إذا تم إدراج ترويسة تحتوي على تعريف كامل لدالة من قِبل ملفي `.c` مختلفين، يرى الرابط أن تلك الدالة معرَّفة مرتين ويرفض البناء — وهو خطأ \"تعريف متعدد\" (multiple definition). الترويسات تُصرّح؛ وملف مصدر واحد بالضبط هو من يُعرّف.",
    },
  },
];

export default blocks;
