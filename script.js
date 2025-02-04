const apiUrl = 'https://reqres.in/api/users';
let tasks = [];

function fetchTasks(){
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';
    tasks.forEach(task =>{
        const li = document.createElement('li');
        li.textContent = task;
        taskList.appendChild(li)
    })
}

function addTask(){
    const taskInput = document.getElementById('taskInput');
    const newTask = taskInput.value.trim();
    if(newTask === ''){
        alert('Please Enter a New Task');
        return;
    }

    fetch(apiUrl,{
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({name:newTask})
    })

    .then(response => response.json())
    .then(data => {
        console.log("Task Added:",data);
        tasks.push(newTask);
        taskInput.value = '';
        fetchTasks();
    })
    .catch(error => console.log("Error Occured",error));
}
fetchTasks();