---
title: "Data types"
draft: false
weight: 2
---

---

#### Q1.

Pick the appropriate data type for a variable in each of the following situations. Be as specific as possible.

<ol class="upper-roman-ol bold-li">
    <li>The age of the user (in years)</li>
    <li>Whether the user wants the application to check for updates</li>
    <li>pi (3.14159265)</li>
    <li>The number of pages in a textbook</li>
    <li>The length of a couch in feet, to 2 decimal places</li>
    <li>A user selecting an option from a menu by letter</li>
</ol>

---

#### Q2.

Write a program where the user is asked to enter marks for 5 subjects. Calculate and print the total marks and percentage.

**Expected Output:**

```v
Enter marks for 5 subjects: 85 90 78 92 88

Total marks: 433
Percentage: 86.60%
```

---

#### Q3.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

```cpp
#include <iostream>

int main() 
{
    int a = b;
    int b = 2;
    
    std::cout << "a: " << a << '\n';
    std::cout << "b: " << b << '\n';
    
    return 0;
}
```

---

#### Q4.

Write a program where the user is asked to enter distance (in kilometers) and time (in hours). Print the calculated speed.

**Expected Output:**

```v
Enter distance (in km): 110
Enter time (in hours): 4

Speed: 27.5 km/h
```

---

#### Q5.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
    ```cpp
    #include <iostream>

    int main() 
    {
        int a = 9;
        int b = 2;
        
        std::cout << a / b << '\n';
        
        return 0;
    }
    ```

- #### II.
    ```cpp
    #include <iostream>

    int main() 
    {
        float a = 9;
        int b = 2;
        
        std::cout << a / b << '\n';
        
        return 0;
    }
    ```

- #### III.
    ```cpp
    #include <iostream>

    int main() 
    {
        float a = 9;
        float b = 2;
        
        std::cout << a / b << '\n';
        
        return 0;
    }
    ```

- #### IV.
    ```cpp
    #include <iostream>

    int main() 
    {
        int a = 9;
        int b = 2;

        float ans = a / b;
        
        std::cout << ans << '\n';
        
        return 0;
    }
    ```

- #### V.
    ```cpp
    #include <iostream>

    int main() 
    {
        int a = 9;
        float b = 2;

        float ans = a / b;
        
        std::cout << ans << '\n';
        
        return 0;
    }
    ```

- #### VI.
    ```cpp
    #include <iostream>

    int main() 
    {
        float a = 9;
        float b = 2;

        int ans = a / b;
        
        std::cout << ans << '\n';
        
        return 0;
    }
    ```

---

#### Q6.

Write a program where the user is asked to enter their weight (in kg) and height (in meters). Print the value of BMI.

The formula for BMI is: `BMI = weight / (height * height)`

**Expected Output:**

```v
Enter weight (kg): 70
Enter height (m): 1.75

Your BMI: 22.86
```

---

#### Q7.

You are part of a school where students are grouped into divisions like A, B, C, etc.
Write a program that asks the user to enter the division they are in (as a single character), and then prints the entered division.

**Expected Output:**

```v
Enter your division (A, B, C, etc): B   // (user input) 
You are in Division B.
```

---

#### Q8.

Some forms ask you to mention whether you are a student or not.
Write a program that asks the user if they are a student, stores the answer, and displays the same.

Make sure your program works with both types of responses:
- 1 for Yes and 0 for No
- true for Yes and false for No

**Expected Output:**

```v
// case: 1
Are you a student? (1 for Yes, 0 for No): 1   // (user input) 
Student status: 1

// case: 2
Are you a student? (true for Yes, false for No): false   // (user input)
Student status: false
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
        bool b1 = 8;
        bool b2 = 0;
        
        std::cout << b1 << '\n';
        std::cout << b2 << '\n';
        
        return 0;
    }
    ```

- #### II.
    ```cpp
    #include <iostream>

    int main() 
    {
        bool b1 = true;
        bool b2 = false;
        
        std::cout << b1 << '\n';
        std::cout << b2 << '\n';
        
        return 0;
    }
    ```

- #### III.
    ```cpp
    #include <iostream>

    int main() 
    {
        char c1 = 'a';
        char c2 = 97;
        char c3 = '9';
        
        std::cout << c1 << '\n';
        std::cout << c2 << '\n';
        std::cout << c3 << '\n';
        
        return 0;
    }
    ```

