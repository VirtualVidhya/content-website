---
title: "Variables & User I/O"
draft: false
weight: 1
---

---

#### Q1.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)
  
```cpp
#include <iostream>

int main()
{
    std::cout << "Hello, કેમ છો?\n";

    return 0;
}
```

<ol class="lower-alpha-ol bold-li">
    <li>Hello, </li>
    <li>"Hello, કેમ છો?\n"</li>
    <li>Hello, કેમ છો?</li>
    <li>Hello, how are you?</li>
</ol>

---

#### Q2.

Based on how you should name a variable, indicate whether each variable name mentioned below is **conventional** _(follows best practices)_, **unconventional** _(compiler will accept but does not follow best practices)_, or **invalid** _(will not compile)_, and why.

<ol class="upper-roman-ol bold-li">
    <li>int sum;</li>
    <li>int _apples;</li>
    <li>int VALUE;</li>
    <li>int my variable name;</li>
    <li>int TotalCustomers;</li>
    <li>int void;</li>
    <li>int numFruit;</li>
    <li>int 3some;</li>
    <li>int meters_of_pipe;</li>
</ol>

---

#### Q3.

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

<ol class="lower-alpha-ol bold-li">
    <li>always 0</li>
    <li>always -1</li>
    <li>any random garbage value but consistently</li>
    <li>undefined</li>
</ol>

---

#### Q4.

Write a program that takes an integer number from user and then prints the doubled & tripled value of that number.

**Expected Output:**

```v
Enter an integer: 4 // (user enters this number on console)
Double of 4: 8
Triple of 4: 12
```

---

#### Q5.

Write a program that asks the user to enter three integer values, then print these values. Add an appropriate comment above function `main()`.

**Expected Output:**

```v
// (when run with input values 4, 5, and 6)

Enter three numbers: 4 5 6 // (user enters these numbers on console)
You entered 4, 5, and 6.
```