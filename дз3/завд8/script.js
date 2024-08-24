let a = prompt("Введіть число: ");
let b = prompt("Введіть степінь: ");
let result = 1;

for (let i = 0; i < Math.abs(b); i++) {
  result *= a;
}
if (b < 0) {
  result = 1 / result;
}
alert(`${result}`);
