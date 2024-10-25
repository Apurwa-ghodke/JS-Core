const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
const innerMost = document.getElementById("innerMost");

outer.addEventListener(
  "click",
  () => {
    console.log("Outer Clicked in Capturing");
  },
  true
);
inner.addEventListener(
  "click",
  () => {
    console.log("Inner Clicked Capturing");
  },
  false
);
innerMost.addEventListener(
  "click",
  () => {
    console.log("InnerMost Clicked Capturing");
  },
  true
);

//! Explanation
//! Event Capturing:
//* In event capturing, the event starts from the outermost element and trickles down to the innermost element.

//? - The event starts from the ancestor elements and reaches the target element.
//? - Triggered by passing a third argument (true) in `addEventListener()`.
//? - Useful when you need to handle events in parent elements before child elements.
//? - Pros: Control over event flow, useful in advanced scenarios.
//? - Cons: Less intuitive, not the default behavior.
