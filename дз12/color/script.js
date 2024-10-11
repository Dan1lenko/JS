let hoverCount = 0;
const colors = ["red", "yellow", "green"];

document.querySelector(".container").addEventListener("mouseover", function() {
  document.querySelector(".container").style.backgroundColor =
    colors[hoverCount % colors.length];
  hoverCount++;
});

document.querySelector(".container").addEventListener("mouseout", function() {
  document.querySelector(".container").style.backgroundColor = "purple";
});
