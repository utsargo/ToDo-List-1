import './style.css';


const ListData = document.querySelector('.lists');

const ToDoData = [
    {
        index: 0,
        descripttion: "Wash Laptop with Detergent",
        completed: false,
    },
    {
        index: 1,
        descripttion: "Inject Bug in Facebook Server",
        completed: false,
    },
    {
        index: 3,
        descripttion: "Chat with Aliens",
        completed: false,
    },
    {
        index: 4,
        descripttion: "Hack someone's Bank Account",
        completed: false,
    },
    {
        index: 2,
        descripttion: "Wait for PR to be Approved",
        completed: false,
    },
]

ToDoData.sort((a, b) => a.index - b.index);

ListData.innerHTML = ""


    
    ToDoData.forEach(element => {
        ListData.innerHTML +=`
        <div class="mainlist">
        <input type="checkbox" class="check">
        <p class="listitem">${element.descripttion}</p>
        <i id="moreicon" class="fa-solid fa-ellipsis-vertical"></i>
        </div>
       `
    });
  






