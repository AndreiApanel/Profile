function testCycle(a, b) {
	var x;
	x = ''
while (a <= b) {
x += a + ' ';
a++;
}

return console.log(x);
	
}
testCycle(6,24)