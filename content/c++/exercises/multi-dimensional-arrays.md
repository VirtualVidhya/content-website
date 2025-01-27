---
title: "Multi-Dimensional Arrays"
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
        int arr[][] = {
            {1, 2, 3},
            {4, 5, 6}
        };

        std::cout << arr[2][3] << '\n';

        return 0;
    }
    ```

- #### II.
  
    ```cpp
    #include <iostream>

    int main() 
    {
        int arr[3][] = {
            {1, 2, 3},
            {4, 5, 6}
        };

        std::cout << arr[2][2] << '\n';

        return 0;
    }
    ```

- #### III.
  
    ```cpp
    #include <iostream>

    int main() 
    {
        int arr[][3] = {
            {1, 2, 3},
            {4, 5, 6}
        };

        std::cout << arr[1][2] << '\n';

        return 0;
    }
    ```

- #### IV.
  
    ```cpp
    #include <iostream>

    int main() 
    {
        int arr[3][3] = {
            {1, 2, 3},
            {4, 5, 6}
        };

        std::cout << arr[3][2] << '\n';

        return 0;
    }
    ```

- #### V.
  
    ```cpp
    #include <iostream>

    int main() 
    {
        int arr[3][2] = {
            {1, 2, 3},
            {4, 5, 6},
        };

        std::cout << arr[1][3] << '\n';

        return 0;
    }
    ```

- #### VI.
  
    ```cpp
    #include <iostream>

    int main() 
    {
        int arr[4][4] = {
            {1, 2, 3},
            {4, 5, 6, 7},
            {8, 9},
        };

        for (int i = 0; i < 4; ++i)
        {
            for (int j = 0; j < 4; ++j)
            {
                std::cout << arr[i][j] << " ";
            }

            std::cout << '\n';
        }

        return 0;
    }
    ```

---

#### Q2.

A group of friends is playing a classic Tic-Tac-Toe game. 
The game is played on a 3x3 grid, where each cell can either be empty (`.`), filled with `X` or `O`.

As the game progresses, they need a way to store the current state of the game board and update it after each move.
<!-- - Allow a player to place their mark (X or O) in an empty cell. -->
<!-- - Ensure that a player cannot place a mark in an already filled position. -->

At this moment, the game board looks like this:

```v
X  O  X  
.  .  O  
X  .  . 

// grid cell numbers
// 1 2 3
// 4 5 6
// 7 8 9
```

- Your task is to: Store this current state into a game data-set and display it on the screen.

Now, it's Player O's turn, and they want to place their mark in the middle row, first position i.e. cell number 4.

- Your next task is to: Update the board with the new move and again display the updated game board after the move.

---

#### Q3.

A weather monitoring station records the temperature of your city at four different times of the day: morning, noon, evening, and night. The station collects this data every day for a full week.

Write a program for this, your program should:

- Store the daily temperature readings by taking input from user.
- Allow a user to check the average temperature for any given day.
- Identify the hottest and coldest temperature recorded during the week and display at what time of the day they occurred.

<!-- **Expected Outut:** -->

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
Enter temperature readings for each day and time:
-------------------------------------------------

Day 1:
--------
Morning: 22
Noon: 24
Evening: 23
Night: 21

Day 2:
--------
Morning: 24
Noon: 26
Evening: 25
Night: 24

Day 3:
--------
Morning: 23
Noon: 27
Evening: 26
Night: 25

Day 4:
--------
Morning: 26
Noon: 29
Evening: 28
Night: 25

Day 5:
--------
Morning: 29
Noon: 33
Evening: 30
Night: 28

Day 6:
--------
Morning: 30
Noon: 33
Evening: 32
Night: 31

Day 7:
--------
Morning: 26
Noon: 27
Evening: 25
Night: 23

-------------------------------------------------

Enter the day number (1-7) to get the average temperature: 4
Average temperature on Day 4: 27°C

-------------------------------------------------

Hottest temperature of the week: 33°C on Day 5 (Noon)
Coldest temperature of the week: 21°C on Day 1 (Night)
```
{{< /collapsible-codesection >}}

---

#### Q4. _**(Adv.)**_

A small cinema hall has a fixed seating arrangement with multiple rows (`5`) and columns (`6`). Some seats are already booked, while others are available.

Develop a seat booking system where:
- The user can check seat availability before buying a ticket. (Initially all seats are available.)
- A user can select a seat, and if it's available, it gets booked automatically. (Ensure that your system does not allow booking of an already occupied seat.)
- Display the updated seating chart after each booking.

<!-- **Expected Outut:** -->

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
# Options:
1. Display Seating Chart
2. Check Seat Availability
3. Book a Seat
4. Exit
----------------
Enter your choice: 1

