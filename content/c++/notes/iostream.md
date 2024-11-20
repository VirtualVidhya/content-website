---
title: "Introduction to iostream: cout, cin & endl" 
draft: false
weight: 8
---

---

In this lesson, we’ll talk more about std::cout, which we used in our _Hello world!_ program to output the text _Hello world!_ to the console. We’ll also explore how to get input from the user, which we will use to make our programs more interactive.

### The input/output library

The **input/output library** (io library) is part of the C++ standard library that deals with basic input and output. We’ll use the functionality in this library to get input from the keyboard and output data to the console. The _io_ part of _iostream_ stands for _input/output_.

To use the functionality defined within the _iostream_ library, we need to include the _iostream_ header at the top of any code file that uses the content defined in _iostream_, like so:

```cpp
#include <iostream>

// rest of code that uses iostream functionality here
```

---

### std::cout

The _iostream_ library contains a few predefined variables for us to use. One of the most useful is **std::cout**, which allows us to send data to the console to be printed as text. _cout_ stands for “character output”.

As a reminder, here’s our _Hello world_ program:

```cpp
#include <iostream> // for std::cout

int main()
{
    std::cout << "Hello world!"; // print Hello world! to console

    return 0;
}
```

In this program, we have included _iostream_ so that we have access to _std::cout_. Inside our _main_ function, we use _std::cout_, along with the **insertion operator (`<<`)**, to send the text _Hello world!_ to the console to be printed.

_std::cout_ can not only print text, it can also print numbers:

```cpp
#include <iostream> // for std::cout

int main()
{
    std::cout << 4; // print 4 to console

    return 0;
}
```

This produces the result:

```cpp
4
```

It can also be used to print the value of variables:

```cpp
#include <iostream> // for std::cout

int main()
{
    int x{ 5 }; // define integer variable x, initialized with value 5
    std::cout << x; // print value of x (5) to console
    return 0;
}
```

This produces the result:

```cpp
5
```

To print more than one thing on the same line, the insertion operator (`<<`) can be used multiple times in a single statement to concatenate (link together) multiple pieces of output. For example:

```cpp
#include <iostream> // for std::cout

int main()
{
    std::cout << "Hello" << " world!";
    return 0;
}
```

This program prints:

```cpp
Hello world!
```

Here’s another example where we print both text and the value of a variable in the same statement:

```cpp
#include <iostream> // for std::cout

int main()
{
    int x{ 5 };
    std::cout << "x is equal to: " << x;
    return 0;
}
```

This program prints:

```cpp
x is equal to: 5
```

---

### Using `std::endl` to output a newline

What would you expect this program to print?

```cpp
#include <iostream> // for std::cout

int main()
{
    std::cout << "Hi!";
    std::cout << "My name is Alex.";
    return 0;
}
```

You might be surprised at the result:

```cpp
Hi!My name is Alex.
```

Separate output statements don’t result in separate lines of output on the console.

If we want to print separate lines of output to the console, we need to tell the console to move the cursor to the next line. We can do that by outputting a newline. A **newline** is an OS-specific character or sequence of characters that moves the cursor to the start of the next line.

One way to output a newline is to output `std::endl` (which stands for “end line”):

```cpp
#include <iostream> // for std::cout and std::endl

int main()
{
    std::cout << "Hi!" << std::endl; // std::endl will cause the cursor to move to the next line
    std::cout << "My name is Alex." << std::endl;

    return 0;
}
```

This prints:

```cpp
Hi!
My name is Alex.
```

- **Tip**

    In the above program, the second `std::endl` isn’t technically necessary, since the program ends immediately afterward. However, it serves a few useful purposes.

    First, it helps indicate that the line of output is a “complete thought” (as opposed to partial output that is completed somewhere later in the code). In this sense, it functions similarly to using a period in standard English.

    Second, it positions the cursor on the next line, so that if we later add additional lines of output (e.g. have the program say “bye!”), those lines will appear where we expect (rather than appended to the prior line of output).

    Third, after running an executable from the command line, some operating systems do not output a new line before showing the command prompt again. If our program does not end with the cursor on a new line, the command prompt may appear appended to the prior line of output, rather than at the start of a new line as the user would expect.

