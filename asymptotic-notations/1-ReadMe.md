# Big O

### **( Worst case = Upper bound )**

<br>

---

<br>

## **Logarithms**

We've encountered some of the most common complexities: O(1), O(n), O(n<sup>2</sup>)

Sometimes BIG O expressions involve more complex mathematical expressions

One that appears more often than you might like is the logarithms!

<br>
<br>

> ### **What's a log again?**

| Log Eq                          | Equal to                     |
| ------------------------------- | ---------------------------- |
| Log<sub>2</sub>(8)=3            | 2<sup>3</sup> = 8            |
| Log<sub>2</sub>(value)=exponent | 2<sup>exponent</sup> = value |

<br>
The logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

<br>
<br>

`Certain searching algorithms have logarithmic time complexity. Efficient sorting algorithms involve logarithms.`

**Recursion sometimes involves logarithmic space complexity.**

<br>

<br>

---

<br>

## **BIG O Time Complexity**

It allows us to talk formally about how the runtime of an algo grows as the input grows.

`We says that and alog. is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.`

- f(n) could be linear **f(n)=n**
- f(n) could be quadratic **f(n)=n<sup>2</sup>**
- f(n) could be constant **F(n)=1**
- f(n) could be something entirely different.

When determining the time complexity of an algo, there are some helpful rule of thumbs for BIG O expressions.

These rules of thumb ar consequences of the definition of BIG O notation

<br>
<br>

> ### **Constants don't matter**

| complexity         | Equal to         |
| ------------------ | ---------------- |
| O(2n)              | O(n)             |
| O(500)             | O(1)             |
| O(13n<sup>2</sup>) | O(n<sup>2</sup>) |

<br>
<br>

> ### **Smaller terms don't matter**

| complexity            | Equal to         |
| --------------------- | ---------------- |
| O(n+10)               | O(n)             |
| O(1000n+50)           | O(n)             |
| O(n<sup>2</sup>+5n+8) | O(n<sup>2</sup>) |

<br>
<br>

> ### **BIG O Shorthands**

1. Arithmetic operations are constant.
1. Variables assignment is constant.
1. Accessing elements in an array (by index) or object (by key) is constant.
1. In a Loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.

<br>
<br>

### **BIG O Time Complexity Graph**

![Markdown Logo](https://nedbatchelder.com/text/bigo_pix/011.png)

<br>
<br>
<br>

---

## **BIG O Space Complexity**

Some time you'll here the term auxillary space complexity to refer to space required by the algorithm, not including space taken up bt the inputs

Unless otherwise noted, when we talk about space complexity, technically we'll be talking about auxiliary space complexity.

<br>

> ### **Space complexity in JS - Rules of Thumb**

- Most primitives (booleans, numbers, undefined, null) are constant space.
- Strings require O(n) space (where n is the string length).
- Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects).

<br>

![Markdown Logo](https://thepracticaldev.s3.amazonaws.com/i/1omv0tmikzeaj24z8ps2.jpeg)
