---
title: "Enums"
draft: false
weight: 13
---

---

#### Q1.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.

```cpp
enum Color
{
    red,
    green,
    blue,
};

int main()
{
    Color apple { red };
    Color shirt { green };

    Color socks { white };
    Color hat { 2 };

    return 0;
}
```

- #### II.

```cpp
enum Pet
{
    cat,
    dog,
    pig,
    whale,
};

enum Color
{
    black,
    red,
    blue,
};

int main()
{
    Pet myPet { black };
    Color shirt { pig };

    return 0;
}
```

- #### III.

```cpp
#include <iostream>

enum Color
{
    red,
    green,
    blue,
};

enum Feeling
{
    happy,
    tired,
    blue,
};

int main()
{
    Color apple { red };
    Feeling my_feeling { happy };

    return 0;
}
```

- #### IV.

```cpp
namespace Color
{
    enum Color
    {
        red,
        green,
        blue,
    };
}

namespace Feeling
{
    enum Feeling
    {
        happy,
        tired,
        blue,
    };
}

int main()
{
    Color::Color paint { Color::blue };
    Feeling::Feeling my_feeling { Feeling::blue };

    return 0;
}
```

---

#### Q2.

Define an unscoped enumerated type named `MonsterType` to choose between the following monster races: orc, goblin, troll, ogre, and skeleton. Then define a variable named `troll` of type `MonsterType` and initialize it with the appropriate enumerator.

---

#### Q3.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.

```cpp
#include <iostream>

enum Color
{
    red,
    green,
    blue,
};

int main()
{
    Color shirt { blue };

    if (shirt == blue)
    {
        std::cout << "Your shirt is blue!";
    }
    else
    {
        std::cout << "Your shirt is not blue!";
    }

    return 0;
}
```

- #### II.

```cpp
#include <iostream>

enum Color
{
    black = -3,
    red,
    blue,
    green = 5,
    white,
};

int main()
{
    Color shirt1 { blue };
    Color shirt2 { white };

    std::cout << "Your shirt1 is " << shirt1 << '\n';
    std::cout << "Your shirt2 is " << shirt2 << '\n';

    return 0;
}
```

- #### III.

```cpp
#include <iostream>

enum Color
{
    black,
    red,
    blue = 5,
    green = 5,
    white,
};

int main()
{
    Color shirt1 { blue };
    Color shirt2 { green };

    if (shirt1 == shirt2)
    {
        std::cout << "Your shirts are the same color!\n";
    }
    else
    {
        std::cout << "Your shirts are not the same color!\n";
    }

    return 0;
}
```

- #### IV.

```cpp
#include <iostream>

enum Color
{
    black,
    red,
    blue,
    green,
    white,
};

int main()
{
    Color shirt { blue };

    std::cout << "Your shirt is " << shirt << '\n';

    return 0;
}
```

---

#### Q4.

Create an enum called Day that represents days of the week (Monday to Sunday). Then, write a program where the user enters a number (1 to 7), and the program prints the corresponding day using the enum.

**Expected Output:**

```v
Enter a number (1-7): 3
The day is Wednesday.
```

---

#### Q5.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.

```cpp
#include <iostream>

enum Pet
{
    cat,
    dog,
    pig,
    whale,
};

int main()
{
    Pet pet { 2 };

    std::cout << "Your pet is: " << pet << '\n';
    
    pet = 3;

    std::cout << "Your pet is: " << pet << '\n';

    return 0;
}
```

- #### II.

```cpp
#include <iostream>

enum Pet
{
    cat,
    dog,
    pig,
    whale,
};

int main()
{
    Pet pet { static_cast<Pet>(2) };

    std::cout << "Your pet is: " << pet << '\n';

    return 0;
}
```

- #### III.

```cpp
#include <iostream>

enum Pet
{
    cat,
    dog,
    pig,
    whale,
};

int main()
{
    Pet pet { pig };
    std::cin >> pet;

    return 0;
}
```

---

#### Q6.

Create a simple program for a restaurant that allows users to view items from a small menu based on the type of food they’re interested in. Each item in the menu has a name, a price, and belongs to a specific category like Starter, Main Course, Dessert, or Beverage.

