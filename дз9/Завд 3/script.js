const MyMath = {
  PI: 3.141592653589793,

  pow(number, degree) {
    if (typeof number !== "number" || typeof degree !== "number") {
      return "Повинно бути числове значення.";
    } else if (number === undefined || degree === undefined) {
      return "Будь ласка, введіть  числа!";
    }
    let result = 1;
    for (let i = 0; i < Math.abs(degree); i++) {
      result *= number;
    }
    if (degree < 0) {
      return 1 / result;
    }
    return result;
  },

  abs(number) {
    if (typeof number !== "number") {
      return "Повинно бути числове значення.";
    } else if (number === undefined) {
      return "Будь ласка, введіть число!";
    } else if (number < 0) {
      return -number;
    }
    return number;
  },

  max(...numbers) {
    if (numbers.length === 0) {
      return "Будь ласка, введіть числа!";
    }

    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== "number") {
        return "Повинно бути числове значення.";
      }
    }

    let maxNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > maxNumber) {
        maxNumber = numbers[i];
      }
    }
    return maxNumber;
  },
  
  min(...numbers) {
    if (numbers.length === 0) {
      return "Будь ласка, введіть числа!";
    }

    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== "number") {
        return "Повинно бути числове значення.";
      }
    }

    let minNumber = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] < minNumber) {
        minNumber = numbers[i];
      }
    }
    return minNumber;
  },
};

console.log(MyMath.PI);
console.log(MyMath.pow(2, 3));
console.log(MyMath.abs(-25));
console.log(MyMath.max(1, 2, 3, 4));
console.log(MyMath.min(52, 25, 33, 45));
console.log(MyMath.max(2, "test"));
console.log(MyMath.min());
