//? Regular sum function that takes three arguments and prints their sum
function sum(a, b, c) {
  console.log(a + b + c);
}

//?currySum function transforms a regular function into a curried version
//?It takes the original function 'fn' and returns nested functions to handle each argument separately
const currySum = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        //? Call the original function with all three arguments once they are provided
        fn(a, b, c);
      };
    };
  };
};

//? Create a curried version of the sum function
const curryFn = currySum(sum);

//? Pass the first argument (2)
const add2 = curryFn(2);

//? Pass the second argument (3)
const add3 = add2(3);

//? Pass the third argument (5), which triggers the execution of the sum function
const add5 = add3(5);

//? 2) Question: Write a curry function multiply that takes three arguments one by one and returns their product.
//?  For example, multiply(2)(3)(4) should return 24.
// ? A normal function that takes three arguments and multiplies them
//? A normal function that takes three arguments and multiplies them
function multiply(a, b, c) {
  console.log(a * b * c); // Output the product of a, b, and c
}

//? Curry function to convert 'multiply' into a curried version
const curryMultiply = function (fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        fn(a, b, c); // Call the original multiply function with all three arguments
      };
    };
  };
};

// Creating a curried version of 'multiply'
const multiplyResult = curryMultiply(multiply);

// Partially applying arguments one by one
const product2 = multiplyResult(2); // Provide first argument '2'
const product3 = product2(3); // Provide second argument '3'
const product4 = product3(4); // Provide third argument '4'

// 3)Implement a curried function to filter an array by a condition:
// Step 1: Define a curried function that takes a predicate (condition function) and returns a new function
// that will filter the array using the given predicate.
const curriedFilterArray = (predicate) => (array) => {
  // Step 3: Inside the returned function, the 'array.filter()' method is used to filter the array based on the predicate.
  // 'filter()' tests each element in the array against the predicate, keeping only the elements for which the predicate returns true.
  return array.filter(predicate);
};

// Step 2: Define a predicate function 'isEven' that checks whether a number is even.
// It returns true if the number is even (divisible by 2 with no remainder), false otherwise.
const isEven = (num) => {
  return num % 2 === 0;
};

// Example array with numbers
let arr = [1, 3, 5, 7, 8, 4, 9, 10, 15];

// Step 4: Apply the curried function 'curriedFilterArray' with the 'isEven' predicate.
// 'filterArray' now holds a function that can take an array and filter its elements using 'isEven'.
const filterArray = curriedFilterArray(isEven);

// Step 5: Pass the array to 'filterArray' to execute the filtering process.
const result = filterArray(arr);

// Step 6: Output the filtered result, which contains only the even numbers from the array.
console.log(result); // Output: [8, 4, 10]
