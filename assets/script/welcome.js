// const checkbox = document.getElementById("check");
// const bottone = document.getElementById("procedi");

// bottone.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (checkbox.checked) {
//     window.location.href = "2exam.html";
//   } else {
//     alert("Spunta la casella!");
//   }
// });

// const checkbox = document.getElementById("check");
// const bottone = document.getElementById("procedi");

// // bottone.classList.add("bottoneAttivo");

// bottone.addEventListener("click", function (e) {
//   e.preventDefault();
//   if (checkbox.checked) {
//     window.location.href = "2exam.html";
//   }
// });
const checkbox = document.getElementById("check");
const bottone = document.getElementById("procedi");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    bottone.disabled = false;
    bottone.classList.add("bottoneAttivo");
  } else {
    bottone.disabled = true;
    bottone.classList.remove("bottoneAttivo");
  }
});

bottone.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkbox.checked) {
    window.location.href = "2exam.html";
  }
});
