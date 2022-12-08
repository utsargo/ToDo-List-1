const ListData = document.querySelector(".lists");
const InputField = document.querySelector(".add-to-list");
let ToDoData = [];

InputField.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && InputField.value.length != 0) {
    addToList();
  }
});

function addToList() {
  ListData.innerHTML += `
                    <div class="mainlist">
                    <input type="checkbox" class="check">
                    <input class="listitem" value="${InputField.value}">
                    <i id="removeicon" class="fa-solid fa-trash"></i>
                    </div>
                   `;
                   const LocalData = {
                    index: ToDoData.length === 0 ? 0 : ToDoData.length,
                    description: InputField.value,
                    completed: false
                  }
                  ToDoData.push(LocalData)
                  localStorage.setItem("To-Do", JSON.stringify(ToDoData));

  InputField.value = "";
  let RemoveIcon = document.querySelectorAll("#removeicon");
  for (let i = 0; i < RemoveIcon.length; i++) {
    RemoveIcon[i].onclick = function () {
      this.parentNode.remove();
      ToDoData.splice(i,1)
      ToDoData.forEach((e,i)=> e.index = i)
      localStorage.setItem("To-Do", JSON.stringify(ToDoData));
    };
  }

}
