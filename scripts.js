let todos = [
    {
        id: 1,
        title: "Create initial layout for homepage",
        status: "Approved",
    },
    {
        id: 2,
        title: "Fixing icons with transparent background",
        status: "In Progress",
    },
    {
        id: 3,
        title: "Fixing icons with transparent background",
        status: "In Progress",
    },
    {
        id: 4,
        title: "Create initial layout for homepage",
        status: "In Progress",
    },
    {
        id: 5,
        title: "Discussion regarding workflow improvement",
        status: "In Review",
    },
    {
        id: 6,
        title: "Create quotation for app redesign project",
        status: "Waiting",
    },
];
const todosElement = document.querySelector("#todo-list");
todosElement.innerHTML = todos
    .map((todo) => {
        return `
        <div class="todo-item">
            <div class="checkbox-container">
                <input type="checkbox" id=${"checkbox-" + todo.id}  ${todo.status === "Approved" && "checked"}
                ${todo.status === "In Progress" && "checked"}
                ${todo.status === "In Review" && "checked"}
                ${todo.status === "Waiting" && ""} />
                <label for=${"checkbox-" + todo.id}></label>
            </div>
            <p>${todo.title}</p>
            <div class="badge
                ${todo.status === "Approved" && "badge-success"}
                ${todo.status === "In Progress" && "badge-info"}
                ${todo.status === "In Review" && "badge-warning"}
                ${todo.status === "Waiting" && "badge-muted"}
                ">
                ${todo.status}
            </div>
        </div>`;
    })
    .join("");

let words = ["Fixing layout button component", "Create dashboard page", "Create todo list", "Initial Tailwind CSS", "Create initial layout for homepage", "Ganti oli", "Menyapu halaman", "Naik haji"];
const randomWords = () => {
    return words[Math.floor(Math.random() * words.length)];
};

let statusTodo = ["Approved", "In Progress", "In Review", "Waiting"];
const randomStatus = () => {
    return statusTodo[Math.floor(Math.random() * statusTodo.length)];
};

const btn = document.querySelector(".btn-add-todo");
const add = () => {
    let lastId = (todos.length += 1);
    console.log(lastId);
    let newTitle = randomWords();
    let newStatus = randomStatus();

    let newTodo = `
    <div class="todo-item">
        <div class="checkbox-container">
            <input type="checkbox" id=${"checkbox-" + lastId}  ${newStatus === "Approved" && "checked"}
            ${newStatus === "In Progress" && "checked"}
            ${newStatus === "In Review" && "checked"}
            ${newStatus === "Waiting" && ""}  />
            <label for=${"checkbox-" + lastId}></label>
        </div>
        <p>${newTitle}</p>
        <div class="badge
        ${newStatus === "Approved" && "badge-success"}
        ${newStatus === "In Progress" && "badge-info"}
        ${newStatus === "In Review" && "badge-warning"}
        ${newStatus === "Waiting" && "badge-muted"}
            ">
            ${newStatus}
        </div>
    </div>`;

    todosElement.insertAdjacentHTML("beforeend", newTodo);
    // newTitle = randomWords();
    // newStatus = randomStatus();
    // console.log(lastId);
};
