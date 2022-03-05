let text = document.querySelector("#text");
let button = document.querySelector("#add");
let deleteAll = document.querySelector("#deleteAll");
let list = document.querySelector("#checklist");

testing = (event) => {
  event.preventDefault();
  if (text.value == "") {
    console.log("Please enter something.");
  } else {
    list.insertAdjacentHTML("beforeend", `<li>${text.value}</li>`);
    text.value = "";
  }
};

button.addEventListener("click", testing);
deleteAll.addEventListener("click", () => list.remove(););
// deletedButton.addEventListener("click", delete);
