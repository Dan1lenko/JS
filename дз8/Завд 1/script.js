let myStr = prompt();
let start = 0;

let res = 0;
while (true) {
  let position = myStr.indexOf(" ", start);
  if (position === -1) break;

  start = position + 1;
  res += 1;
}
console.log(res);
