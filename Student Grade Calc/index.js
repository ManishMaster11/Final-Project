const marks = document.querySelector(".marks");
const sub1Marks = document.querySelector(".sub1-marks");
const sub2Marks = document.querySelector(".sub2-marks");
const sub3Marks = document.querySelector(".sub3-marks");
const sub4Marks = document.querySelector(".sub4-marks");
const percentageBtn = document.querySelector("button");
const result = document.querySelector(".result-text");
// console.log(typeof sub1Marks.value);
console.log(result);

// marks.addEventListener("click", (e) => {
//   console.log(e.target);
// });

percentageBtn.addEventListener("click", () => {
  let totalMarks =
    parseInt(sub1Marks.value) +
    parseInt(sub2Marks.value) +
    parseInt(sub3Marks.value) +
    parseInt(sub4Marks.value);
  let percentage =
    (parseInt(sub1Marks.value) +
      parseInt(sub2Marks.value) +
      parseInt(sub3Marks.value) +
      parseInt(sub4Marks.value)) /
    4;
  console.log(totalMarks);
  console.log(percentage);

  result.value = `Out of 400 your Total is ${totalMarks} and your Percentage is ${percentage}%`;
});
