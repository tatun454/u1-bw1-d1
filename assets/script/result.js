// da capire come recuperare le percentuali queryparams/ local storage
const giuste = {
  valore: 60,
  colore: `#00FFFF`,
};
const sbagliate = {
  valore: 40,
  colore: `#D20094`,
};

const data = {
  datasets: [
    {
      data: [sbagliate.valore, giuste.valore],
      backgroundColor: [sbagliate.colore, giuste.colore],
      borderWidth: 0,
    },
  ],
};

const myChart = new Chart("myChart", {
  type: "doughnut",
  data,
});
