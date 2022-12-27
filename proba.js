// // Дано число n (n > 1). Верните из функции n-ное число Фибоначчи
// Для наглядности прикладываю последовательность чисел Фиббоначе:
// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
//  1597, 2584, 4181, 6765, 10946, 17711, …
// Например дано число 4, при отсчете слева, 
// начиная с "1", четвертым по счету будет число "3",
//  а если дано "7", то 7-м по счету числом является число "13".
function testCycle(n) { 
var x = 1;
var	y = 1;
var c = 0; 
	for(i = 3; i <= n; i++) { 
		c = x + y;
		x = y; 
		y = c;
	}
	return y;
}
console.log (testCycle(7))
