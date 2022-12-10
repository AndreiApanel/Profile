function testCycle (n) {
	var x = 0;
for ( x = 2;x < n; x++) {
	if (n % x == 0) {
	return 'Составное число';
	} 
}
		return 'Простое число';
}
console.log (testCycle (3))