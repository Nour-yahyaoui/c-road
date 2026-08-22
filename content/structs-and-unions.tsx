import type { Block } from "@/lib/blocks";

const blocks: Block[] = [
  {
    type: "p",
    text: {
      en: "A struct groups several related values, possibly of different types, into a single named type. Where an array holds many values of the *same* type, a struct holds a fixed set of fields that together describe one thing.",
      fr: "Une structure regroupe plusieurs valeurs liées, éventuellement de types différents, en un seul type nommé. Là où un tableau contient plusieurs valeurs du *même* type, une structure contient un ensemble fixe de champs qui décrivent ensemble une seule chose.",
      ar: "البنية (struct) تجمع عدة قيم مترابطة، ربما من أنواع مختلفة، في نوع واحد له اسم. بينما تحتوي المصفوفة على عدة قيم من *نفس* النوع، تحتوي البنية على مجموعة ثابتة من الحقول (fields) تصف معًا شيئًا واحدًا.",
    },
  },
  { type: "h2", text: { en: "Defining and using a struct", fr: "Définir et utiliser une structure", ar: "تعريف بنية واستخدامها" } },
  {
    type: "code",
    code: {
      label: "struct.c",
      code: `struct Point {\n    int x;\n    int y;\n};\n\nint main(void) {\n    struct Point origin = {0, 0};\n    struct Point p = {3, 4};\n\n    printf("(%d, %d)\\n", p.x, p.y);\n    p.x = 10;  // dot notation to access and modify fields\n\n    return 0;\n}`,
    },
  },
  {
    type: "p",
    text: {
      en: "`.` accesses a field on a struct value directly. A `typedef` is commonly used so you don't have to write `struct` every time you name the type:",
      fr: "`.` accède directement à un champ d'une valeur de structure. Un `typedef` est couramment utilisé pour éviter d'écrire `struct` à chaque fois que vous nommez le type :",
      ar: "يصل الرمز `.` مباشرة إلى حقل داخل قيمة بنية. يُستخدم `typedef` عادة حتى لا تضطر لكتابة `struct` في كل مرة تُسمّي فيها النوع:",
    },
  },
  { type: "code", compact: true, code: { label: "typedef.c", code: `typedef struct {\n    int x;\n    int y;\n} Point;\n\nPoint p = {3, 4};  // no "struct" keyword needed here` } },
  { type: "h2", text: { en: "Structs and pointers", fr: "Structures et pointeurs", ar: "البنى والمؤشرات" } },
  {
    type: "p",
    text: {
      en: "When you have a pointer to a struct, `->` accesses a field without needing to dereference manually first:",
      fr: "Lorsque vous avez un pointeur vers une structure, `->` accède à un champ sans avoir besoin de le déréférencer manuellement au préalable :",
      ar: "عندما يكون لديك مؤشر يشير إلى بنية، فإن `->` يصل إلى حقل دون الحاجة إلى إلغاء الإشارة يدويًا أولًا:",
    },
  },
  { type: "code", code: { label: "arrow.c", code: `void move(Point *p, int dx, int dy) {\n    p->x += dx;   // shorthand for (*p).x += dx\n    p->y += dy;\n}\n\nint main(void) {\n    Point p = {0, 0};\n    move(&p, 5, 5);\n    printf("(%d, %d)\\n", p.x, p.y);  // (5, 5)\n    return 0;\n}` } },
  {
    type: "callout",
    kind: "note",
    title: { en: "Structs are also passed by value", fr: "Les structures sont aussi passées par valeur", ar: "البنى أيضًا تُمرَّر بالقيمة" },
    text: {
      en: "Passing a struct to a function copies every field, the same way passing an `int` copies it (0x06). For large structs, it's more efficient to pass a pointer instead — which is also the only way for the function to modify the caller's struct, as `move` does above.",
      fr: "Passer une structure à une fonction copie chaque champ, de la même façon que passer un `int` le copie (0x06). Pour les grandes structures, il est plus efficace de passer un pointeur — c'est aussi la seule façon pour la fonction de modifier la structure de l'appelant, comme le fait `move` ci-dessus.",
      ar: "تمرير بنية إلى دالة يقوم بنسخ كل حقل، بنفس طريقة نسخ `int` عند تمريره (0x06). بالنسبة للبنى الكبيرة، يكون تمرير مؤشر بدلًا من ذلك أكثر كفاءة — وهو أيضًا الطريقة الوحيدة لتعديل الدالة لبنية المستدعي، كما تفعل `move` أعلاه.",
    },
  },
  { type: "h2", text: { en: "Arrays of structs", fr: "Tableaux de structures", ar: "مصفوفات من البنى" } },
  { type: "code", code: { label: "array-of-structs.c", code: `Point path[3] = {\n    {0, 0},\n    {1, 1},\n    {2, 4}\n};\n\nfor (int i = 0; i < 3; i++) {\n    printf("(%d, %d)\\n", path[i].x, path[i].y);\n}` } },
  { type: "h2", text: { en: "Unions: sharing the same memory", fr: "Unions : partager la même mémoire", ar: "الاتحادات (unions): مشاركة نفس الذاكرة" } },
  {
    type: "p",
    text: {
      en: "A union looks like a struct but its fields all share the same memory — writing one field overwrites the others, and the union is only as big as its largest field. Unions are far less common than structs; they show up when memory is tight or when interpreting the same bytes in more than one way:",
      fr: "Une union ressemble à une structure, mais tous ses champs partagent la même mémoire — écrire dans un champ écrase les autres, et l'union n'est aussi grande que son plus grand champ. Les unions sont bien moins courantes que les structures ; elles apparaissent quand la mémoire est limitée ou pour interpréter les mêmes octets de plusieurs façons :",
      ar: "الاتحاد (union) يبدو مثل البنية، لكن جميع حقوله تتشارك نفس الذاكرة — الكتابة في حقل واحد تُلغي الحقول الأخرى، وحجم الاتحاد يساوي فقط حجم أكبر حقل فيه. الاتحادات أقل شيوعًا بكثير من البنى؛ وتظهر عند ضيق الذاكرة أو عند الحاجة لتفسير نفس البايتات بأكثر من طريقة:",
    },
  },
  { type: "code", code: { label: "union.c", code: `union Value {\n    int as_int;\n    float as_float;\n};\n\nunion Value v;\nv.as_int = 42;\nprintf("%d\\n", v.as_int);    // 42\nv.as_float = 3.14f;\nprintf("%d\\n", v.as_int);    // meaningless now — as_float overwrote it` } },
];

export default blocks;
