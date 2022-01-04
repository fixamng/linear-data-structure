// PROBLEM 1, SOLUTION 2

const arr1 = [2, 3, 4, 5];
const arr2 = [7, 9, 0, 2, 3];
const newArr = arr1.concat(arr2);
let obj = {};
count = 1;
sum = 0;
sum2 = 0;

for (i = 0; i < newArr.length; i++) {
  let count = 1;
  if (newArr[i] in obj === false) {
    obj[newArr[i]] = count;
  } else if (newArr[i] in obj) {
    obj[newArr[i]] += count;
  }
}
console.log(count);
console.log(obj);
// sum for overlapping elements
for (i in obj) {
  if (obj[i] >= 2) {
    sum += parseInt(i * obj[i]);
  }
}
console.log("sum of overlapping element: ", sum);

// sum for distinct element
for (i in obj) {
  if (obj[i] === 1) {
    sum2 += parseInt(i);
  }
}
console.log("sum of distinct element: ", sum2);
