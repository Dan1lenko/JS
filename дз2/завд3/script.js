let month = prompt("Write a number of the month");

if ((month >= 1 && month <= 2) || month == 12) {
  alert("winter");
} else if (month >= 3 && month <= 5) {
  alert("spring");
} else if (month >= 6 && month <= 8) {
  alert("summer");
} else if (month >= 9 && month <= 11) {
  alert("autemn");
} else if (month == 0 || month > 12) {
  alert("Неможливо");
}
