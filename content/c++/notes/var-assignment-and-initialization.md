---
title: "Variable assignment and initialization" 
draft: false
weight: 7
---

---

### Variable assignment

After a variable has been defined, you can give it a value (in a separate statement) using the = operator. This process is called assignment, and the = operator is called the assignment operator.

```cpp
int width; // define an integer variable named width
width = 5; // assignment of value 5 into variable width

// variable width now has value 5
```

By default, assignment copies the value on the right-hand side of the = operator to the variable on the left-hand side of the operator. This is called copy-assignment.

Once a variable has been given a value, the value of that variable can be printed via std::cout and the << operator.

Assignment can be used whenever we want to change the value held by a variable. Here’s an example where we use assignment twice:

```cpp
#include <iostream>

int main()
{
	int width; // define a variable named width
	width = 5; // copy assignment of value 5 into variable width

	std::cout << width; // prints 5

	width = 7; // change value stored in variable width to 7

	std::cout << width; // prints 7

	return 0;
}
```

This prints:

```cpp
57
```

When this program is run, execution begins at the top of the main function and proceeds sequentially. First, memory for variable width is allocated. We then assign width the value 5. When we output the value of width, it prints 5 to the console. When we then assign value 7 to width, any prior value (in this case 5) is overwritten. Thus when we output width again, this time it prints 7.

Normal variables can only hold one value at a time.

---

### Variable initialization

One downside of assignment is that assigning a value to a just-defined object requires two statements: one to define the variable, and another to assign the value.

These two steps can be combined. When an object is defined, you can optionally provide an initial value for the object. The process of specifying an initial value for an object is called initialization, and the syntax used to initialize an object is called an initializer. Informally, the initial value is often called an “initializer” as well.

For example, the following statement both defines a variable named width (of type int) and initializes it with the value 5:

```cpp
#include <iostream>

int main()
{
    int width { 5 };    // define variable width and initialize with initial value 5
    std::cout << width; // prints 5

    return 0;
}
```

In the above initialization of variable width, { 5 } is the initializer, and 5 is the initial value.

---

### Different forms of initialization

Unlike assignment (which is generally straightforward), initialization in C++ is surprisingly complex. So we’ll present a simplified view here to get started.

There are 5 common forms of initialization in C++:

```cpp
int a;         // default-initialization (no initializer)

// Traditional initialization forms:
int b = 5;     // copy-initialization (initial value after equals sign)
int c ( 6 );   // direct-initialization (initial value in parenthesis)

// Modern initialization forms (preferred):
int d { 7 };   // direct-list-initialization (initial value in braces)
int e {};      // value-initialization (empty braces)
```

You may see the above forms written with different spacing (e.g. int b=5; int c(6);, int d{7};, int e{};). Whether you use extra spaces for readability or not is a matter of personal preference.

As of C++17, copy-initialization, direct-initialization, and direct-list-initialization behave identically in most cases. We’ll cover the most relevant case where they differ below.

---

### Default-initialization

When no initializer is provided (such as for variable a above), this is called default-initialization. In many cases, default-initialization performs no initialization, and leaves the variable with an indeterminate value (a value that is not predictable).

---

### Copy-initialization

When an initial value is provided after an equals sign, this is called copy-initialization. This form of initialization was inherited from the C language.

```cpp
int width = 5; // copy-initialization of value 5 into variable width
```

Much like copy-assignment, this copies the value on the right-hand side of the equals into the variable being created on the left-hand side. In the above snippet, variable width will be initialized with value 5.

Copy-initialization had fallen out of favor in modern C++ due to being less efficient than other forms of initialization for some complex types. However, C++17 remedied the bulk of these issues, and copy-initialization is now finding new advocates. You will also find it used in older code (especially code ported from C), or by developers who simply think it looks more natural and is easier to read.

---

### Direct-initialization

When an initial value is provided inside parenthesis, this is called direct-initialization.

```cpp
int width ( 5 ); // direct initialization of value 5 into variable width
```

Direct-initialization was initially introduced to allow for more efficient initialization of complex objects (those with class types, which we’ll cover in a future chapter). Just like copy-initialization, direct-initialization had fallen out of favor in modern C++, largely due to being superseded by direct-list-initialization. However, direct-list-initialization has a few quirks of its own, and so direct-initialization is once again finding use in certain cases.

- **For advanced readers**

	Direct-initialization is also used when values are explicitly cast to another type (e.g. via `static_cast`).

	One of the reasons direct-initialization had fallen out of favor is because it makes it hard to differentiate variables from functions. For example:

	```cpp
	int x();  // forward declaration of function x
	int x(0); // definition of variable x with initializer 0
	T(5);     // function call if T is a function, direct-initialization of temporary object if T is a type
	```
---

### Direct-list-initialization and copy-list-initialization

The modern way to initialize objects in C++ is to use a form of initialization that makes use of curly braces. This is called **list-initialization** (or **uniform initialization** or **brace initialization**).

