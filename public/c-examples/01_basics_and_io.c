/* ============================================================================
 * 01_basics_and_io.c
 *
 * Topics: compiling a program, variables, the built-in types, sizeof,
 *         printf/scanf format specifiers, escape sequences.
 *
 * Build:  gcc 01_basics_and_io.c -o basics -Wall -Wextra
 * Run:    ./basics
 * ============================================================================
 */

#include <stdio.h>

/* ----------------------------------------------------------------------
 * print_type_sizes
 *
 * Prints how many bytes each built-in type occupies on this machine.
 * The C standard does NOT fix these sizes -- they depend on the
 * platform -- so we always ask with sizeof() instead of assuming.
 * -------------------------------------------------------------------- */
void print_type_sizes(void) {
    printf("---- Type sizes on this machine ----\n");
    printf("char:   %zu byte(s)\n", sizeof(char));
    printf("int:    %zu byte(s)\n", sizeof(int));
    printf("long:   %zu byte(s)\n", sizeof(long));
    printf("float:  %zu byte(s)\n", sizeof(float));
    printf("double: %zu byte(s)\n", sizeof(double));
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_variables_and_types
 *
 * Declares one variable of each common built-in type and prints it
 * with the matching printf format specifier.
 * -------------------------------------------------------------------- */
void demo_variables_and_types(void) {
    int age = 19;                 /* whole number                     */
    float price = 4.50f;          /* single-precision decimal         */
    double distance = 384400.0;   /* double-precision decimal         */
    char grade = 'A';             /* a single character               */
    unsigned int positive = 42u;  /* never negative                   */

    printf("---- Variables and types ----\n");
    printf("age (int):        %d\n", age);
    printf("price (float):    %.2f\n", price);
    printf("distance (double):%.1f\n", distance);
    printf("grade (char):     %c\n", grade);
    printf("positive (uint):  %u\n", positive);
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_integer_division
 *
 * A very common beginner surprise: dividing two ints truncates the
 * fractional part instead of rounding.
 * -------------------------------------------------------------------- */
void demo_integer_division(void) {
    int a = 7, b = 2;
    float correct = (float)a / (float)b; /* cast one side to float */

    printf("---- Integer vs. float division ----\n");
    printf("7 / 2 as int:            %d\n", a / b);       /* 3, not 3.5 */
    printf("7 / 2 with a float cast: %.1f\n", correct);   /* 3.5        */
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_escape_sequences
 *
 * Special characters inside string literals: newline, tab, and
 * literal backslash / quote.
 * -------------------------------------------------------------------- */
void demo_escape_sequences(void) {
    printf("---- Escape sequences ----\n");
    printf("Line one\nLine two\n");          /* \n = newline           */
    printf("Column1\tColumn2\n");             /* \t = tab               */
    printf("A backslash looks like this: \\\n");
    printf("A quote looks like this: \"\n");
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_scanf
 *
 * Reads a single integer typed by the user. scanf needs the ADDRESS
 * of the variable it fills in, via the & operator -- this is the
 * same mechanism pointers use later in the course.
 * -------------------------------------------------------------------- */
void demo_scanf(void) {
    int favorite_number = 0;

    printf("---- Reading input ----\n");
    printf("Enter your favorite whole number: ");

    if (scanf("%d", &favorite_number) == 1) {
        printf("You entered: %d\n", favorite_number);
        printf("Doubled: %d\n", favorite_number * 2);
    } else {
        printf("That wasn't a valid number.\n");
    }
    printf("\n");
}

int main(void) {
    print_type_sizes();
    demo_variables_and_types();
    demo_integer_division();
    demo_escape_sequences();
    demo_scanf();

    return 0;
}
