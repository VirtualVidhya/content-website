---
title: "Functions Cumulative 1"
draft: false
weight: 24
---

---

#### Q1.

Create a function that returns the sum of numbers from 1 to `n`

---

#### Q2.

Create a function that returns the concatenation of all strings in an array

---

#### Q3.

Create a function to convert temperature from Kelvin to Celsius and then Celsius to Fahrenheit.

(**HINT:** `Celsius = Kelvin - 273` & `Fahrenheit = (9/5) * Celsius + 32`) 

(**TIP:** Create separate functions for both the functionalities. First user will give input in Kelvin, convert it to Celsius then user will give input in Celsius, convert it to Fahrenheit.)

---

#### Q4. _(Adv.)_

There’s a garments shop. They want to have a digital solution which helps them find if a particular product (shirt/t-shirt/pant etc.) is available in a particular size and color or not.

Make a function that gives us the availability status of a product on providing a particular size and color.

(**HINT:** The data set for available sizes and colors for a particular product is being stored already. So choose the data structure appropriately to keep track of that.)

(**NOTE:** Currently for the simplicity, you have to consider the program for a single product only.)

expected output:

```jsx
// let's say if user asks for a M size & black color
// (Think how will user provide this info using input.)

// output
The M size black colored Jersey is available.
```

---

#### Q5. _(Adv.)_

Create a full system with different set of functions that takes student name, standard & different subject marks as input then calculates the percentage of a student based on different subject marks & declares the status in terms of PASS or FAIL with respective grade based on the percentage.

**(NOTE:** Print the result in a user friendly manner.)

for e.g.

```jsx
// output

Student Name: Lorem
Standard: 7

Subject1: 30
Subject2: 40
Subject3: 50

Percentage: 40%

Result: PASS
Grade: C

Congratulations, Lorem! You have been promoted to standard 8.
```