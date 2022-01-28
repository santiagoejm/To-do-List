const addToDoHandler = (e) => {
  e.preventDefault();
  let toDo = document.getElementById("to-do-value");
  let listItem = document.createElement("li");
  listItem.classList.add("list-item");

  listItem.appendChild(document.createTextNode(toDo.value));
  let buttonDlt = document.createElement("button");
  buttonDlt.appendChild(document.createTextNode("X"));
  buttonDlt.classList = "delete-item";

  listItem.appendChild(buttonDlt);
  toDoList.appendChild(listItem);
  toDo.value = "";
};

const deleteBtnHandler = (e) => {
  try {
    li = e.target.parentNode;
    toDoList.removeChild(li);
  } catch (error) {
    alert("If you want to delete an Item, please 'Click' on the X");
  }
};

const searchFilter = (e) => {
  e.preventDefault();
  let search = document.getElementById("to-do").value.toLowerCase();
  let listItem = toDoList.getElementsByTagName("li");
  Array.from(listItem).forEach(function (item) {
    let itemN = item.parentNode.firstChild;
    // console.log(itemN.firstChild.textContent);
    if (itemN.textContent.toLowerCase().indexOf(search) != -1) {
      itemN.style.display = "flex";
    } else {
      itemN.style.display = "none";
    }
  });
};

const formToAdd = document.querySelector("#form-to-add");
const toDoList = document.querySelector("#to-do-list");
const deleteBtn = document.querySelectorAll(".delete-item");
const searchForm = document.querySelector("#search-form");

formToAdd.addEventListener("submit", addToDoHandler);
toDoList.addEventListener("click", deleteBtnHandler);
searchForm.addEventListener("submit", searchFilter);
