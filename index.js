const task = document.getElementById("task")
const tasks = document.getElementById('tasks')

const button = document.getElementById('button')

button.addEventListener("click", function(e) {
  e.preventDefault()
  const newLi = document.createElement("li")
  newLi.innerText = task.value  
  const doneButton = document.createElement("button")
  doneButton.innerText = "X"
  doneButton.id = "doneButton"
  console.log("task.value", task.value)
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
    console.log(newLi.textContent)
    doneButton.addEventListener("click", function(e) {
        tasks.removeChild(newLi)
    })
  
  
}