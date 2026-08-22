/* ============================================================================
 * 06_strings.c
 *
 * Topics: C strings as null-terminated char arrays, hand-written
 * versions of common string operations (to show how they work under
 * the hood), plus the real <string.h> equivalents.
 *
 * Build:  gcc 06_strings.c -o strings_demo -Wall -Wextra
 * Run:    ./strings_demo
 * ============================================================================
 */

#include <stdio.h>
#include <string.h>
#include <ctype.h>

/* ----------------------------------------------------------------------
 * my_strlen
 *
 * A hand-written version of strlen(): counts characters until it
 * hits the null terminator '\0'. This is exactly what the real
 * library function does internally.
 * -------------------------------------------------------------------- */
int my_strlen(const char *s) {
    int length = 0;
    while (s[length] != '\0') {
        length++;
    }
    return length;
}

/* ----------------------------------------------------------------------
 * my_strcpy
 *
 * Copies src into dest, including the terminating '\0'. The caller
 * is responsible for making sure dest has enough room.
 * -------------------------------------------------------------------- */
void my_strcpy(char *dest, const char *src) {
    int i = 0;
    while (src[i] != '\0') {
        dest[i] = src[i];
        i++;
    }
    dest[i] = '\0'; /* don't forget the terminator */
}

/* ----------------------------------------------------------------------
 * is_palindrome
 *
 * Compares characters from both ends moving inward. Case-insensitive
 * and ignores non-letter characters, so "A man, a plan, a canal:
 * Panama" is recognized as a palindrome.
 * -------------------------------------------------------------------- */
int is_palindrome(const char *s) {
    int left = 0;
    int right = my_strlen(s) - 1;

    while (left < right) {
        /* Skip anything that isn't a letter or digit. */
        if (!isalnum((unsigned char)s[left])) {
            left++;
            continue;
        }
        if (!isalnum((unsigned char)s[right])) {
            right--;
            continue;
        }
        if (tolower((unsigned char)s[left]) != tolower((unsigned char)s[right])) {
            return 0; /* mismatch found */
        }
        left++;
        right--;
    }
    return 1;
}

/* ----------------------------------------------------------------------
 * count_vowels
 *
 * A simple character-by-character scan, checking each one against a
 * small set of vowels (case-insensitive).
 * -------------------------------------------------------------------- */
int count_vowels(const char *s) {
    int count = 0;
    for (int i = 0; s[i] != '\0'; i++) {
        char c = (char)tolower((unsigned char)s[i]);
        if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') {
            count++;
        }
    }
    return count;
}

/* ----------------------------------------------------------------------
 * reverse_in_place
 *
 * Reverses a string's characters directly in its own buffer, the
 * same two-pointer technique used for reversing an array.
 * -------------------------------------------------------------------- */
void reverse_in_place(char *s) {
    int left = 0;
    int right = my_strlen(s) - 1;

    while (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}

/* ----------------------------------------------------------------------
 * to_uppercase
 *
 * Modifies a string in place, converting every letter to uppercase.
 * -------------------------------------------------------------------- */
void to_uppercase(char *s) {
    for (int i = 0; s[i] != '\0'; i++) {
        s[i] = (char)toupper((unsigned char)s[i]);
    }
}

void demo_hand_written_functions(void) {
    char text[] = "Hello, C!";

    printf("---- Hand-written string functions ----\n");
    printf("Original: \"%s\"\n", text);
    printf("my_strlen: %d\n", my_strlen(text));

    char copy[50];
    my_strcpy(copy, text);
    printf("my_strcpy result: \"%s\"\n", copy);
    printf("\n");
}

void demo_library_functions(void) {
    char greeting[50] = "Hello";

    printf("---- <string.h> library functions ----\n");
    printf("strlen(\"%s\") = %zu\n", greeting, strlen(greeting));

    strcat(greeting, ", world!"); /* buffer has room -- declared with 50 bytes */
    printf("after strcat: \"%s\"\n", greeting);

    printf("strcmp(\"cat\", \"dog\") = %d  (negative: \"cat\" < \"dog\")\n",
           strcmp("cat", "dog"));
    printf("strcmp(\"cat\", \"cat\") = %d  (0 means equal)\n",
           strcmp("cat", "cat"));
    printf("\n");
}

void demo_palindromes(void) {
    const char *candidates[] = {
        "racecar",
        "hello",
        "A man, a plan, a canal: Panama",
        "C programming"
    };

    printf("---- Palindrome check ----\n");
    for (int i = 0; i < 4; i++) {
        printf("\"%s\" -> %s\n", candidates[i],
               is_palindrome(candidates[i]) ? "palindrome" : "not a palindrome");
    }
    printf("\n");
}

void demo_vowels_and_case(void) {
    char sentence[] = "The Quick Brown Fox";

    printf("---- Vowel count and case conversion ----\n");
    printf("\"%s\" has %d vowels\n", sentence, count_vowels(sentence));

    char reversed[50];
    my_strcpy(reversed, sentence);
    reverse_in_place(reversed);
    printf("Reversed: \"%s\"\n", reversed);

    to_uppercase(sentence);
    printf("Uppercase: \"%s\"\n", sentence);
    printf("\n");
}

int main(void) {
    demo_hand_written_functions();
    demo_library_functions();
    demo_palindromes();
    demo_vowels_and_case();

    return 0;
}
