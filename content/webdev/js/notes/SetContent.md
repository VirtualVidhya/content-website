---
title: "Setting Content in Objects"
draft: false
weight: 7
---

---

Until now, we have learnt to select different objects of DOM.

We will learn how to manipulate these selected objects now.

### Using Properties & Methods

Generally we find these 3 properties in our selected DOM objects.

`innerText`

shows the visible text contained in a node

`textContent`

shows all the full text

`innerHTML`

shows the full markup

![Untitled](../../../../images/notes/SetContent/1.png)

Now in order to change its content, we will focus on the properties related to content.

![Untitled](../../../../images/notes/SetContent/2.png)

![Untitled](../../../../images/notes/SetContent/3.png)

All these 3 properties seem quite similar.

![Untitled](../../../../images/notes/SetContent/4.png)

Even when we print out their values, they seem quite similar.

Now, if we inspect closely there are differences.

`innerText` shows all the text that is visible on the webpage from that object (element)

`innerHTML` shows all the same text but including the markup as well

`textContent` also shows all the text only but the difference is it’s showing some extra `'\n    '` so this text is very similar to how we have written it inside our HTML file and this `'\n       '` is showing where the line is ending in our HTML file.

![Untitled](../../../../images/notes/SetContent/5.png)

 

Now if we want to make “Peter Parker” as bold.

![Untitled](../../../../images/notes/SetContent/6.png)

Then it won’t be possible with `innerText`, because it takes everything as text.

But, if we use `innerHTML` here instead

![Untitled](../../../../images/notes/SetContent/7.png)

Then in that case tags will actually get recognized by `innerHTML`

Now if we want to underline our main heading,

![Untitled](../../../../images/notes/SetContent/8.png)

If we want to use the existing content of that heading,

![Untitled](../../../../images/notes/SetContent/9.png)

We can use the logic of back-tick with variables.