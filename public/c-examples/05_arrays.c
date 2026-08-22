/* ============================================================================
 * 05_arrays.c
 *
 * Topics: 1D and 2D arrays, and classic array algorithms: sum/average,
 * finding the max, reversing in place, linear search, binary search,
 * and bubble sort.
 *
 * Build:  gcc 05_arrays.c -o arrays -Wall -Wextra
 * Run:    ./arrays
 * ============================================================================
 */

#include <stdio.h>

#define ARRAY_LEN(arr) (sizeof(arr) / sizeof((arr)[0]))

/* ----------------------------------------------------------------------
 * array_sum / array_average
 *
 * Every array-processing function needs the length passed in
 * explicitly, since an array parameter decays to a plain pointer
 * and loses its original size.
 * -------------------------------------------------------------------- */
int array_sum(const int *arr, int length) {
    int total = 0;
    for (int i = 0; i < length; i++) {
        total += arr[i];
    }
    return total;
}

double array_average(const int *arr, int length) {
    if (length == 0) {
        return 0.0;
    }
    return (double)array_sum(arr, length) / length;
}

/* ----------------------------------------------------------------------
 * array_max
 *
 * Tracks the largest value seen so far while scanning once through
 * the array.
 * -------------------------------------------------------------------- */
int array_max(const int *arr, int length) {
    int max = arr[0];
    for (int i = 1; i < length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/* ----------------------------------------------------------------------
 * array_reverse_in_place
 *
 * Swaps elements from both ends toward the middle, without needing
 * a second array.
 * -------------------------------------------------------------------- */
void array_reverse_in_place(int *arr, int length) {
    int left = 0;
    int right = length - 1;

    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}

/* ----------------------------------------------------------------------
 * linear_search
 *
 * Checks every element in order. Works on any array, sorted or not,
 * but takes O(n) time in the worst case.
 * Returns the index of the first match, or -1 if not found.
 * -------------------------------------------------------------------- */
int linear_search(const int *arr, int length, int target) {
    for (int i = 0; i < length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

/* ----------------------------------------------------------------------
 * binary_search
 *
 * Requires a SORTED array. Repeatedly halves the search range by
 * comparing against the middle element -- O(log n) instead of O(n).
 * -------------------------------------------------------------------- */
int binary_search(const int *arr, int length, int target) {
    int low = 0;
    int high = length - 1;

    while (low <= high) {
        int mid = low + (high - low) / 2; /* avoids overflow vs (low+high)/2 */

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return -1; /* not found */
}

/* ----------------------------------------------------------------------
 * bubble_sort
 *
 * Repeatedly swaps adjacent out-of-order elements until the whole
 * array is sorted. Simple to understand, not the fastest sort --
 * O(n^2) -- but a good first sorting algorithm to learn.
 * -------------------------------------------------------------------- */
void bubble_sort(int *arr, int length) {
    for (int pass = 0; pass < length - 1; pass++) {
        int swapped = 0;
        for (int i = 0; i < length - 1 - pass; i++) {
            if (arr[i] > arr[i + 1]) {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = 1;
            }
        }
        if (!swapped) {
            break; /* already sorted -- no need to keep passing through */
        }
    }
}

void print_array(const int *arr, int length) {
    printf("[");
    for (int i = 0; i < length; i++) {
        printf("%d%s", arr[i], (i < length - 1) ? ", " : "");
    }
    printf("]\n");
}

/* ----------------------------------------------------------------------
 * demo_2d_array
 *
 * A 2D array models a grid: rows are laid out one after another in
 * memory. Here we build a simple addition table.
 * -------------------------------------------------------------------- */
void demo_2d_array(void) {
    int grid[3][3];

    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 3; col++) {
            grid[row][col] = row + col;
        }
    }

    printf("---- 2D array (addition table) ----\n");
    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 3; col++) {
            printf("%3d", grid[row][col]);
        }
        printf("\n");
    }
    printf("\n");
}

int main(void) {
    int numbers[] = {8, 3, 25, 1, 19, 7, 14};
    int length = (int)ARRAY_LEN(numbers);

    printf("---- Original array ----\n");
    print_array(numbers, length);
    printf("Sum: %d\n", array_sum(numbers, length));
    printf("Average: %.2f\n", array_average(numbers, length));
    printf("Max: %d\n", array_max(numbers, length));
    printf("\n");

    printf("---- Linear search ----\n");
    printf("Index of 19: %d\n", linear_search(numbers, length, 19));
    printf("Index of 99: %d  (-1 means not found)\n\n",
           linear_search(numbers, length, 99));

    printf("---- Sorting ----\n");
    bubble_sort(numbers, length);
    printf("Sorted: ");
    print_array(numbers, length);
    printf("\n");

    printf("---- Binary search (array must be sorted first) ----\n");
    printf("Index of 19: %d\n", binary_search(numbers, length, 19));
    printf("Index of 2:  %d  (-1 means not found)\n\n",
           binary_search(numbers, length, 2));

    printf("---- Reversing in place ----\n");
    array_reverse_in_place(numbers, length);
    printf("Reversed: ");
    print_array(numbers, length);
    printf("\n");

    demo_2d_array();

    return 0;
}
