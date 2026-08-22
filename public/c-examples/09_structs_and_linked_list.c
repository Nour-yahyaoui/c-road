/* ============================================================================
 * 09_structs_and_linked_list.c
 *
 * Topics: struct basics, arrays of structs, structs + pointers (->),
 * a union example, and a small singly linked list built with structs
 * and malloc/free.
 *
 * Build:  gcc 09_structs_and_linked_list.c -o structs_demo -Wall -Wextra
 * Run:    ./structs_demo
 * ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* ----------------------------------------------------------------------
 * Point / Student: two ordinary structs.
 * -------------------------------------------------------------------- */
typedef struct {
    int x;
    int y;
} Point;

typedef struct {
    char name[32];
    int age;
    float gpa;
} Student;

/* ----------------------------------------------------------------------
 * move_point
 *
 * Takes a POINTER to a Point so it can modify the caller's struct
 * directly, using -> instead of manually writing (*p).x.
 * -------------------------------------------------------------------- */
void move_point(Point *p, int dx, int dy) {
    p->x += dx;
    p->y += dy;
}

void demo_structs(void) {
    Point p = {3, 4};

    printf("---- Basic structs ----\n");
    printf("Point: (%d, %d)\n", p.x, p.y);

    move_point(&p, 5, -2);
    printf("After move_point(5, -2): (%d, %d)\n", p.x, p.y);
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_array_of_structs
 *
 * A small "database" of students, showing how structs and arrays
 * combine to model a list of records.
 * -------------------------------------------------------------------- */
void demo_array_of_structs(void) {
    Student roster[3] = {
        {"Nour",   19, 3.80f},
        {"Amine",  21, 3.40f},
        {"Yasmin", 20, 3.95f}
    };

    printf("---- Array of structs ----\n");
    float total_gpa = 0.0f;
    for (int i = 0; i < 3; i++) {
        printf("%-8s age %d, GPA %.2f\n", roster[i].name, roster[i].age, roster[i].gpa);
        total_gpa += roster[i].gpa;
    }
    printf("Average GPA: %.2f\n\n", total_gpa / 3);
}

/* ----------------------------------------------------------------------
 * Value: a union example. All fields share the same memory, so the
 * union is only as large as its biggest field, and writing one
 * field overwrites whatever was in the others.
 * -------------------------------------------------------------------- */
typedef union {
    int as_int;
    float as_float;
    char as_bytes[4];
} Value;

void demo_union(void) {
    Value v;
    v.as_int = 65;

    printf("---- Union: shared memory ----\n");
    printf("sizeof(Value) = %zu bytes (as large as its biggest field)\n", sizeof(Value));
    printf("as_int:   %d\n", v.as_int);

    v.as_float = 3.14f; /* overwrites the same bytes as_int used */
    printf("after setting as_float, as_int is now meaningless: %d\n", v.as_int);
    printf("as_float: %.2f\n\n", v.as_float);
}

/* ----------------------------------------------------------------------
 * Node / linked list: a small singly linked list of integers, built
 * from a self-referential struct (a struct containing a pointer to
 * another struct of the same type) plus malloc/free.
 * -------------------------------------------------------------------- */
typedef struct Node {
    int value;
    struct Node *next;
} Node;

/* Allocates a new node on the heap. Caller is responsible for
 * eventually freeing it (directly, or via list_free). */
Node *node_create(int value) {
    Node *node = malloc(sizeof(Node));
    if (node == NULL) {
        printf("malloc failed -- out of memory\n");
        exit(1);
    }
    node->value = value;
    node->next = NULL;
    return node;
}

/* Inserts a new node at the front of the list and returns the new head. */
Node *list_push_front(Node *head, int value) {
    Node *node = node_create(value);
    node->next = head;
    return node; /* the new node is now the head */
}

/* Prints every value in the list, following the chain of `next`
 * pointers until it reaches NULL. */
void list_print(const Node *head) {
    const Node *current = head;
    printf("[ ");
    while (current != NULL) {
        printf("%d ", current->value);
        current = current->next;
    }
    printf("]\n");
}

/* Sums every value in the list. */
int list_sum(const Node *head) {
    int total = 0;
    const Node *current = head;
    while (current != NULL) {
        total += current->value;
        current = current->next;
    }
    return total;
}

/* Frees every node in the list. Must walk the list BEFORE freeing
 * each node, since freeing a node destroys its `next` pointer too. */
void list_free(Node *head) {
    Node *current = head;
    while (current != NULL) {
        Node *next = current->next; /* save next before freeing current */
        free(current);
        current = next;
    }
}

void demo_linked_list(void) {
    Node *head = NULL; /* an empty list starts as NULL */

    /* Pushing 3, then 2, then 1 to the front leaves the list as 1 -> 2 -> 3 */
    head = list_push_front(head, 3);
    head = list_push_front(head, 2);
    head = list_push_front(head, 1);

    printf("---- Singly linked list ----\n");
    printf("List: ");
    list_print(head);
    printf("Sum: %d\n", list_sum(head));

    list_free(head); /* every node was malloc'd, so every node must be freed */
    head = NULL;
    printf("\n");
}

int main(void) {
    demo_structs();
    demo_array_of_structs();
    demo_union();
    demo_linked_list();

    return 0;
}
