// Create a function that takes an integer as an argument 
// and returns "Even" for even numbers or "Odd" for odd numbers.
function fakeBin(x){
let y = Array.from(x);
let c = [];
y.forEach(arguments => {
	if(arguments < 5) {
	return c.push(0);
	}
	if (arguments>=5){
	return c.push(1);
	}
	}
	)
	return c.join('');
}
console.log(fakeBin('564668480227'));