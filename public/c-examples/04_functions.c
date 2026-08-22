/* ============================================================================
 * 04_functions.c
 *
 * Topics: function declarations vs. definitions, prototypes, pass-by-
 * value, recursion, and a recursive vs. iterative comparison.
 *
 * Build:  gcc 04_functions.c -o functions -Wall -Wextra
 * Run:    ./functions
 * ============================================================================
 */

#include <stdio.h>

/* Prototypes: promise these functions exist, so we can call them from
 * main() before their full definitions appear later in the file.    */
int factorial_recursive(int n);
int factorial_iterative(int n);
int gcd(int a, int b);
long fibonacci_recursive(int n);
void reset_to_zero(int n); /* used to demonstrate pass-by-value */

/* ----------------------------------------------------------------------
 * factorial_recursive
 *
 * Every recursive function needs a base case that stops the
 * recursion -- here, factorial(0) and factorial(1) both return 1.
 * -------------------------------------------------------------------- */
int factorial_recursive(int n) {
    if (n <= 1) {
        return 1; /* base case */
    }
    return n * factorial_recursive(n - 1); /* recursive case */
}

/* ----------------------------------------------------------------------
 * factorial_iterative
 *
 * The same computation without recursion, for comparison. No risk
 * of a stack overflow on large inputs, unlike the recursive version.
 * -------------------------------------------------------------------- */
int factorial_iterative(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

/* ----------------------------------------------------------------------
 * gcd
 *
 * The Euclidean algorithm for the greatest common divisor, written
 * recursively: gcd(a, b) == gcd(b, a % b), until b reaches 0.
 * -------------------------------------------------------------------- */
int gcd(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

/* ----------------------------------------------------------------------
 * fibonacci_recursive
 *
 * A classic (if inefficient) recursive definition: each number is
 * the sum of the two before it. Two base cases are needed here.
 * -------------------------------------------------------------------- */
long fibonacci_recursive(int n) {
    if (n == 0) return 0;
    if (n == 1) return 1;
    return fibonacci_recursive(n - 1) + fibonacci_recursive(n - 2);
}

/* ----------------------------------------------------------------------
 * reset_to_zero
 *
 * Demonstrates pass-by-value: C copies the argument into the
 * parameter, so changes made inside this function never reach the
 * caller's original variable.
 * -------------------------------------------------------------------- */
void reset_to_zero(int n) {
    n = 0; /* only changes this function's local copy */
    (void)n; /* silence "set but not used" -- the point is what happens *outside* */
}

void demo_pass_by_value(void) {
    int x = 42;

    printf("---- Pass by value ----\n");
    printf("Before reset_to_zero: x = %d\n", x);
    reset_to_zero(x);
    printf("After reset_to_zero:  x = %d  (unchanged!)\n", x);
    printf("\n");
}

void demo_factorial(void) {
    printf("---- Factorial: recursive vs. iterative ----\n");
    for (int n = 0; n <= 6; n++) {
        printf("%d! = %-4d (recursive)   %-4d (iterative)\n",
               n, factorial_recursive(n), factorial_iterative(n));
    }
    printf("\n");
}

void demo_gcd(void) {
    printf("---- Greatest common divisor ----\n");
    printf("gcd(48, 18) = %d\n", gcd(48, 18));
    printf("gcd(100, 75) = %d\n", gcd(100, 75));
    printf("gcd(17, 5) = %d\n", gcd(17, 5));
    printf("\n");
}

void demo_fibonacci(void) {
    printf("---- Recursive Fibonacci ----\n");
    for (int n = 0; n < 10; n++) {
        printf("%ld ", fibonacci_recursive(n));
    }
    printf("\n\n");
}

int main(void) {
    demo_pass_by_value();
    demo_factorial();
    demo_gcd();
    demo_fibonacci();

    return 0;
}
