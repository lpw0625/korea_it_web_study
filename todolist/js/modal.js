// 1월을 0월로 가져온다.


/*let arr = new Array(); 
let obj = {
    id: 1,
    name: "이평원"
}

let obj2 = {
    id: 2,
    name: "이평투"
}

arr.push(obj);
arr.push(obj2);

console.log(arr);

console.log(JSON.stringify(arr));
console.log(JSON.stringify(obj));
console.log(JSON.stringify(obj2));

let jsonArr = JSON.stringify(arr);

console.log(JSON.parse(jsonArr)) */


window.onkeyup = (e) => {
    if(e.keyCode === 27) {
    handleCancelClick();
    }
}

function handleAddTodoModalOpen() {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "추가하기";
    todoInput.value = "";
    submitButton.onclick = handleAddTodoSubmit;

    todoInput.onkeydown = (e) => {
        if(!e.shiftKey && e.keyCode === 13) {
            submitButton.click();
         }
      }
    
    modal.classList.add("modal-show");
}

function handleEditTodoModalOpen(todoId) {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title");
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button");
    title.innerHTML = "수정하기";

    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let findTodoByTodoId = todoList.filter(todo => todo.todoId === todoId)[0];

    todoInput.value = findTodoByTodoId.content;
    submitButton.onclick =  handleEditTodoSubmit;

    todoInput.onkeydown = (e) => {
        if(e.ctrlKey && e.keyCode === 13) {
            submitButton.click();
         }
      }
    
    
    modal.classList.add("modal-show");
}

function converDateKor(currentDate) {
    const dayKors = ["일","월","화","수","목","금","토"];
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date  = currentDate.getDate();
    const day = dayKors[currentDate.getDay()];

    return `${year}년 ${month}월 ${date}일(${day})`;
}

function handleAddTodoSubmit() {
    const modal = document.querySelector(".root-modal");
    const todoInput = modal.querySelector(".todo-input");
    modal.classList.remove("modal-show");



   let todoListJson = localStorage.getItem("todoList");
   let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();

   let lastTodoId = todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId;
// null이 아니면 todoListJson이 들어가고 만약에 null이면 새로운 배열이 생성이 된다.
   
let todoObject = {
    todoId: lastTodoId + 1,
    content: todoInput.value,
    date: converDateKor(new Date())
}

    todoList.push(todoObject);

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();
}

function handleEditTodoSubmit(todoId) {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");

    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson !== null ? JSON.parse(todoListJson) : new Array();

    let findIndex = -1;

    for(let i = 0; i < todoList.length; i++) {
        if(todoList[i].todoId === todoId) {
            findIndex = i;
            break;

        }
    }
    console.log(findIndex)

    if(findIndex === -1) {
        alert("수정오류!");
        return;
    }

    todoList[findIndex].content = document.querySelector(".todo-input").value;
    todoList[findIndex],date = converDateKor(new Date()); 

    localStorage.setItem("todoList", JSON.stringify(todoList));
    getTodoList();
}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}