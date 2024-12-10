---
title: "Operators & Expressions"
draft: false
weight: 3
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
        int a = 3;
        
        a += 1;
        std::cout << a << '\n';

        a /= 2;
        std::cout << a << '\n';
        
        return 0;
    }
    ```

- b) 
    ```cpp
    #include <iostream>

    int main() 
    {
        std::cout << 6.0f % 2 << '\n';
        
        return 0;
    }
    ```

- c) 
    ```cpp
    #include <iostream>

    int main() 
    {
        std::cout << 6 % 2 << '\n';
        
        return 0;
    }
    ```

- d) 
    ```cpp
    #include <iostream>

    int main() 
    {
        std::cout << 6 + 5 * 4 % 3 << '\n';
        
        return 0;
    }
    ```

- e) 
    ```cpp
    #include <iostream>

    int main() 
    {
        int x = 5;
        int y = 5;

        std::cout << x << ' ' << y << '\n';
        std::cout << ++x << ' ' << --y << '\n';
        std::cout << x << ' ' << y << '\n';
        std::cout << x++ << ' ' << y-- << '\n';
        std::cout << x << ' ' << y << '\n';

        y = ++x;
        std::cout << x << ' ' << y << '\n';

        x = y--;
        std::cout << x << ' ' << y << '\n';

        y = x++;
        std::cout << x << ' ' << y << '\n';
        
        return 0;
    }
    ```

- f) 
    ```cpp
    #include <iostream>

    int main() 
    {
        int x = 10;
        int y = 5;

        std::cout << std::boolalpha;

        std::cout << ((x - 3) == (y + 2)) << '\n';
        std::cout << ((x - 5) >= (y + 2)) << '\n';
        std::cout << ((x - 4) != (y + 2)) << '\n';
        std::cout << !(y - 5) << '\n';
        
        return 0;
    }
    ```

- g) _**(Adv.)**_
    ```cpp
    #include <iostream>

    int main()
    {
        double d1 = (100.0 - 99.99);
        double d2 = (10.0 - 9.99);

        std::cout << (d1 == d2) << '\n';
        std::cout << (d1 < d2) << '\n';
        std::cout << (d1 > d2) << '\n';

        return 0;
    }
    ```

- h) 
    ```cpp
    #include <iostream>

    int main() 
    {
        int x = 10;
        int y = 5;
        int z = 15;

        std::cout << std::boolalpha;

        std::cout << ((x > 20) && (y < 10)) << '\n';
        std::cout << ((x > 20) || (y < 10)) << '\n';
        
        return 0;
    }
    ```

- i) 
    ```cpp
    #include <iostream>

    int main() 
    {
        bool w = true;
        bool x = false;
        bool y = false;
        bool z = false;
        
        std::cout << std::boolalpha;
        
        std::cout << (w || x || y && z) << '\n';
        std::cout << ((w || x || y) && z) << '\n';
        std::cout << (w || x || y) && z << '\n';
        
        return 0;
    }
    ```

---

#### Q2.

Write a program that takes three integer numbers from user and then prints the average of those three numbers.

**Expected Output:**

```cpp
Enter three numbers: 5 9 16 // (user enters these numbers on console)
The average of 5, 9, and 16 is 10. // (5 + 9 + 16) / 3 = 10
```

---

#### Q3.

Write a program to calculate the perimeter and the area of a rectangle.
Take the length and the width of a rectangle from user and then prints the value of perimeter and area of that given rectangle.

(**NOTE:** You can safely assume that the value of length and width will always be an integer.)

**Expected Output:**

```cpp
Enter the length & width of a rectangle: 10 5 // (user input)
Perimeter: 30
Area: 50

// Perimeter = 2 * (l + w) = 2 * (10 + 5) = 30
// Area = l * w = 10 * 5 = 50
```

---

#### Q4.

Write a program that takes the cost of any 3 food items from the user (e.g. a packet of biscuit, a packet of waffer, an icecream cone). Then 
- print the **Total Cost** of the items
- then calculate a 18% GST (tax) on the total cost of the items and print that **GST Amount**
- finally print the **Total Bill** amount, adding Total Cost & GST Amount

(**TIP:** Decide the data types of the variables needed in the program with proper logical consideration so that no data loss occur in the output.)

**Expected Output:**

```cpp
Enter the cost of 3 food items: 50 20 60 // (user input)
Total Cost: 130
GST Amount : 23.4
Total Bill: 153.4

// Total Cost = 50 + 20 + 60 = 130
// GST Amount = (130 * 18) / 100 = 23.4
// Total Bill = 130 + 23.4 = 153.4
```

---

#### Q5.

What will be the output of the following program?

```cpp
#include <iostream>

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

#### Q6.

What will be the output of the following program?

```cpp
#include <iostream>

int main()
{
    int age = 5;
    const int constAge = age;

    age = 7;

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

#### Q7.

Write a program that takes a value of radius from user, then find the circumference and area of a circle for a given radius.

(**NOTE:** Take 3.14 as the value of pi.)

**Expected Output:**

```cpp
Enter the value of radius: 5
Circumference: 31.4
Area: 78.5

// Circumference = 2 * pi * r = 2 * 3.14 * 5 = 31.4
// Area = pi * r * r = 3.14 * 5 * 5 = 78.5
```

---

#### Q8.

Write a program that takes a value of temperature in Celsius from user, then convert it into Kelvin and Fahrenheit.

**Expected Output:**

```cpp
Enter the value of temperature in Celsius: 30
temperature in Kelvin: 303
temperature in Fahrenheit: 86

// Kelvin = Celsius + 273 = 30 + 273 = 303
// Fahrenheit = (9/5) * Celsius + 32 = (9/5) * 30 + 32 = 86
```

---

#### Q9.

Population growth can be calculated by looking at the change in population over time. The formula for population growth is below

`P = P0 x e^rt`

Where, 
- `P` = Total population after time t
- `P0` = Starting population
- `r` = Percentage rate of the growth
- `T` = time in years or hours
- `e` = Euler number 2.71828

so, calculate the current total population for P0 = 140 crores, r = 0.65 %, T = 5 years

