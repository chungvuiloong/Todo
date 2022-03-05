let text = document.querySelector("#text");
let button = document.querySelector("#add");
let deleteAll = document.querySelector("#deleteAll");
let list = document.querySelector("#checklist");

////////////////////////////////

let i = 0;

testing = (event) => {
  event.preventDefault();

  if (text.value == "") {
    console.log("Please enter something.");
  } else {
    list.insertAdjacentHTML(
      "beforeend",
      `<li>${text.value} <button type="button" class="delete" onclick="this.parentNode.parentNode.removeChild(this.parentNode);">X</button></li>`
    );

    //  console.log(list.children); // shows the list of li   checklist.children[0], [1], [2]
    //console.log(list.children.length); //shows number of li in checklist
    //console.log(list.childElementCount); //shows number of li in checklist

    //This resets the value in the placeholder
    text.value = "";
  }
};

// version 1
// remove = () => {
//   for (let index = 0; index <= list.children.length; index++) {
//     list.children[index].remove();
//   }
// };

button.addEventListener("click", testing);

// Deletes everything and cant add things after this
deleteAll.addEventListener("click", () => list.remove());
