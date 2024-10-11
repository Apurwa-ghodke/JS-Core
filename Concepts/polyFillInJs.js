 const person = {
    fname: "Purvi",
    lname: "Ghodke"
 }
 function printName(...args) {
    console.log(`${this.fname} ${this.lname} ${args}`)
 }
 if (!Function.prototype.bind) {
    Function.prototype.bind = function(context, ...args) {
        let fn = this;
        return function (...params) {
          return fn.apply(context, [...args, ...params]);
        };
      };
    }


      let myNameFn = printName.bind(person, "Pune", 410501);
      myNameFn("chakan");
