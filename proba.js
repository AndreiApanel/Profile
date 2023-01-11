// Very simple, given an integer or a floating-point number,
//  find its opposite.
function opposite(number) {
	if (Math.sign(number) == 1 || Math.sign(number) == -1) {
	return	number * (-1)
	} else {return number}
}
console.log(opposite(0));
