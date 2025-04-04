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

Write a program that asks the user to enter an integer number, and then enter a second integer number. The program should tell the user what the result of adding and subtracting those two numbers is.

**Expected Output:**

```v
Enter the first integer number: 6 // (user enters this number on console)
Enter the second integer number: 4 // (user enters this number on console)
6 + 4 = 10
6 - 4 = 2
```

---

#### Q3.

Based on how you should name a variable, indicate whether each variable name mentioned below is **conventional** _(follows best practices)_, **unconventional** _(compiler will accept but does not follow best practices)_, or **invalid** _(will not compile)_, and why.

<ol class="upper-roman-ol bold-li">
    <li>int sum;</li>
    <li>int _apples;</li>
    <li>int VALUE;</li>
    <li>int my variable name;</li>
    <li>int TotalCustomers;</li>
    <li>int void;</li>
    <li>int numFruit;</li>
    <li>int 3subject;</li>
    <li>int meters_of_pipe;</li>
</ol>

---

#### Q4.

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

#### Q5.

Write a program that takes an integer number from user and then prints the doubled & tripled value of that number.

**Expected Output:**

```v
Enter an integer: 4 // (user enters this number on console)
Double of 4: 8
Triple of 4: 12
```

---

#### Q6.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
```cpp
#include <iostream>

int main()
{
    int a = 5;
    b = a;

    std::cout << "a: " << a << '\n';
    std::cout << "b: " << b << '\n';

    return 0;
}
```

- #### II.
```cpp
#include <iostream>

int main()
{
    int a = 5;

    std::cout << "a: " << a << '\n';

    int b = a;
    a = 7;

    std::cout << "a: " << a << '\n';
    std::cout << "b: " << b << '\n';

    return 0;
}
```

- #### III.
```cpp
#include <iostream>

int main()
{
    int a = 5;

    std::cout << "a: " << a << '\n';

    int b = 2 * a;

    std::cout << "a: " << a << '\n';
    std::cout << "b: " << b << '\n';

    int a = 2 * b;

    std::cout << "a: " << a << '\n';
    std::cout << "b: " << b << '\n';

    return 0;
}
```

- #### IV.
```cpp
int main()
{
    int a = 5;
    int b = a + 10;
    int c = b + 10;

    std::cout << "a: " << a << '\n';
    std::cout << "b: " << b << '\n';
    std::cout << "c: " << c << '\n';

    return 0;
}
```

---

#### Q7.

Write a program that asks the user to enter three integer values, then print the average of these values.

**Expected Output:**

```v
Enter three numbers: 4 5 6 // (user enters these numbers on console)
The average of 4, 5, and 6 is 5.
```