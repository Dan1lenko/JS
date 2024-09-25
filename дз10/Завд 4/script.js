function removeDuplicates(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

const arr1 = removeDuplicates([`html`, `css`, `html`, `js`]);
const arr2 = removeDuplicates([`html`,`css`,`js`,`html`,`js`,`python`,`js`,`scss`])

console.log(arr1);
console.log(arr2);
