---
title: "Variables & iostream"
draft: false
weight: 1
---

---

#### Q1.

Based on how you should name a variable, indicate whether each variable name mentioned below is **conventional** _(follows best practices)_, **unconventional** _(compiler will accept but does not follow best practices)_, or **invalid** _(will not compile)_, and why.

- int sum;
- int _apples;
- int VALUE;
- int my variable name;
- int TotalCustomers;
- int void;
- int numFruit;
- int 3some;
- int meters_of_pipe;

---

#### Q2.

What will be the output of the following program when run multiple times?

```cpp
#include <iostream>

int main()
{
    int x;
    
    std::cout << x << '\n';

    return 0;
}
```

(**NOTE:** You have to predict the output result without running/executing the code.)

<ol class="lower-alpha-ol">
    <li>always 0</li>
    <li>always -1</li>
    <li>any random garbage value but consistently</li>
    <li>undefined</li>
</ol>

---

#### Q3.

Consider the following program:

```cpp
// for std::cout and std::cin
#include <iostream>

int main()
{
    std::cout << "Enter a number: "; // ask user for a number
    int x{}; // define variable x to hold user input
    std::cin >> x; // get number from keyboard and store it in variable x
    std::cout << "You entered " << x << '\n';

    return 0;
}
```

The program expects you to enter an integer value, that user input value will be put into an integer variable as `x`.

Predict the output that results when you enter the following types of input:

(**NOTE:** You have to predict the output result without running/executing the code.)

- A letter, such as h.
- A number with a fractional part (e.g. 3.2). Try numbers with fractional parts less than 0.5 and greater than 0.5 (e.g. 3.2 and 3.7).
- A small negative integer, such as -3.
- A word, such as Hello.
- A really big number (at least 3 billion (300 crores) i.e. 3000000000 (3 with nine zeros)).
- A small number followed by some letters, such as 123abc.
- A few letters followed by a small number, such as abc123.
- +5 (three spaces, followed by a plus symbol, and a 5).
- 5b6.

---

#### Q4.

Write a program that asks the user to enter three integer values, then print these values. Add an appropriate comment above function `main()`.

**Expected Output:**

```cpp
// (when run with input values 4, 5, and 6)

Enter three numbers: 4 5 6 // (user enters these numbers on console)
You entered 4, 5, and 6.
```