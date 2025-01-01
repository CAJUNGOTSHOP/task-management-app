import getpass from 'getpass';
import os from 'os';

for (const env_var of [
    "CDP_API_KEY_NAME",
    "CDP_API_KEY_PRIVATE_KEY",
]) {
    if (!process.env[env_var]) {
        process.env[env_var] = getpass.getpass(`Enter your ${env_var}: `);
    }
}

// Optional: Set network (defaults to base-sepolia)
process.env["NETWORK_ID"] = "base-sepolia";  // or "base-mainnet"

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.querySelector('#task-form form');
    const taskList = document.querySelector('#task-list ul');

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.querySelector('#task-title').value;
        const description = document.querySelector('#task-desc').value;
        const priority = document.querySelector('#task-priority').value;
        const dueDate = document.querySelector('#task-due-date').value;

        const task = {
            id: Date.now(),
            title,
            description,
            priority,
            dueDate
        };

        addTask(task);
        taskForm.reset();
    });

    function addTask(task) {
        const taskItem = document.createElement('li');
        taskItem.dataset.id = task.id;
        taskItem.classList.add(task.priority);
        taskItem.innerHTML = `
            <span>${task.title} - ${task.description} - ${task.priority} - <span class="due-date">${task.dueDate}</span></span>
            <button class="edit-task">Edit</button>
            <button class="delete-task">Delete</button>
        `;
        taskList.appendChild(taskItem);

        // Add notification for task creation
        showNotification(`Task "${task.title}" created with priority "${task.priority}" and due date "${task.dueDate}"`);
    }

    function updateTask(taskId, updatedTask) {
        const taskItems = taskList.querySelectorAll('li');
        taskItems.forEach((taskItem) => {
            if (taskItem.dataset.id === taskId.toString()) {
                taskItem.classList.remove(taskItem.classList[0]);
                taskItem.classList.add(updatedTask.priority);
                taskItem.innerHTML = `
                    <span>${updatedTask.title} - ${updatedTask.description} - ${updatedTask.priority} - <span class="due-date">${updatedTask.dueDate}</span></span>
                    <button class="edit-task">Edit</button>
                    <button class="delete-task">Delete</button>
                `;

                // Add notification for task update
                showNotification(`Task "${updatedTask.title}" updated with priority "${updatedTask.priority}" and due date "${updatedTask.dueDate}"`);
            }
        });
    }

    function deleteTask(taskId) {
        const taskItems = taskList.querySelectorAll('li');
        taskItems.forEach((taskItem) => {
            if (taskItem.dataset.id === taskId.toString()) {
                taskList.removeChild(taskItem);

                // Add notification for task deletion
                showNotification(`Task "${taskItem.querySelector('span').textContent}" deleted`);
            }
        });
    }

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-task')) {
            const taskItem = event.target.parentElement;
            const taskId = taskItem.dataset.id;
            const title = taskItem.querySelector('span').textContent.split(' - ')[0];
            const description = taskItem.querySelector('span').textContent.split(' - ')[1];
            const priority = taskItem.classList[0];
            const dueDate = taskItem.querySelector('.due-date').textContent;

            document.querySelector('#task-title').value = title;
            document.querySelector('#task-desc').value = description;
            document.querySelector('#task-priority').value = priority;
            document.querySelector('#task-due-date').value = dueDate;

            taskForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const updatedTitle = document.querySelector('#task-title').value;
                const updatedDescription = document.querySelector('#task-desc').value;
                const updatedPriority = document.querySelector('#task-priority').value;
                const updatedDueDate = document.querySelector('#task-due-date').value;

                const updatedTask = {
                    id: taskId,
                    title: updatedTitle,
                    description: updatedDescription,
                    priority: updatedPriority,
                    dueDate: updatedDueDate
                };

                updateTask(taskId, updatedTask);
                taskForm.reset();
            }, { once: true });
        }

        if (event.target.classList.contains('delete-task')) {
            const taskItem = event.target.parentElement;
            const taskId = taskItem.dataset.id;
            deleteTask(taskId);
        }
    });

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.classList.add('notification');
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    }

    function handleExampleQuery() {
        const exampleQuery = "Send 0.005 ETH to john2879.base.eth";
        handleAgentExecutorStream(exampleQuery);
    }

    function handleAgentExecutorStream(query) {
        const events = agentExecutor.stream(
            {"messages": [("user", query)]},
            stream_mode="values",
        );
        for (const event of events) {
            prettyPrintEventMessages(event);
        }
    }

    function prettyPrintEventMessages(event) {
        event["messages"][-1].pretty_print();
    }

    handleExampleQuery();
});
