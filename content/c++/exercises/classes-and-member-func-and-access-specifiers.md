---
title: "Classes, Member Functions & Access Specifiers (OOP)"
draft: false
weight: 15
---

---

#### Q1.

Analyze the given programs below, predict their outputs and determine whether they follow the principles of object-oriented programming correctly.

- #### I.
```cpp
#include <iostream>

class Date
{
public:
    int m_day;
    int m_month;
    int m_year;
};

void printDate(Date date)
{
    std::cout << date.m_day << '/' << date.m_month << '/' << date.m_year;
}

int main()
{
    Date date{ 4, 10, 21 };
    printDate(date);

    return 0;
}
```

- #### II.
```cpp
#include <iostream>

class Date
{
public:
    int m_day;
    int m_month;
    int m_year;

    void printDate(Date date)
    {
        std::cout << date.m_day << '/' << date.m_month << '/' << date.m_year;
    }
};

int main()
{
    Date date{ 4, 10, 21 };
    date.printDate(date);

    return 0;
}
```

---

#### Q2.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
```cpp
#include <iostream>

class Message
{
    std::string msg_str = "Welcome!";

public:
    void greetUser()
    {
        std::cout << msg_str << '\n';
    }
};

int main()
{
    Message.greetUser();

    return 0;
}
```

- #### II.
```cpp
#include <iostream>

class Coordinate
{
public:
    int x;
    int y;

    void printCoordinates()
    {
        std::cout << "(x, y): " << x << ", " << y << '\n';
    }
}

int main()
{
    Coordinate coord = {4, 7};
    coord.printCoordinates();

    return 0;
}
```

- #### III.
```cpp
#include <iostream>

class Message
{
public:
    void greetUser()
    {
        std::cout << "Welcome!\n";
    }
};

int main()
{
    Message message;
    message.greetUser();

    return 0;
}
```

---

#### Q3.

A mobile shop wants to maintain information about different mobile phones.

Create a program that:
- Stores a phone's brand, model, and price.
- Allows updating the price.
- Displays the phone's details.

{{< collapsible-codesection title="Instructions" >}}
<div class="instruction-section-space"></div>

- Create a class for Mobile-Phone.
- The class should store the following details:
    - Brand name (e.g., Samsung, Apple)
    - Model name (e.g., Galaxy S25, iPhone 16)
    - Price (e.g., rs.65000, rs.80000)
- Add member functions to:
    - Set details of a phone.
    - Update the price of a phone.
    - Display the phone's details.
{{< /collapsible-codesection >}}

<br>

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
Phone Details:
Brand: Apple
Model: iPhone 16
Price: rs.85000

// After updating the price
Phone Details:
Brand: Apple
Model: iPhone 16
Price: rs.72500
```
{{< /collapsible-codesection >}}

---

#### Q4.

A library wants to keep track of the books available for readers.

Create a program that:
- Stores a book's title, author, ISBN number (International Standard Book Number), and availability status.
- Allows borrowing and returning books.
- Displays the book's details.

{{< collapsible-codesection title="Instructions" >}}
<div class="instruction-section-space"></div>

- Create a class for Book.
- The class should store the following details:
    - Title (e.g., "The Book of Mirdad", "Siddhartha")
    - Author (e.g., "Mikhail Naimy", "Hermann Hesse")
    - ISBN Number (e.g., "0743273565", "0061120084")
    - Availability Status (Available / Borrowed)
- Add member functions to:
    - Set details of a book.
    - Borrow a book (mark it as "Borrowed").
    - Return a book (mark it as "Available").
    - Display the book's details.
{{< /collapsible-codesection >}}

<br>

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
Book Details:  
Title: The Book of Mirdad  
Author: Mikhail Naimy
ISBN: 0743273565  
Status: Available  

// After borrowing the book  
Book Details:  
Title: The Book of Mirdad
Author: Mikhail Naimy
ISBN: 0743273565  
Status: Borrowed  

// After returning the book  
Book Details:  
Title: The Book of Mirdad
Author: Mikhail Naimy
ISBN: 0743273565  
Status: Available  
```
{{< /collapsible-codesection >}}

---

#### Q5.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
```cpp
#include <iostream>

class Date
{
    int m_day;
    int m_month;
    int m_year;

    void printDate()
    {
        std::cout << m_day << '/' << m_month << '/' << m_year;
    }
};


int main()
{
    Date date{ 4, 10, 21 };
    date.printDate();

    return 0;
}
```

- #### II.
```cpp
#include <iostream>

class Date
{
    int m_day;
    int m_month;
    int m_year;

public:
    void printDate()
    {
        std::cout << m_day << '/' << m_month << '/' << m_year;
    }
};


int main()
{
    Date date;

    date.m_day = 11;
    date.m_month = 02;
    date.m_year = 2025;

    date.printDate();

    return 0;
}
```

---

#### Q6.

Write a class named `Point3d` to represent a point in 3D cartesian coordinates. 

- #### I.
    The class should contain:
    - Three private member variables of type int named `m_x`, `m_y`, and `m_z`;
    - A public member function named `setValues()` that allows you to set values for `m_x`, `m_y`, and `m_z`.
    - A public member function named `print()` that prints the Point in the following format: (`m_x`, `m_y`, `m_z`).

    Make sure the following program executes correctly after writing your class:

    ```cpp
    int main()
    {
        Point3d point;
        point.setValues(1, 2, 3);

        point.print();
        std::cout << '\n';

        return 0;
    }
    ```

    This should print:

    ```v
    (1, 2, 3)
    ```

- #### II.

    - Add a function named `isEqual()` for checking if two points are equal or not, to your `Point3d` class. The following code should run correctly:

    ```cpp
    int main()
    {
        Point3d point1;
        point1.setValues(1, 2, 3);

        Point3d point2;
        point2.setValues(1, 2, 3);

        std::cout << "point 1 and point 2 are" << (point1.isEqual(point2) ? "" : " not") << " equal\n";

        Point3d point3;
        point3.setValues(3, 4, 5);

        std::cout << "point 1 and point 3 are" << (point1.isEqual(point3) ? "" : " not") << " equal\n";

        return 0;
    }
    ```

    This should print:

    ```v
    point 1 and point 2 are equal
    point 1 and point 3 are not equal
    ```