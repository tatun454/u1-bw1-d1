const checkbox = document.getElementById("check");
const bottone = document.getElementById("procedi");

bottone.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkbox.checked) {
    window.location.href = "review.html";
  } else {
    alert("Spunta la casella!");
  }
});
