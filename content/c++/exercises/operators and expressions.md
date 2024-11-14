---
title: "Operators & Expressions"
draft: false
weight: 2
---

---

#### Q1.

Write a program that takes three integer numbers from user and then prints the average of those three numbers.

**Expected Output:**

```cpp
Enter three numbers: 5 9 16 // (user enters these numbers on console)
The average of 5, 9, and 16 is 10. // (5 + 9 + 16) / 3 = 10
```

---

#### Q2.

Write a program that takes an integer number from user and then prints the doubled & tripled value of that number.

**Expected Output:**

```cpp
Enter an integer: 4 // (user enters this number on console)
Double of 4: 8
Triple of 4: 12
```

---

#### Q3.

Write a program to calculate the perimeter and the area of a rectangle.
Take the length and the width of a rectangle from user and then prints the value of perimeter and area of that given rectangle.

(**NOTE:** You can safely assume that the value of length and width will always be an integer.)

**Expected Output:**

```cpp
Enter the length & width of a rectangle: 10 5 // (user enters these values on console)
Perimeter: 30
Area: 50

// Perimeter = 2 * (l + w) = 2 * (10 + 5) = 30
// Area = l * w = 10 * 5 = 50
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

#### Q5.

Write a program that takes the cost of any 3 food items from the user (e.g. a packet of biscuit, a packet of waffer, an icecream cone). Then 
- print the **Total Cost** of the items
- then calculate a 18% GST (tax) on the total cost of the items and print that **GST Amount**
- finally print the **Total Bill** amount, adding Total Cost & GST Amount

(**TIP:** Decide the data types of the variables needed in the program with proper logical consideration so that no data loss occur in the output.)

**Expected Output:**

```cpp
Enter the cost of 3 food items: 50 20 60 // (user enters these amounts on console)
Total Cost: 130
GST Amount : 23.4
Total Bill: 153.4

// Total Cost = 50 + 20 + 60 = 130
// GST Amount = (130 * 18) / 100 = 23.4
// Total Bill = 130 + 23.4 = 153.4
```