List-initialization comes in two forms:

```cpp
int width { 5 };    // direct-list-initialization of initial value 5 into variable width (preferred)
int height = { 6 }; // copy-list-initialization of initial value 6 into variable height (rarely used)
```

Prior to the introduction of list-initialization, some types of initialization required using copy-initialization, and other types of initialization required using direct-initialization. Copy-initialization can be hard to differentiate from copy-assignment (because they both use an `=`). And direct-initialization can be hard to differentiate from function-related operations (because they both use parenthesis).

List-initialization was introduced to provide a consistent initialization syntax (which is why it is sometimes called “uniform initialization”) that makes it clear we’re doing initialization.

- **Key insight**

	When we see curly braces, we know we’re creating and initializing an object.

	Additionally, list initialization provides a way to initialize objects with a list of values rather than a single value (which is why it is called “list initialization”). We show an example of this in lesson 16.2 -- Introduction to std::vector and list constructors.

---

### List initialization disallows narrowing conversions

The primary benefit of list-initialization is that “narrowing conversions” are disallowed. This means that if you try to list-initialize a variable using a value that the variable can not safely hold, the compiler is required to produce a diagnostic (compilation error or warning) to notify you. For example:

```cpp
int main()
{
    // An integer can only hold non-fractional values
    int w1 { 4.5 }; // compile error: list init does not allow narrowing conversion of 4.5 to 4

    int w2 = 4.5;   // compiles: copy-init initializes width with 4
    int w3 (4.5);    // compiles: direct-init initializes width with 4

    return 0;
}
```

On line 4 of the above program, we’re using a value (`4.5`) with a fractional component (`.5`) to list-initialize an integer variable (which can only hold non-fractional values). Because this is a narrowing conversion, the compiler is required to generate a diagnostic in such cases.

Copy-initialization (line 6) and direct-initialization (line 7) both silently drop the `.5` and initialize the variable with the value `4` (which probably isn’t what we want). Your compiler may warn you about this (since losing data is rarely desired), but it also may not.

Note that this restriction on narrowing conversions only applies to the list-initialization, not to any subsequent assignments to the variable:

```cpp
int main()
{
    int w1 { 4.5 }; // compile error: list-init does not allow narrowing conversion of 4.5 to 4

    w1 = 4.5;       // okay: copy-assignment allows narrowing conversion of 4.5 to 4

    return 0;
}
```

---

### List-initialization is the preferred form of initialization in modern C++

- **Key insight**

	List-initialization is generally preferred over the other initialization forms because it works in most cases (and is therefore most consistent), it disallows narrowing conversions (which we normally don’t want), and it supports initialization with a list of values (something we’ll cover in a future lesson).

- **Best practice**

	Prefer direct-list-initialization when initializing your variables with one or more values.

- **Author’s note**

	Bjarne Stroustrup (creator of C++) and Herb Sutter (C++ expert) also recommend using list-initialization to initialize your variables.

	In modern C++, there are some cases where list-initialization does not work as expected. We cover one such case in lesson 16.2 -- Introduction to std::vector and list constructors. Because of such quirks, some experienced developers now advocate for using a mix of copy, direct, and list initialization, depending on the circumstance. Once you are familiar enough with the language to understand the nuances of each initialization type and the reasoning behind such recommendations, you can evaluate on your own whether you find these arguments persuasive.

---

### Value-initialization and zero-initialization

When a variable is initialized using empty braces, **value initialization** takes place. In most cases, **value initialization** will initialize the variable to zero (or empty, if that’s more appropriate for a given type). In such cases where zeroing occurs, this is called **zero-initialization**.

```cpp
int width {}; // value-initialization / zero-initialization to value 0
```

- **Q: When should I initialize with { 0 } vs {}?**

	Use direct-list-initialization when you’re actually using the initial value:

	```cpp
	int x { 0 };    // direct-list-initialization with initial value 0
	std::cout << x; // we're using that 0 value here
	```

	Use value-initialization when the object’s value is temporary and will be replaced:

	```cpp
	int x {};      // value initialization
	std::cin >> x; // we're immediately replacing that value so an explicit 0 would be meaningless
	```

---

### Initialize your variables

Initialize your variables upon creation. You may eventually find cases where you want to ignore this advice for a specific reason (e.g. a performance critical section of code that uses a lot of variables), and that’s okay, as long as the choice is made deliberately.

- **Related content**

	For more discussion on this topic, Bjarne Stroustrup (creator of C++) and Herb Sutter (C++ expert) make this recommendation themselves here.

	We explore what happens if you try to use a variable that doesn’t have a well-defined value in lesson 1.6 -- Uninitialized variables and undefined behavior.

- **Best practice**

	Initialize your variables upon creation.

---

### Instantiation

