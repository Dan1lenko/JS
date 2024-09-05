const start = prompt("Введіть початкове число:");
const end = prompt("Введіть кінцеве число:");

const simpleNumber = function (start, end) {
  for (let i = start; i <= end; i++) {
    let isSimple = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        isSimple = false;
        break;
      }
    }
    if (isSimple == true) console.log(i);
  }
};
simpleNumber(start, end);
