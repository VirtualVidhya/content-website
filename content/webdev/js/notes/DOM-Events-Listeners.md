---
title: "DOM - Event Listeners"
draft: false
weight: 14
---

---

Until now, we have learnt 2 ways to track DOM events.

- Inline but we don’t prefer it because our HTML code gets bulky by using it
- Assigning the value of function to DOM event properties

There’s one more to way to track DOM events,
Event Listeners

Let’s say we want to do multiple things on a single button click, for that let’s try to assign multiple function values to the event.

![Untitled](../../../../images/notes/dom-events-listeners/1.png)

![Untitled](../../../../images/notes/dom-events-listeners/2.png)

But when we clicked, it only did the things mentioned inside the `userEntry()`. It didn’t perform the tasks of `greet()`

Because when we set the values of event properties directly, it can hold only one value at a time so here, it holds the latest value it has been given.

Therefore, it’s not possible to assign multiple actions to a single event.

For this, we can use Event Listeners.

`element.addEventListener(event, callback)`

What it does?

`addEventListener()` listens for the events means it waits when the event will get performed on the page and when it needs to perform the task allocated with the respective event.

How to use it?

The method needs 2 parameters - `event` & `callback`

- `event`:
    - Any type of event can be given for e.g. detect mouse click, mouse drag, keyboard key input

- `callback`:
    - callbacks are the functions whose argument gets passed to an another function

so overall what it means is, when this `event` gets triggered for this `element`, this `callback` function tasks gets performed.

![Untitled](../../../../images/notes/dom-events-listeners/3.png)

Here, both the actions get performed. Whichever is assigned first, gets performed first and then the later one.

---

## Double Click (Opt.)
    
![Untitled](../../../../images/notes/dom-events-listeners/4.png)

---

## Event Listeners for other Elements

Until now, we have used event listeners but mostly for buttons only but we can use it for other elements as well.

![Untitled](../../../../images/notes/dom-events-listeners/5.png)

![Untitled](../../../../images/notes/dom-events-listeners/6.png)

![Untitled](../../../../images/notes/dom-events-listeners/7.png)

![Untitled](../../../../images/notes/dom-events-listeners/8.png)

So in this way, we can have event listeners for each and every element of our webpage.