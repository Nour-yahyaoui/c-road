/* ============================================================================
 * 08_dynamic_memory.c
 *
 * Topics: malloc, calloc, realloc, free, and a small growable
 * "dynamic array" built on top of them.
 *
 * Build:  gcc 08_dynamic_memory.c -o dynamic_memory -Wall -Wextra
 * Run:    ./dynamic_memory
 * ============================================================================
 */

#include <stdio.h>
#include <stdlib.h>

/* ----------------------------------------------------------------------
 * demo_malloc_and_free
 *
 * Requests space for 5 ints from the heap, uses it, then gives it
 * back. Every malloc needs exactly one matching free.
 * -------------------------------------------------------------------- */
void demo_malloc_and_free(void) {
    int *nums = malloc(5 * sizeof(int));

    if (nums == NULL) {
        printf("malloc failed -- out of memory\n");
        return;
    }

    for (int i = 0; i < 5; i++) {
        nums[i] = (i + 1) * (i + 1); /* squares: 1 4 9 16 25 */
    }

    printf("---- malloc / free ----\n");
    printf("Squares: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", nums[i]);
    }
    printf("\n");

    free(nums);   /* give the memory back                    */
    nums = NULL;  /* avoid leaving a dangling pointer around  */
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_calloc
 *
 * calloc zero-initializes the memory it hands back, unlike malloc.
 * -------------------------------------------------------------------- */
void demo_calloc(void) {
    int *counts = calloc(5, sizeof(int)); /* 5 ints, all starting at 0 */

    if (counts == NULL) {
        printf("calloc failed -- out of memory\n");
        return;
    }

    printf("---- calloc (zero-initialized) ----\n");
    printf("Initial values: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", counts[i]); /* all zero, without us setting them */
    }
    printf("\n");

    free(counts);
    printf("\n");
}

/* ----------------------------------------------------------------------
 * IntVector: a tiny growable array, similar in spirit to a very
 * small piece of a real "vector"/"ArrayList" type. Demonstrates
 * realloc for growing an allocation, and ownership discipline.
 * -------------------------------------------------------------------- */
typedef struct {
    int *data;
    int length;   /* how many elements are actually in use   */
    int capacity; /* how many elements the buffer can hold   */
} IntVector;

/* Creates an empty vector with a small starting capacity. */
IntVector vector_create(void) {
    IntVector v;
    v.capacity = 2;
    v.length = 0;
    v.data = malloc((size_t)v.capacity * sizeof(int));
    return v;
}

/* Appends a value, growing the buffer with realloc if it's full. */
void vector_push(IntVector *v, int value) {
    if (v->length == v->capacity) {
        v->capacity *= 2; /* double the capacity when we run out of room */
        int *bigger = realloc(v->data, (size_t)v->capacity * sizeof(int));
        if (bigger == NULL) {
            printf("realloc failed -- out of memory\n");
            return; /* v->data is still valid and unchanged */
        }
        v->data = bigger;
    }
    v->data[v->length] = value;
    v->length++;
}

/* Frees the vector's backing storage. Always pair with vector_create. */
void vector_free(IntVector *v) {
    free(v->data);
    v->data = NULL;
    v->length = 0;
    v->capacity = 0;
}

void demo_dynamic_vector(void) {
    IntVector v = vector_create();

    printf("---- A small growable array (realloc) ----\n");
    printf("Starting capacity: %d\n", v.capacity);

    for (int i = 1; i <= 10; i++) {
        vector_push(&v, i * 10);
        printf("pushed %-4d  length=%-2d capacity=%d\n", i * 10, v.length, v.capacity);
    }

    printf("Final contents: ");
    for (int i = 0; i < v.length; i++) {
        printf("%d ", v.data[i]);
    }
    printf("\n");

    vector_free(&v);
    printf("\n");
}

int main(void) {
    demo_malloc_and_free();
    demo_calloc();
    demo_dynamic_vector();

    return 0;
}
