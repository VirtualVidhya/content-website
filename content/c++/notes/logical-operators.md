---
title: "Logical operators" 
draft: false
weight: 30
---

---

While relational (comparison) operators can be used to test whether a particular condition is true or false, they can only test one condition at a time. Often we need to know whether multiple conditions are true simultaneously. For example, to check whether we’ve won the lottery, we have to compare whether all of the multiple numbers we picked match the winning numbers. In a lottery with 6 numbers, this would involve 6 comparisons, _all_ of which have to be true. In other cases, we need to know whether any one of multiple conditions is true. For example, we may decide to skip work today if we’re sick, or if we’re too tired, or if we won the lottery in our previous example. This would involve checking whether _any_ of 3 comparisons is true.

Logical operators provide us with the capability to test multiple conditions.

C++ has 3 logical operators:

![Memory Addressing](../../../images/notes/C++/logical-operators/operator-table.png)

---

### Logical NOT

You have already run across the logical NOT unary operator in lesson [4.9 -- Boolean values](https://www.learncpp.com/cpp-tutorial/boolean-values/). We can summarize the effects of logical NOT like so:

![Memory Addressing](../../../images/notes/C++/logical-operators/not-operator.png)

If _logical NOT’s_ operand evaluates to true, _logical NOT_ evaluates to false. If _logical NOT’s_ operand evaluates to false, _logical NOT_ evaluates to true. In other words, _logical NOT_ flips a Boolean value from true to false, and vice-versa.

Logical NOT is often used in conditionals:

```cpp
bool tooLarge { x > 100 }; // tooLarge is true if x > 100
if (!tooLarge)
    // do something with x
else
    // print an error
```

One thing to be wary of is that _logical NOT_ has a very high level of precedence. New programmers often make the following mistake:

```cpp
#include <iostream>

int main()
{
    int x{ 5 };
    int y{ 7 };

    if (!x > y)
        std::cout << x << " is not greater than " << y << '\n';
    else
        std::cout << x << " is greater than " << y << '\n';

    return 0;
}
```

This program prints:

```cpp
5 is greater than 7
```

But _x_ is not greater than _y_, so how is this possible? The answer is that because the _logical NOT_ operator has higher precedence than the _greater than_ operator, the expression `! x > y` actually evaluates as `(!x) > y`. Since _x_ is 5, !x evaluates to _0_, and `0 > y` is false, so the _else_ statement executes!

The correct way to write the above snippet is:

```cpp
#include <iostream>

int main()
{
    int x{ 5 };
    int y{ 7 };

    if (!(x > y))
        std::cout << x << " is not greater than " << y << '\n';
    else
        std::cout << x << " is greater than " << y << '\n';

    return 0;
}
```

This way, `x > y` will be evaluated first, and then logical NOT will flip the Boolean result.

- **Best practice**

    If _logical NOT_ is intended to operate on the result of other operators, the other operators and their operands need to be enclosed in parentheses.

Simple uses of _logical NOT_, such as `if (!value)` do not need parentheses because precedence does not come into play.

---

### Logical OR

The _logical OR_ operator is used to test whether either of two conditions is true. If the left operand evaluates to true, or the right operand evaluates to true, or both are true, then the _logical OR_ operator returns true. Otherwise it will return false.

![Memory Addressing](../../../images/notes/C++/logical-operators/or-operator.png)

For example, consider the following program:

```cpp
#include <iostream>

int main()
{
    std::cout << "Enter a number: ";
    int value {};
    std::cin >> value;

    if (value == 0 || value == 1)
        std::cout << "You picked 0 or 1\n";
    else
        std::cout << "You did not pick 0 or 1\n";
    return 0;
}
```

In this case, we use the logical OR operator to test whether either the left condition (value == 0) or the right condition (value == 1) is true. If either (or both) are true, the _logical OR_ operator evaluates to true, which means the _if statement_ executes. If neither are true, the _logical OR_ operator evaluates to false, which means the _else statement_ executes.

- **Warning**

    New programmers sometimes try this:

    ```cpp
        if (value == 0 || 1) // incorrect: if value is 0, or if 1
    ```

    When `1` is evaluated, it will implicitly convert to `bool` `true`. Thus this conditional will always evaluate to `true`.

    If you want to compare a variable against multiple values, you need to compare the variable multiple times:

    ```cpp
        if (value == 0 || value == 1) // correct: if value is 0, or if value is 1
    ```

You can string together many _logical OR_ statements:

```cpp
if (value == 0 || value == 1 || value == 2 || value == 3)
     std::cout << "You picked 0, 1, 2, or 3\n";
```

New programmers sometimes confuse the _logical OR_ operator (||) with the _bitwise OR_ operator (|) (covered in lesson [O.2 -- Bitwise operators](https://www.learncpp.com/cpp-tutorial/bitwise-operators/)). Even though they both have _OR_ in the name, they perform different functions. Mixing them up will probably lead to incorrect results.

---

### Logical AND

The _logical AND_ operator is used to test whether both operands are true. If both operands are true, _logical AND_ returns true. Otherwise, it returns false.

![Memory Addressing](../../../images/notes/C++/logical-operators/and-operator.png)

For example, we might want to know if the value of variable _x_ is between _10_ and _20_. This is actually two conditions: we need to know if _x_ is greater than _10_, and also whether _x_ is less than _20_.

```cpp
#include <iostream>

int main()
{
    std::cout << "Enter a number: ";
    int value {};
    std::cin >> value;

    if (value > 10 && value < 20)
        std::cout << "Your value is between 10 and 20\n";
    else
        std::cout << "Your value is not between 10 and 20\n";
    return 0;
}
```

In this case, we use the _logical AND_ operator to test whether the left condition (value > 10) AND the right condition (value < 20) are both true. If both are true, the _logical AND_ operator evaluates to true, and the _if statement_ executes. If neither are true, or only one is true, the _logical AND_ operator evaluates to false, and the _else statement_ executes.

As with _logical OR_, you can string together many _logical AND_ statements:

```cpp
if (value > 10 && value < 20 && value != 16)
    // do something
else
    // do something else
```

If all of these conditions are true, the _if statement_ will execute. If any of these conditions are false, the _else statement_ will execute.

As with logical and bitwise OR, new programmers sometimes confuse the _logical AND_ operator (&&) with the _bitwise AND_ operator (&).

---

### Short circuit evaluation

In order for _logical AND_ to return true, both operands must evaluate to true. If the left operand evaluates to false, _logical AND_ knows it must return false regardless of whether the right operand evaluates to true or false. In this case, the _logical AND_ operator will go ahead and return false immediately without even evaluating the right operand! This is known as **short circuit evaluation**, and it is done primarily for optimization purposes.

Similarly, if the left operand for _logical OR_ is true, then the entire OR condition has to evaluate to true, and the right operand won’t be evaluated.

Short circuit evaluation presents another opportunity to show why operators that cause side effects should not be used in compound expressions. Consider the following snippet:

```cpp
if (x == 1 && ++y == 2)
    // do something
```

if _x_ does not equal _1_, the whole condition must be false, so ++y never gets evaluated! Thus, _y_ will only be incremented if _x_ evaluates to 1, which is probably not what the programmer intended!

- **Warning**

Short circuit evaluation may cause _Logical OR_ and _Logical AND_ to not evaluate the right operand. Avoid using expressions with side effects in conjunction with these operators.

- **Key insight**

    The Logical OR and logical AND operators are an exception to the rule that the operands may evaluate in any order, as the standard explicitly states that the left operand must evaluate first.

- **For advanced readers**

    Only the built-in versions of these operators perform short-circuit evaluation. If you overload these operators to make them work with your own types, those overloaded operators will not perform short-circuit evaluation.

---

### Mixing ANDs and ORs

Mixing _logical AND_ and _logical OR_ operators in the same expression often can not be avoided, but it is an area full of potential dangers.

Because _logical AND_ and _logical OR_ seem like a pair, many programmers assume they have the same precedence (just like addition/subtraction and multiplication/division). However, _logical AND_ has higher precedence than _logical OR_, thus _logical AND_ operators will be evaluated ahead of _logical OR_ operators (unless they have been parenthesized).

New programmers will often write expressions such as `value1 || value2 && value3`. Because _logical AND_ has higher precedence, this evaluates as `value1 || (value2 && value3)`, not `(value1 || value2) && value3`. Hopefully that’s what the programmer wanted! If the programmer was assuming left to right association (as happens with addition/subtraction, or multiplication/division), the programmer will get a result he or she was not expecting!

When mixing _logical AND_ and _logical OR_ in the same expression, it is a good idea to explicitly parenthesize each operator and its operands. This helps prevent precedence mistakes, makes your code easier to read, and clearly defines how you intended the expression to evaluate. For example, rather than writing `value1 && value2 || value3 && value4`, it is better to write `(value1 && value2) || (value3 && value4)`.

- **Best practice**

    When mixing _logical AND_ and _logical OR_ in a single expression, explicitly parenthesize each operation to ensure they evaluate how you intend.

---

### De Morgan’s laws

Many programmers also make the mistake of thinking that `!(x && y)` is the same thing as `!x && !y`. Unfortunately, you can not “distribute” the _logical NOT_ in that manner.

[De Morgan’s laws](https://en.wikipedia.org/wiki/De_Morgan%27s_laws) tell us how the _logical NOT_ should be distributed in these cases:

`!(x && y)` is equivalent to `!x || !y`  
`!(x || y)` is equivalent to `!x && !y`

In other words, when you distribute the _logical NOT_, you also need to flip _logical AND_ to _logical OR_, and vice-versa!

This can sometimes be useful when trying to make complex expressions easier to read.

- **For advanced readers**

    We can show that the first part of De Morgan’s Laws is correct by proving that `!(x && y)` equals `!x || !y` for every possible value of `x` and `y`. To do so, we’ll use a mathematical concept called a truth table:

    ![Memory Addressing](../../../images/notes/C++/logical-operators/morgan-law-1.png)

    In this table, the first and second columns represent our `x` and `y` variables. Each row in the table shows one permutation of possible values for `x` and `y`. Because `x` and `y` are Boolean values, we only need 4 rows to cover every combination of possible values that `x` and `y` can hold.

    The rest of the columns in the table represent expressions that we want to evaluate based on the initial values of `x` and `y`. The third and fourth columns calculate the values of `!x` and `!y` respectively. The fifth column calculates the value of `!(x && y)`. Finally, the sixth column calculates the value of `!x || !y`.

    You’ll notice for each row, the value in the fifth column matches the value in the sixth column. This means for every possible value of `x` and `y`, the value of `!(x && y)` equals `!x || !y`, which is what we were trying to prove!

    We can do the same for the second part of De Morgan’s Laws:

    ![Memory Addressing](../../../images/notes/C++/logical-operators/morgan-law-2.png)

    Similarly, for every possible value of `x` and `y`, we can see that the value of `!(x || y)` equals the value of `!x && !y`. Thus, they are equivalent.

---

### Where’s the logical exclusive or (XOR) operator?

_Logical XOR_ is a logical operator provided in some languages that is used to test whether an odd number of conditions is true:

![Memory Addressing](../../../images/notes/C++/logical-operators/xor-operator-1.png)

C++ doesn’t provide an explicit _logical XOR_ operator (`operator^` is a bitwise XOR, not a logical XOR). Unlike _logical OR_ or _logical AND_, _logical XOR_ cannot be short circuit evaluated. Because of this, making a _logical XOR_ operator out of _logical OR_ and _logical AND_ operators is challenging.

However, `operator!=` produces the same result as a logical XOR when given `bool` operands:

![Memory Addressing](../../../images/notes/C++/logical-operators/xor-operator-2.png)

Therefore, a logical XOR can be implemented as follows:

```cpp
if (a != b) ... // a XOR b, assuming a and b are bool
```

This can be extended to multiple operands as follows:

```cpp
if (a != b != c) ... // a XOR b XOR c, assuming a, b, and c are bool
```

This evaluates to `true` if an odd number of the operands (`a`, `b`, and `c`) evaluate to `true`.

If the operands are not of type `bool`, using `operator!=` to implement a logical XOR will not work as expected.

- **For advanced readers**

    If you need a form of _logical XOR_ that works with non-Boolean operands, you can static\_cast your operands to bool:

    ```cpp
    if (static_cast<bool>(a) != static_cast<bool>(b) != static_cast<bool>(c)) ... // a XOR b XOR c, for any type that can be converted to bool
    ```

    However, this is a bit verbose. The following trick also works and is a bit more concise:

    ```cpp
    if (!!a != !!b != !!c) // a XOR b XOR c, for any type that can be converted to bool
    ```

    This makes use of the fact that `operator!` (the logical NOT operator) implicitly converts its operand to `bool`. However, `operator!` also inverts the `bool` from `true` to `false` or vice-versa. Therefore, we need to apply `operator!` twice. The first time does the implicit conversion to `bool` and inverts the bool. The second time inverts the `bool` back to its original value. This double-inversion is necessary in cases where a multiple-operand XOR has an odd number of operands, otherwise the XOR will produce an inverted result.

    Neither of these are very intuitive, so document them well if you use them.

---

### Alternative operator representations

Many operators in C++ (such as operator ||) have names that are just symbols. Historically, not all keyboards and language standards have supported all of the symbols needed to type these operators. As such, C++ supports an alternative set of keywords for the operators that use words instead of symbols. For example, instead of `||`, you can use the keyword `or`.

The full list can be found [here](https://en.cppreference.com/w/cpp/language/operator_alternative). Of particular note are the following three:

![Memory Addressing](../../../images/notes/C++/logical-operators/alternate-presentation.png)

This means the following are identical:

```cpp
std::cout << !a && (b || c);
std::cout << not a and (b or c);
```

While these alternative names might seem easier to understand right now, most experienced C++ developers prefer using the symbolic names over the keyword names. As such, we recommend learning and using the symbolic names, as this is what you will commonly find in existing code.