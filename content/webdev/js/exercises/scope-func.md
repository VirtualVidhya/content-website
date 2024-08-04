---
title: "Scope in Functions"
draft: false
weight: 25
---

---

#### Q1.

What will be the output of the following code?

(**NOTE:** you have to predict the output yourself without running/executing the code.)

```jsx
let greet = "hello";

function outerGreet() {
    let greet = "hi";

    console.log(greet);

    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);

outerGreet();
```