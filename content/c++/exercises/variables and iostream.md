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

Write a program that takes an integer number from user and then prints the doubled & tripled value of that number.

**Expected Output:**

```cpp
Enter an integer: 4 // (user enters this number on console)
Double of 4: 8
Triple of 4: 12
```

---

#### Q4.

Write a program that asks the user to enter three integer values, then print these values. Add an appropriate comment above function `main()`.

**Expected Output:**

```cpp
// (when run with input values 4, 5, and 6)

Enter three numbers: 4 5 6 // (user enters these numbers on console)
You entered 4, 5, and 6.
```