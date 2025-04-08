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