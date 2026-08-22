/* ============================================================================
 * 03_loops.c
 *
 * Topics: while, do-while, for, nested loops, break/continue.
 * Worked examples: multiplication table, prime check, Fibonacci,
 * digit sum, simple input-validation loop.
 *
 * Build:  gcc 03_loops.c -o loops -Wall -Wextra
 * Run:    ./loops
 * ============================================================================
 */

#include <stdio.h>

/* ----------------------------------------------------------------------
 * print_multiplication_table
 *
 * A classic nested-loop example: the outer loop picks a row, the
 * inner loop fills in that row's columns.
 * -------------------------------------------------------------------- */
void print_multiplication_table(int size) {
    printf("---- Multiplication table (%dx%d) ----\n", size, size);
    for (int row = 1; row <= size; row++) {
        for (int col = 1; col <= size; col++) {
            printf("%4d", row * col);
        }
        printf("\n");
    }
    printf("\n");
}

/* ----------------------------------------------------------------------
 * is_prime
 *
 * Uses a for loop with an early break: as soon as we find any
 * divisor, we know the number isn't prime and can stop checking.
 * -------------------------------------------------------------------- */
int is_prime(int n) {
    if (n < 2) {
        return 0; /* 0 and 1, and negatives, are not prime */
    }

    for (int divisor = 2; divisor * divisor <= n; divisor++) {
        if (n % divisor == 0) {
            return 0; /* found a divisor -- not prime */
        }
    }
    return 1;
}

void demo_primes(int up_to) {
    printf("---- Primes up to %d ----\n", up_to);
    for (int n = 2; n <= up_to; n++) {
        if (is_prime(n)) {
            printf("%d ", n);
        }
    }
    printf("\n\n");
}

/* ----------------------------------------------------------------------
 * print_fibonacci
 *
 * Generates a Fibonacci sequence iteratively with a while loop --
 * each number is the sum of the two before it.
 * -------------------------------------------------------------------- */
void print_fibonacci(int count) {
    int a = 0, b = 1;
    int printed = 0;

    printf("---- First %d Fibonacci numbers ----\n", count);
    while (printed < count) {
        printf("%d ", a);
        int next = a + b;
        a = b;
        b = next;
        printed++;
    }
    printf("\n\n");
}

/* ----------------------------------------------------------------------
 * sum_of_digits
 *
 * Uses a do-while loop: even if n starts at 0, we want the loop
 * body to run at least once so "0" reports a digit sum of 0.
 * -------------------------------------------------------------------- */
int sum_of_digits(int n) {
    if (n < 0) {
        n = -n; /* work with the absolute value */
    }

    int sum = 0;
    do {
        sum += n % 10; /* peel off the last digit    */
        n /= 10;       /* drop the last digit         */
    } while (n > 0);

    return sum;
}

void demo_digit_sum(void) {
    int numbers[] = {0, 9, 123, 98765};
    int count = 4;

    printf("---- Sum of digits ----\n");
    for (int i = 0; i < count; i++) {
        printf("digit sum of %d = %d\n", numbers[i], sum_of_digits(numbers[i]));
    }
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_break_and_continue
 *
 * break exits a loop entirely; continue skips to the next iteration
 * without running the rest of the loop body.
 * -------------------------------------------------------------------- */
void demo_break_and_continue(void) {
    printf("---- break and continue ----\n");
    printf("Numbers 0-9, skipping multiples of 3, stopping at 8: ");
    for (int i = 0; i < 10; i++) {
        if (i % 3 == 0) {
            continue; /* skip multiples of 3 */
        }
        if (i == 8) {
            break; /* stop the loop entirely once we hit 8 */
        }
        printf("%d ", i);
    }
    printf("\n\n");
}

int main(void) {
    print_multiplication_table(5);
    demo_primes(50);
    print_fibonacci(10);
    demo_digit_sum();
    demo_break_and_continue();

    return 0;
}
