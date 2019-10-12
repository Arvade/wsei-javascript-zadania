document.addEventListener("DOMContentLoaded", () => {
    let nextTaskId = 0;

    const tasks = [];

    const removeFinishedButton = document.getElementById("removeFinishedTasksButton");
    const addTaskButton = document.getElementById("addTaskButton");

    const taskListElement = document.getElementById("taskList");
    const tasksLeftElement = document.getElementById("counter");
    tasksLeftElement.innerText = 0;

    const taskInput = document.getElementById("taskInput");
    const priorityInput = document.getElementById("priority");

    addTaskButton.addEventListener("click", () => {
        if (taskInput.value.trim().length <= 5 || taskInput.value.trim().length > 100) {
            return;
        }
        if (+priorityInput.value < 1 || +priorityInput.value > 10) {
            return;
        }
        const element = document.createElement("li");

        const taskContentElement = document.createElement("h1");
        const taskPriorityElement = document.createElement("h3");
        const deleteButton = document.createElement("button");
        const completeButton = document.createElement("button");

        deleteButton.innerText = "Delete";
        completeButton.innerText = "Complete";
        taskPriorityElement.innerText = "Priority " + priorityInput.value;
        taskContentElement.innerText = taskInput.value;

        element.appendChild(taskContentElement);
        element.appendChild(taskPriorityElement);
        element.appendChild(deleteButton);
        element.appendChild(completeButton);
        element.setAttribute("data-priority", priorityInput.value);

        taskListElement.appendChild(element);

        const task = new Task(nextTaskId++, priorityInput.value, taskInput.value, element);
        tasks.push(task);

        deleteButton.onclick = function () {
            const indexToRemove = tasks.findIndex(el => el.id === task.id);
            if (indexToRemove > -1) {
                tasks.splice(indexToRemove, 1);
            }
            task.remove(refreshTasks);
        };
        completeButton.onclick = () => task.complete(refreshTasks);

        refreshTasks();
        taskInput.value = "";
        priorityInput.value = "";
    });

    removeFinishedButton.addEventListener("click", () => {
        tasks.forEach(task => {
            if (task.isCompleted) {
                task.remove(refreshTasks);
            }
        })
    });

    function refreshTasks() {
        tasksLeftElement.innerText = tasks.filter(task => !task.isCompleted).length;
        sortByPriority(taskListElement);
    }

    function sortByPriority(taskList) {
        const tasksElements = [...taskList.children];
        clear(taskList);
        tasksElements.sort((t1, t2) => t2.getAttribute("data-priority") - t1.getAttribute("data-priority"));
        tasksElements.forEach(task => taskList.appendChild(task));
    }

    function clear(element) {
        while (element.firstChild) {
            element.firstChild.remove();
        }
    }
});

function Task(id, priority, content, container) {
    this.id = id;

    this.priority = priority;
    this.isCompleted = false;
    this.content = content;
    this.container = container;

    this.remove = function remove(callback) {
        this.container.remove();
        callback();
    };

    this.complete = function toggleComplete(callback) {
        this.isCompleted = !this.isCompleted;
        if (this.isCompleted) {
            container.classList.add("done")
        } else {
            container.classList.remove("done")
        }
        callback();
    }
}
