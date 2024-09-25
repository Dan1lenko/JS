function getLength(arr) {
  let res = [arr.length];
  for (let i = 0; i < arr.length; i++) {
    res[i] = arr[i].length;
  }
  return res;
}
const arr1 = getLength([`Ivan`, `Pavlo`, `Ira`]);
const arr2 = getLength([`Oleksiy`, `Andriana`]);

console.log(arr1);
console.log(arr2);
