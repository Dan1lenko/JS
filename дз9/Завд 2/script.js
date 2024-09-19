function getSqrt() {
  let num = +prompt(`Будь ласка, введіть число`);
  if (num === 0) {
    alert(`Будь ласка, введіть число!`);
    getSqrt();
  } else if (typeof num !== "number" || isNaN(num)) {
    alert(`Повинно бути числове значення.`);
    getSqrt();
  } else if (num < 0) {
    alert(`Введіть додатнє число.`);
    getSqrt();
  } else {
    let res = Math.sqrt(num);
    if (Number.isInteger(res)) {
      alert(`Квадратний корінь з ${num} дорівнює ${res}`);
    } 
    else {
      alert(`Квадратний корінь з ${num} дорівнює ${res.toPrecision(4)}`);
    }
  }
}

getSqrt();
