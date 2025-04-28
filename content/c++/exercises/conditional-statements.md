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

    int main()
    {
        int x = 5;

        if (x = 10) 
        {
            std::cout << "Hi";
        } 
        else 
        {
            std::cout << "Bye";
        }
    }
    ```

- #### II.
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;

        if (x == 5) 
        {
            std::cout << "Hi";
        } 
        else 
        {
            std::cout << "Bye";
        }
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

At a stationery shop, pens are packed in boxes of five. Write a program that asks the user for the total number of pens they have and then 
tells the user whether all the pens will fit into complete boxes or how many pens will be left over after packing.

**Expected Output:**

```v
// case 1
Enter the total number of pens: 20   // user input
All pens fit into complete boxes - no leftovers!

// case 2
Enter the total number of pens: 64   // user input
You have 4 pen(s) left unpacked.
```

---

#### Q3.

The bank has a policy where if a customer deposits rs.1000 or more in a single day, they don’t have to pay any transaction fee. However, if the deposit amount is less than rs.1000, a small transaction fee will be applied. Write a program that asks the customer how much amount they want to deposit and based on the amount, tell them whether a transaction fee will be applied or not.

**Expected Output:**

```v
// case 1
Enter total deposits today: 750   // user input
A transaction fee will not be applied.

// case 2
Enter total deposits today: 2650   // user input
A transaction fee will be applied.
```

---

#### Q4.

Consider the following program:

```cpp
#include <iostream>

