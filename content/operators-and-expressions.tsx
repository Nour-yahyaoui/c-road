import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "An expression is anything that produces a value. Operators combine values into bigger expressions — C has more of these than most languages, because arithmetic, comparison, and bit manipulation all sit at the same level of the language.",
      fr: "Une expression est tout ce qui produit une valeur. Les opérateurs combinent des valeurs en expressions plus complexes — le C en possède plus que la plupart des langages, car l'arithmétique, la comparaison et la manipulation de bits se trouvent toutes au même niveau du langage.",
      ar: "التعبير (expression) هو أي شيء ينتج قيمة. العوامل (operators) تجمع القيم في تعبيرات أكبر — تمتلك C عددًا منها أكثر من معظم اللغات، لأن العمليات الحسابية والمقارنة والتلاعب بالبتات (bit manipulation) كلها موجودة على نفس مستوى اللغة.",
    },
  },
  { type: "h2", text: { en: "Arithmetic", fr: "Arithmétique", ar: "العمليات الحسابية" } },
  {
    type: "code",
    code: {
      label: "arithmetic.c",
      code: `int a = 17, b = 5;\n\na + b;   // 22\na - b;   // 12\na * b;   // 85\na / b;   // 3   (integer division)\na % b;   // 2   (remainder)`,
    },
  },
  {
    type: "p",
    text: {
      en: "`%`, the modulo operator, only works on integers. To get a real fractional result from division, make sure at least one side is a floating-point type:",
      fr: "`%`, l'opérateur modulo, ne fonctionne que sur des entiers. Pour obtenir un vrai résultat fractionnaire lors d'une division, assurez-vous qu'au moins un côté est un type à virgule flottante :",
      ar: "`%`، وهو عامل الباقي (modulo)، يعمل فقط على الأعداد الصحيحة. للحصول على نتيجة كسرية حقيقية من القسمة، تأكد من أن أحد الطرفين على الأقل من نوع فاصلة عائمة (floating-point):",
    },
  },
  { type: "code", compact: true, code: { label: "float-division.c", code: `float result = a / (float)b;  // 3.4` } },
  { type: "h2", text: { en: "Comparison and logic", fr: "Comparaison et logique", ar: "المقارنة والمنطق" } },
  {
    type: "p",
    text: {
      en: "Comparisons produce an `int`: `1` for true, `0` for false. C has no separate boolean type in classic C (C99 added `_Bool` via `<stdbool.h>`, but plain integers work the same way and are still common).",
      fr: "Les comparaisons produisent un `int` : `1` pour vrai, `0` pour faux. Le C classique n'a pas de type booléen distinct (le C99 a ajouté `_Bool` via `<stdbool.h>`, mais les entiers simples fonctionnent de la même manière et restent courants).",
      ar: "المقارنات تُنتج قيمة من نوع `int`: `1` تعني صحيح (true)، وَ`0` تعني خطأ (false). لا يوجد نوع منطقي (boolean) منفصل في C الكلاسيكية (أضاف معيار C99 النوع `_Bool` عبر `<stdbool.h>`، لكن الأعداد الصحيحة العادية تعمل بنفس الطريقة وما زالت شائعة الاستخدام).",
    },
  },
  {
    type: "code",
    code: {
      label: "comparisons.c",
      code: `a == b   // equal to\na != b   // not equal to\na < b    // less than\na >= b   // greater than or equal to\n\na > 0 && b > 0   // logical AND\na > 0 || b > 0   // logical OR\n!(a > 0)         // logical NOT`,
    },
  },
  {
    type: "callout",
    kind: "warning",
    title: { en: "= is assignment, == is comparison", fr: "= est une affectation, == est une comparaison", ar: "= هي إسناد، وَ== هي مقارنة" },
    text: {
      en: "`if (a = 5)` compiles. It assigns 5 to `a` and the condition is always true, since 5 is nonzero. This is a classic bug — read conditions carefully, or write `if (5 == a)` so a typo becomes a compiler error instead.",
      fr: "`if (a = 5)` compile sans erreur. Il assigne 5 à `a`, et la condition est toujours vraie, puisque 5 est non nul. C'est une erreur classique — relisez vos conditions attentivement, ou écrivez `if (5 == a)` pour qu'une faute de frappe devienne une erreur de compilation.",
      ar: "الشيفرة `if (a = 5)` تُترجَم بنجاح. فهي تُسند القيمة 5 إلى `a`، ويكون الشرط دائمًا صحيحًا لأن 5 ليست صفرًا. هذا خطأ شائع كلاسيكي — اقرأ الشروط بعناية، أو اكتب `if (5 == a)` بحيث يتحول أي خطأ إملائي إلى خطأ ترجمة (compiler error).",
    },
  },
  { type: "h2", text: { en: "Compound assignment and increment", fr: "Affectation composée et incrémentation", ar: "الإسناد المركّب والزيادة" } },
  {
    type: "code",
    code: {
      label: "shorthand.c",
      code: `int count = 0;\n\ncount += 5;   // same as count = count + 5\ncount -= 2;\ncount *= 3;\n\ncount++;      // same as count = count + 1\ncount--;`,
    },
  },
  {
    type: "p",
    text: {
      en: "`count++` (postfix) returns the old value before incrementing; `++count` (prefix) increments first and returns the new value. When the result isn't used in a larger expression, they behave the same — the difference only matters when you use the result immediately, like `arr[i++]`.",
      fr: "`count++` (postfixé) renvoie l'ancienne valeur avant l'incrémentation ; `++count` (préfixé) incrémente d'abord puis renvoie la nouvelle valeur. Quand le résultat n'est pas utilisé dans une expression plus large, ils se comportent de la même façon — la différence ne compte que si vous utilisez le résultat immédiatement, comme dans `arr[i++]`.",
      ar: "`count++` (لاحقة، postfix) تُعيد القيمة القديمة قبل الزيادة؛ أما `++count` (سابقة، prefix) فتزيد القيمة أولًا ثم تُعيد القيمة الجديدة. عندما لا تُستخدم النتيجة داخل تعبير أكبر، يتصرفان بنفس الطريقة — الفرق يظهر فقط عندما تستخدم النتيجة فورًا، مثل `arr[i++]`.",
    },
  },
  { type: "h2", text: { en: "Operator precedence", fr: "Priorité des opérateurs", ar: "أسبقية العوامل" } },
  {
    type: "p",
    text: {
      en: "Multiplication and division bind tighter than addition and subtraction, and comparisons bind tighter than logical `&&` and `||` — the same rules you already know from math class, extended to more operators. When in doubt, add parentheses; they cost nothing and remove all ambiguity for the next reader.",
      fr: "La multiplication et la division sont prioritaires sur l'addition et la soustraction, et les comparaisons sont prioritaires sur les opérateurs logiques `&&` et `||` — les mêmes règles que vous connaissez déjà des cours de mathématiques, étendues à davantage d'opérateurs. En cas de doute, ajoutez des parenthèses ; elles ne coûtent rien et suppriment toute ambiguïté pour le prochain lecteur.",
      ar: "الضرب والقسمة لهما أسبقية أعلى من الجمع والطرح، والمقارنات لها أسبقية أعلى من العاملين المنطقيين `&&` وَ`||` — وهي نفس القواعد التي تعرفها من دروس الرياضيات، ولكن مطبقة على عوامل أكثر. عند الشك، أضف أقواسًا؛ فهي لا تُكلّف شيئًا وتُزيل أي غموض بالنسبة للقارئ التالي.",
    },
  },
  { type: "code", compact: true, code: { label: "precedence.c", code: `int result = 2 + 3 * 4;      // 14, not 20\nint clearer = 2 + (3 * 4);   // same value, clearer intent` } },
];

export default blocks;
