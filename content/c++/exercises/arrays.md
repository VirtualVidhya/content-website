---
title: "Arrays"
draft: false
weight: 10
---

---

#### Q1.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
  
    ```cpp
    #include <iostream>

    int main()
    {
        int arr1[0];
        
        std::cout << arr1[0] << '\n';

        int arr2[-1];

        std::cout << arr2[0] << '\n';

        return 0;
    }
    ```

- #### II.
  
    ```cpp
    #include <iostream>

    int main()
    {
        int length = 5;
        int arr[length] = {1, 3, 5, 7, 9};
        
        std::cout << arr[0] << '\n';

        return 0;
    }
    ```
    
- #### III.
  
    ```cpp
    #include <iostream>

    int main()
    {
        int arr[] = [1, 3, 5, 7, 9];
        
        std::cout << arr[2] << '\n';

        return 0;
    }
    ```

- #### IV.
  
    ```cpp
    #include <iostream>

    int main()
    {
        int arr = {1, 3, 5, 7, 9};
        
        std::cout << arr[3] << '\n';

        return 0;
    }
    ```

- #### V.
  
    ```cpp
    #include <iostream>

    int main()
    {
        int arr[] = {1, 3, 5, 7, 9};
        
        std::cout << arr[5] << '\n';

        return 0;
    }
    ```

---

#### Q2.

Create a simple program to store the prices of 5 grocery items in an array and then display the price of the 2nd item.

---

#### Q3.

Create a simple program to store the names of 5 grocery items in an array and then display the name of the last item.

---

#### Q4.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
  
    ```cpp
    #include <iostream>

    int main()
    {
        const int arr = {1, 3, 5, 7, 9};
        
        std::cout << arr[0] << '\n';

        arr[0] = 11;

        std::cout << arr[0] << '\n';

        return 0;
    }
    ```

- #### II.
  
    ```cpp
    #include <iostream>

    int main()
    {
        const int length = 5;
        int arr[length] = {1, 3, 5, 7, 9};
        
        std::cout << arr[0] << '\n';

        return 0;
    }
    ```

- #### III.
  
    ```cpp
    #include <iostream>

    int main()
    {
        int arr[] = {1, 3, 5, 7, 9};
        
        arr[5] = 11;

        std::cout << arr[5] << '\n';

        return 0;
    }
    ```

- #### IV.
  
    ```cpp
    #include <iostream>

    int main() 
    {
        int arr[5] = {1, 4, 9, 16};

        for(int i = 0; i < 5; i++)
        {
            std::cout << arr[i] << " ";
        }

        std::cout << '\n';

        arr[4] = 25;

        for(int i = 0; i < 5; i++)
        {
            std::cout << arr[i] << " ";
        }

        return 0;
    }
    ```

---

#### Q5.

Write a program that allows a teacher to enter a student's marks for 5 subjects, then displays all the marks, total and percentage.

**Expected Output:**

```v
// #input
Enter marks of subject1: 75
Enter marks of subject2: 65
Enter marks of subject3: 80
Enter marks of subject4: 67
Enter marks of subject5: 73

// #output
Marks:
subject1: 75
subject2: 65
subject3: 80
subject4: 67
subject5: 73

Total: 360
Percentage: 72
```

---

#### Q6.

Write a program that stores the temperatures (in celsius) of a city for a week (7 days) in an array.
Allow the user to enter the temperatures and then:
- Display all recorded temperatures.
- Find and display the average temperature.
- Identify and display the highest and lowest temperatures.

**Expected Output:**

```v
// #input
Enter day1 temp (°C): 31
Enter day2 temp (°C): 29
Enter day3 temp (°C): 33
Enter day4 temp (°C): 27
Enter day5 temp (°C): 30
Enter day6 temp (°C): 25
Enter day7 temp (°C): 28

// #output
Temperatures:
day1: 31°C
day2: 29°C
day3: 33°C
day4: 27°C
day5: 30°C
day6: 25°C
day7: 28°C

Average Temperature (°C): 29
Lowest Temperature of the week (°C): 25 on day6
Highest Temperature of the week (°C): 33 on day3
```

---

#### Q7.

A teacher wants to analyze how students performed in a multiple-choice test with 10 questions. 
The correct answers are stored in an array. The teacher then inputs a student's answers into another array. Your program should:
- Display how many answers are correct.
- Give the student's score. (Each correct answer is worth 10 marks.)

**Expected Output:**

```v
// correct answers
correct_answers: 'A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'A', 'B'

// #input
Enter student answers: A B D D A C C D B B

// #output
correct answers: 7
score: 70
```