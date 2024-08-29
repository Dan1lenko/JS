function max(...num) {
  let max = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] > max) {
      max = num[i];
    }
  }
  return max;
}
console.log(max(5, -2, 30, 6));
