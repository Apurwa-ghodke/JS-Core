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

// 2) Question: Write a curry function multiply that takes three arguments one by one and returns their product.
//  For example, multiply(2)(3)(4) should return 24.
// A normal function that takes three arguments and multiplies them
// A normal function that takes three arguments and multiplies them
function multiply(a, b, c) {
  console.log(a * b * c);  // Output the product of a, b, and c
}

// Curry function to convert 'multiply' into a curried version
const curryMultiply = function(fn) {
  return function(a) {
    return function(b) {
      return function(c) {
        fn(a, b, c);  // Call the original multiply function with all three arguments
      }
    }
  }
}

// Creating a curried version of 'multiply'
const multiplyResult = curryMultiply(multiply);

// Partially applying arguments one by one
const product2 = multiplyResult(2);   // Provide first argument '2'
const product3 = product2(3);         // Provide second argument '3'
const product4 = product3(4);         // Provide third argument '4'

