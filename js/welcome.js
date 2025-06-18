const checkbox = document.getElementById("check");
const bottone = document.getElementById("procedi");

bottone.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkbox.checked) {
    window.location.href = "2exam.html";
  } else {
    alert("Spunta la casella!");
  }
});
