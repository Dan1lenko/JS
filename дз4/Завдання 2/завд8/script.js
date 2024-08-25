let a = prompt("Введіть число: ");
let b = prompt("Введіть степінь: ");
let result = 1;
let i = 0;
while (i < Math.abs(b)) {
  result *= a;
  i++;
}
if (b < 0) {
  result = 1 / result;
}
alert(`${result}`);
