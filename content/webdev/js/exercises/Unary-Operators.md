---
title: "Unary Operators"
draft: false
weight: 3
---

---


(**NOTE:** In all the below exercises you have to predict the output yourself without running/executing the code. Predict the value of each variable after that statement gets executed.)

for e.g.

```jsx
let a - 1;       // a = 1
a++;             // a = 2
let b = a + 3;   // a = 2     b = 5
let c = a + b;   // a = 2     b = 5     c = 7
```

---

#### Q1.

What is the value of each variable in each line of code?

```jsx
let a = 5;
let b = a++;
b = ++a;
```
---

#### Q2.

What is the value of each variable in each line of code?

```jsx
let x = 5;             
let y = --x;           
let z = y--;           
x = ++z;               
y = --z;               
z = x++;               
```

---


#### Q3. _(Adv.)_

What is the value of each variable in each line of code?

```jsx
let x = 5;              
let y = --x;            
x = x++;                
let z = y--;            
x = ++z;                
y = --z;                
z = z++;                
```

---

<!-- #### Q4. _(Adv.)_

What is the value of each variable in each line of code?

```jsx
let x = 5;           
x = x++;             
let y = 6;           
y = ++y;             
let z = 3;           
z = z--;             
y = ++x + z--;       
z = y++ - --x;       
x = x++ - --z;       
```

--- -->

#### Q4. _(Adv)_

What is the value of each variable in each line of code?

```jsx
let z = 5;         
z = z--;           
z += z++;          
z -= --z;
```