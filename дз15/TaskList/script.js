let btn = document.querySelector("#btn");
let taskInput = document.querySelector("#form");
let tasksContainer = document.querySelector(".left");

btn.addEventListener("click", () => {
  let taskText = taskInput.value;
  if (taskText === "") {
    alert("Пусте поле не можна добавити");
  } else {
    let newTask = document.createElement("div");
    newTask.innerHTML = `<input type="checkbox" /> ${taskText}`;
    tasksContainer.appendChild(newTask);
    taskInput.value = "";
  }
});

tasksContainer.addEventListener("click", (event) => {
  if (event.target.type === "checkbox") {
    let tasks = tasksContainer.querySelectorAll("div");
    if (tasks.length > 1) {
      tasksContainer.removeChild(event.target.parentElement);
    } else {
      alert("Останній таск зі списку Ви не можете видалити");
    }
  }
});
