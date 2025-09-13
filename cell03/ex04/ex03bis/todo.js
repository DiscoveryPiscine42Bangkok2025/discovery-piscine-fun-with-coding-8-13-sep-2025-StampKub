$(document).ready(function () {
    loadTodos();

    $("#newBtn").click(addTodo); // คลิกปุ่มสร้าง ToDo
});

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
    const $todo = $("<div>").text(text);

    // คลิกแล้วถามว่าจะลบไหม
    $todo.click(function () {
        if (confirm("Do you want to remove this TO DO?")) {
            $todo.remove();
            saveTodos();
        }
    });

    // ใส่เข้า ft_list
    $("#ft_list").append($todo);
}

// ฟังก์ชันบันทึก ToDo ลง cookie
function saveTodos() {
    const todos = [];
    $("#ft_list div").each(function () {
        todos.push($(this).text());
    });

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
