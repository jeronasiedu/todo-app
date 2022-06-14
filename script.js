const themeToggle = document.querySelector(".theme-toggle");
const form = document.querySelector("#form");
const inputEl = document.querySelector("input");
const todosContainer = document.querySelector(".todos");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = inputEl.value;
  createTodo(text);
  inputEl.value = "";
});
const updateTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme && theme === "dark") {
    document.body.classList.add("dark");
  }
};
updateTheme();

const createTodo = (text) => {
  const listEl = document.createElement("li");
  listEl.innerHTML = `
    <div class="circle">
   <img
     src="./images/icon-check.svg"
     alt="check image"
     class="check"
   />
 </div>
 <p class="text">${text}</p>
 <button class="delete">
   <img src="./images/icon-cross.svg" alt="delete todo" />
 </button>
    `;
  todosContainer.prepend(listEl);
  const circle = todosContainer.querySelector(".circle");
  const deleteBtn = todosContainer.querySelector(".delete");
  circle.addEventListener("click", () => {
    circle.parentElement.classList.toggle("completed");
  });
  deleteBtn.addEventListener("click", () => {
    const listEl = deleteBtn.parentElement;
    listEl.classList.add("del-animation");
    listEl.addEventListener("animationend", () => {
      listEl.remove();
    });
  });
};
