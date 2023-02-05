function hello() {
	console.log('hello', this);
}

const person = {
	name: 'John',
	age: 25,
	sayHello: hello,
	sayHelloWindow: hello.bind( ),
	logInfo: function(job, phone) {
		console.group(`${this.name} info:`)
		console.log(`Name is ${this.name}`);
		console.log(`age is ${this.age}`);
		console.log(`Job is ${job}`);
		console.log(`Phone is ${phone}`);
		console.groupEnd();
	}
}
const lena = {
	name: 'Lena',
	age: 25,
}
// person.logInfo.call(lena,'frontend','80-9-09-9-90')
// person.logInfo.bind(lena,'frontend','80-9-09-9-90')();

// person.logInfo.apply(lena, ['frontend','80-9-09-9-90'])

const array = [1,2,3,4,5]

// function multBy (arr,n) {
// 	return arr.map(function (i) {
// 		return i * n
// 	});
// }
// console.log(multBy(array,5))

Array.prototype.multBy = function (n) {
	return this.map(function (i) {
		return i * n
	});
}

console.log(array.multBy(2))