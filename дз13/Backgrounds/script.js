document.querySelectorAll(".toggle").forEach(function (element) {
  element.addEventListener("click", function () {
    const target = document.querySelector(`.${element.dataset.target}`);
    document.querySelectorAll(".container").forEach(function (container) {
      container.style.display = "none";
    });
    target.style.display = "grid";
  });
});

document.querySelectorAll(".containerColour div").forEach(function (element) {
  element.addEventListener("click", function () {
    document.body.style.backgroundColor =
      window.getComputedStyle(element).backgroundColor;
    document.body.style.backgroundImage = "none";
  });
});

document.querySelectorAll(".containerImage div").forEach(function (element) {
  element.addEventListener("click", function () {
    const imageUrl = window.getComputedStyle(element).backgroundImage;
    document.body.style.backgroundImage = imageUrl;
    document.body.style.backgroundColor = "none";
  });
});
