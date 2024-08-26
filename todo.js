const STATUSES = {
  TODO: "todo",
  INPROGRESS: "inprogress",
  DONE: "done",
  BLOCKED: "blocked",
};

let todos = [
  {
    id: 1,
    text: "lets talk",
    status: STATUSES.TODO,
  },
  {
    id: 2,
    text: "lets eat",
    status: STATUSES.INPROGRESS,
  },
  {
    id: 3,
    text: "primary school",
    status: STATUSES.DONE,
  },
  {
    id: 4,
    text: "legendary school",
    status: STATUSES.BLOCKED,
  },
];

const todoTasksContainer = document.getElementById("todo_tasks_box");
const inprogressTasksContainer = document.getElementById(
  "inprogress_tasks_box"
);
const doneTasksContainer = document.getElementById("done_tasks_box");
const blockedTasksContainer = document.getElementById("blocked_tasks_box");

const addTaskButton = document.getElementById("addTaskButton");
const submitButton = document.getElementById("submit_button");
const dialogContainer = document.querySelector("div.dialog_container");
const inputElement = document.getElementById("task_oruulah");
const selectElement = document.getElementById("taskiin_turul_songoh");

let isCreatingTask = false;
let taskId = 0;

function renderTodoApp() {
  let todoTasks = ``;
  let inProgressTasks = ``;
  let doneTasks = ``;
  let blockedTasks = ``;

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].status === STATUSES.TODO) {
      todoTasks += `<div class="taskiin_box">
            <div class="checkBox"><input type="checkbox" /></div>
            <div class="taskiin_bichver">${todos[i].text}</div>
            <button class="editTask" onclick="editTask(${todos[i].id})" >
              <img src="Frame (4).png" />
            </button>
            <button class="deleteTask" onclick="removeTask(${todos[i].id})">
              <img src="Frame (7).png" />
            </button>
          </div>`;
    }
    if (todos[i].status === STATUSES.INPROGRESS) {
      inProgressTasks += `<div class="taskiin_box">
          <div class="checkBox"><input type="checkbox" /></div>
          <div class="taskiin_bichver">${todos[i].text}</div>
          <button class="editTask" onclick="editTask(${todos[i].id})" >
            <img src="Frame (4).png" />
          </button>
          <button class="deleteTask" onclick="removeTask(${todos[i].id})">
            <img src="Frame (7).png" />
          </button>
        </div>`;
    }
    if (todos[i].status === STATUSES.DONE) {
      doneTasks += `<div class="taskiin_box">
            <div class="checkBox"><input type="checkbox" /></div>
            <div class="taskiin_bichver">${todos[i].text}</div>
            <button class="editTask" onclick="editTask(${todos[i].id})" >
              <img src="Frame (4).png" />
            </button>
            <button class="deleteTask" onclick="removeTask(${todos[i].id})">
              <img src="Frame (7).png" />
            </button>
          </div>`;
    }
    if (todos[i].status === STATUSES.BLOCKED) {
      blockedTasks += `<div class="taskiin_box">
            <div class="checkBox"><input type="checkbox" /></div>
            <div class="taskiin_bichver">${todos[i].text}</div>
            <button class="editTask" onclick="editTask(${todos[i].id})" >
              <img src="Frame (4).png" />
            </button>
            <button class="deleteTask" onclick="removeTask(${todos[i].id})">
              <img src="Frame (7).png" />
            </button>
          </div>`;
    }
  }

  todoTasksContainer.innerHTML = todoTasks;
  inprogressTasksContainer.innerHTML = inProgressTasks;
  doneTasksContainer.innerHTML = doneTasks;
  blockedTasksContainer.innerHTML = blockedTasks;
  inputElement.value = "";
  selectElement.value = "";
  taskId = 0;
  isCreatingTask = false;
}

renderTodoApp();

addTaskButton.addEventListener("click", addTask);
submitButton.addEventListener("click", submit);

function addTask() {
  isCreatingTask = true;
  dialogContainer.classList.add("flex");
}

function submit() {
  if (isCreatingTask) {
    document.getElementById("task_oruulah");
    todos.push({
      id: ramdomIntFromInterval(),
      text: inputElement.value,
      status: selectElement.value,
    });
    console.log(todos);
  } else {
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === taskId) {
        todos[i].text = inputElement.value;
        todos[i].status = selectElement.value;
      }
      console.log("hewleegui");
    }
  }
  renderTodoApp();
  dialogContainer.classList.remove("flex");
}

function removeTask(id) {
  let filteredTodo = [];
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id !== id) {
      filteredTodo.push(todos[i]);
    }
  }
  todos = filteredTodo;
  renderTodoApp();
}

function editTask(id) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      inputElement.value = todos[i].text;
      selectElement.value = todos[i].status;
    }
  }
  taskId = id;
  dialogContainer.classList.add("flex");
}
function ramdomIntFromInterval() {
  return Math.floor(Math.random() * 1000);
}
