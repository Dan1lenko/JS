function prime(num = +prompt(`Введіть число`)) {
  if (num <= 1) {
    console.log(`${num} не є простим числом.`);
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      console.log(`${num} не є простим числом.`);
      return num;
    }
  }
  console.log(`${num} є простим числом.`);
}
prime();
