// selectors
const addTask = document.getElementById("add_task");
const taskContainer = document.getElementById("task_container");
const inputTask = document.getElementById("input_task");
const alertContainer = document.getElementById("alert_container");

const alert = "Please enter a task!!";

// add addEventListener
addTask.addEventListener("click", function () {
  // create a div
  let task = document.createElement("div");
  // add a class for styling
  task.classList.add("task");

  // create a List item
  let li = document.createElement("li");
  //   console.log(inputTask.value);
  li.innerText = `${inputTask.value}`;
  li.classList.add("list");
  task.appendChild(li);

  // create a check Button
  let checkButton = document.createElement("button");
  checkButton.innerHTML = `<i class="fas fa-check-square"></i>`;
  checkButton.classList.add("checkTask");

  // add or append the button to the div
  task.appendChild(checkButton);

  // create a delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = `<i class="fa-solid fa-trash-can"></i>`;
  deleteButton.classList.add("deleteTask");

  // add or append the deletebutton to the div
  task.appendChild(deleteButton);

  // form Authentication
  if (inputTask.value === "") {
    // alert("Please enter a task");
    // alertContainer.appendChild(alert);
    alertContainer.innerText = alert;
  } else {
    taskContainer.appendChild(task);
    alertContainer.innerText = "";
  }
  inputTask.value = "";

  // add eventListener to
  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
    checkButton.parentElement.style.opacity = 0.5;
  });

  deleteButton.addEventListener("click", function (e) {
    let target = e.target;

    target.parentElement.remove();
  });
});
