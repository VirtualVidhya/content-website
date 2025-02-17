---
title: "Access functions, Constructor & Destructor (OOP)"
draft: false
weight: 14
---

---

#### Q1.

A bank wants to manage customer accounts efficiently.

Create a program that:

- Store an account holder’s name, account number, and balance.
- Allow depositing and withdrawing money.
- Prevent withdrawals if the balance is insufficient.
- Display the account details.

{{< collapsible-codesection title="Instructions" >}}
- Create a class for BankAccount to store:
    - Account Holder's Name (e.g., Ramesh Panipuriwala)
    - Account Number (e.g., 78563249)
    - Balance (e.g., rs.50000)

- Implement member functions to:
    - Set account details.
    - Deposit money into the account.
    - Withdraw money (if there is enough balance).
    - Display the account details.
{{< /collapsible-codesection >}}

<br>

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
// Before transactions:
Account Details:  
Name: Ramesh Panipuriwala
Account Number: 78563249
Balance: rs.50000  

// After depositing rs.10000:
Account Details:  
Name: Ramesh Panipuriwala
Account Number: 123456789  
Balance: rs.60000  

// After withdrawing rs.20000:
Account Details:  
Name: Ramesh Panipuriwala
Account Number: 123456789  
Balance: rs.40000  

// Attempting to withdraw rs.50000 (insufficient balance):
Insufficient balance! Withdrawal failed.
```
{{< /collapsible-codesection >}}

---

#### Q2.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
```cpp
#include <iostream>

class Foo
{
private:
    int m_x;
    int m_y;

public:
    Foo(int x, int y)
    {
        std::cout << "Foo(" << x << ", " << y << ") constructed\n";
    }

    void print()
    {
        std::cout << "Foo(" << m_x << ", " << m_y << ")\n";
    }
};

int main()
{
    Foo foo{6, 7};
    foo.print();

    return 0;
}
```

- #### II.
```cpp
#include <iostream>

class Foo
{
private:
    int m_x;
    int m_y;

public:
    Foo(int x, int y)
    {
        m_x = x;
        m_y = y;
    }

    void print()
    {
        std::cout << "Foo(" << m_x << ", " << m_y << ")\n";
    }
};

int main()
{
    Foo foo{5, true};

    return 0;
}
```

- #### III.
```cpp
#include <iostream>

class Foo
{
private:
    int m_x;
    int m_y;

public:
    Foo(int x, int y)
        : m_x{ x }
        , m_y{ y }
    {
        std::cout << "Foo(" << x << ", " << y << ") constructed\n";
    }

    void print()
    {
        std::cout << "Foo(" << m_x << ", " << m_y << ")\n";
    }
};

int main()
{
    Foo foo{6, 7};
    foo.print();

    return 0;
}
```

- #### IV.
```cpp
#include <iostream>

class Foo
{
private:
    int m_x;
    int m_y;

public:
    Foo(int x, int y)
        : m_y{ x }
        , m_x{ m_y }
    {
        std::cout << "Foo(" << x << ", " << y << ") constructed\n";
    }

    void print()
    {
        std::cout << "Foo(" << m_x << ", " << m_y << ")\n";
    }
};

int main()
{
    Foo foo{6, 7};
    foo.print();

    return 0;
}
```

- #### V.
```cpp
#include <iostream>

class Foo
{
private:
    int m_x;
    int m_y = 2;
    int m_z;

public:
    Foo(int x)
        : m_x{ x }
    {
        std::cout << "Foo constructed\n";
    }

    void print() const
    {
        std::cout << "Foo(" << m_x << ", " << m_y << ", " << m_z << ")\n";
    }
};

int main()
{
    Foo foo{6};
    foo.print();

    return 0;
}
```

---

#### Q3.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I.
```cpp
#include <iostream>

class Foo
{
    Foo()
    {
        std::cout << "Foo default constructed\n";
    }
};

int main()
{
    Foo foo;

    return 0;
}
```

- #### II.
```cpp
#include <iostream>

class Foo
{
private:
    int m_x;
    int m_y;

public:
    Foo(int x = 0, int y = 0)
        : m_x{x}
        , m_y{y}
    {
        std::cout << "Foo(" << m_x << ", " << m_y << ") constructed\n";
    }
};

int main()
{
    Foo foo1;
    Foo foo2{6, 7};

    return 0;
}
```

- #### III.
```cpp
#include <iostream>

class Foo
{
private:
    int m_x{};
    int m_y{};

public:
    Foo()
    {
        std::cout << "Foo constructed\n";
    }

    Foo(int x = 0, int y = 0)
        : m_x{ x }
        , m_y{ y }
    {
        std::cout << "Foo(" << m_x << ", " << m_y << ") constructed\n";
    }
};

int main()
{
    Foo foo1;
    Foo foo2{6, 7};

    return 0;
}
```

- #### IV.
```cpp
#include <iostream>

class Foo
{
private:
    int m_x{};
    int m_y{};

public:
    Foo(int x, int y)
        : m_x{ x }
        , m_y{ y }
    {
        std::cout << "Foo(" << m_x << ", " << m_y << ") constructed\n";
    }
};

