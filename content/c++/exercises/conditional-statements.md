---
title: "Conditional Statements"
draft: false
weight: 4
---

---

#### Q1.

Consider the following programs:

- #### I.
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

- #### II.
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

<ol class="lower-alpha-ol bold-li">
    <li>Hi</li>
    <li>Bye</li>
    <li>Error</li>
    <li>None</li>
</ol>

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

<ol class="lower-alpha-ol bold-li">
    <li>x is 10 and y is 20</li>
    <li>x is 10 but y is not 20</li>
    <li>x is not 10</li>
    <li>No output due to an error</li>
</ol>

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

<ol class="lower-alpha-ol bold-li">
    <li>Adult</li>
    <li>Teenager</li>
    <li>Child</li>
    <li>Toddler</li>
</ol>

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

<ol class="lower-alpha-ol bold-li">
    <li>A</li>
    <li>B</li>
    <li>C</li>
    <li>No output due to an error</li>
</ol>

---

#### Q5.

Write a program that takes an integer from user and checks if that number is divisible by 3 or not.

**Expected Output:**

```v
Enter a number: 98

98 is not divisible by 3.
```

---

#### Q6.

Write a program that takes an integer from user and checks if that number is even or odd.

(**NOTE:** The conditional logic of the program needs to be written using ternary operator here.)

**Expected Output:**

```v
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

```v
Enter student percentage: 65

Result: Pass with Merit
```

---

#### Q8.

Create a system to calculate popcorn prices based on the bucket size customer asks for:

Here, the list for price per bucket-size is given - 
- ‘L’ : price is rs.200
- ‘M’ : price is rs.100
- ‘S’ : price is rs.50

**Expected Output:**

```v
Enter the popcorn-bucket size: M

Price: 100
```

---

#### Q9.

For a good and safe paragliding experience as a begineer, certain weather conditions need to be met.
- No raining
- Wind speeds between 5 and 20 km/h

Write a program that checks if it's a good condition for paragliding or not based on necessary weather parameters taken as user input .

**Expected Output:**

```v
Is it raining? : false
Wind speeds (km/h) : 12

It's a good condition for paragliding.
```

---

#### Q10.

Create a program to make a mini-calculator.

Take 2 numbers and the operator sign as input from the user, then give the result based on those taken values.

**Expected Output:**

```v
first_number : 3
second_number : 5

operator_chosen : *

output: 5 * 3 = 15
```

(**NOTE:** All the arithmetic operators should be covered, i.e. + , - , * , / , %, power)