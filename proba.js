function testCycle(n) {
	var x = 1;
	while (n>1){
		x=x*n;
		n-=2;
	}
return console.log(x);
		}
testCycle(7)