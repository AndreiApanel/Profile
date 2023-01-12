// You are given two interior angles (in degrees) of a triangle.
// Write a function to return the 3rd.
// Note: only positive integers will be tested.
function otherAngle(a, b) {
	let c;
	let third;
	c = a + b;
	third = 180 - c;
  return third;
}
console.log(otherAngle(30, 60))
