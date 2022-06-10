const inputText = document.querySelector(".input-text");
const result = document.querySelector(".result");
const clearBtn = document.querySelector("button");

let totalWord = () => {
  if (inputText.value == "") {
    return (myanswer = 0);
  } else {
    const myTotalWord = inputText.value.split(" ");
    return (myanswer = myTotalWord.length);
  }
};

let totalCharater = (callback) => {
  totalchar = inputText.value.length;
  callback();
  return totalchar;
};
setInterval(() => {
  const myTotalChar = totalCharater(totalWord);
  result.textContent = `Total Character is ${myTotalChar} and Total Word is ${myanswer}`;
}, 500);

clearBtn.addEventListener("click", () => {
  inputText.value = "";
});
