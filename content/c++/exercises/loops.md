---
title: "Loops"
draft: false
weight: 5
---

---

#### Q1.

Print first 25 whole numbers one-by-one in new line.

(**NOTE:** Write this program using `while` loop.)

<!-- {{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
0
1
2
3
4
.
.
.
24
```
{{< /collapsible-codesection >}} -->

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

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
7
14
21
28
35
.
.
.
70
```
{{< /collapsible-codesection >}}

---

#### Q5.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
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

- #### II.
    ```cpp
    #include <iostream>

    int main()
    {
        int count = 1;

        do
        {
            std::cout << count << ' ';
                
            ++count;
        }
        while(count <= 10)

        std::cout << "loop end!\n";

        return 0;
    }

- #### III.
    ```cpp
    #include <iostream>

    int main()
    {
        int count = 1;

        while (count <= 10);
        {
            std::cout << count << ' ';
            ++count;
        }

        std::cout << "loop end!\n";

        return 0;
    }
    ```

- #### IV.
    ```cpp
    #include <iostream>

    int main()
    {
        for (int count = 10; count < 0; --count)
        {
            std::cout << count << ' ';
        }

        std::cout << "loop end!\n";

        return 0;
    }
    ```

- #### V.
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

- #### VI.
    ```cpp
    #include <iostream>

    int main()
    {
        for (int count = 10; count > 0; ++count)
        {
            std::cout << count << ' ';
        }

        std::cout << "loop end!\n";

        return 0;
    }
    ```

- #### VII.
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

- #### VIII.
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

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
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
28
```
{{< /collapsible-codesection >}}

---

#### Q7.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
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

- #### II.
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

- #### III.
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

- #### IV. **_(Adv.)_**
    ```cpp
    #include <iostream>

    int main()
    {
        int i, sum = 0;
        
        for (i = 0; i < 5; i++);
        {
            sum += i;
        }
        
        std::cout << "sum: " << sum << '\n';

        return 0;
    }

---

#### Q8.

Write a program to print all the numbers that are not divisible by 4, between 1 and 50.

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
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
50
```
{{< /collapsible-codesection >}}

---

#### Q9.

Take 10 numbers as input from user one by one and then give the sum of all the numbers the user entered. 
The user can stop the asking loop at any point by entering 0 as an input, in that case, give the sum of all numbers the user
has entered upto that point.

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
Enter a number to add, or 0 to exit: 5
Enter a number to add, or 0 to exit: 2
Enter a number to add, or 0 to exit: 1
Enter a number to add, or 0 to exit: 0

The sum of all the numbers you entered is: 8
// 5 + 2 + 1 = 8
```
{{< /collapsible-codesection >}}

---

#### Q10.

Create a "Guess the Lucky Number" game in C++.

As the admin, set a "lucky number" between 1 and 100 in the program. The user (player) will attempt to guess this number.

<div>
The program should repeatedly prompt the user for a guess until they either:
    <ul>
        <li>Correctly match the lucky number.</li>
        <li>Enter 0 to exit the game (at any time).</li>
    </ul>
</div>

<div>
To help the player, provide hints after each guess:
    <ul>
        <li>If the guess is larger than the lucky number, display a message indicating it is too high.</li>
        <li>If the guess is smaller, indicate it is too low.</li>
    </ul>
</div>

This feedback allows the player to narrow down their guesses and find the lucky number.

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
// lucky number: 25

Guess the lucky number: 87

Your guessed number is larger than the lucky number. Try Again. // (hint)

Guess the lucky number: 17

Your guessed number is smaller than the lucky number. Try Again. // (hint)

Guess the lucky number: 45

Your guessed number is larger than the lucky number. Try Again. // (hint)

Guess the lucky number: 25

Congratulations, you have guessed the lucky number.
```
{{< /collapsible-codesection >}}