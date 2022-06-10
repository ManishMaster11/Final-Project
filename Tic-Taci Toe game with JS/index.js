const allTd = document.querySelectorAll("td");
const rstBtn = document.querySelector("button");
const tr = document.querySelector(".tr-1");
let changeTurn = document.querySelector("#change-turn");
const result = document.querySelector("#final-result");
let priviousData = "";
let firstData = "";

for (let data of allTd) {
  data.addEventListener("click", (e) => {
    if (e.target.innerText == "" && firstData == "") {
      e.target.innerText = "X";
      e.target.style.color = "red";
      priviousData = "X";
      firstData = "X";
      forWin();
      let turn = forTurn();
      changeTurn.value = turn;
    } else if (priviousData == "X") {
      e.target.innerText = "O";
      e.target.style.color = "blue";
      priviousData = "O";
      forWin();
      let turn = forTurn();
      changeTurn.value = turn;
    } else if (priviousData == "O") {
      e.target.innerText = "X";
      e.target.style.color = "red";
      priviousData = "X";
      forWin();
      let turn = forTurn();
      changeTurn.value = turn;
    }
  });
}

let forTurn = () => {
  return priviousData == "X" ? "Turn For O" : "Turn For X";
};

// Win logic

let forWin = () => {
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  win.forEach((e) => {
    if (
      allTd[e[0]].innerText === allTd[e[1]].innerText &&
      allTd[e[1]].innerText === allTd[e[2]].innerText &&
      allTd[e[0]].innerText === allTd[e[2]].innerText &&
      (allTd[e[0]].innerText === "X" || allTd[e[0]].innerText === "O")
    ) {
      result.value = `${allTd[e[0]].innerText} is Win`;
    }
  });
};

// Reset Logic

rstBtn.addEventListener("click", () => {
  priviousData = "";
  firstData = "";
  allTd.forEach((data) => {
    data.textContent = "";
    changeTurn.value = "";
    result.value = "";
  });
});
