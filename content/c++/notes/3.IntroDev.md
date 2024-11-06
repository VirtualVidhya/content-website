---
title: "Introduction to C++ Development" 
draft: false
weight: 3
---

---

Before we can write and execute our first C++ program, we need to understand in more detail how C++ programs get developed. Here is a graphic outlining a simplistic approach,

![Program Execution Flow](../../../../images/notes/C++/IntroDev/3.png)

### Define the problem that you would like to solve

This is the “what” step, where you figure out what problem you are intending to solve. Coming up with the initial idea for what you would like to program can be the easiest step, or the hardest. But conceptually, it is the simplest. All you need is an idea that can be well defined, and you’re ready for the next step.

Here are a few examples:

- “I want to write a program that will allow me to enter many numbers, then calculates the average.”
- “I want to write a program that generates a 2d maze and lets the user navigate through it. The user wins if they reach the end.”
- “I want to write a program that reads in a file of stock prices and predicts whether the stock will go up or down.”

### Determine how you are going to solve the problem

This is the “how” step, where you determine how you are going to solve the problem you came up with in step 1. It is also the step that is most neglected in software development. The crux of the issue is that there are many ways to solve a problem -- however, some of these solutions are good and some of them are bad. Too often, a programmer will get an idea, sit down, and immediately start coding a solution. This often generates a solution that falls into the bad category.

Typically, good solutions have the following characteristics:

They are straightforward (not overly complicated or confusing).
They are well documented (especially around any assumptions being made or limitations).
They are built modularly, so parts can be reused or changed later without impacting other parts of the program.
They can recover gracefully or give useful error messages when something unexpected happens.
When you sit down and start coding right away, you’re typically thinking “I want to do <something>”, so you implement the solution that gets you there the fastest. This can lead to programs that are fragile, hard to change or extend later, or have lots of bugs. A bug is any kind of programming error that prevents the program from operating correctly.

Various studies have shown that on complex software systems, only 10-40% of a programmer’s time is actually spent writing the initial program. The other 60-90% is spent on maintenance, which can consist of debugging (removing bugs), updates to cope with changes in the environment (e.g. to run on a new OS version), enhancements (minor changes to improve usability or capability), or internal improvements (to increase reliability or maintainability)1.

Consequently, it’s worth your time to spend a little extra time up front (before you start coding) thinking about the best way to tackle a problem, what assumptions you are making, and how you might plan for the future, in order to save yourself a lot of time and trouble down the road.

We’ll talk more about how to effectively design solutions to problems in a future lesson.


### Writing the program

In order to write the program, we need two things: First, we need knowledge of a programming language -- that’s what these tutorials are for! Second, we need a text editor to write and save our written programs. The programs we write using C++ instructions are called source code (often shortened to just code). It’s possible to write a program using any text editor you want, even something as simple as Windows’ notepad or Unix’s vi or pico.

A program typed into a basic text editor would look something like this:

![Text Editor](../../../../images/notes/C++/IntroDev/1.png)

However, we strongly urge you to use an editor that is designed for programming (called a code editor). Don’t worry if you don’t have one yet. We’ll cover how to install a code editor shortly.

A typical editor designed for coding has a few features that make programming much easier, including:

- Line numbering. Line numbering is useful when the compiler gives us an error, as a typical compiler error will state: some error code/message, line 64. Without an editor that shows line numbers, finding line 64 can be a real hassle.
- Syntax highlighting and coloring. Syntax highlighting and coloring changes the color of various parts of your program to make it easier to identify the different components of your program.
- An unambiguous, fixed-width font (often called a “monospace font”). Non-programming fonts often make it hard to distinguish between the number 0 and the letter O, or between the number 1, the letter l (lower case L), and the letter I (upper case i). A good programming font will ensure these symbols are visually differentiated in order to ensure one isn’t accidentally used in place of the other. All code editors should have this enabled by default, but a standard text editor might not. Using a fixed-width font (where all symbols have the same width) makes it easier to properly format and align your code.

Here’s an example of a C++ program with line numbering, syntax highlighting, and a fixed-width font:

![Code Editor](../../../../images/notes/C++/IntroDev/2.png)

Note how much easier this is to understand than the non-highlighted version. The source code we show in this tutorial will have both line numbering and syntax highlighting to make that code easier to follow.

Many simple C++ programs only have one source code file, but complex C++ programs can have hundreds or even thousands of source code files.

Each source code file in your program will need to be saved to disk, which means each source code file needs a filename. C++ does not have any requirements for naming files. However, the de-facto standard is to name the first/primary source file created for a program main.cpp. The filename (main) makes it easy to determine which is the primary source code file, and the .cpp extension indicates that the file is a C++ source code file.

