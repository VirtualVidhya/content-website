---
title: "Strings"
draft: false
weight: 7
---

---

#### Q1.

What will be the output of the following programs for the below mentioned inputs?

**Input Test Cases:**

```v
- name: Lagan
  color: black

- name: Lagan Khelaiya
  color: black
```
<br>

(**NOTE:** You have to predict the output result without running/executing the code.)

- a)
  
    ```cpp
    #include <iostream>
    #include <string>

    int main()
    {
        std::cout << "Enter your full name: ";
        std::string name;
        std::cin >> name;

        std::cout << "Enter your favorite color: ";
        std::string color;
        std::cin >> color;

        std::cout << "Your name is " << name << " and your favorite color is " << color << '\n';

        return 0;
    }
    ```

- b)
  
    ```cpp
    #include <iostream>
    #include <string>

    int main()
    {
        std::cout << "Enter a number: ";
        int number;
        std::cin >> number;

        std::cout << "Now enter your name: ";
        std::string name;
        std::getline(std::cin, name);

        std::cout << "Hello, " << name << ", you entered " << choice << '.\n';

        return 0;
    }
    ```

- c)
  
    ```cpp
    #include <iostream>
    #include <string>

    int main()
    {
        std::cout << "Enter your full name: ";
        std::string name;
        std::getline(std::cin >> std::ws, name);

        std::cout << "Enter your favorite color: ";
        std::string color;
        std::getline(std::cin >> std::ws, color);

        std::cout << "Your name is " << name << " and your favorite color is " << color << '\n';

        return 0;
    }
    ```

---

#### Q2.

Write a program that asks the user to enter their full name and their age. As output, tell the user the sum of their age and the number of characters in their name.

(**NOTE:** For simplicity, count any spaces in the name as a character.)

**Expected Output:**

```v
Enter your full name: Magan Chhapri
Enter your age: 32

Magan Chhapri's age + length of name is: 40
```

---

#### Q3.

Write a program that asks for the full name and age of two people, then prints which person is older.

(**NOTE:** Use functions for a reusable and scalable solution.)

```v
Enter the name of person 1: Gagan Rangeela
Enter the age of Gagan Rangeela: 37

Enter the name of person 2: Chhagan Sureela
Enter the age of Chhagan Sureela: 44

Chhagan Sureela (age 44) is older than Gagan Rangeela (age 37).
```