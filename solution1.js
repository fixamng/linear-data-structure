//PROBLEM 1, SOLUTION 1.

const arr1 = [1, 2, 5];
const arr2 = [8, 2, 1, 3, 5];
sum = 0;
let difference = arr1
  .filter((i) => !arr2.includes(i))
  .concat(arr2.filter((x) => !arr1.includes(x)));
// console.log(difference);
sum = difference.reduce((a, b) => a + b, 0);
console.log(sum);
