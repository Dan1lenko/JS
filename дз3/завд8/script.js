let a = prompt("Введіть число: ");
let b = prompt("Введіть степінь: ");
let result = 1;

if (b > 0) {
  for (let i = 0; i < b; i++) {
    result *= a;
  }
} else if (b < 0) {
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  result = 1 / result;
}
alert(`${result}`);
