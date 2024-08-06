document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const taskDate = document.getElementById('taskDate');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const completedList = document.getElementById('completedList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        const taskDateTime = taskDate.value;
        
        if (taskText === '' || taskDateTime === '') {
            alert('Please enter a task and a date/time.');
            return;
        }

        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText} (Due: ${new Date(taskDateTime).toLocaleString()})</span>
            <button onclick="markComplete(this)">Complete</button>
        `;

        taskList.appendChild(li);
        taskInput.value = '';
        taskDate.value = '';
    }

    // Function to mark a task as complete
    function markComplete(button) {
        const taskItem = button.parentElement;
        const completedItem = document.createElement('li');
        
        completedItem.innerHTML = `
            <span>${taskItem.innerHTML.split(' (Due:')[0]} (Completed)</span>
            <button class="remove" onclick="removeTask(this)">Remove</button>
        `;
        
        completedList.appendChild(completedItem);
        taskItem.remove();
    }

    // Function to remove a task from the completed list
    function removeTask(button) {
        button.parentElement.remove();
    }

    // Add event listeners
    addTaskBtn.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    // Make sure functions are globally accessible
    window.markComplete = markComplete;
    window.removeTask = removeTask;
});
