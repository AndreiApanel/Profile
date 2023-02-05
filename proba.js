// In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets.
// The function convert() should take an input (string), the source alphabet (string) and the target alphabet (string). You can assume that the input value always consists of characters from the source alphabet. You don't need to validate it.
function convert(input, source, target) {
	let result = '';
	let a = length(source);
	let b = length(target);
	let x = 0;
	var Alphabet = {
		BINARY: '01',
		OCTAL: '01234567',
		DECIMAL: '0123456789',
		HEXA_DECIMAL: '0123456789abcdef',
		ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
		ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
		ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
		ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
	};
for (let key in input) {
	x *= a;
	x += source.index(key)
} 
while (x !=0) {
	key = target[x%b];
	x = x/b
	result = key+result;
}
	return result
}



console.log(convert("0", Alphabet.DECIMAL, Alphabet.ALPHA));