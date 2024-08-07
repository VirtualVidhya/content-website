---
title: "DOM - Initialization"
draft: false
weight: 4
---

---

When we will be learning to access HTML elements and manipulate them using JS,

there are certain steps to it.

First, we need to access/select the element which we want to change

and then after selecting it, actually do what changes we want to make to it.

Here, there are some starter files.

[https://github.com/Guru-404/DOM-Basic/](https://github.com/Guru-404/DOM-Basic/tree/starter-files)

`document` object has a `all` property, which basically is a list of all the HTML elements of our webpage in the form of an object.

![Untitled](../../../../images/notes/DOM%20-%20Initialization/1.png)

So let’s say we want to change the text of heading ‘Spider Man’. That heading is `h1` so we need to select the `h1` object of our DOM.

![Untitled](../../../../images/notes/DOM%20-%20Initialization/2.png)

We can see here that, `h1` object is at index 9 in our document collection.

If we expand `h1` object, we will be able to see its different properties.

In order to change its content, we need to change the value of `innerText` property.

![Untitled](../../../../images/notes/DOM%20-%20Initialization/3.png)

![Untitled](../../../../images/notes/DOM%20-%20Initialization/4.png)

Check here that, on changing the value of `innerText` property of `h1`, it reflected on our webpage.

If you wonder how have these manipulations become possible?

It’s because we have connected our JS file in our HTML & CSS.

![Untitled](../../../../images/notes/DOM%20-%20Initialization/5.png)

And… in JS, a `document` object gets created automatically. Different properties of this `document` makes it possible to change them.

What we did after that is, we first accessed/selected the element we want to change and then actually changed/manipulated the value of its property according to our requirements.

Now, if we will refresh the webpage, the console will get cleared so all our DOM changes will be gone. If we want to make permanent changes then we need to do it in our JS file.