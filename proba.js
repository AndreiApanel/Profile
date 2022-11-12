function testCycle(a, b) {
	var x;
	x = '';
	if (a<b) {
do {
	x += b + ' ';
	b--;
  } while (b>=a);
} else {
	do {
	x += a + ' ';
	a--;
	 } while (a>=b);
}
return console.log(x);
}

testCycle(6,5)