int main()
{
    int x = 10;
    int y = 20;

    if (x == 10)
    {
        if (y == 30)
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

#### Q5.

At the airport cargo counter, packages are checked based on their size. Instead of actual weight, they use a volumetric weight formula to decide if the package is too heavy to ship. Write a program that ask the user to enter the length, breadth, and height of the package in cm, then calculate the volumetric weight in kg and
finally tells if the package is accepted for shipping or not.
  
- The formula is: `Volumetric Weight = (Length × Breadth × Height) / 5000`
- If the package's volumetric weight is more than 20 kg then it's considered too heavy for air shipping.

**Expected Output:**

```v
// case 1
Enter the length of the package (in cm): 40   // user input
Enter the breadth of the package (in cm): 30   // user input
Enter the height of the package (in cm): 20   // user input

Volumetric weight: 4.8 kg  
Package accepted for shipping.

// case 2
Enter the length of the package (in cm): 100   // user input
Enter the breadth of the package (in cm): 80   // user input
Enter the height of the package (in cm): 50   // user input

Volumetric weight: 80.0 kg  
Package too heavy for air shipping!
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
    int x = 10;
    int y = 20;

    if (x > 5)
        std::cout << 'A';
    else if (y > 15)
        std::cout << 'B';
    else
        std::cout << 'C';
}
```

- #### II.
```cpp
#include <iostream>

int main()
{
    int age = 25;

    if (age > 18)
        std::cout << "Adult";
    else if (age > 12)
        std::cout << "Teenager";
    else if (age > 5)
        std::cout << "Child";
    else
        std::cout << "Toddler";
}
```

- #### III.
```cpp
#include <iostream>

int main()
{
    int marks = 90;

    if (marks > 35)
        std::cout << "C";
    else if (marks > 55)
        std::cout << "B";
    else if (marks > 85)
        std::cout << "A";
    else
        std::cout << "F";
}
```

---

#### Q7.

Write a program that takes an integer from user and checks if that number is even or odd.

(**NOTE:** The conditional logic of the program needs to be written using `ternary operator` here.)

**Expected Output:**

```v
Enter a number: 9   // user input

9 is an odd number.
```

---

#### Q8.

At the college library, books can be borrowed and returned by students. To manage everything efficiently, they need a system to check students' borrowing history and pending dues.
Write a program that,

- Asks the user if they have borrowed any book or not.
- If they haven’t borrowed any book, they are immediately allowed to borrow a new one.
- If they have borrowed a book, the system then asks how many days it has been since they borrowed it.
    - If the number of days is 14 or less, they are allowed to borrow another book.
    - If the number of days is more than 14, they are told the number of overdue days and asked to pay a fine of rs.1 per day before they can borrow a new book.

Write a program for this.

**Expected Output:**

```v
// case 1
Did you borrow any book previously? (yes/no): no   // user input
You can borrow a new book. No pending returns.

// case 2
Did you borrow any book previously? (yes/no): yes   // user input
How many days ago did you borrow the book?: 10   // user input
Book returned within allowed time. You can borrow a new book.

// case 3
Did you borrow any book previously? (yes/no): yes   // user input
How many days ago did you borrow the book?: 20   // user input
Your book return is overdue. You have a pending fine of rs.6.
Please clear the fine before borrowing a new book.
```

---

#### Q9.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.

```cpp
#include <iostream>

int main()
{
    char grade = 'B';

    switch (grade)
    {
    case 'A':
        std::cout << "Excellent performance\n";
    case 'B':
        std::cout << "Good performance\n";
    case 'C':
        std::cout << "Average performance\n";
    case 'D':
        std::cout << "Bad performance\n";
    case 'F':
        std::cout << "Unacceptable performance\n";
    default:
        break;
    }
}
```

- #### II.

```cpp
#include <iostream>

int main()
{
    int response_code = 200;

    switch (response_code)
    {
    case 200:
        std::cout << "Response: OK\n";
        break;
    case 400:
        std::cout << "Response: Bad Request\n";
        break;
    case 403:
        std::cout << "Response: Forbidden\n";
        break;
    case 404:
        std::cout << "Response: Not Found\n";
        break;
    case 500:
        std::cout << "Response: Internal Server Error\n";
        break;
    case 404:
        std::cout << "Response: Bad Gateway\n";
        break;
    default:
        std::cout << "Response: None\n";
        break;
    }
}
```

---

#### Q10.

A college professor wants to make a student result declaration system.
Write a program that takes student percentage as user input and gives student's result status.

- If a student has less than 35% then he/she fails.
- If a student has more than that there are different achievement levels.
    - for more than 75% : Pass with Distinction
    - 60-75% : Pass with Merit
    - 35-60% : Pass

**Expected Output:**

```v
Enter student percentage: 65   // user input

Result: Pass with Merit
```

---

#### Q11.

Create a system to calculate popcorn prices based on the bucket size customer asks for:

Here, the list for price per bucket-size is given - 
- ‘L’ : price is rs.200
- ‘M’ : price is rs.100
- ‘S’ : price is rs.50

(**NOTE:** The conditional logic of the program needs to be written using `switch` here.)

**Expected Output:**

```v
Enter the popcorn-bucket size: M   // user input

Price: 100
```

---

#### Q12.

At a city's traffic control system, drivers are monitored for speed violations. The city has a strict speed policy - if a driver stays within the speed limit, they can continue without any fine. However, if they exceed the limit, fines are imposed depending on how much they overspeed.

Write a program that asks the driver for their current speed and informs them if they are safe or what fine they need to pay.

- If the speed is 60 km/h or below, no fine is issued.
- If the speed is between 61 and 80 km/h, a fine of rs.500 is issued.
- If the speed is above 80 km/h, a fine of rs.1000 is issued.

**Expected Output:**

```v
// case 1
Enter your current speed (in km/h): 75   // user input
You have exceeded the speed limit. A fine of rs.500 is applicable.

// case 2
Enter your current speed (in km/h): 95   // user input
You have exceeded the speed limit. A fine of rs.1000 is applicable.
```

---

#### Q13.

For a good and safe paragliding experience as a beginner, certain weather conditions need to be met.
- No raining
- Wind speeds between 5 and 20 km/h

Write a program that checks if it's a good condition for paragliding or not based on necessary weather parameters taken as user input .

**Expected Output:**

```v
Is it raining? : false   // user input
Wind speeds (km/h) : 12   // user input

It's a good condition for paragliding.
```

---

#### Q14.

Create a program to make a mini-calculator.

Take 2 integer numbers and the operator sign as input from the user, then give the result based on those taken values.

**Expected Output:**

```v
first_number : 3   // user input
second_number : 5   // user input

operator_chosen : *   // user input

output: 5 * 3 = 15
```

(**NOTE:** All the arithmetic operators should be covered, i.e. `+` , `-` , `*` , `/` , `%`, `^` (power).)

---

#### Q15.

At the city’s electricity board, household electricity bills are calculated based on the number of units consumed in a month. The board follows a slab system where different rates apply based on consumption levels.

Write a program that asks the user to enter the total number of electricity units consumed for the month, then calculates and displays the final bill amount according to the following rules:

- For the first 100 units, the charge is rs.3 per unit.
- For the next 100 units (units 101 to 200), the charge is rs.4 per unit.
- For any units beyond 200, the charge is rs.5 per unit.

**Expected Output:**

```v
// case 1
Enter total electricity units consumed: 150   // user input
Electricity Bill: rs.500

// First 100 units: 100 × rs.3 = rs.300, Next 50 units: 50 × rs.4 = rs.200
// Total = rs.300 + rs.200 = rs.500

// case 2
Enter total electricity units consumed: 250   // user input
Electricity Bill: rs.950

// First 100 units: 100 × rs.3 = rs.300, Next 100 units: 100 × rs.4 = rs.400, 
// Remaining 50 units: 50 × rs.5 = rs.250
// Total = rs.300 + rs.400 + rs.250 = rs.950
```

<!-- ---

#### Q16.

At an international airport’s travel help desk, travellers often want to know the value of their Indian Rupees (INR) in different currencies.
Write a program that helps a traveller by converting their amount in INR into a currency of their choice.

- Ask the traveller to enter the amount in INR.
- Then, ask which currency they want to convert to by selecting an option:
    - 1 - US Dollar (USD)
    - 2 - Euro (EUR)
    - 3 - British Pound (GBP)
    - 4 - Chinese Yuan (CNY)
    - 5 - Russian Ruble (RUB)

- Based on their selection, display the converted amount. Use the following fixed conversion rates:
    - 1 INR = 0.012 USD
    - 1 INR = 0.011 EUR
    - 1 INR = 0.0095 GBP
    - 1 INR = 1.67 JPY
    - 1 INR = 0.087 CNY
    - 1 INR = 1.06 RUB -->