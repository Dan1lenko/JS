container = document.querySelector(".container");
text = document.querySelector(".text");
function mouseOver() {
  container.style.cssText = "background-color: yellow;";
  text.textContent = "Хочеш знати який?";
}
function mouseOut() {
  container.style.cssText = "background-color: violet;";
  text.textContent = "У мене є секрет!";
}

document.querySelector(".container").addEventListener("mousedown", function () {
  event.target.style.backgroundColor = "black";
  event.target.style.color = "white";
  text.textContent = "А я тобі не скажу))";

});

document.querySelector(".container").addEventListener("mouseup", function () {
    container.style.cssText = "background-color: yellow;";
    text.textContent = "Хочеш знати який?";
});
