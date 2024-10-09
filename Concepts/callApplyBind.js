// Call Apply Bind Method Examples
// Example Object
const person = {
    firstName: "John",
    lastName: "Doe",
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Example Functions
  function greet(greeting, punctuation) {
    return `${greeting}, ${this.firstName} ${this.lastName}${punctuation}`;
  }
  
  // 1. call() example
  const greetingCall = greet.call(person, "Hello", "!");
  console.log("Using call():", greetingCall); // Output: Hello, John Doe!
  
  // 2. apply() example
  const greetingApply = greet.apply(person, ["Hi", "?"]);
  console.log("Using apply():", greetingApply); // Output: Hi, John Doe?
  
  // 3. bind() example
  const boundGreet = greet.bind(person);
  const greetingBind = boundGreet("Hey", ".");
  console.log("Using bind():", greetingBind); // Output: Hey, John Doe.
  

//   Example 2)

const User = {
    fname :"Jeeny",
    lname :"Doe",
}

const printFullName = function (age){
    return `${this.fname}  ${this.lname}, Age- ${age} `
}


//1. Call Example 
console.log("Using Call()", printFullName.call(User, 25))

// 2. apply() example
console.log("Using Apply()", printFullName.apply(User, [21]))


// 3. bind() example
const resultBind = printFullName.bind(User)
console.log("Using Bind()",resultBind(28))