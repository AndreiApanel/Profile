function testCycle(a, b) {
	var x;
	x = '';
if(a<b) {
	while (a<=b) {
x += a + ' ';
a++;
}} else {
	while (b<=a) {
	x += b +' ';
	b++;
	}}
return console.log(x);
}

testCycle(6,6)