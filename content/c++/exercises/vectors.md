---
title: "Vectors"
draft: false
weight: 11
---

---

#### Q1.

You're planning a road trip and making a list of cities to visit.

Write a program to store the names of 5 cities in a vector and display the name of the final city on your itinerary.

---

#### Q2.

A person is organizing a birthday party and keeps a guest list.

- Create a data-container to store the names of guests
- Add 5 guests to the list
- Print the names of the guests invited so far

Later, after discussing with a family member, you decide to invite 3 more people.

- Add them to the same list
- Print the updated guest list

However, after a further discussion, they realize that they are running out of space and decide to omit the last added guest from the list due to the capacity constraint.

- Remove the last added guest
- Print the updated guest list again

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
// guest list: Harry, Jerry, Gary, Mary, Barry

// output
Guest List:
1. Harry
2. Jerry
3. Gary
4. Mary
5. Barry

// new added guests: Perry, Carey, Sherry

// output
Guest List:
1. Harry
2. Jerry
3. Gary
4. Mary
5. Barry
6. Perry
7. Carey
8. Sherry

// After omitting the last added guest (Sherry) due to capacity constraints:

// output
Guest List:
1. Harry
2. Jerry
3. Gary
4. Mary
5. Barry
6. Perry
7. Carey
```
{{< /collapsible-codesection >}}

---

#### Q3.

A user is adding items to a shopping basket one by one.

- Create a vector to store the item names
- Keep asking the user for items until they type "done" (case-sensitive)
- Print all items in the basket
- Count the total number of items

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
// user input
Add item: butter
Add item: honey
Add item: green-tea
Add item: turmeric
Add item: chyawanprash
Add item: cheese
Add item: jaggery
Add item: done

// output
Your shopping basket:
butter
honey
green-tea
turmeric
chyawanprash
cheese
jaggery

You have total 7 items in your basket.
```
{{< /collapsible-codesection >}}

---

#### Q4.

A café offers a menu with different categories like Beverages, Snacks and Desserts.

Store the menu items under their respective categories and display the complete café menu.

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
// data list
Beverages: Coffee, Iced Tea, Smoothie
Snacks: Sandwich, Nachos, Samosa, Fries
Desserts: Brownie, Waffles

// output
Café Menu

Beverages:
- Coffee
- Iced Tea
- Smoothie

Snacks:
- Sandwich
- Nachos
- Samosa
- Fries

Desserts:
- Brownie
- Waffles

Enjoy your meal!
```
{{< /collapsible-codesection >}}

---

#### Q5. _**(Adv.)**_

What will be the output of the following programs?

(**NOTE:** You have to predict the output result without running/executing the code.)

```cpp
#include <iostream>
#include <vector>

int main()
{
    std::vector<int> v;

    for (int i = 0; i < 5; ++i)
    {
        v.push_back(i);
    }

    std::cout << "size: " << v.size() << '\n';
    std::cout << "capacity: " << v.capacity() << '\n';

    return 0;
}
```

<!-- ---

#### Q6. _**(Adv.)**_

A user wants to organize their music collection by creating different playlists based on genres (e.g., Pop, Classical, Jazz).

- Allow the user to create multiple playlists, each for a specific genre.
- Let them add songs to any playlist.
- Provide an option to remove a song from a playlist if they no longer want it.
- Display all playlists with their songs in an organized format.
- At the end, show the total number of playlists and the playlist with the most songs.

{{< collapsible-codesection title="Expected Output" lang="v" >}}
```v
Music Playlist Organizer

Create a new playlist (Enter genre): Pop  
Playlist "Pop" created!  

Add a song to "Pop": Blinding Lights  
"Blinding Lights" added to Pop playlist!  

Add a song to "Pop": Levitating  
"Levitating" added to Pop playlist!  

Create a new playlist (Enter genre): Rock  
Playlist "Rock" created!  

Add a song to "Rock": Bohemian Rhapsody  
"Bohemian Rhapsody" added to Rock playlist!  

Remove a song from "Pop": Levitating  
"Levitating" removed from Pop playlist!  

Your Playlists:
Pop  
- Blinding Lights  
Rock  
- Bohemian Rhapsody  

Summary: 
- Total Playlists: 2  
- Playlist with the most songs: Rock  
```
{{< /collapsible-codesection >}} -->