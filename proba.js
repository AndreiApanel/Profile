// Дано число n. Найдите сумму его цифр.
// (Возможно, функция Math.trunc окажется полезной)
function testCycle (n) {
	var x = 0;
	var y = 0;
	while (n) {
	y = n % 10;
	n = (n - y)/10;
	x += y;
}
return x;
}
console.log (testCycle(2260))
