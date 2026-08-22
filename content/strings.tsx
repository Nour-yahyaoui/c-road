import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "C has no dedicated string type. A string is just an array of `char`, ending with a special sentinel byte, `'\\0'` (the null terminator), that marks where the text stops.",
      fr: "Le C n'a pas de type chaîne dédié. Une chaîne est simplement un tableau de `char`, terminé par un octet sentinelle spécial, `'\\0'` (le caractère nul), qui marque la fin du texte.",
      ar: "لا تمتلك C نوعًا مخصصًا للسلاسل النصية. السلسلة النصية هي ببساطة مصفوفة من `char`، تنتهي ببايت حارس خاص، `'\\0'` (المُنهي الفارغ، null terminator)، يُحدد أين ينتهي النص.",
    },
  },
  { type: "h2", text: { en: "String literals and null termination", fr: "Littéraux de chaîne et terminaison nulle", ar: "السلاسل النصية الحرفية والإنهاء الفارغ" } },
  { type: "code", code: { label: "literal.c", code: `char name[] = "Nour";\n// stored in memory as: 'N' 'o' 'u' 'r' '\\0'\n// 5 bytes total, even though the word is 4 letters` } },
  {
    type: "p",
    text: {
      en: "Every function that works with strings — `printf`'s `%s`, `strlen`, `strcpy` — scans forward until it hits that `'\\0'`. If it's missing, those functions keep reading past the end of your array into whatever memory follows.",
      fr: "Toute fonction qui travaille avec des chaînes — le `%s` de `printf`, `strlen`, `strcpy` — avance jusqu'à rencontrer ce `'\\0'`. S'il est absent, ces fonctions continuent de lire au-delà de la fin de votre tableau, dans la mémoire qui suit.",
      ar: "كل دالة تتعامل مع السلاسل النصية — مثل `%s` في `printf`، وَ`strlen`، وَ`strcpy` — تمسح للأمام حتى تصل إلى ذلك الرمز `'\\0'`. إذا كان غائبًا، تستمر هذه الدوال في القراءة إلى ما بعد نهاية مصفوفتك، داخل أي ذاكرة تليها.",
    },
  },
  { type: "h2", text: { en: "Common functions from string.h", fr: "Fonctions courantes de string.h", ar: "دوال شائعة من string.h" } },
  {
    type: "code",
    code: {
      label: "string-h.c",
      code: `#include <string.h>\n\nchar greeting[50] = "Hello";\n\nstrlen(greeting);              // 5 — length, not counting '\\0'\nstrcat(greeting, ", world!");  // appends onto greeting\nstrcpy(greeting, "Hi");        // overwrites greeting's contents\nstrcmp("cat", "dog");          // negative: "cat" sorts before "dog"\nstrcmp("cat", "cat");          // 0: equal`,
    },
  },
  {
    type: "callout",
    kind: "warning",
    title: { en: "Destination buffers must have room", fr: "Les tampons de destination doivent avoir de la place", ar: "يجب أن تحتوي الوجهات (buffers) على مساحة كافية" },
    text: {
      en: "`strcat` and `strcpy` don't check whether the destination array is big enough — writing past its end corrupts nearby memory. `greeting` above was declared with 50 bytes specifically to leave room for what gets appended to it. When the size isn't guaranteed, prefer `strncat` and `strncpy`, which take a maximum length.",
      fr: "`strcat` et `strcpy` ne vérifient pas si le tableau de destination est assez grand — écrire au-delà de sa fin corrompt la mémoire voisine. `greeting` ci-dessus a été déclaré avec 50 octets précisément pour laisser de la place à ce qui lui sera ajouté. Quand la taille n'est pas garantie, préférez `strncat` et `strncpy`, qui prennent une longueur maximale.",
      ar: "لا تتحقق `strcat` وَ`strcpy` مما إذا كانت مصفوفة الوجهة كبيرة بما يكفي — الكتابة بعد نهايتها تُفسد الذاكرة المجاورة. تم تعريف `greeting` أعلاه بحجم 50 بايت خصيصًا لترك مساحة لما سيُضاف إليها. عندما لا يكون الحجم مضمونًا، يُفضَّل استخدام `strncat` وَ`strncpy`، اللتين تأخذان طولًا أقصى.",
    },
  },
  { type: "h2", text: { en: "Reading a line of input", fr: "Lire une ligne d'entrée", ar: "قراءة سطر من الإدخال" } },
  {
    type: "p",
    text: {
      en: "`scanf(\"%s\", ...)` stops at the first whitespace, which makes it unsuitable for names or sentences with spaces. `fgets` reads a full line, including spaces, and lets you cap how many bytes it writes:",
      fr: "`scanf(\"%s\", ...)` s'arrête au premier espace, ce qui le rend inadapté aux noms ou aux phrases contenant des espaces. `fgets` lit une ligne complète, espaces compris, et vous permet de limiter le nombre d'octets écrits :",
      ar: "تتوقف `scanf(\"%s\", ...)` عند أول فراغ (whitespace)، مما يجعلها غير مناسبة للأسماء أو الجمل التي تحتوي على فراغات. تقرأ `fgets` سطرًا كاملًا، بما في ذلك الفراغات، وتتيح لك تحديد الحد الأقصى لعدد البايتات التي تكتبها:",
    },
  },
  { type: "code", code: { label: "fgets.c", code: `char line[100];\nprintf("Enter your full name: ");\nfgets(line, sizeof(line), stdin);` } },
  {
    type: "callout",
    kind: "note",
    title: { en: "fgets keeps the trailing newline", fr: "fgets conserve le retour à la ligne final", ar: "fgets تحتفظ بحرف السطر الجديد النهائي" },
    text: {
      en: "Unlike `scanf`, `fgets` includes the `\\n` the user typed before pressing Enter. It's common to strip it afterward by searching for `\\n` and replacing it with `'\\0'`.",
      fr: "Contrairement à `scanf`, `fgets` inclut le `\\n` que l'utilisateur a tapé avant d'appuyer sur Entrée. Il est courant de le retirer ensuite en cherchant `\\n` et en le remplaçant par `'\\0'`.",
      ar: "بخلاف `scanf`، تتضمن `fgets` رمز `\\n` الذي كتبه المستخدم قبل الضغط على Enter. من الشائع إزالته لاحقًا بالبحث عن `\\n` واستبداله بـ `'\\0'`.",
    },
  },
  { type: "h2", text: { en: "Comparing strings", fr: "Comparer des chaînes", ar: "مقارنة السلاسل النصية" } },
  {
    type: "p",
    text: {
      en: "You cannot compare strings with `==` — that compares the two array addresses, not their contents. Always use `strcmp`, which returns `0` when the strings are equal:",
      fr: "Vous ne pouvez pas comparer des chaînes avec `==` — cela compare les deux adresses de tableau, pas leur contenu. Utilisez toujours `strcmp`, qui renvoie `0` lorsque les chaînes sont égales :",
      ar: "لا يمكنك مقارنة السلاسل النصية باستخدام `==` — فهذا يقارن عنواني المصفوفتين، وليس محتواهما. استخدم دائمًا `strcmp`، التي تُعيد `0` عندما تكون السلسلتان متساويتين:",
    },
  },
  { type: "code", compact: true, code: { label: "compare.c", code: `if (strcmp(input, "yes") == 0) {\n    printf("Confirmed.\\n");\n}` } },
];

export default blocks;
