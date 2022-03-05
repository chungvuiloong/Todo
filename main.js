let text = document.querySelector("#text");
let button = document.querySelector("#add");
let deleteAll = document.querySelector("#deleteAll");
let list = document.querySelector("#checklist");

//////////////////////////////// WORKS

// toDo = (event) => {
//   event.preventDefault();

//   if (event.keyCode === 13) {
//     console.log("enter");
//   } else if (text.value == "") {
//     console.log("Please enter something.");
//   } else {
//     list.insertAdjacentHTML(
//       "beforeend",
//       `<li>${text.value} <button type="button" class="delete" onclick ="this.parentElement.remove()";
//       >X</button></li>`
//     );
//     text.value = "";
//   }
// };

// if (list.children.length <= 1) {
//   document.querySelector("#myTasks").textContent = "Task";
// } else {
//   document.querySelector("#myTasks").textContent = "Tasks";
// }

// document.querySelector("#numberOfTasks").textContent = list.children.length;

// Version2 works!! and short too
// onclick = "this.parentElement.remove();";

//Version 1. This works but too long
// onclick = "this.parentNode.parentNode.removeChild(this.parentNode);";
// console.log(list.children); // shows the list of li   checklist.children[0], [1], [2]
// console.log(list.children.length); //shows number of li in checklist
// console.log(list.childElementCount); //shows number of li in checklist

//This resets the value in the placeholder

// remove = () => {
//   this.parentElement.remove;
// };

// version 1 // Removes other points
// remove = () => {
//   for (let index = 0; index <= list.children.length; index++) {
//     list.children[index].remove();
//   }
// };

// button.addEventListener("click", toDo);

toDo = (event) => {
  if (event.keyCode == 13) {
    console.log("Enter");

    // list.insertAdjacentHTML(
    //   "beforeend",
    //   `<li>${text.value} <button type="button" class="delete" onclick ="this.parentElement.remove()";
    //   >X</button></li>`
    // );

    text.value = "";
  }

  // else if (text.value == "") {
  //   console.log("Please enter something.");
  // }
};

text.addEventListener("keyup", toDo);
