// let text = document.querySelector("#text");
// let input = document.querySelector("input");
// let button = document.querySelector("#add");
// let list = document.querySelector("#checklist");

// Version2 works!! and short too
// onclick = "this.parentElement.remove();";

//Version 1. This works but too long
// onclick = "this.parentNode.parentNode.removeChild(this.parentNode);";
// console.log(list.children); // shows the list of li   checklist.children[0], [1], [2]
// console.log(list.children.length); //shows number of li in checklist
// console.log(list.childElementCount); //shows number of li in checklist

let text = document.querySelector("#text");
let input = document.querySelector("input");
let button = document.querySelector("#add");
let list = document.querySelector("#checklist");

/////////////////////////////////////////////////

toDo = (event) => {
  if (text.value == "") {
    console.log("Please enter something.");
  } else if (event.key === "Enter") {
    event.preventDefault();
    list.insertAdjacentHTML(
      "beforeend",
      `<li>${text.value} <button type="button" class="delete" onclick="this.parentElement.remove()";
      >X</button> </li>`
    );
    text.value = "";
  }
};

calculate = () => {
  let task;
  if (list.childElementCount <= 1) {
    task = `Task left`;
  } else {
    task = `Tasks left`;
  }

  document.querySelector(
    "#numberOfTasks"
  ).textContent = `${list.childElementCount} ${task}`;
};

////////////////////////////////////////////////

input.addEventListener("keypress", toDo);
document.addEventListener("click", calculate);
document.addEventListener("keypress", calculate);

//////////////////////////////// ADD BUTTON WORKS DONT DELETE

// let text = document.querySelector("#text");
// let input = document.querySelector("input");
// let button = document.querySelector("#add");
// let list = document.querySelector("#checklist");

// toDo = (event) => {
//   event.preventDefault();

//   if (text.value == "") {
//     console.log("Please enter something.");
//   } else {
//     list.insertAdjacentHTML(
//       "beforeend",
//       `<li>${text.value} <button type="button" class="delete" onclick="this.parentElement.remove()";
//       >X</button> </li>`
//     );

//     text.value = "";
//   }
// };

// button.addEventListener("click", toDo);
