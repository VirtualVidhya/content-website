---
title: "Manipulating Attributes"
draft: false
weight: 8
---

---

We can directly manipulate attributes as well,

What are attributes?

id, class, src

aside from this, styling is also an attribute…

To manipulate attributes, we use 2 methods.

`obj.getAttribute( attr );`

This gives the value of the attribute of a specific object so that we get to know that for this attribute of this object, what’s the value of it.

`obj.setAttribute( attr, val );`

If we want to change the value of attribute, we use this method.

This 2 methods are a type of methods called getters & setters.

![Untitled](../../../../images/notes/ManipulatingAttributes/1.png)

But now all the styling applied through `main_img` won’t get applied.

So before changing id & class attribute of any element, we have to think twice.

![Untitled](../../../../images/notes/ManipulatingAttributes/2.png)

![Untitled](../../../../images/notes/ManipulatingAttributes/3.png)