{{< collapsible-codesection title="Instructions" >}}
<div class="instruction-section-space"></div>

- The menu should contain at least 5 predefined food items, each with:
    - A name (e.g., "Paneer Tikka")
    - A category (e.g., Starter, Main Course, etc.)
    - A price (e.g., ₹250)
- When the program runs, it should:
    - Ask the user which category of food they want to view.
    - Update the price of a phone.
    - Based on the user’s choice, display all matching items from that category with their name and price.
{{< /collapsible-codesection >}}

<br>

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
What would you like to eat? 
(0 - Starter, 1 - Main Course, 2 - Dessert, 3 - Beverage): 1

Items in Main Course:
- Butter Chicken (₹320)
- Veg Biryani (₹220)
```
{{< /collapsible-codesection >}}

---

#### Q7.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.

```cpp
#include <iostream>

enum Pet
{
    cat,
    dog,
    pig,
    whale,
};

int main()
{
    Pet pet = dog + 3;
    
    std::cout << "Your pet is: " << pet << '\n';

    pet = cat + pig;

    std::cout << "Your pet is: " << pet << '\n';


    return 0;
}
```

- #### II.

```cpp
#include <iostream>

enum Pet
{
    cat,
    dog,
    pig,
    whale,
};

int main()
{
    Pet pet = static_cast<Pet>(dog + 3);
    
    std::cout << "Your pet is: " << pet << '\n';

    pet = static_cast<Pet>(cat + pig);

    std::cout << "Your pet is: " << pet << '\n';


    return 0;
}
```

- #### III.

```cpp
#include <iostream>

enum Day
{
    MON, TUE, WED, THUS, FRI, SAT, SUN
};

int main()
{
    for (Day day = MON; day <= SUN; day = static_cast<Day>(day + 1))
    {
        std::cout << day << ' ';
    }

    std::cout << '\n';

    return 0;
}
```

---

#### Q8.

A car rental service offers four types of cars: Sedan, SUV, Hatchback, and Luxury. Each type has a fixed rental price per day. A customer wants to rent a car and needs to know the total cost based on the car type they choose and the number of days they want it for.

{{< collapsible-codesection title="Instructions" >}}
<div class="instruction-section-space"></div>

- Each car type has a fixed rental cost per day:
    - Sedan → ₹2000/day
    - SUV → ₹3000/day
    - Hatchback → ₹1500/day
    - Luxury → ₹5000/day
- Ask the user:
    - What type of car they want to rent.
    - For how many days they want to rent it.
- Then display the final total cost they need to pay.
{{< /collapsible-codesection >}}

<br>

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
Available car types:
1. Sedan 2. SUV 3. Hatchback 4. Luxury

Enter the number for the car type you want to rent: 2
Enter the number of days: 4

You selected SUV for 4 days.
Rental cost per day: ₹3000
Total cost: ₹12000
```
{{< /collapsible-codesection >}}

---

#### Q9.

A small store wants a basic weekly reporting system to keep track of its sales performance. The system should ask the user to enter the sales amount for each day of the week, and then provide a summary report that shows which day had the highest and lowest sales, along with the average sales for the week.

{{< collapsible-codesection title="Instructions" >}}
<div class="instruction-section-space"></div>

- Take input for sales on each day of the week (Monday to Sunday) from the user.
- Store the sales data using a suitable data structure.
- After input, generate a sales report with:
    - The day with the highest sales
    - The day with the lowest sales
    - The average sales (up to 2 decimal places)
{{< /collapsible-codesection >}}

<br>

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
Enter sales for Monday: 1200  
Enter sales for Tuesday: 1500  
Enter sales for Wednesday: 1000  
Enter sales for Thursday: 1800  
Enter sales for Friday: 1700  
Enter sales for Saturday: 2200  
Enter sales for Sunday: 900  

Sales Report:
Highest sales: Saturday (₹2200)  
Lowest sales: Sunday (₹900)  
Average sales: ₹1471.43
```
{{< /collapsible-codesection >}}