const prompt = require('prompt-sync')({ sigint: true });
let tasks = [];

function addTask() {
    const task = prompt('Enter a new task: ');
    if (task) {
        tasks.push(task);
        console.log(`Task "${task}" added.`);
    } else {
        console.log('Task cannot be empty.');
    }
}

function removeTask() {
    view();
    console.log('Enter the task index to remove:'); 
    const indexStr = prompt(''); 
    const index = parseInt(indexStr, 10) - 1;

    if (!isNaN(index) && index >= 0 && index < tasks.length) {
        const removed = tasks.splice(index, 1);
        console.log(`Task "${removed[0]}" removed.`);
    } else {
        console.log('Invalid task index.');
    }
}

function view() {
    console.log("====TASKS====");
    if (tasks.length === 0) {
        console.log("No Tasks Found!");
    } else {
        tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
    console.log("=============");
}

function clear() {
    tasks = [];
    console.log("All Tasks Removed");
}

function userInput() {
    let command = '';
    while (command !== 'exit') {

        console.log('\nEnter a command (add, remove, view, clear, or exit):'); 
        command = prompt('').toLowerCase().trim();

        switch (command) {
            case "add":
                addTask();
                break;
            case "remove":
                removeTask();
                break;
            case "view":
                view();
                break;
            case "clear":
                clear();
                break;
            case "exit":
                console.log("Exiting...");
                break;
            default:
                console.log("Invalid Command!");
        }
    }
}

userInput();
