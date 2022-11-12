function testCycle(a, b) {
	var x;
	x = 0;
	let y = 0;
	if (a<b) {
			for(let i = a;i<b;i++) {
		y += Math.pow(i,2);
		x = y + Math.pow(b,2);
		}
		} else { 
			for(let i = b;i<a;i++) {
				y += Math.pow(i,2);
				x = y + Math.pow(a,2);
				}
	}
return console.log(x);
}
testCycle(4,9)