Current Seating Chart:

     1 2 3 4 5 6 
    -------------
1  | O O O O O O 
2  | O O O O O O 
3  | O O O O O O 
4  | O O O O O O 
5  | O O O O O O 

----------------
# Options:
1. Display Seating Chart
2. Check Seat Availability
3. Book a Seat
4. Exit
----------------
Enter your choice: 2

Enter row (1-5) and column (1-6) to check availability: 3 4
Seat is available.

----------------
# Options:
1. Display Seating Chart
2. Check Seat Availability
3. Book a Seat
4. Exit
----------------
Enter your choice: 3

Enter row (1-5) and column (1-6) to book: 5 3
Seat booked successfully!

Current Seating Chart:

     1 2 3 4 5 6 
    -------------
1  | O O O O O O 
2  | O O O O O O 
3  | O O O O O O 
4  | O O O O O O 
5  | O O X O O O 

----------------
# Options:
1. Display Seating Chart
2. Check Seat Availability
3. Book a Seat
4. Exit
----------------
Enter your choice: 2

Enter row (1-5) and column (1-6) to check availability: 5 3
Seat is already occupied.

----------------
# Options:
1. Display Seating Chart
2. Check Seat Availability
3. Book a Seat
4. Exit
----------------
Enter your choice: 3

Enter row (1-5) and column (1-6) to book: 5 3
Seat is already occupied. Please choose another seat.

Current Seating Chart:

     1 2 3 4 5 6 
    -------------
1  | O O O O O O 
2  | O O O O O O 
3  | O O O O O O 
4  | O O O O O O 
5  | O O X O O O 

----------------
# Options:
1. Display Seating Chart
2. Check Seat Availability
3. Book a Seat
4. Exit
----------------
Enter your choice: 4

Exiting the system.
```
{{< /collapsible-codesection >}}

---

#### Q5. _**(Adv.)**_

A hospital consists of multiple floors (`3`), each with a certain number of rooms (`2`), and each room has a fixed number of beds (`4`). Due to rising patient intake, the hospital administration wants to efficiently manage the availability of beds across all floors.

Your task is to develop a program that:
- Keeps track of which beds are occupied or vacant in each room.
- Allows hospital staff to check bed availability for a given room and floor.
- Displays the total number of vacant beds in the hospital at any time.

The hospital needs a solution to avoid overbooking beds and improve efficiency.

<!-- **Expected Outut:** -->

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
----------------
# Options:

1. Display Bed Status
2. Check Bed Availability
3. Book a Bed
4. Display Total Vacant Beds
5. Exit
----------------
Enter your choice: 1

Current Bed Status:
Floor 1:
  Room 1: O O O O 
  Room 2: O O O O 
Floor 2:
  Room 1: O O O O
  Room 2: O O O O 
Floor 3:
  Room 1: O O O O 
  Room 2: O O O O 

----------------
# Options:

1. Display Bed Status
2. Check Bed Availability
3. Book a Bed
4. Display Total Vacant Beds
5. Exit
----------------
Enter your choice: 2

Enter floor (1-3) and room (1-2) to check availability: 2 1

Bed availability in Floor 2, Room 1:
Bed 1 is available.
Bed 2 is available.
Bed 3 is available.
Bed 4 is available.

----------------
# Options:

1. Display Bed Status
2. Check Bed Availability
3. Book a Bed
4. Display Total Vacant Beds
5. Exit
----------------
Enter your choice: 3

Enter floor (1-3), room (1-2), and bed (1-4) to book: 2 1 3

Bed booked successfully!

----------------
# Options:

1. Display Bed Status
2. Check Bed Availability
3. Book a Bed
4. Display Total Vacant Beds
5. Exit
----------------
Enter your choice: 1

Current Bed Status:
Floor 1:
  Room 1: O O O O 
  Room 2: O O O O 
Floor 2:
  Room 1: O O X O 
  Room 2: O O O O 
Floor 3:
  Room 1: O O O O 
  Room 2: O O O O 

----------------
# Options:

1. Display Bed Status
2. Check Bed Availability
3. Book a Bed
4. Display Total Vacant Beds
5. Exit
----------------
Enter your choice: 4

Total vacant beds in the hospital: 23

----------------
# Options:

1. Display Bed Status
2. Check Bed Availability
3. Book a Bed
4. Display Total Vacant Beds
5. Exit
----------------
Enter your choice: 3

Enter floor (1-3), room (1-2), and bed (1-4) to book: 2 1 3

Bed is already occupied. Please choose another bed.

----------------
# Options:

1. Display Bed Status
2. Check Bed Availability
3. Book a Bed
4. Display Total Vacant Beds
5. Exit
----------------
Enter your choice: 5

Exiting the system.
```
{{< /collapsible-codesection >}}