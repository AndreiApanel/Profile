// Task
// Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

function minSum(arr) {
  arr = arr.slice().sort((a, b) => a - b);
  let sum = 0;
  while (arr.length) {
    sum += arr.shift() * arr.pop();
  }
  return sum;
}
