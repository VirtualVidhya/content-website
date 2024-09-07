---
title: "DOM - Form Events"
draft: false
weight: 16
---

---

Whatever we make with HTML form, that has its own events as well.

![Untitled](../../../../images/notes/form-events/1.png)

![Untitled](../../../../images/notes/form-events/2.png)

The `action` given in the form is for the action to take after form submission, so here on clicking `Register`, it will go to the URL `/action` which currently doesn’t exist.

Now since we are going to the /action URL, we won’t be able to see the console page of form submission.

We could’ve used `alert` instead of `console` so that before going to that URL, it would give an alert message first.

![Untitled](../../../../images/notes/form-events/3.png)

![Untitled](../../../../images/notes/form-events/4.png)

But instead, we can use `preventDefaul()` of event.

What it does is that it simply prevents the default action which gets performed on that event trigger.

So here, the default action on form submit event is to go to the URL mentioned but by using this method we are preventing that behaviour.

Now, after form submission we will remain on the same page therefore we will be able to see the console message.