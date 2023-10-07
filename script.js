document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const dueDateInput = document.getElementById("dueDate");
    const prioritySelect = document.getElementById("priority");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const dueDate = dueDateInput.value;
        const priority = prioritySelect.value;

        if (taskText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${taskText}</span>
                <span class="due-date">Due Date: ${dueDate}</span>
                <span class="priority">Priority: ${priority}</span>
                <button class="complete">Complete</button>
                <button class="delete-button">Delete</button>
            `;
            taskList.appendChild(listItem);
            taskInput.value = "";
            dueDateInput.value = "";
            prioritySelect.value = "low";
        }
    });

    taskList.addEventListener("click", function (event) {
        const target = event.target;
        if (target.classList.contains("complete")) {
            target.parentElement.querySelector("span").classList.toggle("complete");
        } else if (target.classList.contains("delete-button")) {
            target.parentElement.remove();
        }
    });
});

