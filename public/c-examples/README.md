# C Example Programs

Ten standalone, compilable `.c` files that go along with the course. Each
one is self-contained (its own `main`), heavily commented in English, and
compiles cleanly with `-Wall -Wextra` — no warnings, no errors.

These aren't excerpts from the course pages — they're longer, example-driven
programs meant to be read top to bottom, compiled, and run, so you can watch
the concepts actually execute instead of only reading about them.

## Files

| File | Covers | Notable functions |
|---|---|---|
| `01_basics_and_io.c` | Variables, types, `sizeof`, `printf`/`scanf`, escape sequences | `print_type_sizes`, `demo_scanf` |
| `02_operators_and_control_flow.c` | Arithmetic/logical operators, precedence, `if`/`switch`/ternary | `classify_grade`, `print_day_name` |
| `03_loops.c` | `while`, `do-while`, `for`, `break`/`continue` | `is_prime`, `print_fibonacci`, `sum_of_digits` |
| `04_functions.c` | Prototypes, pass-by-value, recursion | `factorial_recursive`, `gcd`, `fibonacci_recursive` |
| `05_arrays.c` | 1D/2D arrays, search, sort | `binary_search`, `bubble_sort`, `array_reverse_in_place` |
| `06_strings.c` | Strings as char arrays, `<string.h>` | `my_strlen`, `is_palindrome`, `reverse_in_place` |
| `07_pointers.c` | Address-of/dereference, pointer arithmetic, function pointers | `swap`, `find_min_max`, `apply_operation` |
| `08_dynamic_memory.c` | `malloc`/`calloc`/`realloc`/`free` | a small growable `IntVector` (`vector_push`, `vector_free`) |
| `09_structs_and_linked_list.c` | Structs, unions, `->` | a full singly linked list (`list_push_front`, `list_sum`, `list_free`) |
| `10_file_io_and_preprocessor.c` | `FILE*`, `fprintf`/`fgets`, macros, `#ifdef` | `write_demo_file`, `count_words_in_file` |

## Building and running

Each file is independent — compile and run one at a time:

```bash
gcc 01_basics_and_io.c -o basics -Wall -Wextra
./basics
```

Or compile all ten at once:

```bash
for f in *.c; do gcc "$f" -o "${f%.c}" -Wall -Wextra; done
```

`01_basics_and_io.c` reads one number from stdin (via `scanf`) — everything
else runs with no input needed.

## Where these live in the app

These files are served as static assets from `/c-examples/<filename>.c`
once the app is running (anything under `public/` in a Next.js project is
served as-is at the site root). They're linked from the **Examples** page
in the sidebar, where each one has a short description and a direct link
to view or download it.
