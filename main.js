const addToDoHandler = (e) => {
  e.preventDefault();
  let toDo = document.getElementById("to-do-value").value;
  let listItem = document.createElement("li");
  listItem.classList.add("list-item");

  listItem.appendChild(document.createTextNode(toDo));
  let buttonDlt = document.createElement("button");
  buttonDlt.appendChild(document.createTextNode("X"));
  buttonDlt.classList = "delete-item";

  listItem.appendChild(buttonDlt);
  toDoList.appendChild(listItem);
};

const deleteBtnHandler = (e) => {
  try {
    li = e.target.parentNode;
    toDoList.removeChild(li);
  } catch (error) {
    alert("If you want to delete an Item, please 'Click' on the X");
  }
};

const formToAdd = document.querySelector("#form-to-add");
const toDoList = document.querySelector("#to-do-list");
const deleteBtn = document.querySelectorAll(".delete-item");

formToAdd.addEventListener("submit", addToDoHandler);
toDoList.addEventListener("click", deleteBtnHandler);
