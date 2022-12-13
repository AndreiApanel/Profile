// // Дано число n (n > 1). Выведите строку, состоящую из 
// простых чисел, меньших n. Воспользуйтесь решетом Эратосфена. 
// Единицу не считаем простым числом.
function testCycle (n) {
	var x = [];
	var y = 2;
	for (let i = 2;i < n; i++) {x [i] = true;}
	do {
		for (i = 2 * y; i<n; i+=y) {x[i] = false;}
		for (i = y+1;i < n;i++) {
			if (x[i]) break;
	}
	y = i;
} while (y*y<n);
var sum = '';
for (i = 0; i < x.length; i++) {
if (x[i]) {sum += ' ' +i;}
} return sum
}
console.log (testCycle (27))