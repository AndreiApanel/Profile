/* Given a month as an integer from 1 to 12,
// return to which quarter of the year it belongs
// as an integer number.
// For example: month 2 (February),
// is part of the first quarter; month 6 (June),
//is part of the second quarter; and month 11 (November),
is part of the fourth quarter.*/
const quarterOf = (month) => {
	for (i = 1, i<=month,i++) {
		if (i < 3) {
			return quarter + '1'
		}
		if (3<i<=6) {
			return quarter + '2'
		}
		if (6<i<=9) {
			return quarter + '3'
		}
		if (9<i<=12) {
			return quarter + '4'
		}

	return Data.month(month)
}}
quarterOf(2)