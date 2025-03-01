let firstText = document.querySelector("#text1");
let height = window.innerHeight;

window.addEventListener("scroll", function () {
  if (window.scrollY >= 0 && window.scrollY <= height - 400) {
    let newFontSize = window.scrollY / 5;
    if (newFontSize < 40) {
      return;
    }
    firstText.style.fontSize = `${newFontSize}px`;
  }
});

firstText.addEventListener("click", () => {
  window.scroll({
    top: height,
    behavior: "smooth",
  });
});

let line = document.querySelector("#line");

window.addEventListener("scroll", function () {
  if (window.scrollY >= height - 400 && window.scrollY <= height) {
    console.log(window.scrollY);

    line.style.width = `${window.scrollY / 2}px`;
  }
});

let img = document.querySelector("img");

window.addEventListener("scroll", function () {
  if (window.scrollY >= height && window.scrollY <= height + 400) {
    console.log(window.scrollY);

    img.style.right = `${window.scrollY / 4}px`;
  }
});

let thirdText = document.querySelector("#text3");

window.addEventListener("scroll", function () {
  if (window.scrollY >= height + 400 && window.scrollY <= 2 * height) {
    let newFontSize = window.scrollY / 15;
    if (newFontSize < 40) {
      return;
    }
    thirdText.style.fontSize = `${newFontSize}px`;
  }
});

thirdText.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });