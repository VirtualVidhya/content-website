---
title: "Conditional Statements"
draft: false
weight: 4
---

---

#### Q1.

Consider the following programs:

- a)
    ```cpp
    #include <iostream>

    int x = 5;

    if (x = 10) 
    {
        std::cout << "Hi";
    } 
    else 
    {
        std::cout << "Bye";
    }
    ```

- b)
    ```cpp
    #include <iostream>

    int x = 5;

    if (x == 5) 
    {
        std::cout << "Hi";
    } 
    else 
    {
        std::cout << "Bye";
    }
    ```


What will be the output in the console for the programs given above?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

1. Hi
2. Bye
3. Error
4. None

---

#### Q2.

Consider the following program:

```cpp
int x = 10; 
int y = 20;

if (x == 10) 
{     
    if (y == 20) 
    {   
        std::cout << "x is 10 and y is 20";     
    }
    else 
    {   
        std::cout << "x is 10 but y is not 20";     
    } 
}  
else 
{  
    std::cout << "x is not 10"; 
}
```

What will be the output in the console?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

1. x is 10 and y is 20
2. x is 10 but y is not 20
3. x is not 10
4. No output due to an error

---

#### Q3.

Consider the following program:

```cpp
int age = 25;

if (age > 18)
    std::cout << "Adult";
else if (age > 12)
    std::cout << "Teenager";
else if (age > 5)
    std::cout << "Child";
else
    std::cout << "Toddler";
```

What will be the output in the console?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

1. Adult
2. Teenager
3. Child
4. Toddler

---

#### Q4.

Consider the following program:

```cpp
int x = 10;
int y = 20;

if (x > 5)
    std::cout << 'A';
else if (y > 15)
    std::cout << 'B';
else
    std::cout << 'C';
```

What will be the output in the console?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

1. A
2. B
3. C
4. No output due to an error

---

#### Q5.

Write a program that takes an integer from user and checks if that number is divisible by 3 or not.

**Expected Output:**

```cpp
Enter a number: 98

98 is not divisible by 3.
```

---

#### Q6.

Write a program that takes an integer from user and checks if that number is even or odd.

(**NOTE:** The conditional logic of the program needs to be written using ternary operator here.)

**Expected Output:**

```cpp
Enter a number: 9

9 is an odd number.
```

---

#### Q7.

A college professor wants to make a student result declaration system.
Write a program that takes student percentage as user input and gives student's result status.

- If a student has less than 35% then he/she fails.
- If a student has more than that there are different achievement levels.
    - for more than 75% : Pass with "Distinction"
    - 60-75% : Pass with "Merit"
    - 35-60% : Pass

**Expected Output:**

```cpp
Enter student percentage: 65

Result: Pass with Merit
```

---

#### Q8.

Create a system to calculate popcorn prices based on the size customer asked for:

Here, the price-size list is given - 
- ‘L’ → price is rs.200
- ‘M’ → price is rs.100
- ‘S’ → price is rs.50

---

#### Q9.

For a good and safe paragliding experience as a begineer, certain weather conditions need to be met.
- No raining
- Wind speeds between 5 to 20 km/h

Write a program that checks based on necessary weather parameters as user input if it's a good condition for paragliding or not.

**Expected Output:**

```
// e.g. 1
Is it raining? : false
Wind speeds (km/h) : 12

It's a good condition for paragliding.

// e.g. 2
Is it raining? : true
Wind speeds (km/h) : 12

It's a bad condition for paragliding.
```

---

#### Q10.

Create a program to make a mini-calculator.

Take 2 numbers & the operator sign as input from the user, then give the result based on those taken values.

**Expected Output:**

```cpp
first_number : 3
second_number : 5

operator_chosen : *

// expected output
5 * 3 = 15
```

[**NOTE:** All the arithmetic operators should be covered, i.e. + , - , * , / , %, power ]