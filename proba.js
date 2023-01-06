/* Given a month as an integer from 1 to 12,
// return to which quarter of the year it belongs
// as an integer number.
// For example: month 2 (February),
// is part of the first quarter; month 6 (June),
//is part of the second quarter; and month 11 (November),
is part of the fourth quarter.*/
const quarterOf = (month) => {
	if (month <= 3) {
return 'is part of the ' + 1
} else if (month <= 6) {
return 'is part of the ' + 2
} else if (month <= 9) {
return 'is part of the ' + 3
} else if (month <= 12) {
return 'is part of the ' + 4
}
}
console.log(quarterOf(10))