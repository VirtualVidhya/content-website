---
title: "Data types"
draft: false
weight: 2
---

---

#### Q1.

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

- A letter, such as h.
- A number with a fractional part (e.g. 3.2). Try numbers with fractional parts less than 0.5 and greater than 0.5 (e.g. 3.2 and 3.7).
- A small negative integer, such as -3.
- A word, such as Hello.
- A really big number (at least 3 billion (300 crores) i.e. 3000000000 (3 with nine zeros)).
- A small number followed by some letters, such as 123abc.
- A few letters followed by a small number, such as abc123.
- +5 (three spaces, followed by a plus symbol, and a 5).
- 5b6.

---

#### Q2.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a) 
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

- b) 
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

- c) 
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

- d) 
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

- e) 
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

- f) 
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

#### Q3.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a) 
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

- b) 
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

- c) 
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

- d) 
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

#### Q4.

Write a program that asks a user whether they want to give a tip at the restaurant or not and then prints their response on the bill.

(**NOTE**: User should be able to give their response in form of `true` or `false` keywords and the response should also be printed in that form.)

**Expected Output:**

```v
Would you like to give a tip: false // (user input)

Is user willing to give a tip: false
```

---

#### Q5.

Predict the output of the following programs for the given input values.

(**NOTE:** You have to predict the output result without running/executing the code.)

- a) 
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
    - `1`
    - `true`
    - `TRUE`
    - `false`
    - `8`

- b) 
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
    - `1`
    - `true`
    - `TRUE`
    - `false`
    - `8`

- c)
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
    - `a`
    - `97`
    - `abc`

- d) _**(Adv.)**_
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
    - `a` and then `b`
    - `abcd` and then `efgh`

---

#### Q6.

Write a program where the user is asked to enter a single character. Print the value of the character and its ASCII code, using `static_cast`.

**Expected Output:**

```v
Enter a single character: A
You entered 'A', which has an ASCII code 65.
```