- #### IV. _**(Adv.)**_
    ```cpp
    #include <iostream>

    int main() 
    {
        char c1 = 'ab';
        char c2 = '97';
        
        std::cout << c1 << '\n';
        std::cout << c2 << '\n';
        
        return 0;
    }
    ```

---

#### Q10.

Write a program that asks a user whether they want to give a tip at the restaurant or not and then prints their response on the bill.

(**NOTE**: User should be able to give their response in form of `true` or `false` keywords and the response should also be printed in that form.)

**Expected Output:**

```v
Would you like to give a tip: false   // (user input)

Is user willing to give a tip: false
```

---

#### Q11.

Predict the output of the following programs for the given input values.

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
    ```cpp
    #include <iostream>

    int main() 
    {
        bool b;
        
        std::cin >> std::boolalpha;

        std::cout << "Enter the value of b: ";
        std::cin >> b;

        std::cout << "The value of b: " << b;
        
        return 0;
    }
    ```

    If as input, user enters:
    <ul class="square-ul">
        <li><code>1</code></li>
        <li><code>true</code></li>
        <li><code>TRUE</code></li>
        <li><code>false</code></li>
        <li><code>8</code></li>
    </ul>

- #### II.
    ```cpp
    #include <iostream>

    int main() 
    {
        bool b;

        std::cout << "Enter the value of b: ";
        std::cin >> b;

        std::cout << std::boolalpha;

        std::cout << "The value of b: " << b;
        
        return 0;
    }
    ```

    If as input, user enters:
    <ul class="square-ul">
        <li><code>1</code></li>
        <li><code>true</code></li>
        <li><code>TRUE</code></li>
        <li><code>false</code></li>
        <li><code>8</code></li>
    </ul>

- #### III.
    ```cpp
    #include <iostream>

    int main()
    {
        std::cout << "Input a keyboard character: ";

        char ch;
        std::cin >> ch;
        std::cout << "You entered: " << ch << '\n';

        return 0;
    }
    ```

    If as input, user enters:
    <ul class="square-ul">
        <li><code>a</code></li>
        <li><code>97</code></li>
        <li><code>abc</code></li>
    </ul>

- #### IV. _**(Adv.)**_
    ```cpp
    #include <iostream>

    int main()
    {
        std::cout << "Input a keyboard character: ";

        char ch;
        std::cin >> ch;
        std::cout << "You entered: " << ch << '\n';

        std::cin >> ch;
        std::cout << "You entered: " << ch << '\n';

        return 0;
    }
    ```

    If as input, user enters:
    <ul class="square-ul">
        <li><code>a</code> and then <code>b</code></li>
        <li><code>abcd</code> and then <code>efgh</code></li>
    </ul>

---

#### Q12.

Write a program where the user is asked to enter a single character. Print the value of the character and its ASCII code, using `static_cast`.

**Expected Output:**

```v
Enter a single character: A   // (user input)
You entered 'A', which has an ASCII code 65.
```

---

#### Q13.

Consider the following program:

```cpp
#include <iostream>

int main()
{
    std::cout << "Enter a number: ";
    int x;
    std::cin >> x;
    std::cout << "You entered " << x << '\n';

    return 0;
}
```

The program expects you to enter an integer value, that user input value will be put into an integer variabled as `x`.

Predict the output that results when you enter the following types of input:

(**NOTE:** You have to predict the output result without running/executing the code.)

<ol class="upper-roman-ol bold-li">
    <li> A letter, such as h. </li>
    <li> A number with a fractional part (e.g. 3.2). Try numbers with fractional parts less than 0.5 and greater than 0.5 (e.g. 3.2 and 3.7). </li>
    <li> A small negative integer, such as -3. </li>
    <li> A word, such as Hello. </li>
    <li> A really big number (at least 300 crores i.e. 3000000000 (3 with nine zeros)). </li>
    <li> A small number followed by some letters, such as 123abc. </li>
    <li> A few letters followed by a small number, such as abc123. </li>
    <li> +5 (three spaces, followed by a plus symbol, and a 5). </li>
    <li> 5b6. </li>
</ol>