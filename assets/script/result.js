// da capire come recuperare le percentuali queryparams/ local storage

// const giuste = {
//   valore: 60,
//   colore: `#00FFFF`,
// };
// const sbagliate = {
//   valore: 40,
//   colore: `#D20094`,
// }; questo è il codice che hai fatto tu, io l'ho modificato facendo un localstorage in 2exam.js e collegandolo qua ma non è praticamente solo un placeholder per il momento
const score = localStorage.getItem("score");
const giuste = {
  valore: Number(score),
  colore: `#00FFFF`,
};
const sbagliate = {
  valore: 100 - Number(score),
  colore: `#D20094`,
};

const data = {
  datasets: [
    {
      data: [sbagliate.valore, giuste.valore],
      backgroundColor: [sbagliate.colore, giuste.colore],
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

if (userPassed) {
  passedMessage.classList.remove("hide");
  certificateMessage.classList.remove("hide");
  notPassedMessage.classList.add("hide");
} else {
  notPassedMessage.classList.remove("hide");
  passedMessage.classList.add("hide");
  certificateMessage.classList.add("hide");
}
// non saprei come collegarlo
