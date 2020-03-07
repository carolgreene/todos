const task = document.getElementById("task")
const tasks = document.getElementById('tasks')

const button = document.getElementById('button')

button.addEventListener("click", function(e) {
  e.preventDefault()
  const newLi = document.createElement("li")
  newLi.innerText = task.value  
  console.log("task.value", task.value)
  addNewTask(newLi)
  clearTask()
})

function addNewTask(newLi) {
  tasks.appendChild(newLi)
}

function clearTask() {
  task.value = ''
}