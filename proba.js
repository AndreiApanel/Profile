// Create a function strCount (takes an object as argument) that will count all string values inside an object.
function strCount(obj) {
	let x = 0;
	function count(object) {
		for (let key in object) {
			if (typeof object[key] === 'object') {
				count(object[key]);
			} else {
				if (typeof object[key] === 'string') {
					x++;
				}
			}
		}
	}
	count(obj);
	return x;
}

console.log(strCount({
	first: "1",
	second: "2",
	third: false,
	fourth: ["anytime", 2, 3, 4],
	fifth: null
}));