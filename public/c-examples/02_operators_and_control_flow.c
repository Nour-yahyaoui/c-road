/* ============================================================================
 * 02_operators_and_control_flow.c
 *
 * Topics: arithmetic/comparison/logical operators, operator precedence,
 *         if / else if / else, switch, the ternary operator.
 *
 * Build:  gcc 02_operators_and_control_flow.c -o control_flow -Wall -Wextra
 * Run:    ./control_flow
 * ============================================================================
 */

#include <stdio.h>

/* ----------------------------------------------------------------------
 * demo_arithmetic
 *
 * The five arithmetic operators, including % (modulo), which only
 * works on integers and returns the remainder of a division.
 * -------------------------------------------------------------------- */
void demo_arithmetic(void) {
    int a = 17, b = 5;

    printf("---- Arithmetic ----\n");
    printf("%d + %d = %d\n", a, b, a + b);
    printf("%d - %d = %d\n", a, b, a - b);
    printf("%d * %d = %d\n", a, b, a * b);
    printf("%d / %d = %d  (integer division)\n", a, b, a / b);
    printf("%d %% %d = %d  (remainder)\n", a, b, a % b);
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_precedence
 *
 * Multiplication/division bind tighter than addition/subtraction.
 * When it's not obvious, parentheses remove all doubt.
 * -------------------------------------------------------------------- */
void demo_precedence(void) {
    int result = 2 + 3 * 4;        /* multiplication happens first: 14 */
    int clearer = 2 + (3 * 4);     /* same value, explicit intent      */

    printf("---- Operator precedence ----\n");
    printf("2 + 3 * 4       = %d\n", result);
    printf("2 + (3 * 4)     = %d  (same answer, clearer to read)\n", clearer);
    printf("\n");
}

/* ----------------------------------------------------------------------
 * classify_grade
 *
 * A classic if / else if / else chain. Conditions are checked top to
 * bottom; the first one that's true wins and the rest are skipped.
 * -------------------------------------------------------------------- */
char classify_grade(int score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

void demo_conditionals(void) {
    int scores[] = {95, 82, 71, 40};
    int count = 4;

    printf("---- if / else if / else ----\n");
    for (int i = 0; i < count; i++) {
        printf("Score %d -> Grade %c\n", scores[i], classify_grade(scores[i]));
    }
    printf("\n");
}

/* ----------------------------------------------------------------------
 * day_name
 *
 * A switch statement compares one value against several constant
 * cases. Every case ends with break, or execution "falls through"
 * into the next one -- almost always a bug unless done on purpose.
 * -------------------------------------------------------------------- */
void print_day_name(int day) {
    switch (day) {
        case 1:
            printf("Monday\n");
            break;
        case 2:
            printf("Tuesday\n");
            break;
        case 3:
            printf("Wednesday\n");
            break;
        case 4:
            printf("Thursday\n");
            break;
        case 5:
            printf("Friday\n");
            break;
        case 6:
        case 7:
            /* Falls through on purpose: both 6 and 7 print "Weekend". */
            printf("Weekend\n");
            break;
        default:
            printf("Not a valid day number\n");
    }
}

void demo_switch(void) {
    printf("---- switch ----\n");
    for (int day = 1; day <= 7; day++) {
        printf("Day %d: ", day);
        print_day_name(day);
    }
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_ternary
 *
 * The ternary operator ?: is a compact if/else for picking between
 * two values.
 * -------------------------------------------------------------------- */
void demo_ternary(void) {
    int a = 12, b = 7;
    int max = (a > b) ? a : b;
    const char *parity = (a % 2 == 0) ? "even" : "odd";

    printf("---- Ternary operator ----\n");
    printf("max(%d, %d) = %d\n", a, b, max);
    printf("%d is %s\n", a, parity);
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_logical_operators
 *
 * && (AND), || (OR), and ! (NOT), used to combine conditions.
 * -------------------------------------------------------------------- */
void demo_logical_operators(void) {
    int age = 20;
    int has_ticket = 1; /* 1 = true, 0 = false; C has no separate bool */

    printf("---- Logical operators ----\n");
    if (age >= 18 && has_ticket) {
        printf("Allowed in.\n");
    } else {
        printf("Not allowed in.\n");
    }

    if (!has_ticket) {
        printf("You need a ticket.\n");
    } else {
        printf("Ticket confirmed.\n");
    }
    printf("\n");
}

int main(void) {
    demo_arithmetic();
    demo_precedence();
    demo_conditionals();
    demo_switch();
    demo_ternary();
    demo_logical_operators();

    return 0;
}
