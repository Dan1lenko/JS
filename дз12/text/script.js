document.querySelector("ol").addEventListener("click", function () {
  if(event.target.tagName === 'LI'){
    event.target.style.color = event.target.textContent;
  }
});
