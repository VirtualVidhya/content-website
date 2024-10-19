---
title: "Manipulating Style"
draft: false
weight: 9
---

---

Until now, we have learnt to manipulate content of the element & the attributes of the element. Now we will learn how to manipulate the style of the element.

To manipulate style, we use the `style` property of the element object.

`element.style`

![Untitled](../../../../images/notes/ManipulatingStyle/1.png)

![Untitled](../../../../images/notes/ManipulatingStyle/2.png)

![Untitled](../../../../images/notes/ManipulatingStyle/3.png)

Now to change these different properties, we have to change the attributes of the style object.

![Untitled](../../../../images/notes/ManipulatingStyle/4.png)

![Untitled](../../../../images/notes/ManipulatingStyle/5.png)

![Untitled](../../../../images/notes/ManipulatingStyle/6.png)

The styling of the links which we have set above, that has been set in as inline styling, not in the actual CSS.

There’s one limitation of this `style` property.

With the help of this `style`, we can only manipulate inline styling of the elements means if we have defined any styling in the CSS then it’s not possible to access & set that CSS using this `style`.

Therefore, we don’t frequently use this `style`.

For e.g.

We have defined several properties for this Pub-Info in our CSS.

![Untitled](../../../../images/notes/ManipulatingStyle/7.png)

Now when we select that box & access its `style`,

![Untitled](../../../../images/notes/ManipulatingStyle/8.png)

And check its different attributes…

Even though it has a background color given in CSS, it’s not visible in here. (All the other properties defined in CSS, all of them are empty in here.)

![Untitled](../../../../images/notes/ManipulatingStyle/9.png)

Meanwhile, if we’d have set the background-color in inline style,

![Untitled](../../../../images/notes/ManipulatingStyle/10.png)

It’s visible in there…

![Untitled](../../../../images/notes/ManipulatingStyle/11.png)

**We don’t frequently use `style` to manipulate styling,**

because most of the styling we write is in our CSS file and in `style` the CSS defined externally doesn’t end up appearing.

# using classList

We can check the list of classes of an object using `classList`, it’s possible that an element is given a single or multiple classes.

`element.classList`

For e.g.

this Spider-Man image doesn’t have any class given at the moment.

![Untitled](../../../../images/notes/ManipulatingStyle/12.png)

We can see it via `classList` as well.

![Untitled](../../../../images/notes/ManipulatingStyle/13.png)

Now, we’ve given it a few classes.

![Untitled](../../../../images/notes/ManipulatingStyle/14.png)

We can see those classes in `classList` now.

![Untitled](../../../../images/notes/ManipulatingStyle/15.png)

This `classList` only shows us which classes are there on the element object.

But we can manipulate the classes as well.

### classList.add()

![Untitled](../../../../images/notes/ManipulatingStyle/16.png)

Currently, this new header class is of no use because it’s not there in the CSS.

We’ve defined this class in our CSS.

![Untitled](../../../../images/notes/ManipulatingStyle/17.png)

Now on adding this class, it actually reflects some changes.

![Untitled](../../../../images/notes/ManipulatingStyle/18.png)

### classList.remove()

![Untitled](../../../../images/notes/ManipulatingStyle/19.png)

![Untitled](../../../../images/notes/ManipulatingStyle/20.png)

We could’ve set the class using `setAttribute` as well.

![Untitled](../../../../images/notes/ManipulatingStyle/21.png)

But as soon as we used it, the underline class got removed.

Because in `setAttribute`, at a time it can have only a single value so even if the object had multiple classes previously, it will get reset to a single class value.

Therefore, for styling related classes we don’t prefer to use `setAttribute`. We prefer to use different `classList` methods only.

### classList.contains()

to check if class exists or not…

![Untitled](../../../../images/notes/ManipulatingStyle/22.png)

### classList.toggle()

to toggle between add & remove

(toggle is like a switch means it can turn on or off)

so how `classList.toggle()` works is if a particular class exists on that object then it will remove it and if it doesn’t exist then it will add it.

![Untitled](../../../../images/notes/ManipulatingStyle/23.png)

![Untitled](../../../../images/notes/ManipulatingStyle/24.png)

![Untitled](../../../../images/notes/ManipulatingStyle/25.png)

Whatever changes we make into classes, it gets reflected into document object as well.

![Untitled](../../../../images/notes/ManipulatingStyle/26.png)