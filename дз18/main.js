console.log("Завдання 1");
let arr = [5, 6, 7, 8, 9];
let sum = 0;
arr.forEach(function (value) {
  sum += value;
});
console.log(sum);

console.log("Завдання 2");
let arr2 = [5, 6, 7, 8, 9];
let squares = arr2.map((num) => num * num);
console.log(squares);

console.log("Завдання 3");
let arr3 = [
  { name: "Ivan", country: "Ukraine" },
  { name: "Petro", country: "Ukraine" },
  { name: "Miguel", country: "Cuba" },
];
const checkCountry = arr3.every((user) => user.country === "Ukraine");
if (checkCountry) {
  console.log("All users are from Ukraine");
} else {
  console.log("Not all users are from Ukraine");
}

console.log("Завдання 4");
let arr4 = [
  { name: "Ivan", country: "Ukraine" },
  { name: "Petro", country: "Ukraine" },
  { name: "Miguel", country: "Cuba" },
];
const check = arr4.some((user) => user.country === "Cuba");
if (check) {
  console.log("Some users are from Cuba");
} else {
  console.log("All users are not from Cuba");
}

console.log("Завдання 5");
let arr5 = [1, "string", [3, 4], 5, [6, 7]];
let newArr = arr5.filter((elem) => Array.isArray(elem));
console.log(newArr);

console.log("Завдання 6.1");
let arr6 = [1, 2, 5, 0, 4, 5, 6];
let suma = arr6.reduce(
  (acc, elem) => {
    if (acc.stop) return acc;
    if (elem === 0) {
      acc.stop = true;
      return acc;
    }
    acc.total += elem;
    return acc;
  },
  { total: 0, stop: false }
).total;
console.log(suma);

console.log("Завдання 6.2");
let arr7 = [1, 2, 3, 0, 4, 5, 6];
let count = 0;
let sumaa = arr7.reduce((total, elem) => {
  if (total > 10) return total;
  count++;
  return total + elem;
}, 0);
console.log(count);

console.log("Завдання 7");
let arr8 = [1, -2, 3, 0, 4, -5, 6, -11];
let positiveArr = arr8.filter((elem) => elem > 0);
console.log("Positive values", positiveArr);
let sqrt = positiveArr.map((elem) =>
  console.log(`Square root of ${elem} = `, Math.sqrt(elem))
);
