function testCycle(n) {
	var x;
	var y = 0;
	x = ' ';
	for (let i = 1; i <= n;i++) {
	y +=(2*i-1);
	x +=y + ' ';
	}
return console.log(x);
}
testCycle(8)