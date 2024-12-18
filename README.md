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
# Curry Function in JavaScript

This project demonstrates a simple example of currying in JavaScript. We use a `multiply` function that takes three arguments and returns their product, but we implement it using a curried version that allows arguments to be passed one at a time.

## Code Explanation

### `multiply(a, b, c)`

- This is a standard function that takes three arguments (`a`, `b`, `c`) and logs their product.
- Example: `multiply(2, 3, 4)` would log `24`.

### `curryMultiply(fn)`

- This is a higher-order function that "curries" the given function `fn`. It transforms a normal function that takes multiple arguments into a chain of functions, each taking one argument at a time.
- The curried function can now be called as `multiplyResult(2)(3)(4)`.

## Steps:

1. **Call `multiplyResult(2)`**: Returns a function that accepts the second argument.
2. **Call `product2(3)`**: Returns a function that accepts the third argument.
3. **Call `product3(4)`**: This invokes the original `multiply` function and logs the product `24`.

## Important Note:

- In the current implementation, the final result is logged within the `multiply` function, and no value is returned from the `curryMultiply` chain. As a result, the `console.log(product4)` will output `undefined`. To return the result instead of logging it, you would need to modify the `multiply` function to return the product instead of logging it.

## Usage:

Run the program and see the output of multiplying three numbers one by one using curried functions.

# Curried Filter Function in JavaScript

This project demonstrates how to use **function currying** in JavaScript to create a flexible array filtering function. The curried function separates the definition of a **predicate function** (a function that defines a condition) from the **array** that needs to be filtered.

## Overview of Currying

Currying is a technique where a function doesn't take all of its arguments upfront. Instead, it returns a new function that takes the remaining arguments.

## Implementation

### Curried Filter Function

``javascript
// Define a curried function that takes a predicate and returns a function that filters the array
const curriedFilterArray = (predicate) => (array) => {
  return array.filter(predicate);
};

// Define a predicate function that checks if a number is even
const isEven = (num) => {
  return num % 2 === 0;
};

// Example array with numbers
let arr = [1, 3, 5, 7, 8, 4, 9, 10, 15];

// Create a filter function using the curried function and the isEven predicate
const filterArray = curriedFilterArray(isEven);

// Filter the array by passing it to the filterArray function
const result = filterArray(arr);

// Output the filtered result, which contains only the even numbers from the array
console.log(result); // Output: [8, 4, 10]




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