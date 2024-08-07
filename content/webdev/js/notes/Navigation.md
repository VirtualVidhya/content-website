---
title: "Navigation"
draft: false
weight: 9
---

---

With the help of navigation, we can go from one element to an another…

There are certain properties in navigation, with the help of which we can do our navigation…

- `parentElement`
- `children`
- `previousElementSibling` / `nextElementSibling`

For e.g. we have this code…

```jsx
<div>

	<h1></h1>
	
	<p></p>
	
</div>
```

We can form the relationship between elements here…

`div` → parent

`h1` & `p` → children

`h1` & `p` → sibling of each other

So, we have formed a hierarchical structure here, a similar structure gets formed inside our DOM.

With the help of this,

we can print a `parentElement` of any element.

 e.g. for `h1` & `p`, `div` will get printed as parentElement.

Every child will have a single parent.

![Untitled](../../../../images/notes/Navigation/1.png)

Every parent may have multiple children.

![Untitled](../../../../images/notes/Navigation/2.png)

In this case, `h4` has no children.

![Untitled](../../../../images/notes/Navigation/3.png)

There’s an another property `childElementCount`,

which tells us that how many children does this element have?

![Untitled](../../../../images/notes/Navigation/4.png)

![Untitled](../../../../images/notes/Navigation/5.png)

We can change the styling of elements by navigating to them using these siblings as well.

![Untitled](../../../../images/notes/Navigation/6.png)

Here, we haven’t directly accessed `h1`. We indirectly accessed it using its siblings.