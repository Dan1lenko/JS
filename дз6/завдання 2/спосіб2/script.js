let progress = function (n, q) {
  if (q === 1) {
    return n;
  }
  return (1 * (1 - q ** n)) / (1 - q);
};

const result = progress(5, 2);
console.log(result);
const result2 = progress(4, 3);
console.log(result2);
