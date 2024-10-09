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
