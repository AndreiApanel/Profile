// Determine the total number of digits in the integer (n>=0) 
// given as input to the function. For example, 
// 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

function digits(n) {
if (n > 0 ) {
let i = Math.log(10) 
return Math.floor(Math.log(n) / i) + 1}
else {
let x = n + 1
return x}
}
console.log(digits(0));
