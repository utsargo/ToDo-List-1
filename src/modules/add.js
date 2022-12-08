const ListData = document.querySelector(".lists");
const InputField = document.querySelector(".add-to-list");
let ToDoData = [];


InputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let IndexNo = ToDoData.length === 0 ? 0 : ToDoData.length;
    let NewTodo = {};
    NewTodo["index"] = IndexNo;
    NewTodo["description"] = InputField.value;
    NewTodo["completed"] = false;
    ToDoData.push(NewTodo);
    CreateUI.addToList();
  }
});

class CreateUI {
    static addToList() {
      ListData.innerHTML = "";
      ToDoData.forEach((element) => {
        ListData.innerHTML += `
                    <div class="mainlist">
                    <input type="checkbox" class="check">
                    <p class="listitem">${element.description}</p>
                    <i id="moreicon" class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                   `;
      });
    }
  }
  