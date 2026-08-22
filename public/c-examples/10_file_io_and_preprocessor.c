/* ============================================================================
 * 10_file_io_and_preprocessor.c
 *
 * Topics: writing to and reading from files with FILE*, fprintf/fgets,
 * a simple word-count example, and #define / macros / conditional
 * compilation.
 *
 * Build:  gcc 10_file_io_and_preprocessor.c -o file_io -Wall -Wextra
 * Run:    ./file_io
 * ============================================================================
 */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

/* ---- Preprocessor constants and macros -------------------------------
 * These are substituted as plain text before compilation even begins.
 * The compiler never sees the names MAX_LINE or SQUARE -- only their
 * expansions.
 * ---------------------------------------------------------------------- */
#define OUTPUT_FILENAME "demo_output.txt"
#define MAX_LINE 256
#define SQUARE(x) ((x) * (x)) /* parentheses everywhere avoid precedence bugs */

/* Uncomment the line below to enable the extra debug print in main(). */
/* #define DEBUG */

/* ----------------------------------------------------------------------
 * write_demo_file
 *
 * Opens a file for writing ("w" creates it, or erases it if it
 * already exists), writes a few lines with fprintf, then closes it.
 * -------------------------------------------------------------------- */
void write_demo_file(const char *filename) {
    FILE *file = fopen(filename, "w");

    if (file == NULL) {
        printf("Could not open '%s' for writing.\n", filename);
        return;
    }

    fprintf(file, "Name: Nour\n");
    fprintf(file, "Language: C\n");
    fprintf(file, "The quick brown fox jumps over the lazy dog\n");
    fprintf(file, "Square of 7 is %d\n", SQUARE(7));

    fclose(file); /* always close what you open */

    printf("---- Wrote demo file ----\n");
    printf("Created '%s'\n\n", filename);
}

/* ----------------------------------------------------------------------
 * read_and_print_file
 *
 * Reads a file back line by line with fgets, which naturally stops
 * once it returns NULL at end-of-file -- no separate EOF check needed.
 * -------------------------------------------------------------------- */
void read_and_print_file(const char *filename) {
    FILE *file = fopen(filename, "r");

    if (file == NULL) {
        printf("Could not open '%s' for reading.\n", filename);
        return;
    }

    char line[MAX_LINE];
    int line_number = 1;

    printf("---- Reading it back ----\n");
    while (fgets(line, sizeof(line), file) != NULL) {
        printf("%d: %s", line_number, line); /* line already has its own \n */
        line_number++;
    }
    printf("\n");

    fclose(file);
}

/* ----------------------------------------------------------------------
 * count_words_in_file
 *
 * Reads the file one line at a time and counts words by looking for
 * transitions from whitespace to non-whitespace.
 * -------------------------------------------------------------------- */
int count_words_in_file(const char *filename) {
    FILE *file = fopen(filename, "r");
    if (file == NULL) {
        return -1;
    }

    int word_count = 0;
    int in_word = 0; /* 1 while we're inside a word, 0 while between words */
    int ch;

    while ((ch = fgetc(file)) != EOF) {
        if (isspace(ch)) {
            in_word = 0;
        } else if (!in_word) {
            in_word = 1;
            word_count++; /* the first non-space character starts a new word */
        }
    }

    fclose(file);
    return word_count;
}

void demo_word_count(const char *filename) {
    int words = count_words_in_file(filename);

    printf("---- Word count ----\n");
    if (words >= 0) {
        printf("'%s' contains %d word(s)\n", filename, words);
    } else {
        printf("Could not open '%s'\n", filename);
    }
    printf("\n");
}

/* ----------------------------------------------------------------------
 * demo_macros
 *
 * Function-like macros are pasted text, not real function calls --
 * SQUARE(2 + 3) with proper parentheses correctly expands to
 * ((2 + 3) * (2 + 3)), not the "x * x" trap shown in the course notes.
 * -------------------------------------------------------------------- */
void demo_macros(void) {
    printf("---- Macros ----\n");
    printf("SQUARE(5) = %d\n", SQUARE(5));
    printf("SQUARE(2 + 3) = %d  (correct, thanks to the parentheses)\n", SQUARE(2 + 3));

#ifdef DEBUG
    printf("[debug] MAX_LINE is set to %d\n", MAX_LINE);
#endif
    printf("\n");
}

int main(void) {
    write_demo_file(OUTPUT_FILENAME);
    read_and_print_file(OUTPUT_FILENAME);
    demo_word_count(OUTPUT_FILENAME);
    demo_macros();

    return 0;
}
