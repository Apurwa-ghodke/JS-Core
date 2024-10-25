const form = document.getElementById("form");
const addItems = document.getElementById("add-items");
const itemList = document.getElementById("item-list");
const inputItem =  document.getElementById("input-item").value;
form.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.target.dataset.uppercase !== undefined) {
    e.target.value = e.target.value.toUpperCase();
  }
});

//Example 2 - Adding functionality with Event Delegation

itemList.addEventListener("click",(e) => {
  e.target.tagName === "LI";
  console.log(`you clicked  ${e.target.textContent}`);
});
addItems.addEventListener("click", () => {
const newItem = document.createElement("li");
  newItem.textContent = `${inputItem} ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});
