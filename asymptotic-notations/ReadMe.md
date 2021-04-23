# Big O

### **( Worst case = Upper bound )**

It allows us to talk formally about how the runtime of an algo grows as the input grows.

`We says that and alog. is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increases.`

- f(n) could be linear `f(n)=n`
- f(n) could be quadratic `f(n)=n^2`
- f(n) could be constant `F(n)=1`
- f(n) could be something entirely different.

When determining the time complexity of an algo, there are some helpful rule of thumbs for BIG O expressions.

These rules of thumb ar consequences of the definition of BIG O notation

> ### **Constants don't matter**

| complexity | Equal to |
| ---------- | -------- |
| O(2n)      | O(n)     |
| O(500)     | O(1)     |
| O(13n^2)   | O(n^2)   |

> ### **Smaller terms don't matter**

| complexity  | Equal to |
| ----------- | -------- |
| O(n+10)     | O(n)     |
| O(1000n+50) | O(n)     |
| O(n^2+5n+8) | O(n^2)   |

> ### **BIG O Shorthands**

1. Arithmetic operations are constant.
1. Variables assignment is constant.
1. Accessing elements in an array (by index) or object (by key) is constant.
1. In a Loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop.
