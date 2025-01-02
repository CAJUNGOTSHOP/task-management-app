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

    function changeTaskDescription(taskId, newDescription) {
        const taskItems = taskList.querySelectorAll('li');
        taskItems.forEach((taskItem) => {
            if (taskItem.dataset.id === taskId.toString()) {
                const title = taskItem.querySelector('span').textContent.split(' - ')[0];
                const priority = taskItem.classList[0];
                const dueDate = taskItem.querySelector('.due-date').textContent;

                const updatedTask = {
                    id: taskId,
                    title: title,
                    description: newDescription,
                    priority: priority,
                    dueDate: dueDate
                };

                updateTask(taskId, updatedTask);
            }
        });
    }

    function checkUserPermissions(taskId, userId) {
        // Implement user permission check logic here
        console.log(`Checking permissions for task: ${taskId} and user: ${userId}`);
    }

    function getAssignees(taskId) {
        // Implement logic to get assignees for a task
        console.log(`Getting assignees for task: ${taskId}`);
    }

    function removeAssignee(taskId, userId) {
        // Implement logic to remove an assignee from a task
        console.log(`Removing user: ${userId} from task: ${taskId}`);
    }

    function addAssignee(taskId, userId) {
        // Implement logic to add an assignee to a task
        console.log(`Adding user: ${userId} to task: ${taskId}`);
    }

    function createTask(name, description) {
        const task = {
            id: Date.now(),
            title: name,
            description: description,
            priority: 'medium',
            dueDate: new Date().toISOString().split('T')[0]
        };

        addTask(task);
    }

    function createList(name) {
        console.log(`Creating list: ${name}`);
    }

    function createFolder(name) {
        console.log(`Creating folder: ${name}`);
    }

    print_and_run("Change the description of task 8685mj6cd to 'Look ma no hands'");

    const task_id = "8685mb5fn";
    const user_id = 81928627;

    print_and_run(`What are the assignees of task id ${task_id}?`);
    print_and_run(`Remove user ${user_id} from the assignees of task id ${task_id}`);
    print_and_run(`What are the assignees of task id ${task_id}?`);
    print_and_run(`Add user ${user_id} to the assignees of task id ${task_id}`);

    const time_str = datetime.now().strftime("%d/%m/%Y-%H:%M:%S");
    print_and_run(`Create a task called 'Test Task - ${time_str}' with description 'This is a Test'`);
    print_and_run(`Create a list called 'Test List - ${time_str}'`);
    print_and_run(`Create a folder called 'Test Folder - ${time_str}'`);
    print_and_run("Create a list called 'Test List - 18/09/2023-10:34:01' with content My test list with high priority and status red");

    print_and_run("Figure out what user ID Rodrigo is, create a task called 'Rod's task', assign it to Rodrigo");
});