int main()
{
    Foo foo;

    return 0;
}
```

---

#### Q4.

A Smart Thermostat is installed in a home to maintain a comfortable and safe room temperature.

- The temperature should always stay within a reasonable limit to ensure comfort and efficiency (i.e. 10°C to 40°C).
- Users can check the current temperature and set a new one.
- If the user tries to set a temperature outside the allowed range, the system should automatically adjust it to the nearest valid temperature and warn the user.
- The thermostat should indicate whether heating or cooling is active based on the following logic:
  - If the temperature is below 20°C, Heating mode should turn ON.
  - If the temperature is above 30°C, Cooling mode should turn ON.
  - If the temperature is between 20°C and 30°C, the room is comfortable, so no heating or cooling is required.
- The users can get useful information from thermostat, such as:
  - The current temperature.
  - Whether heating or cooling is required based on the set temperature.
  - The energy-saving mode status, which activates if the temperature is within an efficient range.

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
// --- Initializing Thermostat with 18°C ---
Current Temperature: 18°C
Status: Heating Mode ON (Room is too cold)
Energy-Saving Mode: OFF

// --- Attempting to Set Temperature to 32°C ---
Warning: Temperature too high! Setting to maximum 30°C.

Current Temperature: 30°C
Status: Cooling Mode ON (Room is too warm)
Energy-Saving Mode: OFF

// --- Attempting to Set Temperature to 22°C ---
Temperature set to 22°C.

Current Temperature: 22°C
Status: Temperature is comfortable. No heating or cooling needed.
Energy-Saving Mode: ON

// --- Attempting to Set Temperature to 10°C ---
Warning: Temperature too low! Setting to minimum 16°C.

Current Temperature: 16°C
Status: Heating Mode ON (Room is too cold)
Energy-Saving Mode: OFF
```
{{< /collapsible-codesection >}}

---

#### Q4.

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

- #### I. _**(Adv.)**_
```cpp
#include <iostream>

class User
{
private:
    int m_a;
    int m_b = 0;

public:
    User() {}

    int a() const { return m_a; }
    int b() const { return m_b; }
};

class Default
{
private:
    int m_a;
    int m_b = 0;

public:
    Default() = default;

    int a() const { return m_a; }
    int b() const { return m_b; }
};

class Implicit
{
private:
    int m_a;
    int m_b = 0;

public:
    int a() const { return m_a; }
    int b() const { return m_b; }
};

int main()
{
    User user{};
    std::cout << user.a() << ' ' << user.b() << '\n';

    Default def{};
    std::cout << def.a() << ' ' << def.b() << '\n';

    Implicit imp{};
    std::cout << imp.a() << ' ' << imp.b() << '\n';

    return 0;
}
```

- #### II.
```cpp
#include <iostream>
#include <string>

class Employee
{
private:
    std::string m_name;
    int m_id;

public:
    Employee()
    {
    }

    Employee(std::string name, int id)
        : m_name{name}
        , m_id{id}
    {
    }

    void print()
    {
        std::cout << "Employee(" << m_name << ", " << m_id << ")\n";
    }
};

int main()
{
    Employee e1{"Jinie", 135};
    e1.print();

    Employee e2{};
    e2.print();

    return 0;
}
```

---

#### Q5.

A Smart Car Energy Management System is designed to optimize battery usage and adjust driving modes for efficient performance.

- The battery level should always remain between 0% and 100%.
- The system should display warnings when the battery is low (below 15%) and prevent driving when the battery is at 0%.
- The car can also boost the battery, but the level cannot exceed 100%.
- Users can manually switch the drive mode:
  - Sport Mode requires at least 50% battery. It cannot be activated if the battery is below this threshold.
  - If the battery level drops below 30%, the system automatically switches to Eco Mode unless manually overridden. The user can only override it to Normal Mode (not Sport Mode).
  - Normal Mode has no specific battery requirements, meaning it can be set at any battery level.
- Users can get useful information from the system, such as:
  - The current drive mode.
  - The current battery level.
  - The car's status (e.g., low battery warning or driving condition).

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
// --- Initializing Smart Car with 50% Battery ---
Drive Mode: Normal Mode (Balanced)
Battery Level: 50%
Car Status: Car is running smoothly.

// --- Attempting to switch to Sport Mode ---
Error: Sport Mode requires at least 50% battery to activate.

// --- Driving 10 km in Normal Mode ---
Drove 10 km. Battery consumed: 30%.
Drive Mode: Eco Mode (Energy Saving)

Drive Mode: Eco Mode (Energy Saving)
Battery Level: 20%
Car Status: Low battery! Recharge soon.

// --- Boosting Battery by 40% ---
Boosted battery by 40%. Current level: 60%.
Drive Mode: Normal Mode (Balanced)

Drive Mode: Normal Mode (Balanced)
Battery Level: 60%
Car Status: Car is running smoothly.

// --- Driving 30 km in Normal Mode ---
Drove 30 km. Battery consumed: 90%.
Drive Mode: Eco Mode (Energy Saving)

Drive Mode: Eco Mode (Energy Saving)
Battery Level: 15%
Car Status: Low battery! Recharge soon.

// --- Attempting to switch to Sport Mode ---
Error: Sport Mode requires at least 50% battery to activate.

// --- Attempting to override to Sport Mode while in Eco Mode ---
Error: Cannot switch to Sport Mode. Battery is too low.
Drive Mode: Normal Mode (Balanced)
Battery Level: 60%
Car Status: Car is running smoothly.
```
{{< /collapsible-codesection >}}