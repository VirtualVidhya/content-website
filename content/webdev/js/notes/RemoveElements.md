---
title: "Removing Elements"
draft: false
weight: 11
---

---

Just like adding new elements, we can remove existing elements from the page as well.

- `removeChild(element);`     (similar to appendChild)
- `remove(element);`     (similar to append)

Let’s say, we want to remove this button…

![Untitled](../../../../images/notes/RemoveElements/1.png)

This button is a direct child of the `div` so…

![Untitled](../../../../images/notes/RemoveElements/2.png)

But instead of this, we can directly remove the button as well…

![Untitled](../../../../images/notes/RemoveElements/3.png)

We can remove the whole body as well using `body.remove()`