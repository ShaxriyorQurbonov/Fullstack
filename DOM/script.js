let tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5'];
function render() {
    let tasklist = document.getElementById('tasklist');
    let html = '';
    tasks.forEach((task, index) => {
        html += `<li class=${index % 2 !=0 ? 'grey' : ''}
        >${task}</li>`;
    });
    console.log(html);
    tasklist.innerHTML = task.html;
}
render();


function addTask() {
    let taskInput = document.getElementById('task');
    tasks.push(task.value);
    console.log(tasks);
    render();


}

    