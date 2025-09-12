// โหลด ToDo จาก cookie เมื่อเปิดเว็บ
window.onload = function () {
  loadTodos();
  document.getElementById("newBtn").addEventListener("click", addTodo);
};

// ฟังก์ชันสร้าง ToDo ใหม่
function addTodo() {
  const text = prompt("Enter a new TO DO:");
  if (text && text.trim() !== "") {
    createTodo(text);
    saveTodos();
  }
}

// ฟังก์ชันสร้าง element div แล้วใส่ใน ft_list
function createTodo(text) {
  const todo = document.createElement("div");
  todo.textContent = text;

  // คลิกแล้วถามว่าจะลบไหม
  todo.addEventListener("click", function () {
    if (confirm("Do you want to remove this TO DO?")) {
      todo.remove();
      saveTodos();
    }
  });

  // ใส่เข้า ft_list
  const list = document.getElementById("ft_list");
  list.appendChild(todo);
}

// ฟังก์ชันบันทึก ToDo ลง cookie
function saveTodos() {
  const list = document.getElementById("ft_list");
  const todos = [];
  list.querySelectorAll("div").forEach(todo => {
    todos.push(todo.textContent);
  });

  // เก็บเป็น JSON string
  document.cookie = "todos=" + JSON.stringify(todos) + ";path=/";
}

// ฟังก์ชันโหลด ToDo จาก cookie
function loadTodos() {
  const cookies = document.cookie.split(";");
  for (let c of cookies) {
    const [name, value] = c.trim().split("=");
    if (name === "todos") {
      const todos = JSON.parse(value);
      todos.forEach(t => createTodo(t));
    }
  }
}