- **Best practice**

    Output a newline whenever a line of output is complete.

---

### `std::cout` is buffered

Consider a rollercoaster ride at your favorite amusement park. Passengers show up (at some variable rate) and get in line. Periodically, a train arrives and boards passengers (up to the maximum capacity of the train). When the train is full, or when enough time has passed, the train departs with a batch of passengers, and the ride commences. Any passengers unable to board the current train wait for the next one.

This analogy is similar to how output sent to `std::cout` is typically processed in C++. Statements in our program request that output be sent to the console. However, that output is typically not sent to the console immediately. Instead, the requested output “gets in line”, and is stored in a region of memory set aside to collect such requests (called a **buffer**). Periodically, the buffer is **flushed**, meaning all of the data collected in the buffer is transferred to its destination (in this case, the console).

- **Author’s note**

    To use another analogy, flushing a buffer is kind of like flushing a toilet. All of your collected “output” is transferred to … wherever it goes next. Eew.

    This also means that if your program crashes, aborts, or is paused (e.g. for debugging purposes) before the buffer is flushed, any output still waiting in the buffer will not be displayed.

- **Key insight**

    The opposite of buffered output is unbuffered output. With unbuffered output, each individual output request is sent directly to the output device.

    Writing data to a buffer is typically fast, whereas transferring a batch of data to an output device is comparatively slow. Buffering can significantly increase performance by batching multiple output requests together to minimize the number of times output has to be sent to the output device.

---

### `std::endl` vs `\n`

Using `std::endl` is often inefficient, as it actually does two jobs: it outputs a newline (moving the cursor to the next line of the console), and it flushes the buffer (which is slow). If we output multiple lines of text ending with `std::endl`, we will get multiple flushes, which is slow and probably unnecessary.

When outputting text to the console, we typically don’t need to explicitly flush the buffer ourselves. C++’s output system is designed to self-flush periodically, and it’s both simpler and more efficient to let it flush itself.

To output a newline without flushing the output buffer, we use `\n` (inside either single or double quotes), which is a special symbol that the compiler interprets as a newline character. `\n` moves the cursor to the next line of the console without causing a flush, so it will typically perform better. `\n` is also more concise to type and can be embedded into existing double-quoted text.

Here’s an example that uses `\n` in a few different ways:

```cpp
#include <iostream> // for std::cout

int main()
{
    int x{ 5 };
    std::cout << "x is equal to: " << x << '\n'; // single quoted (by itself) (conventional)
    std::cout << "Yep." << "\n";                 // double quoted (by itself) (unconventional but okay)
    std::cout << "And that's all, folks!\n";     // between double quotes in existing text (conventional)
    return 0;
}
```

This prints:

```cpp
x is equal to: 5
Yep.
And that's all, folks!
```

