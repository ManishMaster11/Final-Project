const body = document.body;
const myBtn = document.querySelector(".all-btn");
const span = document.querySelector(".span-text");

console.log(myBtn);

myBtn.addEventListener("click", (e) => {
  //   if (e.target.classList.contains("btn-1")) {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let myColor = `rgb(${red},${green},${blue})`;

  body.style.backgroundColor = myColor;
  span.textContent = myColor;
  //   }
});
