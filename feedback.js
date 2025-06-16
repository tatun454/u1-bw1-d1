document.addEventListener("DOMContentLoaded", function () {
  const stars = document.querySelectorAll("#starRating span");
  const ratingValue = document.getElementById("ratingValue");

  stars.forEach((star) => {
    star.addEventListener("click", setRating);
    star.addEventListener("mouseover", hoverStars);
    star.addEventListener("mouseout", resetStars);
  });

  const setRating = function (event) {
    const selectedValue = parseInt(event.target.getAttribute("data-value"));
    highlightStars(selectedValue);
    ratingValue.textContent = `Valutazione: ${selectedValue} stelle`;
  };

  const hoverStars = function (event) {
    const hoveredValue = parseInt(event.target.getAttribute("data-value"));
    highlightStars(hoveredValue);
  };

  const resetStars = function () {
    highlightStars(0);
  };

  const highlightStars = function (value) {
    stars.forEach((star) => {
      star.classList.toggle(
        "selected",
        parseInt(star.getAttribute("data-value")) <= value
      );
    });
  };
});
