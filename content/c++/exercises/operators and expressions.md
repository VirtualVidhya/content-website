---
title: "Operators & Expressions"
draft: false
weight: 3
---

---

#### Q1.

Write a program that takes three integer numbers from user and then prints the average of those three numbers.

**Expected Output:**

```cpp
Enter three numbers: 5 9 16 // (user enters these numbers on console)
The average of 5, 9, and 16 is 10. // (5 + 9 + 16) / 3 = 10
```

---

#### Q2.

Write a program to calculate the perimeter and the area of a rectangle.
Take the length and the width of a rectangle from user and then prints the value of perimeter and area of that given rectangle.

(**NOTE:** You can safely assume that the value of length and width will always be an integer.)

**Expected Output:**

```cpp
Enter the length & width of a rectangle: 10 5 // (user enters these values on console)
Perimeter: 30
Area: 50

// Perimeter = 2 * (l + w) = 2 * (10 + 5) = 30
// Area = l * w = 10 * 5 = 50
```

---

#### Q3.

Write a program that takes the cost of any 3 food items from the user (e.g. a packet of biscuit, a packet of waffer, an icecream cone). Then 
- print the **Total Cost** of the items
- then calculate a 18% GST (tax) on the total cost of the items and print that **GST Amount**
- finally print the **Total Bill** amount, adding Total Cost & GST Amount

(**TIP:** Decide the data types of the variables needed in the program with proper logical consideration so that no data loss occur in the output.)

**Expected Output:**

```cpp
Enter the cost of 3 food items: 50 20 60 // (user enters these amounts on console)
Total Cost: 130
GST Amount : 23.4
Total Bill: 153.4

// Total Cost = 50 + 20 + 60 = 130
// GST Amount = (130 * 18) / 100 = 23.4
// Total Bill = 130 + 23.4 = 153.4
```

---

#### Q4.

What will be the output of the following program?

```cpp
int main()
{
    const float gravity;
    gravity = 9.8;

    std::cout << "Gravity: " << gravity;

    return 0;
}
```

(**NOTE:** You have to predict the output result without running/executing the code.)

a. 9.8

b. Compile-time error

c. Run-time error

d. 9

---

#### Q5.

What will be the output of the following program?

```cpp
#include <iostream>

int main()
{
    int age = 5;

    const int constAge = age;

    age = 7;
    constAge = 6;

    std::cout << "Age: " << age;
    std::cout << "Const Age: " << constAge;

    return 0;
}
```

(**NOTE:** You have to predict the output result without running/executing the code.)

a. 55

b. Compile-time error

c. 75

d. 76

---

#### Q6.

Write a program that take a value of radius from a user, then find the circumference and area of a circle for a given radius.

(**NOTE:** Take 3.14 as the value of pi.)

**Expected Output:**

```cpp
Enter the value of radius: 5
Circumference: 31.4
Area: 78.5

// Circumference = 2 * pi * r = 2 * 3.14 * 5 = 31.4
// Area = pi * r * r = 3.14 * 5 * 5 = 78.5
```