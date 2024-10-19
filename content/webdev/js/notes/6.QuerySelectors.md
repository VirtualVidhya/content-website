---
title: "Query Selectors"
draft: false
weight: 6
---

---

Allows us to use any CSS selector

getElementBy* get used as well but query selectors get used more often because it’s more intuitive and easy to use them.

Query Selectors are very similar to our CSS selectors, how we use different type of selectors in CSS, we use them in the same way with querySelector method.

![Untitled](../../../../images/notes/QuerySelectors/1.png)

![Untitled](../../../../images/notes/QuerySelectors/2.png)

Thing to note here is, in case where multiple objects are available under the same selector then `querySelector` doesn’t give the whole collection of objects, it only returns the first object (element) matching that selector.

We can use nested selectors as well.

![Untitled](../../../../images/notes/QuerySelectors/3.png)

![Untitled](../../../../images/notes/QuerySelectors/4.png)

![Untitled](../../../../images/notes/QuerySelectors/5.png)

`querySelector` only selects a single element.

What if we want to select all the elements matching a selector?

For that, we have `querySelectorAll`

![Untitled](../../../../images/notes/QuerySelectors/6.png)

![Untitled](../../../../images/notes/QuerySelectors/7.png)

Here we get a whole collection of objects matching the given selector.