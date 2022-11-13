function testCycle (a, b) {
	var x;
	while (b) {
		x = b
		b = a % b;
    a = x;
    
	}
	return console.log(x);
}
testCycle (10,99)