---
title: "DOM - this in Event Listeners"
draft: false
weight: 14
---

---

When `this` is used in a callback of event handler of something, then it refers to that something.

What does it mean?

When we create an event listener (handler) for an object, we have 2 things, event & callback. We can use `this` in the callback and the significance of `this` in the callback will be that specific object for which the event listener has been created.

![Untitled](../../../../images/notes/dom-events-(this)/1.png)

![Untitled](../../../../images/notes/dom-events-(this)/2.png)

![Untitled](../../../../images/notes/dom-events-(this)/3.png)

Here, `this` refers to the `button` on which the event listener has been added.

![Untitled](../../../../images/notes/dom-events-(this)/4.png)

We can access other properties of the button object using `this` as well.

![Untitled](../../../../images/notes/dom-events-(this)/5.png)

Here, we have different HTML elements.

Now what we want is whatever element of the webpage is hovered, its background-color should get changed to red.

For it, we can select each and every element individually and add listener to each one of them.

![Untitled](../../../../images/notes/dom-events-(this)/6.png)

But this isn’t a good way to write a code,

Because we are repeating similar lines of code again & again.

![Untitled](../../../../images/notes/dom-events-(this)/7.png)

We can do this instead because we know that meaning of `this` in event callback is the object on which the event listener has been added to.