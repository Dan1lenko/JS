let fib = (n) => {
  let a = 1;
  let b = 1;
  let sum;

  console.log(a);
  if (n > 1) {
    console.log(b);
  }
  let i = 3;
  while (i <= n) {
    sum = a + b;
    console.log(sum);
    a = b;
    b = sum;
    i++;
  }
};
fib(5);
fib(10);
