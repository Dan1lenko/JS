function getArea() {
  let num = +prompt(`Будь ласка, введіть радіус!`);
  if (num === 0) {
    alert(`Будь ласка, введіть радіус!`);
    getArea();
  } else if (typeof num !== "number" || isNaN(num)) {
    alert(`Повинно бути числове значення.`);
    getArea();
  } else {
    square = Math.PI * Math.pow(num, 2);
    alert(`Площа дорівнює ${square.toPrecision(4)} квадратних одиниць.`);
  }
}
getArea();
