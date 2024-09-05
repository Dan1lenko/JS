let progress = function (n1, n2) {
  let i = 1;
  let result = 1;
  let sum = 1;
  while (i < n1) {
    result *= n2;
    sum += result;
    i++;
  }
  console.log(sum);
};
progress(5, 2);
progress(4, 3);
progress(7, 2);
