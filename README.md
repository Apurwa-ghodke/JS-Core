# JS-Core
# Call, Apply, and Bind Methods in JavaScript

This repository demonstrates the usage of `call()`, `apply()`, and `bind()` methods in JavaScript. These methods allow controlling the `this` value inside functions, which is essential in many scenarios involving objects and method reusability.

## Methods Explanation

### 1. `call()`
- **Description**: Invokes a function with a specified `this` value and arguments passed one by one.
- **Example**:
    ```javascript
    greet.call(person, "Hello", "!");
    ```

### 2. `apply()`
- **Description**: Similar to `call()`, but takes arguments as an array.
- **Example**:
    ```javascript
    greet.apply(person, ["Hi", "?"]);
    ```

### 3. `bind()`
- **Description**: Returns a new function with the `this` value set to the provided object. The new function can be called later.
- **Example**:
    ```javascript
    const boundGreet = greet.bind(person);
    boundGreet("Hey", ".");
    ```
# This JavaScript example demonstrates how to manually create a polyfill for Function.prototype.bind, making the code compatible with older browsers that don't support the bind function natively. Here's a breakdown of how it works:

- **person object**: We define an object `person` that contains `fname` and `lname` properties.
- **printName function**: This function prints the fname and `lname` of the person object, along with any other additional arguments provided.
- **Polyfill for bind**: The polyfill ensures that if the `bind` method doesn't exist, it is defined. The polyfill stores the original function and returns a new function that uses the apply method to `bind` the context (this) and any arguments passed.
- **myNameFn**: This uses the bind method to bind the `person` object to printName, along with initial arguments ("Pune" and 410501).
- **Function Call**: When myNameFn is called with an additional argument ("chakan"), it prints Purvi Ghodke Pune, 410501, chakan.

# Function Currying Example

## Overview

This example demonstrates **function currying** in JavaScript, a technique where a function is transformed to accept one argument at a time and returns new functions for subsequent arguments. Once all arguments are provided, the original function is executed. 

In this case, we use currying to refactor a `sum` function, allowing it to be called with one argument at a time, until all three arguments are received.

## Code

```javascript
// Regular sum function that takes three arguments and prints their sum
function sum(a, b, c) {
  console.log(a + b + c);
}

// currySum function transforms a regular function into a curried version
// It takes the original function 'fn' and returns nested functions to handle each argument separately
const currySum = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        // Call the original function with all three arguments once they are provided
        fn(a, b, c);
      };
    };
  };
};

// Create a curried version of the sum function
const curryFn = currySum(sum);

// Pass the first argument (2)
const add2 = curryFn(2);

// Pass the second argument (3)
const add3 = add2(3);

// Pass the third argument (5), which triggers the execution of the sum function
const add5 = add3(5);



## Running the Code

To run the examples:

1. Clone this repository:
    ```bash
    git clone https://github.com/Apurwa-ghodke/JS-Core.git
    ```

2. Navigate to the project directory:
    ```bash
    cd call-apply-bind-example
    ```

3. Run the script using Node.js:
    ```bash
    node index.js
    ```

## Conclusion

These methods provide flexible ways to call functions with different contexts (`this` values). `call()` and `apply()` are useful for invoking functions immediately, while `bind()` is great for creating new functions with preset contexts.

This example highlights how the `bind` method controls a function's this context and argument binding. By implementing a `polyfill`, we ensure compatibility across browsers, especially older ones, and demonstrate how apply can replicate `bind's` behavior. This makes functions more reusable and flexible in different contexts.