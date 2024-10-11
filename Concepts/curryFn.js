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
  