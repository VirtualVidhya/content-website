---
title: "DOM Cumulative 1"
draft: false
weight: 31
---

---

**NOTE:** All these exercises are in continuation. Do each of them in progression after completion of the previous one.

---

The initial HTML & CSS code is already given below.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <title>DOM</title>

    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <script src="app.js"></script>
  </body>
</html>
```

```css
.red {
  color: red;
}

.blue {
  color: blue;
}

.box {
  border: 1px solid black;
  background-color: pink;
}
```

Now add the following elements on the webpage using **only JavaScript and DOM methods**.

- a `p` with red text that says “Hey, I am a red paragraph!”
- a `h3` with blue text that says “I am a blue h3!”
- a `div` with a black border and pink background color with the following element inside it:
    - another `h1` that says “I am h1 inside a div”
    - a `p` that says “I am p inside a div”


---

**Expected Output:**

![Preview](../../../../images/exercises/dom-final1/preview.png)