// Defining a person object with fname and lname properties
const person = {
    fname: "Purvi",
    lname: "Ghodke"
};

// Function to print the full name along with additional arguments
function printName(...args) {
    console.log(`${this.fname} ${this.lname} ${args}`);
}

// Polyfill for Function.prototype.bind to ensure compatibility with older browsers
if (!Function.prototype.bind) {
    Function.prototype.bind = function(context, ...args) {
        let fn = this; // Store the original function (i.e., printName in this case)
        return function (...params) {
            // Return a new function that applies the original function 
            // with the provided context and arguments
            return fn.apply(context, [...args, ...params]);
        };
    };
}

// Using the bind method to bind the 'person' object to the 'printName' function
// along with the initial arguments 'Pune' and '410501'
let myNameFn = printName.bind(person, "Pune", 410501);

// Calling the bound function with an additional argument 'chakan'
myNameFn("chakan"); // Output: Purvi Ghodke Pune, 410501, chakan