The term **instantation** is a fancy word that means a variable has been created (allocated) and initialized (this includes default initialization). An instantiated object is sometimes called an **instance**. Most often, this term is applied to class type objects, but it is occasionally applied to objects of other types as well.

---

### Initializing multiple variables

In the last section, we noted that it is possible to define multiple variables _of the same type_ in a single statement by separating the names with a comma:

```cpp
int a, b; // create variables a and b, but do not initialize them
```

We also noted that best practice is to avoid this syntax altogether. However, since you may encounter other code that uses this style, it’s still useful to talk a little bit more about it, if for no other reason than to reinforce some of the reasons you should be avoiding it.

You can initialize multiple variables defined on the same line:

```cpp
int a = 5, b = 6;          // copy-initialization
int c ( 7 ), d ( 8 );      // direct-initialization
int e { 9 }, f { 10 };     // direct-list-initialization
int i {}, j {};            // value-initialization
```

Unfortunately, there’s a common pitfall here that can occur when the programmer mistakenly tries to initialize both variables by using one initialization statement:

```cpp
int a, b = 5;     // wrong: a is not initialized to 5!
int a = 5, b = 5; // correct: a and b are initialized to 5
```

In the top statement, variable `a` will be left uninitialized, and the compiler may or may not complain. If it doesn’t, this is a great way to have your program intermittently crash or produce sporadic results. We’ll talk more about what happens if you use uninitialized variables shortly.

The best way to remember that this is wrong is to note that each variable can only be initialized by its own initializer:

```cpp
int a = 4, b = 5; // correct: a and b both have initializers
int a, b = 5;     // wrong: a doesn't have its own initializer
```

---

### Unused initialized variables warnings

Modern compilers will typically generate warnings if a variable is initialized but not used (since this is rarely desirable). And if “treat warnings as errors” is enabled, these warnings will be promoted to errors and cause the compilation to fail.

Consider the following innocent looking program:

```cpp
int main()
{
    int x { 5 }; // variable x defined

    // but not used anywhere

    return 0;
}
```

When compiling this with GCC and “treat warnings as errors” on, the following error is generated:

```cpp
prog.cc: In function 'int main()':
prog.cc:3:9: error: unused variable 'x' [-Werror=unused-variable]
```

and the program fails to compile.

There are a few easy ways to fix this.

- If the variable really is unused and you don’t need it, then the easiest option is to remove the definition of `x` (or comment it out). After all, if it’s not used, then removing it won’t affect anything.
- Another option is to simply use the variable somewhere:

```cpp
#include <iostream>

int main()
{
    int x { 5 };

    std::cout << x; // variable now used somewhere

    return 0;
}
```

But this requires some effort to write code that uses it, and has the downside of potentially changing your program’s behavior.

---

### The `[[maybe_unused]]` attribute C++17

In some cases, neither of the above options are desirable. Consider the case where we have a set of math/physics values that we use in many different programs:

```cpp
#include <iostream>

int main()
{
    // Here's some math/physics values that we copy-pasted from elsewhere
    double pi { 3.14159 };
    double gravity { 9.8 };
    double phi { 1.61803 };

    std::cout << pi << '\n';  // pi is used
    std::cout << phi << '\n'; // phi is used

    // The compiler will likely complain about gravity being defined but unused

    return 0;
}
```

If we use these values a lot, we probably have these saved somewhere and copy/paste/import them all together.

However, in any program where we don’t use _all_ of these values, the compiler will likely complain about each variable that isn’t actually used. In the above example, we could easily just remove the definition of `gravity`. But what if there were 20 or 30 variables instead of 3? And what if we use them in multiple places? Going through the list of variables to remove/comment out the unused ones takes time and energy. And later if we need one that we’ve previously removed, we’ll have to spend more time and energy to go back and re-add/uncomment it.

To address such cases, C++17 introduced the `[[maybe_unused]]` attribute, which allows us to tell the compiler that we’re okay with a variable being unused. The compiler will not generate unused variable warnings for such variables.

The following program should generate no warnings/errors:

```cpp
#include <iostream>

int main()
{
    [[maybe_unused]] double pi { 3.14159 };  // Don't complain if pi is unused
    [[maybe_unused]] double gravity { 9.8 }; // Don't complain if gravity is unused
    [[maybe_unused]] double phi { 1.61803 }; // Don't complain if phi is unused

    std::cout << pi << '\n';
    std::cout << phi << '\n';

    // The compiler will no longer warn about gravity not being used

    return 0;
}
```

Additionally, the compiler will likely optimize these variables out of the program, so they have no performance impact.

The `[[maybe_unused]]` attribute should only be applied selectively to variables that have a specific and legitimate reason for being unused (e.g. because you need a list of named values, but which specific values are actually used in a given program may vary).

---

- **Author’s note**

	In future lessons, we’ll often define variables we don’t use again, in order to demonstrate the syntax for certain concepts. Making use of `[[maybe_unused]]` allows us to do so without compilation warnings/errors.
