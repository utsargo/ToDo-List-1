const ListData = document.querySelector(".lists");
const InputField = document.querySelector(".add-to-list");

let completed = false,
  index = 0;
let ToDoData = [];

InputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && InputField.value.length != 0) {
    let storedData = localStorage.getItem("To-Do");

    if (storedData === null) {
      ToDoData = [];
    } else {
      ToDoData = JSON.parse(storedData);
      index = ToDoData.length === 0 ? 0 : ToDoData.length;
    }

    const LocalData = {
      index: index,
      description: InputField.value,
      completed: completed,
    };
    ToDoData.push(LocalData);
    localStorage.setItem("To-Do", JSON.stringify(ToDoData));
    addToList();
  }
});

function addToList() {
  ListData.innerHTML = "";
  ToDoData.forEach((element) => {
    ListData.innerHTML += `
  <div class="mainlist">
  <input type="checkbox" class="check">
  <input class="listitem" id="list${element.index}" value="${element.description}" readonly>
  <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editList(${element.index});"></i>
       <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveList(${element.index});"></i>
  <i id="removeicon" onclick="Remove(${element.index});" class="fa-solid fa-trash"></i>
  </div>
 `;
    InputField.value = "";
  });
}

window.editList = (index) => {
  const editBtn = document.getElementById("edit" + index + "");
  const saveBtn = document.getElementById("save" + index + "");

  saveBtn.style.display = "block";
  editBtn.style.display = "none";
  const specList = document.getElementById("list" + index + "");
  specList.removeAttribute("readonly");
  const length = specList.value.length;
  specList.setSelectionRange(length, length);
  specList.focus();
  return specList;
};

window.saveList = (index) => {
  const editBtn = document.getElementById("edit" + index + "");
  const saveBtn = document.getElementById("save" + index + "");

  saveBtn.style.display = "none";
  editBtn.style.display = "block";

  const specList = document.getElementById("list" + index + "");
  let storedData = localStorage.getItem("To-Do");
  ToDoData = JSON.parse(storedData);
  ToDoData[index].description = specList.value;

  localStorage.setItem("To-Do", JSON.stringify(ToDoData));
  addToList();
};

window.Remove = (index) => {
  let storedData = localStorage.getItem("To-Do");
  ToDoData = JSON.parse(storedData);
  ToDoData.splice(index, 1);
  for (let i = 0; i < ToDoData.length; i++) {
    ToDoData[i].index = i;
  }

  localStorage.setItem("To-Do", JSON.stringify(ToDoData));
  addToList();
};

window.onload = () => {
  if (localStorage.getItem("To-Do")) {
    ToDoData = JSON.parse(localStorage.getItem("To-Do"));
  }
  ToDoData.forEach((element) => {
    ListData.innerHTML += `
    <div class="mainlist">
    <input type="checkbox" class="check">
    <input class="listitem" id="list${element.index}" value="${element.description}" readonly>
    <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editList(${element.index});"></i>
         <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveList(${element.index});"></i>
    <i id="removeicon" onclick="Remove(${element.index});" class="fa-solid fa-trash"></i>
    </div>
   `;
  });
};