You may occasionally see the first/primary source code file named after the name of the program instead (e.g. calculator.cpp, poker.cpp). You may also occasionally see other extensions used (e.g. .cc or .cxx).

Once you’ve written your program, the next steps are to convert the source code into something that can be run, and then see whether it works!

### Compiling your source code

In order to compile C++ source code files, we use a C++ compiler. The C++ compiler sequentially goes through each source code (.cpp) file in your program and does two important tasks:

First, the compiler checks your C++ code to make sure it follows the rules of the C++ language. If it does not, the compiler will give you an error (and the corresponding line number) to help pinpoint what needs fixing. The compilation process will also be aborted until the error is fixed.

Second, the compiler translates your C++ code into machine language instructions. These instructions are stored in an intermediate file called an object file. The object file also contains metadata that is required or useful in subsequent steps.

Object files are typically named name.o or name.obj, where name is the same name as the .cpp file it was produced from.

For example, if your program had 3 .cpp files, the compiler would generate 3 object files:

![Object Files](../../../../images/notes/C++/IntroDev/4.png)

C++ compilers are available for many different operating systems. We will discuss installing a compiler shortly, so there is no need to do so now.

### Linking object files and libraries

After the compiler has successfully finished, another program called the linker kicks in. The linker’s job is to combine all of the object files and produce the desired output file (typically an executable file). This process is called linking.

First, the linker reads in each of the object files generated by the compiler and makes sure they are valid.

Second, the linker ensures all cross-file dependencies are resolved properly. For example, if you define something in one .cpp file, and then use it in a different .cpp file, the linker connects the two together. If the linker is unable to connect a reference to something with its definition, you’ll get a linker error, and the linking process will abort.

Third, the linker also is capable of linking library files. A library file is a collection of precompiled code that has been “packaged up” for reuse in other programs.

C++ comes with an extensive library called the C++ Standard Library (usually called “the standard library”) that provides a set of useful capabilities for use in your programs. One of the most commonly used parts of the C++ standard library is the Input/Output library (often called “iostream”), which contains functionality for printing text on a monitor and getting keyboard input from a user. Almost every C++ program written utilizes the standard library in some form, so it’s very common for the standard library to get linked into your programs. Most C++ linkers are configured to link in the standard library by default, so this generally isn’t something you need to worry about.

You can also optionally link other libraries. For example, if you were going to write a program that played sounds, you probably would not want to write your own code to read in the sound files from disk, check to ensure they were valid, or figure out how to route the sound data to the operating system or hardware to play through the speaker -- that would be a lot of work! Instead, you’d probably download a library that already knew how to do those things, and use that. We’ll talk about how to link in libraries (and create your own!) in the appendix.

![Linker](../../../../images/notes/C++/IntroDev/5.png)

Once the linker has finished linking all the object files and libraries, then (assuming all goes well) you will have an executable file that you can run.

### Building

Because there are multiple steps involved, the term building is often used to refer to the full process of converting source code files into an executable that can be run. A specific executable produced as the result of building is sometimes called a build.

### Testing and Debugging

This is the fun part! You are now able to run your executable and see what it does!

Once you can run your program, then you can test it. Testing is the process of assessing whether your software is working as expected. Basic testing typically involves trying different input combinations to ensure the software behaves correctly in different cases.

If the program does not behave as expected, then you will have to do some debugging, which is the process of finding and fixing programming errors.

We will discuss how to test and debug your programs in more detail in future chapters.

### Integrated development environments (IDEs)

Note that steps 3, 4, 5, and 7 all involve software programs that must be installed (editor, compiler, linker, debugger). While you can use separate programs for each of these activities, a software package known as an integrated development environment (IDE) bundles and integrates all of these features together. We’ll discuss IDEs, and install one, in the next section.

Some popular & recommended IDEs:

- Visual Studio (Windows)
- Code::Blocks (for Linux or Windows)
- Visual Studio Code (for experienced Linux, macOS, or Windows users)

Some popular & recommended web-based compilers or platforms:

- {{< newtabref  href="https://www.tutorialspoint.com/compile_cpp_online.php" title="TutorialsPoint" >}}
- {{< newtabref  href="https://wandbox.org/" title="Wandbox" >}} (can choose different versions of GCC or Clang)
- {{< newtabref  href="https://godbolt.org/" title="Godbolt" >}} (can see assembly)

Web-based compilers are fine for dabbling and simple exercises. However, they are generally quite limited in functionality -- many won’t allow you to create multiple files or effectively debug your programs, and most don’t support interactive input. You’ll want to migrate to a full IDE when you can.