When `\n` is not being embedded into an existing line of double-quoted text (e.g. `"hello\n")`, it is conventionally single quoted (`'\n'`).

- **For advanced readers**

    In C++, we use single quotes to represent single characters (such as `'a'` or `'$'`), and double-quotes to represent text (zero or more characters).

    Even though ‘\\n’ is represented in source code as two symbols, it is treated by the compiler as a single linefeed (LF) character (with ASCII value 10), and thus is conventionally single quoted (unless embedded into existing double-quoted text). We discuss this more in lesson 4.11 -- Chars.

    When ‘\\n’ is output, the library doing the outputting is responsible for translating this single LF character into the appropriate newline sequence for the given OS. See Wikipedia for more information on OS conventions for newlines.

- **Author’s note**

    Although unconventional, we believe it’s fine to use (or even prefer) double quoted `"\n"` in standard output statements.

    This has two primary benefits:

    - It’s simpler to double-quote all outputted text rather than having to determine what should be single-quoted and double-quoted.
    - More importantly, it helps avoid inadvertent multicharacter literals. We cover multicharacter literals and some of the unexpected output they can cause in lesson 4.11 -- Chars.

    Single quotes should be preferred in non-output cases.

We’ll cover what ‘\\n’ is in more detail when we get to the lesson on chars (4.11 -- Chars).

- **Best practice**

    Prefer `\n` over `std::endl` when outputting text to the console.

- **Warning**

    `'\n'` uses a backslash (as do all special characters in C++), not a forward slash.

    Using a forward slash (e.g. `'/n'`) or including other characters inside the single quotes (e.g. `' \n'` or `'.\n'`) will result in unexpected behavior. For example, `std::cout << '/n';` will often print as `12142`, which probably isn’t what you were expecting.

---

### std::cin

`std::cin` is another predefined variable in the `iostream` library. Whereas `std::cout` prints data to the console (using the insertion operator `<<` to provide the data), `std::cin` (which stands for “character input”) reads input from keyboard. We typically use the extraction operator `>>` to put the input data in a variable (which can then be used in subsequent statements).

```cpp
#include <iostream>  // for std::cout and std::cin

int main()
{
    std::cout << "Enter a number: "; // ask user for a number

    int x{};       // define variable x to hold user input (and value-initialize it)
    std::cin >> x; // get number from keyboard and store it in variable x

    std::cout << "You entered " << x << '\n';
    return 0;
}
```

Try compiling this program and running it for yourself. When you run the program, line 5 will print “Enter a number: “. When the code gets to line 8, your program will wait for you to enter input. Once you enter a number (and press enter), the number you enter will be assigned to variable `x`. Finally, on line 10, the program will print “You entered ” followed by the number you just entered.

For example (entering the value 4 as input):

```cpp
Enter a number: 4
You entered 4
```

This is an easy way to get keyboard input from the user, and we will use it in many of our examples going forward.

- **Tip**

    Note that you don’t need to output `'\n'` when accepting a line of input, as the user will need to press the _enter_ key to have their input accepted, and this will move the cursor to the next line of the console.

    - If your screen closes immediately after entering a number, please see lesson 0.8 -- A few common C++ problems for a solution.
    - If you are using CLion and “You entered” has a space before it, this is a bug in CLion. See the CLion bug tracker for workarounds.

Just like it is possible to output more than one bit of text in a single line, it is also possible to input more than one value on a single line:

```cpp
#include <iostream>  // for std::cout and std::cin

int main()
{
    std::cout << "Enter two numbers separated by a space: ";

    int x{}; // define variable x to hold user input (and value-initialize it)
    int y{}; // define variable y to hold user input (and value-initialize it)
    std::cin >> x >> y; // get two numbers and store in variable x and y respectively

    std::cout << "You entered " << x << " and " << y << '\n';

    return 0;
}
```

This produces the output:

```cpp
Enter two numbers separated by a space: 5 6
You entered 5 and 6
```

Values entered should be separated by whitespace (spaces, tabs, or newlines).

- **Key insight**

    There’s some debate over whether it’s necessary to initialize a variable immediately before you give it a user provided value via another source (e.g. std::cin), since the user-provided value will just overwrite the initialization value. In line with our previous recommendation that variables should always be initialized, best practice is to initialize the variable first.

- **For advanced readers**

    The C++ I/O library does not provide a way to accept keyboard input without the user having to press _enter_. If this is something you desire, you’ll have to use a third party library. For console applications, we’d recommend pdcurses, FXTUI, cpp-terminal, or notcurses. Many graphical user interface libraries have their own functions to do this kind of thing.

---

### `std::cin` is buffered

In a prior section, we noted that outputting data is actually a two stage process:

- The data from each output request is added (to the end) of an output buffer.
- Later, data from (the front of) the output buffer is flushed to the output device (the console).

- **Key insight**

    Adding data to the end of a buffer and removing it from the front of a buffer ensures data is processed in the same order in which it was added. This is sometimes called FIFO (first in, first out).

Similarly, inputting data is also a two stage process:

- The individual characters you enter as input are added to the end of an input buffer (inside `std::cin`). The enter key (pressed to submit the data) is also stored as a `'\n'` character.
- The extraction operator ‘>>’ removes characters from the front of the input buffer and converts them into a value that is assigned (via copy-assignment) to the associated variable. This variable can then be used in subsequent statements.

- **Key insight**

    Each line of input data in the input buffer is terminated by a `'\n'` character.

We’ll demonstrate this using the following program:

```cpp
#include <iostream>  // for std::cout and std::cin

int main()
{
    std::cout << "Enter two numbers: ";

    int x{};
    std::cin >> x;

    int y{};
    std::cin >> y;

    std::cout << "You entered " << x << " and " << y << '\n';

    return 0;
}
```

This program inputs to two variables (this time as separate statements). We’ll run this program twice.

Run #1: When `std::cin >> x;` is encountered, the program will wait for input. Enter the value `4`. The input `4\n` goes into the input buffer, and the value `4` is extracted to variable `x`.

When `std::cin >> y;` is encountered, the program will again wait for input. Enter the value `5`. The input `5\n` goes into the input buffer, and the value `5` is extracted to variable `y`. Finally, the program will print `You entered 4 and 5`.

There should be nothing surprising about this run.

Run #2: When `std::cin >> x` is encountered, the program will wait for input. Enter `4 5`. The input `4 5\n` goes into the input buffer, but only the `4` is extracted to variable `x` (extraction stops at the space).

When `std::cin >> y` is encountered, the program will _not_ wait for input. Instead, the `5` that is still in the input buffer is extracted to variable `y`. The program then prints `You entered 4 and 5`.

Note that in run 2, the program didn’t wait for the user to enter additional input when extracting to variable `y` because there was already prior input in the input buffer that could be used.

- **Key insight**

    `std::cin` is buffered because it allows us to separate the entering of input from the extract of input. We can enter input once and then perform multiple extraction requests on it.

---

### The basic extraction process[](#extraction)

Here’s a simplified view of how operator `>>` works for input:

- First, leading whitespace (spaces, tabs, and newlines at the front of the buffer) is discarded from the input buffer. This will discard any unextracted newline character remaining from a prior line of input.
- If the input buffer is now empty, operator `>>` will wait for the user to enter more data. Leading whitespace is again discarded.
- operator `>>` then extracts as many consecutive characters as it can, until it encounters either a newline character (representing the end of the line of input) or a character that is not valid for the variable being extracted to.

The result of the extraction is as follows:

- If any characters were extracted in step 3 above, extraction is a success. The extracted characters are converted into a value that is then copy-assigned to the variable.
- If no characters could be extracted in step 3 above, extraction has failed. The object being extracted to is copy-assigned the value `0` (as of C++11), and any future extractions will immediately fail (until `std::cin` is cleared).

Any non-extracted characters (including newlines) remain available for the next extraction attempt.

For example, given the following snippet:

```cpp
int x{};
std::cin >> x;
```

If the user types `5a` and enter, `5a\n` will be added to the buffer. `5` will be extracted, converted to an integer, and assigned to variable `x`. `a\n` will be left in the input buffer for the next extraction.

If the user types ‘b’ and enter, `b\n` would be added to the buffer. Because `b` is not a valid integer, no characters can be extracted, so this is an extraction failure. Variable `x` would be set to `0`, and future extractions will fail until the input stream is cleared.

We’ll explore more cases in the quiz below.

---

### `operator<<` vs `operator>>`

New programmers often mix up `std::cin`, `std::cout`, the insertion operator (`<<`) and the extraction operator (`>>`). Here’s an easy way to remember:

*   `std::cin` and `std::cout` always go on the left-hand side of the operator.
*   `std::cout` is used to output a value (cout = character output).
*   `std::cin` is used to get an input value (cin = character input).
*   `<<` is used with `std::cout`, and shows the direction that data is moving. `std::cout << 4` moves the value `4` to the console.
*   `>>` is used with `std::cin`, and shows the direction that data is moving. `std::cin >> x` moves the value the user entered from the keyboard into variable `x`.