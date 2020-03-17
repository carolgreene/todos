const task = document.getElementById("task")
const tasks = document.getElementById('tasks')
const button = document.getElementById('button')

button.addEventListener("click", function(e) {  
  const newLi = document.createElement("li")
  newLi.innerText = task.value  
  const doneButton = document.createElement("button")
  doneButton.innerText = "x"
  doneButton.id = "doneButton"
  addNewTask(newLi, doneButton)
  clearTask()
  removeTask(newLi, doneButton)
})

function addNewTask(newLi, doneButton) {
  newLi.appendChild(doneButton)
  tasks.appendChild(newLi)
}

function clearTask() {
  task.value = ''
}

function removeTask(newLi, doneButton) {
  doneButton.addEventListener("click", function(e) {
    tasks.removeChild(newLi)
  }) 
}