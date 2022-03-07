const todos = ["Go to the store", "Write", "Code"];

//simulate api calls with a function to delay requests
function wait(timeInMS) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeInMS);
  });
}

export async function getTodos() {
  await wait(300);
  return [...todos];
}

export async function addTodo(todoDescription) {
  await wait(300);
  todos.push(todoDescription);
}

export async function removeTodo(index) {
  await wait(300);
  todos.splice(index, 1);
}