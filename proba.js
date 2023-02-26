// Your task is to write a function that takes two or more objects and returns a new object which combines all the input objects.

// All input object properties will have only numeric values. Objects are combined together so that the values of matching keys are added together.
function combine() {
  let object = {};
  let x = arguments.length;
  for (let i = 0; i < x; i++) {
    for (let key in arguments[i]) {
      if (!object[key]) {
        object[key] = arguments[i][key];
      } else {
        object[key] += arguments[i][key];
      }
    }
  }
  return object;
}
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB));
