const allTodos = document.querySelector("#allTodos");
const finishedTodos = document.querySelector("#completedTodos");
const pendingTodos = document.querySelector("#pendingTodos");
const clear = document.querySelector("#clearAll");
const list = document.querySelector("#todoList");
const count = document.querySelector("#todoCount");
const button = document.querySelector("#addButton");
const input = document.querySelector("#todoInput");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

renderTodos();


button.addEventListener("click", function () {
  if (input.value.trim() === "") return;
  const newTodo = {
    text: input.value.trim(),
    completed: false,
  };
  todos.push(newTodo);
  input.value = "";
  saveAndRender();
});


function renderTodos(filter = "all") {
  list.innerHTML = "";
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  filteredTodos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.className = todo.completed ? "completed" : "";
    li.innerHTML = `
      ${todo.text}
      <div class="todo-buttons">
        <button onclick="toggleCompleted(${index})">✔</button>
        <button onclick="deleteTodo(${index})">🗑</button>
      </div>
    `;
    list.appendChild(li);
  });

  updateCount();
}


function saveAndRender() {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos();
}


function toggleCompleted(index) {
  todos[index].completed = !todos[index].completed;
  saveAndRender();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveAndRender();
}

clear.addEventListener("click", function () {
  todos = [];
  saveAndRender();
});

allTodos.addEventListener("click", function () {
  renderTodos("all");
});

finishedTodos.addEventListener("click", function () {
  renderTodos("completed");
});

pendingTodos.addEventListener("click", function () {
  renderTodos("pending");
});

function updateCount() {
  count.textContent = todos.length;
}
