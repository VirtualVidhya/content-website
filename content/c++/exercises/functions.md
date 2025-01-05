---
title: "Functions"
draft: false
weight: 6
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
      void func()
      {
          std::cout << "func!\n";
      }

      func();

      return 0;
  }
  ```

- b)

  ```cpp
  #include <iostream>

  int main()
  {
      func();

      return 0;
  }

  void func()
  {
      std::cout << "func!\n";
  }
  ```

- c)

  ```cpp
  #include <iostream>

  void func()
  {
      std::cout << "func!\n";
  }

  int main()
  {
      func;

      return 0;
  }
  ```

- d)

  ```cpp
  #include <iostream>

  void funcB()
  {
      std::cout << "In funcB()\n";
  }

  void funcA()
  {
      std::cout << "In funcA()\n";

      funcB();
  }

  int main()
  {
      std::cout << "Starting main()\n";

      funcA();
      funcB();

      std::cout << "Ending main()\n";

      return 0;
  }
  ```

- e)

  ```cpp
  #include <iostream>

  void funcB()
  {
      std::cout << "In funcB()\n";
  }

  void funcA()
  {
      std::cout << "In funcA()\n";
  }

  int main()
  {
      std::cout << "Starting main()\n";

      funcA();
      funcB();

      std::cout << "Ending main()\n";

      return 0;
  }
  ```

---

#### Q2.

You need to display the same error message in multiple places in your program. Instead of writing the same std::cout statement repeatedly, design a reusable solution that makes your code more efficient and easier to maintain. Write a function that prints the error message whenever it is called.

**Expected Output:**

```v
Invalid command!

Invalid command!
```

---

#### Q3.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a)

  ```cpp
  #include <iostream>

  void getNumber()
  {
      int n = 10;

      return n;
  }

  int main()
  {
      getNumber();

      int num;

      std::cout << num << '\n';

      return 0;
  }
  ```

- b)

  ```cpp
  #include <iostream>

  int getNumber()
  {
      int n = 10;

      return n;
  }

  int main()
  {
      getNumber();

      int num;

      std::cout << num << '\n';

      return 0;
  }
  ```

- c)

  ```cpp
  #include <iostream>

  void printNumber()
  {
      int n = 10;

      std::cout << n;
  }

  int main()
  {
      std::cout << printNumber() << '\n';

      return 0;
  }
  ```

- d)

  ```cpp
  #include <iostream>

  char getChar()
  {
      char c = 'z';

      return c;
  }

  int main()
  {
      std::cout << getChar() << '\n';

      return 0;
  }
  ```

- e)

  ```cpp
  #include <iostream>

  int getNumber()
  {
      int n = 10;
  }

  int main()
  {
      std::cout << getNumber() << '\n';

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

  int getFirstNum()
  {
      return 7;
  }

  int getSecondNum()
  {
      return 9;
  }

  int main()
  {
      std::cout << getFirstNum() + getSecondNum() << '\n';

      return 0;
  }
  ```

- b)

  ```cpp
  #include <iostream>

  int getFirstNum()
  {
      return 7;
  }

  int getSecondNum()
  {
      return 9;
  }

  int main()
  {
      getFirstNum();
      getSecondNum();

      return 0;
  }
  ```

- c)

  ```cpp
  #include <iostream>

  int getFirstNum()
  {
      return 7;

      int getSecondNum()
      {
          return 9;
      }
  }

  int main()
  {
      std::cout << getFirstNum() + getSecondNum() << '\n';

      return 0;
  }
  ```

- d)

  ```cpp
  #include <iostream>

  int getNumbers()
  {
      return 7, 9;
  }

  int main()
  {
      std::cout << getNumbers() << '\n';

      return 0;
  }
  ```

- e)

  ```cpp
  #include <iostream>

  int getNumbers()
  {
      return 7;
      return 9;
  }

  int main()
  {
      std::cout << getNumbers() << '\n';
      std::cout << getNumbers() << '\n';

      return 0;
  }
  ```

---

#### Q5.

Imagine a scenario where your program needs to take an integer input from the user multiple times. Instead of writing the input logic
repeatedly, create a function to handle this task efficiently and reuse it whenever needed.

---

#### Q6.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- a)

  ```cpp
  #include <iostream>

  int add(float a, float b)
  {
      return a + b;
  }

  int main()
  {
      int s1 = add(9.5, 6.3);
      float s2 = add(5.6, 7.8);

      std::cout << "sum1: " << s1 << ", sum2: " << s2 << '\n';

      return 0;
  }
  ```

- b)

  ```cpp
  #include <iostream>

  float add(int a, int b)
  {
      return a + b;
  }

  int main()
  {
      int s1 = add(9.5, 6.3);
      float s2 = add(5.6, 7.8);

      std::cout << "sum1: " << s1 << ", sum2: " << s2 << '\n';

      return 0;
  }
  ```

- c)

  ```cpp
  #include <iostream>

  float add(float a, float b)
  {
      return a + b;
  }

  int main()
  {
      int s1 = add(9.5, 6.3);
      float s2 = add(5.6, 7.8);

      std::cout << "sum1: " << s1 << ", sum2: " << s2 << '\n';

      return 0;
  }
  ```

- d)
    ```cpp
    #include <iostream>

    void func(int x)
    {
        int y = 4;
        std::cout << "func: x = " << x << " y = " << y << '\n';

        x = 3;
        std::cout << "func: x = " << x << " y = " << y << '\n';
    }

    int main()
    {
        int x = 1;
        int y = 2;

        std::cout << "main: x = " << x << " y = " << y << '\n';

        func(x);

        std::cout << "main: x = " << x << " y = " << y << '\n';

        return 0;
    }
    ```

- e) **_(Adv.)_**
    ```cpp
    #include <iostream>

    void func(int x)
    {
        int x = 3;
        int y = 4;
        
        std::cout << "func: x = " << x << " y = " << y << '\n';
    }

    int main()
    {
        int x = 1;
        int y = 2;

        std::cout << "main: x = " << x << " y = " << y << '\n';

        func(x);

        std::cout << "main: x = " << x << " y = " << y << '\n';

        return 0;
    }
    ```

---

#### Q7.

Write a program that takes a person's height in feet as input and converts it to centimeters.

(**HINT:** Use functions for a reusable and scalable solution.)

**Expected Output:**

```v
Enter person's height (in ft): 5.4

Person's height (in cm): 164.592

// 1 ft = 30.48 cm
```

---

#### Q8.

Write a program that takes student marks as input, then gives the result grade accordingly.

- for more than 75 : A
- for in between 60 and 75 : B
- for in between 35 and 60 : C
- for less than 35 : F

(**HINT:** Use functions for a reusable and scalable solution.)

**Expected Output:**

```v
Enter student's marks (out of 100): 55

Student's grade: C
```

---

#### Q9.

Write a program that takes two alphabets as input, then tells which alphabet comes first as per the alphabetical order.

(**HINT:** Use functions for a reusable and scalable solution.)

**Expected Output:**

```v
Enter first alphabet: q
Enter second alphabet: g

Output: g

// because g comes before q as per alphabetical order
```

---

#### Q10.

Write a program to calculate simple interest (`i`) for principal amount (`p`), rate of interest (`r`), number of years (`n`) given by user.

(**HINT:** Use functions for a reusable and scalable solution.)

**Expected Output:**

```v
Enter principal amount: 50000
Enter rate of interest: 5
Enter no of years: 2

Simple Interest: 5000

// i = (p*r*n)/100
```