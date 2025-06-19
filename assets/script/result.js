// localstorage in 2exam.js e collegato qua
const score = Number(localStorage.getItem("score")) || 0;
const totalQuestions = 10;
const percent = Math.round((score / totalQuestions) * 100);

const giuste = {
  valore: percent,
  colore: `#00FFFF`,
};
const sbagliate = {
  valore: 100 - percent,
  colore: `#D20094`,
};

const data = {
  datasets: [
    {
      data: [giuste.valore, sbagliate.valore],
      backgroundColor: [giuste.colore, sbagliate.colore],
      borderWidth: 0,
      cutout: `70%`,
    },
  ],
};

const myChart = new Chart("myChart", {
  type: "doughnut",
  data,
});

//costanti per classe hide

const passedMessage = document.getElementById("passed");
const notPassedMessage = document.getElementById("not");
const certificateMessage = document.getElementById("certificate");

if (percent >= 60) {
  passedMessage.classList.remove("hide");
  certificateMessage.classList.remove("hide");
  notPassedMessage.classList.add("hide");
} else {
  notPassedMessage.classList.remove("hide");
  passedMessage.classList.add("hide");
  certificateMessage.classList.add("hide");
}

document.getElementById("correct").textContent = percent + "%";
document.getElementById("wrong").textContent = 100 - percent + "%";
document.getElementById(
  "c-questions"
).textContent = `${score}/${totalQuestions}`;
document.getElementById("w-questions").textContent = `${
  totalQuestions - score
}/${totalQuestions}`;
