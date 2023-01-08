// Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
function toBinary(n){
if (Math.abs(n) > 1) {
	return n = Number(Math.abs(n).toString(2));
} else {
return Number(Math.abs(n));
}}
console.log(toBinary(-2));