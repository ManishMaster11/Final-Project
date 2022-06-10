// console.log(innerDiv);
const innerDiv = document.querySelector(".innerdiv");
const outerDiv = document.querySelector(".outerdiv");
const onBulbImage = document.querySelector(".on-bulb-image");
const body = document.body;

innerDiv.addEventListener("click", (e) => {
  e.target.classList.toggle("innerdiv-active");
  outerDiv.classList.toggle("outerdiv-active");
  onBulbImage.classList.toggle("on-bulb-image-active");
  body.classList.toggle("body-active");
});
