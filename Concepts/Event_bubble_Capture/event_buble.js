const grandParent = document.getElementById("grandParent");
const parent = document.getElementById("parent");
const child = document.getElementById("child");

grandParent.addEventListener("click", ()=> {
    console.log("GrandParent Clicked")
    })
    parent.addEventListener("click", ()=> {
    console.log("Parent Clicked")
    })
    child.addEventListener("click", ()=> {
    console.log("child Clicked")
    })

    // !Explanation
//     * Event Bubbling:
//? In event bubbling, the event starts from the innermost element and bubbles up to the outermost elements.
//? - The event starts from the target element and propagates to its ancestors.
//? - Default behavior in most browsers.
//? - Useful when you want to handle events triggered on a child in its parent.
//? - Pros: Simple to understand, default behavior.
//? - Cons: Harder to stop unwanted event propagation.