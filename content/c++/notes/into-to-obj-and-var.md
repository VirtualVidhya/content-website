---
title: "Introduction to objects & variables" 
draft: false
weight: 6
---

---

### Data and values

The majority of instructions in a program are statements, and that functions are groups of statements that execute sequentially. The statements inside the function perform actions that (hopefully) generate whatever result the program was designed to produce.

But how do programs actually produce results? They do so by manipulating (reading, changing, and writing) data. In computing, data is any information that can be moved, processed, or stored by a computer.

A program can acquire data to work with in many ways: from a file or database, over a network, from the user providing input on a keyboard, or from the programmer putting data directly into the source code of the program itself. In the “Hello world” program from the aforementioned lesson, the text “Hello world!” was inserted directly into the source code of the program, providing data for the program to use. The program then manipulates this data by sending it to the monitor to be displayed.

A single piece of data is called a value. Common examples of values include letters (e.g. a), numbers (e.g. 5), and text (e.g. Hello).

### Random Access Memory

The main memory in a computer is called Random Access Memory (often called RAM for short). When we run a program, the operating system loads the program into RAM. Any data that is hardcoded into the program itself (e.g. text such as “Hello, world!”) is loaded at this point.

The operating system also reserves some additional RAM for the program to use while it is running. Common uses for this memory are to store values entered by the user, to store data read in from a file or network, or to store values calculated while the program is running (e.g. the sum of two values) so they can be used again later.

You can think of RAM as a series of numbered boxes that can be used to store data while the program is running.

In some older programming languages (like Applesoft BASIC), you could directly access these boxes (e.g. you could write a statement to “go get the value stored in membox number 7532”).

### Objects and Variables

In C++, direct memory access is discouraged. Instead, we access memory indirectly through an object. An object represents a region of storage (typically RAM or a CPU register) that can hold a value. Objects also have associated properties (that we’ll cover in future lessons).

How the compiler and operating system work to assign memory to objects is beyond the scope of this lesson. But the key point here is that rather than say “go get the value stored in mailbox number 7532”, we can say, “go get the value stored by this object” and let the compiler figure out where and how to retrieve the value. This means we can focus on using objects to store and retrieve values, and not have to worry about where in memory those objects are actually being placed.

Although objects in C++ can be unnamed (anonymous), more often we name our objects using an identifier. An object with a name is called a variable.

### Variable definition

In order to use a variable in our program, we need to tell the compiler that we want one. The most common way to do this is by use of a special kind of declaration statement called a definition.

Here’s an example of defining a variable named x:

```cpp
int x; // define a variable named x (of type int)
```

At compile-time (when the program is being compiled), when encountering this statement, the compiler makes a note to itself that we want a variable with the name x, and that the variable has the data type int (more on data types in a moment). From that point forward (with some limitations that we’ll talk about in a future lesson), whenever we use the identifier x in our code, the compiler will know that we are referring to this variable.

The compiler handles all of the other details about this variable for us, including determining how much memory the object will need, in what kind of storage the object will be placed (e.g. in RAM or a CPU register), where it will be placed relative to other objects, when it will be created and destroyed, etc…

A variable created via a definition statement is said to be defined at the point where the definition statement is placed. For now, your variables should be defined inside functions (such as within main()).

Here is a full program containing a variable definition statement:

```cpp
int main()
{
    int x; // definition of variable x

    return 0;
}
```

### Variable creation

At runtime (when the program is loaded into memory and run), each object is given an actual storage location (such as RAM, or a CPU register) that it can use to store values. The process of reserving storage for an object’s use is called allocation. Once allocation has occurred, the object has been created and can be used.

For the sake of example, let’s say that variable x is instantiated at memory location 140. Whenever the program uses variable x, it will access the value in memory location 140.

When the above program is run, execution starts at the top of main(). Memory for x is allocated. Then the program ends.

### Data types

So far, we’ve covered that objects are regions of storage that can store a data value (how exactly data is stored is a topic for a future lesson). A data type (more commonly just called a type) determines what kind of value (e.g. a number, a letter, text, etc…) the object will store.

In the above example, our variable x was given type int, which means variable x will store an integer value. An integer is a number that can be written without a fractional component, such as 4, 27, 0, -2, or -12. For short, we can say that x is an integer variable.

In C++, the type of an object must be known at compile-time, and that type can not be changed without recompiling the program. This means an integer variable can only hold integer values. If you want to store some other kind of value, you’ll need to use a different type.

Integers are just one of many types that C++ supports out of the box. For illustrative purposes, here’s another example of defining a variable using data type double:

```cpp
double width; // define a variable named width, of type double
```

C++ also allows you to create your own custom types. This is something we’ll do a lot of in future lessons, and it’s part of what makes C++ powerful.

For these introductory chapters, we’ll stick with integer variables because they are conceptually simple, but we’ll explore many of the other types C++ has to offer (including double) soon.

### Defining multiple variables

It is possible to define multiple variables of the same type in a single statement by separating the names with a comma. The following 2 snippets of code are effectively the same:

```cpp
int a;
int b;
```

is the same as:

```cpp
int a, b;
```

When defining multiple variables this way, there are two common mistakes that new programmers tend to make (neither serious, since the compiler will catch these and ask you to fix them):

The first mistake is giving each variable a type when defining variables in sequence.

```cpp
int a, int b; // wrong (compiler error)

int a, b; // correct
```

The second mistake is to try to define variables of different types in the same statement, which is not allowed. Variables of different types must be defined in separate statements.

```cpp
int a, double b; // wrong (compiler error)

int a; double b; // correct (but not recommended)

// correct and recommended (easier to read)
int a;
double b;
```