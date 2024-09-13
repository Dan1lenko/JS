let myStr = prompt();
let length = myStr.length;
if (myStr.includes("@")) {
  if (myStr.indexOf("@") == 0 || myStr.indexOf("@") == length - 1) {
    alert("Спробуйте ще раз");
  } else {
    alert("Дякую");
  }
} else {
  alert("Спробуйте ще раз");
}
