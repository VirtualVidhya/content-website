---
title: "Functions Cumulative 2"
draft: false
weight: 27
---

---

**NOTE:** 

Some questions may take more time to solve as it takes time for any beginner to build logic for approaching such programming problems so don’t get discouraged.

---

#### Q1.

Write a JavaScript function that returns array elements larger than a given number.

for e.g.

```jsx
numbers - [1, 5, 23, 16, 54, 39, 41]

given number - 29

// output
result:
54
39
41
```
---

#### Q2.

Write a JavaScript function to extract unique characters from a given string.

for e.g.

```jsx
str - "abcdabcdefgggh" 

// output
ans - "abcdefgh"
```
---

#### Q3.

Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.

for e.g.

```jsx
country - ["Australia", "Germany", "United States of America"]

// output
"United States of America"
```
---

#### Q4.

Write a JavaScript function to count the number of vowels in a given string.

for e.g.

```jsx
str - "almond"

// output (here a & o are vowels)
2
```

---

#### Q5. _(Adv.)_

Write a JavaScript function to generate a random number within a given custom range
(start, end).

---

#### Q6. _(Adv.)_

Write a program to print all the prime numbers in a given range of numbers.

For e.g.

Let’s say if user give the first number as 7 and the second number as 43, then program needs to print all the prime numbers between 7 & 43 including 7 & 43.

Expected output:

```jsx
7
11
13
17
19
23
29
31
37
41
43
```

(**HINT:** Divide your program into separate tasks, in this program we have a main big task where we have to print all the numbers in a given range which are prime. Now first & for most, the important part is to decide whether a number is prime or not, so you can just focus on that part initially. Make a separate function to handle that logic. After you’re done with it, the task is to print prime numbers in a given range, so you have to indirectly check for multiple numbers)