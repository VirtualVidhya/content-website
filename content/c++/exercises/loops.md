---
title: "Loops"
draft: false
weight: 5
---

---

#### Q1.

Print first 25 whole numbers one-by-one in new line.

(**NOTE:** Write this program using `while` loop.)

**Expected Output:**

```cpp
0
1
2
3
4
.
.
.
```

---

#### Q2.

Print all even numbers between 4 and 60.

(**NOTE:** Write this program using `do-while` loop.)

---

#### Q3.

Print all odd numbers between 1 and 50 in reverse order.

(**NOTE:** Write this program using `for` loop.)

---

#### Q4.

Print the multiplication table of 7.

(**NOTE:** Write this program using all types of loops i.e. `while`, `do-while`, `for` one by one.)

```cpp
7
14
21
28
35
.
.
.
```

---

#### Q5.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a) 
    ```cpp
    #include <iostream>

    int main()
    {
        int count = 15;

        while (count <= 10)
        {
            std::cout << count << ' ';
            ++count;
        }

        std::cout << "loop end!\n";

        return 0;
    }
    ```

- b) 
    ```cpp
    #include <iostream>

    int main()
    {
        int count = 1;

        while (count <= 10)
        {
            std::cout << count << ' ';
        }

        std::cout << "loop end!\n";

        return 0;
    }
    ```

- c) 
    ```cpp
    #include <iostream>

    int main()
    {
        for (int count = 10; i < 0; --i)
        {
            std::cout << cout << ' ';
        }

        std::cout << "loop end!\n";

        return 0;
    }
    ```

- d) 
    ```cpp
    #include <iostream>

    int main()
    {
        for (int count = 10; i > 0; ++i)
        {
            std::cout << cout << ' ';
        }

        std::cout << "loop end!\n";

        return 0;
    }
    ```

- e) 
    ```cpp
    #include <iostream>

    int main()
    {
        int count = 1;

        while (count > 10)
        {
            std::cout << count << ' ';
            --count;
        }

        std::cout << "loop end!\n";

        return 0;
    }
    ```

- f) 
    ```cpp
    #include <iostream>

    int main()
    {
        int count = 1;

        do
        {
            std::cout << count << ' ';
            --count;
        }
        while (count > 10);

        std::cout << "loop end!\n";

        return 0;
    }
    ```

---

#### Q6.

({{< newtabref  href="https://en.m.wikipedia.org/wiki/Fizz_buzz" title="Fizz Buzz" >}} is a simple math game used to teach children about divisibility. It is also sometimes used as an interview question to assess basic programming skills.
The rules of the game are simple: Starting at 1, and counting upward, replace any number divisible only by three with the word “fizz”, any number only divisible by five with the word “buzz”, and any number divisible by both 3 and 5 with the word “fizzbuzz”.)

Take 2 numbers as user input and then print all the numbers starting from first given number, incrementing one by one, to second given number at last, but for any number divisible only by 3 print the word “fizz”, any number only divisible by 5 print the word “buzz” and any number divisible by both 3 and 5 print the word “fizzbuzz”.

**Expected Output:**

```cpp
Enter first number: 9
Enter Second number: 28

fizz
buzz
11
fizz
13
14
fizzbuzz
16
17
fizz
19
buzz
fizz
22
.
.
.
.
```

---

#### Q7.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a) 
    ```cpp
    #include <iostream>

    int main()
    {
        int count = 1;

        while (count <= 10)
        {
            std::cout << count << ' ';

            if (count == 3)
                break;

            ++count;
        }

        std::cout << "loop end!\n";

        return 0;
    }

- b) 
    ```cpp
    #include <iostream>

    int main()
    {
        int count = 1;

        do
        {
            std::cout << count << ' ';

            if (count == 3)
                continue;
                
            ++count;
        }
        while(count <= 10);

        std::cout << "loop end!\n";

        return 0;
    }

- c) 
    ```cpp
    #include <iostream>

    int main()
    {
        for (int count = 1; count <= 10; ++count)
        {
            std::cout << count << ' ';

            if (count == 3)
                return 0;
        }

        std::cout << "loop end!\n";

        return 0;
    }

---

#### Q8.

Write a program to print all the numbers that are not divisible by 4, between 1 and 50.

**Expected Output:**

```cpp
1
2
3
5
6
7
9
10
.
.
.
```

---

#### Q9.

Take 10 numbers as input from user one by one and then give the sum of all the numbers the user entered. 
The user can stop the asking loop at any point by entering 0 as an input, in that case, give the sum of all numbers the user
has entered upto that point.

**Expected Output:**

```cpp
Enter a number to add, or 0 to exit: 5
Enter a number to add, or 0 to exit: 2
Enter a number to add, or 0 to exit: 1
Enter a number to add, or 0 to exit: 0

The sum of all the numbers you entered is: 8
```

<!-- ---

#### Q10.

Create a game to guess a lucky number of an admin.

Let's say, you as an admin has plugged in your lucky number in the program, now the user (game player) has to guess what's
that lucky number of the program admin (i.e. you).

The program will keep asking for an input prompt until the user enters a number that matches that lucky number, but to make the game
a bit easier, the program should give constant hints. -->