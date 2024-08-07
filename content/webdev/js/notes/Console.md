---
title: "Console"
draft: false
weight: 2
---

---

The console is a panel that displays important messages, like errors, for developers. 

Much of the work the computer does with our code is invisible to us by default. If we want to see things appear on our screen, we can print, or *log*, to our console directly.

Initially we’ll use this console window in browser to write simple programs to get familiar with fundamentals of programming in JS.

**Note:** Any code we write in browser console isn’t permanent, as soon as we refresh the page, it goes away. Basically the code we write stays on that instance of the browser only, as soon as a new instant comes by reloading the page or reopening that code written in previous instance goes away.

The working of this console uses REPL - Read Evaluate(calculation) Print Loop(repeat again)

Now in more technical terms, In JavaScript, the `console` keyword refers to an object, a collection of data and actions, that we can use in our code. Keywords are words that are built into the JavaScript language, so the computer recognizes them and treats them specially.

One action, or method, that is built into the `console` object is the `.log()` method. When we write `console.log()` what we put inside the parentheses (`()` ) will get printed, or logged, to the console.

It’s going to be very useful for us to print values to the console, so we can see the work that we’re doing.

```jsx
console.log(5);
```

This example logs `5` to the console. The semicolon denotes the end of the line, or statement.

**Note:** Although in JavaScript your code will usually run as intended without a semicolon, we recommend learning the habit of ending each statement with a semicolon so you never leave one out in the few instances when they are required.

---

# `console.log()`

Until now we’ve been printing things on the console just by simply mentioning a string,

![Console 1](../../../../images/notes/Console/1.png)

But this won’t work in our JS code files, so to print messages on the console from our JS code files, we’ll use `console.log()`

We can print 

- characters, strings

![Console 2](../../../../images/notes/Console/2.png)

- variables’ values

![Console 3](../../../../images/notes/Console/3.png)

- operations’ values

![Console 4](../../../../images/notes/Console/4.png)

- multiple values

![Console 5](../../../../images/notes/Console/5.png)

So the use of `console.log()` comes in to the picture because,

our JS file isn’t linked to the browser. Our JS file is somewhere else and our browser works differently so whenever we want something to get displayed on the browser from our JS file, we need to use `console.log()`

The `console.log()` method is used to log or print messages to the console. It can also be used to print objects and other info.

```jsx
console.log('Hi there!');
// Prints: Hi there!
```

Later on, We’ll have to write JavaScript code into our usual text-editor only.

Just like we made HTML file with → `.html`, CSS file with → `.css`,

JavaScript file gets made with → `.js`