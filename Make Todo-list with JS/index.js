const todoForm = document.querySelector(".todo-form");
const inputText = document.querySelector("#todo-text");
const ul = document.querySelector("ul");
const todoList = document.querySelector(".todo-list");

// console.log(todoForm);

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newLi = document.createElement("li");
  newLi.innerHTML = `<span>${inputText.value}</span>
   <button class="remove" >Remove</button>`;
  ul.append(newLi);
  inputText.value = "";
});

todoList.addEventListener("click", (e) => {
  if (e.target.classList.contains("remove")) {
    e.target.parentNode.remove();
  }
});
