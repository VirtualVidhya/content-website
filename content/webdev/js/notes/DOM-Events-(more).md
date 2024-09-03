---
title: "DOM - more Events"
draft: false
weight: 18
---

---

## change

The `change` event occurs when the value of an element has been changed

(Only works on `input`, `textarea`, `select` elements)

![Untitled](../../../../images/exercises/dom-(more)-events/1.png)

![Untitled](../../../../images/exercises/dom-(more)-events/2.png)

This `change` event tracks changes between the initial and final value.

So here it gets triggered if we press the register button, it even gets triggered when we click somewhere else outside of the input box.

Therefore we can conclude that the event gets triggered between the state it was in before and the state in which it has been left.

And it doesn’t track small changes like a new letter is entered.

## input

But if we want to track every small changes like a new letter has been entered then we can use an another event.

The `input` event fires when the value has been changed.

(Only works on `input`, `textarea`, `select` elements)

![Untitled](../../../../images/exercises/dom-(more)-events/3.png)

![Untitled](../../../../images/exercises/dom-(more)-events/4.png)

**NOTE:** The non-character keys don’t trigger the input event.

## Example

By using these both events, we can make a text-editor.

![Untitled](../../../../images/exercises/dom-(more)-events/5.png)

![Untitled](../../../../images/exercises/dom-(more)-events/6.png)

![Untitled](../../../../images/exercises/dom-(more)-events/7.png)