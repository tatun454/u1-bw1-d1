const checkboxes = document.querySelectorAll('.answer input[type="checkbox"]');
// prendo tutte le checkbox con classe "answer"
checkboxes.forEach(function (checkbox) {
  //ciclo tutte le checkbox
  checkbox.addEventListener("change", function () {
    //aggiungiamo un event listnr per il click
    const label = checkbox.closest(".answer");
    //trovo il laberl genitore con classe "answer"
    if (checkbox.checked) {
      label.classList.add("selected");
      //aggiungo classe "selected " quando viene click
    } else {
      label.classList.remove("selected");
      //altrimenti la rimuove
    }
  });
});

function singleAnswer() {
  const checkboxes = document.querySelectorAll(
    ".answer input[type='checkbox']"
  );
  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      if (checkbox.checked) {
        checkboxes.forEach((cb) => {
          if (cb !== checkbox) {
            cb.checked = false;
            cb.closest(".answer").classList.remove("selected");
          }
        });
        checkbox.closest(".answer").classList.add("selected");
      } else {
        checkbox.closest(".answer").classList.remove("selected");
      }
    });
  });
}
window.addEventListener("DOMContentLoaded", singleAnswer);
