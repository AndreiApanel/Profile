// For this kata you will have to forget how to add two numbers.
// In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

// You may assume both integers are positive integers.
function add(num1, num2) {
  num1 = num1.toString().split("").reverse();
  num2 = num2.toString().split("").reverse();
  let sum = [];
  let length = Math.max(num1.length, num2.length);
  for (let j = length - 1; j >= 0; j--) {
    sum.push(Number(num1[j] || 0) + Number(num2[j] || 0));
  }

  return +sum.join("");
}
console.log(add(122, 81));
