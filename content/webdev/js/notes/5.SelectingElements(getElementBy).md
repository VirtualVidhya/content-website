---
title: "Selecting Elements (getElementBy*)"
draft: false
weight: 5
---

---

`getElementById`

(One of the method of `document` object)

What it does?

Returns the element as an object or null if not found

![Untitled](../../../../images/notes/SelectElements/1.png)

Now, let’s say we want to select this image in our HTML by its ID.

![Untitled](../../../../images/notes/SelectElements/2.png)

Here, it’s giving `null` because it’s trying to access `main_img` as if it’s a variable.

![Untitled](../../../../images/notes/SelectElements/3.png)

If we access it by passing the id name in double quotes (as a string) then we get the proper element.

Note that the `img` we have got here is not `img` tag of HTML, it’s a `img` object.

We can store the element we’ve got by id into a variable.

![Untitled](../../../../images/notes/SelectElements/4.png)

We can print values of different properties of that object as well.

![Untitled](../../../../images/notes/SelectElements/5.png)

We can change the values of these properties…

![Untitled](../../../../images/notes/SelectElements/6.png)

## getElementByClassName

`getElementByClassName`

What it does?

Returns the elements as an HTML collection or empty collection if not found

(Note that collection will get returned, not an array.)

![Untitled](../../../../images/notes/SelectElements/7.png)

Here, we’ve given a class `desc_img`

![Untitled](../../../../images/notes/SelectElements/8.png)

We’ve got a collection of objects here. Each of these individual images are object itself.

If we want the first image object, we can access via index.

![Untitled](../../../../images/notes/SelectElements/9.png)

We can store this collection into a variable and print all the objects & their sources one by one as well.

![Untitled](../../../../images/notes/SelectElements/10.png)

![Untitled](../../../../images/notes/SelectElements/11.png)

We can change the source of these images as well.

![Untitled](../../../../images/notes/SelectElements/12.png)

![Untitled](../../../../images/notes/SelectElements/13.png)

When a given class name is not present then in that case we get an empty collection. (In case of id, we get null)

![Untitled](../../../../images/notes/SelectElements/14.png)

## getElementByTagName

`getElementByTagName`

What it does?

Returns the elements as an HTML collection or empty collection if not found

We can give `TagName` either in lower or upper case.

![Untitled](../../../../images/notes/SelectElements/15.png)

We can also change the content of the paragraph.

![Untitled](../../../../images/notes/SelectElements/16.png)

![Untitled](../../../../images/notes/SelectElements/17.png)

`span` is not used anywhere so in that case, we get an empty collection.