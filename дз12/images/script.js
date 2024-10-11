document.querySelector(".container1").addEventListener("click", function () {
  let imageURL = prompt("Вставте посилання на зображення ");
  document.querySelector(
    ".container"
  ).style.cssText = `background-image: url(${imageURL});`;
});
document.querySelector(".container2").addEventListener("click", function () {
  let imageURL = prompt("Вставте посилання на зображення ");
  document.querySelector(
    ".container2"
  ).style.cssText = `background-image: url(${imageURL});`;
});
document.querySelector(".container3").addEventListener("click", function () {
  let imageURL = prompt("Вставте посилання на зображення ");
  document.querySelector(
    ".container3"
  ).style.cssText = `background-image: url(${imageURL});`;
});
