import type { LocText } from "@/lib/i18n";

export type ExampleFile = {
  filename: string;
  title: LocText;
  description: LocText;
};

export const exampleFiles: ExampleFile[] = [
  {
    filename: "01_basics_and_io.c",
    title: { en: "Basics & I/O", fr: "Bases & E/S", ar: "الأساسيات والإدخال/الإخراج" },
    description: {
      en: "Variables, built-in types, sizeof, and reading/writing with printf and scanf.",
      fr: "Variables, types intégrés, sizeof, et lecture/écriture avec printf et scanf.",
      ar: "المتغيرات، الأنواع المدمجة، sizeof، والقراءة/الكتابة باستخدام printf وscanf.",
    },
  },
  {
    filename: "02_operators_and_control_flow.c",
    title: { en: "Operators & Control Flow", fr: "Opérateurs & structures de contrôle", ar: "العوامل والتحكم في التدفق" },
    description: {
      en: "Arithmetic and logical operators, precedence, if/switch, and the ternary operator.",
      fr: "Opérateurs arithmétiques et logiques, priorité, if/switch, et l'opérateur ternaire.",
      ar: "العوامل الحسابية والمنطقية، الأسبقية، if/switch، والعامل الثلاثي.",
    },
  },
  {
    filename: "03_loops.c",
    title: { en: "Loops", fr: "Boucles", ar: "الحلقات" },
    description: {
      en: "while, do-while, for, break/continue — with a prime checker, Fibonacci, and digit sum.",
      fr: "while, do-while, for, break/continue — avec test de nombre premier, Fibonacci, et somme de chiffres.",
      ar: "while وَdo-while وَfor وَbreak/continue — مع فحص الأعداد الأولية، وفيبوناتشي، ومجموع الأرقام.",
    },
  },
  {
    filename: "04_functions.c",
    title: { en: "Functions", fr: "Fonctions", ar: "الدوال" },
    description: {
      en: "Prototypes, pass-by-value, and recursion (factorial, GCD, Fibonacci).",
      fr: "Prototypes, passage par valeur, et récursivité (factorielle, PGCD, Fibonacci).",
      ar: "النماذج الأولية، التمرير بالقيمة، والتكرار الذاتي (المضروب، القاسم المشترك الأكبر، فيبوناتشي).",
    },
  },
  {
    filename: "05_arrays.c",
    title: { en: "Arrays", fr: "Tableaux", ar: "المصفوفات" },
    description: {
      en: "1D/2D arrays, linear and binary search, and bubble sort.",
      fr: "Tableaux 1D/2D, recherche linéaire et binaire, et tri à bulles.",
      ar: "مصفوفات أحادية وثنائية الأبعاد، البحث الخطي والثنائي، وفرز الفقاعة.",
    },
  },
  {
    filename: "06_strings.c",
    title: { en: "Strings", fr: "Chaînes de caractères", ar: "السلاسل النصية" },
    description: {
      en: "Hand-written strlen/strcpy, <string.h>, palindrome check, and case conversion.",
      fr: "strlen/strcpy réécrits à la main, <string.h>, test de palindrome, et conversion de casse.",
      ar: "إعادة كتابة strlen وَstrcpy يدويًا، مكتبة <string.h>، فحص المتناظرات، وتحويل حالة الأحرف.",
    },
  },
  {
    filename: "07_pointers.c",
    title: { en: "Pointers", fr: "Pointeurs", ar: "المؤشرات" },
    description: {
      en: "Address-of/dereference, swapping through pointers, pointer arithmetic, and function pointers.",
      fr: "Adresse-de/déréférencement, échange via pointeurs, arithmétique de pointeurs, et pointeurs de fonction.",
      ar: "أخذ العنوان وإلغاء الإشارة، التبديل عبر المؤشرات، الحساب على المؤشرات، ومؤشرات الدوال.",
    },
  },
  {
    filename: "08_dynamic_memory.c",
    title: { en: "Dynamic Memory", fr: "Mémoire dynamique", ar: "الذاكرة الديناميكية" },
    description: {
      en: "malloc, calloc, realloc, free — and a small growable array built on top of them.",
      fr: "malloc, calloc, realloc, free — et un petit tableau extensible construit dessus.",
      ar: "malloc وَcalloc وَrealloc وَfree — ومصفوفة صغيرة قابلة للنمو مبنية فوقها.",
    },
  },
  {
    filename: "09_structs_and_linked_list.c",
    title: { en: "Structs & Linked List", fr: "Structures & liste chaînée", ar: "البنى والقائمة المترابطة" },
    description: {
      en: "Structs, an array of structs, a union, and a full singly linked list.",
      fr: "Structures, un tableau de structures, une union, et une liste chaînée simple complète.",
      ar: "البنى، مصفوفة من البنى، اتحاد، وقائمة مترابطة أحادية الاتجاه كاملة.",
    },
  },
  {
    filename: "10_file_io_and_preprocessor.c",
    title: { en: "File I/O & Preprocessor", fr: "Fichiers & préprocesseur", ar: "الملفات والمعالج المسبق" },
    description: {
      en: "Writing/reading files with FILE*, a word-count example, and macros with #ifdef.",
      fr: "Écriture/lecture de fichiers avec FILE*, un exemple de comptage de mots, et des macros avec #ifdef.",
      ar: "كتابة/قراءة الملفات باستخدام FILE*، مثال لعد الكلمات، والماكرو مع #ifdef.",
    },
  },
];
