---
title: "References"
draft: false
weight: 7
---

---

#### Q1.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 1;
        int& ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        ref = 0;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- b)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 1;
        int& ref;

        ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- c)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 1;
        int& ref = 0;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- d)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 1;
        int& ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        int y = 2;
        ref = y;
        y = 3;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        x = 4;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

---

#### Q2.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a)
  
    ```cpp
    #include <iostream>

    int main()
    {
        double x = 1;
        int& ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- b)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 1;
        double& ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- c)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;

        if (x == 5)
        {
            int& ref = x;
            
            std::cout << "x: " << x << ", ref: " << ref << '\n';
        }

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- d)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int var = 5;
        int& ref1 = x;
        int& ref2 = ref1;

        std::cout << "x: " << x << ", ref1: " << ref1 << ", ref2: " << ref2 << '\n';

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
        const int x = 1;
        int& ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- b)
  
    ```cpp
    #include <iostream>

    int main()
    {
        const int x = 5;
        const int& ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- c)
  
    ```cpp
    #include <iostream>

    int main()
    {
        const int x = 5;
        const int& ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        ref = 7;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- d)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;
        const int& ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        x = 7;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- e)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;
        const int& ref = x;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        ref = 6;

        std::cout << "x: " << x << ", ref: " << ref << '\n';

        return 0;
    }
    ```

- f)
  
    ```cpp
    #include <iostream>

    int main()
    {
        const double& r1 = 5;

        std::cout << r1 << '\n';

        char c = 'a';
        const int& r2 = c;

        std::cout << r2 << '\n';

        return 0;
    }
    ```

---

#### Q4.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a)
  
    ```cpp
    #include <iostream>

    void func(int y)
    {
        std::cout << "func: y = " << y << '\n';
    }

    int main()
    {
        int x = 5;
        
        func(x);

        std::cout << "main: x = " << x << ", y = " << y << '\n';

        return 0;
    }
    ```

- b)
  
    ```cpp
    #include <iostream>

    void incrementVal(int x)
    {
        x = x*4 + 5;
    }

    int main()
    {
        int x = 7;

        std::cout << "Before incrementing: " << x << '\n';

        incrementVal(x);

        std::cout << "After incrementing: " << x << '\n';

        return 0;
    }
    ```

- c)
  
    ```cpp
    #include <iostream>

    int incrementVal(int x)
    {
        x = x*4 + 5;

        return x;
    }

    int main()
    {
        int x = 7;

        std::cout << "Before incrementing: " << x << '\n';

        incrementVal(x);

        std::cout << "After incrementing: " << x << '\n';

        return 0;
    }
    ```

- d)
  
    ```cpp
    #include <iostream>

    int incrementVal(int x)
    {
        x = x*4 + 5;

        return x;
    }

    int main()
    {
        int x = 7;

        std::cout << "Before incrementing: " << x << '\n';

        x = incrementVal(x);

        std::cout << "After incrementing: " << x << '\n';

        return 0;
    }
    ```

- e)
  
    ```cpp
    #include <iostream>

    void incrementVal(int& x)
    {
        x = x*4 + 5;
    }

    int main()
    {
        int x = 7;

        std::cout << "Before incrementing: " << x << '\n';

        incrementVal(x);

        std::cout << "After incrementing: " << x << '\n';

        return 0;
    }
    ```

---

#### Q5.

Consider the following program:
  
```cpp
#include <iostream>

void printAddresses(int val, int& ref)
{
    std::cout << "The address of the value parameter is: " << &val << '\n';
    std::cout << "The address of the reference parameter is: " << &ref << '\n';
}

int main()
{
    int x = 5;
    std::cout << "The address of x is: " << &x << '\n';
    printAddresses(x, x);

    return 0;
}
```

Which of the following statement is correct for the above program?

(**NOTE:** You have to predict this result without running/executing the code.)

1. The address value for all `x`, `val`, `ref` will be same.
2. The address value for `x` and `ref` will be same but for `val` will be different.
3. The address value for all `x`, `val`, `ref` will be different.
4. This cannot be predetermined.

---

#### Q6.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a)
  
    ```cpp
    #include <iostream>

    void printValue(int& y)
    {
        std::cout << y << '\n';
    }

    int main()
    {
        int x = 5;
        printValue(x);

        const int z = 5;
        printValue(z);

        printValue(5);

        return 0;
    }
    ```

- b)
  
    ```cpp
    #include <iostream>

    void printRef(const int& y)
    {
        std::cout << y << '\n';
    }

    int main()
    {
        int x = 5;
        printRef(x);

        const int z = 5;
        printRef(z);

        printRef(5);

        return 0;
    }
    ```

- c)
  
    ```cpp
    #include <iostream>

    void printVal(double d)
    {
        std::cout << d << '\n';
    }

    void printRef(const double& d)
    {
        std::cout << d << '\n';
    }

    int main()
    {
        int x = 5;

        printVal(x);
        printRef(x);

        return 0;
    }
    ```

- d)
  
    ```cpp
    #include <iostream>

    void printVal(int i)
    {
        std::cout << i << '\n';
    }

    void printRef(const int& i)
    {
        std::cout << i << '\n';
    }

    int main()
    {
        double x = 5.6;

        printVal(x);
        printRef(x);

        return 0;
    }
    ```

---

#### Q7.

Inside a text-based adventure game, we have a player whose health is full (100) when the game starts, now the player can get damaged on which his health will get decreased.
So write a program to damage the player (i.e. decrease his health by amount 15 each time) using a function.

**Expected Output:**

```
THE GAME STARTS!

The player got damanged!
The updated player health: 75

The player got damanged!
The updated player health: 60
```

---

#### Q8.

Write a program to swap the values of two variables using a function.

**Expected Output:**

```cpp
Enter the value of a: 8
Enter the value of b: 6

Values after swapping:
a: 6
b: 8
```