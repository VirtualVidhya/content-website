---
title: "Pointers"
draft: false
weight: 8
---

---

#### Q1.

Create a `int` variable initialised with some value, then print -
- value of the variable using its identifier
- memory address of the variable using address-of operator (`&`)
- value at the memory address of the variable using deference operator (`*`)

**Expected Output:**

```v
// int variable initialized with value 5

value of var (using variable identifier) : 5
address of var (using address-of operator) : 0027FEA0
value at the address of var (using dereference operator) : 5
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
        int x = 5;

        int* ptr = x;

        std::cout << "x: " << x << ", ptr: " << ptr << '\n';

        return 0;
    }
    ```

- b)

    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;

        int* ptr;

        std::cout << "x: " << x << ", ptr: " << ptr << '\n';

        return 0;
    }
    ```

- c)

    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;

        int* ptr = 5;

        std::cout << "x: " << x << ", ptr: " << ptr << '\n';

        return 0;
    }
    ```

- d)

    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;

        int* ptr = 0x0012FF7C;

        std::cout << "x: " << x << ", ptr: " << ptr << '\n';

        return 0;
    }
    ```

- e)
  
    ```cpp
    #include <iostream>

    int main()
    {
        double x = 5.5;

        int* ptr = &x;

        std::cout << "x: " << x << ", ptr: " << ptr << '\n';

        return 0;
    }
    ```

---

#### Q3.

Declare a `int` variable initialised with some value, then create a pointer to that variable, now print -
- value of the variable using its identifier
- memory address of the variable using address-of operator on it
- value of the pointer
- value at the address pointed by the pointer

**Expected Output:**

```v
// int variable initialized with value 5 
// a pointer declared pointing to that variable

value of var : 5
address of var (using address-of operator) : 0027FEA0
value of ptr : 0027FEA0
value at the address pointed by the pointer : 5
```

---

#### Q4.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a)

    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;
        int* ptr = &x;

        std::cout << x << " " << *ptr << '\n';

        int y = 6;
        *ptr = &y;

        std::cout << x << *ptr << '\n';

        return 0;
    }
    ```

- b)

    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;
        int* ptr = &x;

        std::cout << x << " " << *ptr << '\n';

        int y = 6;
        *ptr = y;

        std::cout << x  << " " << *ptr << '\n';

        return 0;
    }
    ```

- c)

    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;
        int* ptr = &x;

        std::cout << x << " " << *ptr << '\n';

        int y = 6;
        ptr = y;

        std::cout << x  << " " << *ptr << '\n';

        return 0;
    }
    ```

- d)

    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;
        int* ptr = &x;

        std::cout << x << " " << *ptr << '\n';

        int y = 6;
        ptr = &y;

        std::cout << x  << " " << *ptr << '\n';

        return 0;
    }
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
        int x = 5;
        int& ref = x;
        int* ptr = &x;

        std::cout << x << " " << ref << " " << *ptr << '\n';

        x = 6;
        std::cout << x << " " << ref << " " << *ptr << '\n';

        ref = 7;
        std::cout << x << " " << ref << " " << *ptr << '\n';

        *ptr = 8;
        std::cout << x << " " << ref << " " << *ptr << '\n';

        return 0;
    }
    ```

- b)

    ```cpp
    // assume int is 4 bytes and the program is running on a 64-bit machine

    #include <iostream>

    int main()
    {
        int x = 7; // assume x is getting stored at memory-address: 0012FF60
        int y = 3; // assume y is getting stored at memory-address: 0012FF54

        int* ptr{ &x };

        std::cout << "&x: " << &x << '\n';
        std::cout << "x: " << x << '\n';
        std::cout << "ptr: " << ptr << '\n';
        std::cout << "*ptr*: " << *ptr << '\n';
        std::cout << '\n';

        *ptr = 9;

        std::cout << "&x: " << &x << '\n';
        std::cout << "x: " << x << '\n';
        std::cout << "ptr: " << ptr << '\n';
        std::cout << "*ptr*: " << *ptr << '\n';
        std::cout << '\n';

        ptr = &y;

        std::cout << "&x: " << &x << '\n';
        std::cout << "x: " << x << '\n';
        std::cout << "ptr: " << ptr << '\n';
        std::cout << "*ptr*: " << *ptr << '\n';
        std::cout << '\n';

        std::cout << "sizeof ptr: " << sizeof(ptr) << '\n';
        std::cout << "sizeof *ptr: " << sizeof(*ptr) << '\n';

        return 0;
    }
    ```

---

#### Q6.

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

#### Q7.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;
        int* ptr = &x;

        std::cout << *ptr << '\n';

        if (x > 0)
        {
            int y = 6;
            ptr = &y;

            std::cout << *ptr << '\n';
        }

        std::cout << *ptr << '\n';

        return 0;
    }
    ```

- b)
  
    ```cpp
    #include <iostream>

    int main()
    {
        int x = 5;
        int* ptr;

        std::cout << *ptr << '\n';

        return 0;
    }
    ```