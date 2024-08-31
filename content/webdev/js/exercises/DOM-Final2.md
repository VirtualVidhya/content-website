---
title: "DOM Cumulative 2"
draft: false
weight: 32
---

---

**NOTE:** All these exercises are in continuation. Do each of them in progression after completion of the previous one. 

---

- TThe initial HTML & CSS code is already given below.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>DOM</title>

    <link rel="stylesheet" href="styles.css">
</head>
<body>

</body>
</html>
```

```css
.btn {
    margin: 0px 5px;
    border: solid 1.25px black;
}

#clickme-btn {
    background-color: yellow;
    color: black;
}

#clickme-btn:hover {
    background-color: orange;
}
```

- Note that the name of the linked file in HTML is `styles.css` is here, so make changes accordingly while you male & link your CSS file with HTML.
- Create a javascript file now, named `app.js` (or any other name of your choice)
- Then link this javascript file with your HTML.
- Now add and manipulate elements on the webpage as mentioned in the below questions using **only JavaScript & DOM methods**.

---

#### Q1.

Create a new `input` and `button` element on the page using JavaScript only. 

Set the text of button to "Click Me”.

---

#### Q2.

Now add following attributes to the element:
- Change placeholder value of `input` to "username"
- Change the id of `button` to "clickme-btn”.

---

#### Q3.

Now add class "btn" on the `button` created above.

---

#### Q4.

Now create a `h1` element on the page and set its text to "DOM Practice" with an underline.
Change its color to purple.

---

#### Q5.

Now create a `p` tag on the page and set its text to “Manipulating HTML & CSS using JavaScript with the help of DOM", where “DOM” is **bold**.

---

**Expected Output:**

![Preview](../../../../images/exercises/dom-final2/preview.png)