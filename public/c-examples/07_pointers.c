/* ============================================================================
 * 07_pointers.c
 *
 * Topics: address-of / dereference, pointers as function parameters,
 * pointer arithmetic, the array/pointer relationship, and a first
 * look at function pointers.
 *
 * Build:  gcc 07_pointers.c -o pointers_demo -Wall -Wextra
 * Run:    ./pointers_demo
 * ============================================================================
 */

#include <stdio.h>

/* ----------------------------------------------------------------------
 * demo_address_and_dereference
 *
 * & reads "the address of"; * reads "the value at this address".
 * -------------------------------------------------------------------- */
void demo_address_and_dereference(void) {
    int age = 19;
    int *p = &age; /* p now holds the address of age */

    printf("---- Address-of and dereference ----\n");
    printf("age            = %d\n", age);
    printf("&age (address) = %p\n", (void *)&age);
    printf("p (same addr)  = %p\n", (void *)p);
    printf("*p (deref'd)   = %d\n", *p);

    *p = 20; /* writing through the pointer changes age itself */
    printf("after *p = 20, age = %d\n", age);
    printf("\n");
}

/* ----------------------------------------------------------------------
 * swap
 *
 * The textbook example of why pointers matter: C passes arguments
 * by value, so a function can't modify the caller's variables
 * directly. Passing addresses lets it write through them instead.
 * -------------------------------------------------------------------- */
void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void demo_swap(void) {
    int x = 3, y = 9;

    printf("---- Swapping through pointers ----\n");
    printf("Before: x = %d, y = %d\n", x, y);
    swap(&x, &y);
    printf("After:  x = %d, y = %d\n", x, y);
    printf("\n");
}

/* ----------------------------------------------------------------------
 * find_min_max
 *
 * A function that needs to hand back TWO results uses two pointer
 * parameters -- a function can only truly "return" one value, so
 * anything more has to go through addresses.
 * -------------------------------------------------------------------- */
void find_min_max(const int *arr, int length, int *out_min, int *out_max) {
    *out_min = arr[0];
    *out_max = arr[0];

    for (int i = 1; i < length; i++) {
        if (arr[i] < *out_min) *out_min = arr[i];
        if (arr[i] > *out_max) *out_max = arr[i];
    }
}

void demo_multiple_outputs(void) {
    int numbers[] = {4, 8, 15, 16, 23, 42};
    int min, max;

    find_min_max(numbers, 6, &min, &max);

    printf("---- Returning two values via pointers ----\n");
    printf("min = %d, max = %d\n", min, max);
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_pointer_arithmetic
 *
 * An array's name decays into a pointer to its first element.
 * arr[i] and *(arr + i) compile to identical instructions.
 * -------------------------------------------------------------------- */
void demo_pointer_arithmetic(void) {
    int nums[] = {10, 20, 30, 40};
    int *p = nums; /* same as &nums[0] */

    printf("---- Pointer arithmetic ----\n");
    for (int i = 0; i < 4; i++) {
        printf("nums[%d] = %-3d   *(p + %d) = %-3d   p[%d] = %d\n",
               i, nums[i], i, *(p + i), i, p[i]);
    }
    printf("\n");
}

/* ----------------------------------------------------------------------
 * add / subtract / multiply
 *
 * Three ordinary functions with a matching signature, used below to
 * demonstrate function pointers.
 * -------------------------------------------------------------------- */
int add(int a, int b) { return a + b; }
int subtract(int a, int b) { return a - b; }
int multiply(int a, int b) { return a * b; }

/* ----------------------------------------------------------------------
 * apply_operation
 *
 * Takes a FUNCTION POINTER as a parameter, so the same code can run
 * whichever operation the caller chooses -- without an if/else
 * chain of function names.
 * -------------------------------------------------------------------- */
int apply_operation(int a, int b, int (*operation)(int, int)) {
    return operation(a, b);
}

void demo_function_pointers(void) {
    printf("---- Function pointers ----\n");
    printf("apply_operation(6, 3, add)      = %d\n", apply_operation(6, 3, add));
    printf("apply_operation(6, 3, subtract) = %d\n", apply_operation(6, 3, subtract));
    printf("apply_operation(6, 3, multiply) = %d\n", apply_operation(6, 3, multiply));
    printf("\n");
}

int main(void) {
    demo_address_and_dereference();
    demo_swap();
    demo_multiple_outputs();
    demo_pointer_arithmetic();
    demo_function_pointers();

    return 0;
}
