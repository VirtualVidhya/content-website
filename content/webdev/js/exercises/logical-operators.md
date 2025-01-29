---
title: "Logical Operators"
draft: false
weight: 7
---

---

#### Q1.

```jsx
let a = 5;
let b = 10;

let result = (a > 3) && (b < 5);
```

What will be the value of `result`?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

1. true
2. false
3. 0
4. No output due to an error

---

#### Q2.

A “good string” is a string that starts with the letter ‘a’ & has a length > 3. Write a program to find if a string is good or not.

for e.g.

```jsx
And - bad string
Almond - good string
Potato - bad string
```
---

#### Q3.

Predict the output of the following code:

(**NOTE:** you have to predict the output yourself without running/executing the code.)

```jsx
let num = 12;

if ( (num%3 == 0) && ( (num+1 == 15) || (num-1 == 11) ) ) {
    console.log("safe");
}
else {
    console.log("unsafe");
}
```