const allButton = document.querySelectorAll(".all-btn");
const input = document.querySelector(".input-value");
let screenValue = "";

for (let button of allButton) {
  button.addEventListener("click", (e) => {
    // console.log(e.target.value);

    let buttonText = e.target.value;
    // console.log(typeof buttonText);  = String
    if (buttonText == "AC") {
      input.value = "";
      screenValue = "";
    } else if (buttonText == "+/-") {
      screenValue = screenValue * -1;
      input.value = screenValue;
    } else if (buttonText == "=") {
      input.value = eval(screenValue);
      screenValue = "";
    } else {
      screenValue += buttonText;
      input.value = screenValue;
    }
  });
}
