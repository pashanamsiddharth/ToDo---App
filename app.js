const todoTask = document.querySelector("form");
const clearItems = document.querySelector(".clear")
const checkClick = document.querySelector("ul");

checkClick.addEventListener('click', (e) =>{
console.log(e.target.name);
  if(e.target.name == 'checkButton')
     checkTodo(e);
  if(e.target.name == 'deleteButton')
    deleteTodo(e);

})

const checkTodo = (handleEvent) => {
  let item = handleEvent.target.parentNode;
  console.log(item);
  if(item.style.textDecoration == 'line-through')
  item.style.textDecoration = 'none';
  else
  item.style.textDecoration = 'line-through';
}

const deleteTodo = (handleEvent) => {

  let item = handleEvent.target.parentNode;
  if(document.querySelector('.todo-item').contains(".todo-item"))
     document.querySelector('.todo-item').remove();
}

todoTask.addEventListener("submit", (e) => {
  e.preventDefault();
  let input = document.querySelector("input");
  if (input.value != "") 
      getTodoList(input.value);
 input.value = "";
});

clearItems.addEventListener("click",(e) =>{
    e.preventDefault();
    let itemsPresent = document.querySelector(".to-do-list-item");
    if(itemsPresent !== null)
    itemsPresent.remove();
})

const getTodoList = (tasklist) => {
  let ul = document.querySelector("ul");
  let li = document.createElement("li");
  li.innerHTML = `
          <span  class="todo-item">${tasklist}</span>
          <button name="checkButton"><i class="fas fa-check-square"></i></button>
          <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
    li.classList.add('to-do-list-item');
    ul.appendChild(li);
};
