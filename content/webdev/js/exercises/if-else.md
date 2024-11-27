---
title: "if-else (Conditional Statements)"
draft: false
weight: 6
---

---

#### Q1.

Consider the following program:

```jsx
let x = 5;

if (x == 6) {
    console.log("Hello");
} 
else {
    console.log("Hi");
}
```

What will be the output in the console?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

1. Hello
2. Hi
3. Error

---

#### Q2.

Consider the following program:

```jsx
let x = 10; 
let y = 20;

if (x == 10) {     
    if (y == 20) {   
        console.log("x is 10 and y is 20");     
    }
    else {   
        console.log("x is 10 but y is not 20");     
    } 
}  
else {  
    console.log("x is not 10"); 
}
```

What will be the output in the console?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

1. x is 10 and y is 20
2. x is 10 but y is not 20
3. x is not 10
4. No output due to an error

---

#### Q3.

Consider the following program:

```jsx
let age = 25;

if (age > 18)
    console.log("Adult");
else if (age > 12)
    console.log("Teenager");
else if (age > 5)
    console.log("Child");
else
    console.log("Toddler");
```

What will be the output in the console?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

1. Adult
2. Teenager
3. Child
4. Toddler

---

#### Q4.

```jsx
let x = 10;
let y = 20;

if (x > 5)
    console.log("A");
else if (y > 15)
    console.log("B");
else
    console.log("C");
```

What will be the output?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

1. A
2. B
3. C
4. No output due to an error

---

#### Q5.

Create a system to calculate popcorn prices based on the size customer asked for:

Here, the price-size list is given - 
- ‘XL’ → price is rs.250
- ‘L’ → price is rs.200
- ‘M’ → price is rs.100
- ‘S’ → price is rs.50

---

#### Q6.

Create a program to make a mini-calculator.

Take 2 numbers & the operator sign as variables (input), then give the result based on those taken variables (input).

for e.g.

```jsx
number1 : 3
number2 : 5

operator : *

// expected output
5 * 3 = 15
```

[**NOTE:** All the operators should be covered, i.e. + , - , * , / , % , **]