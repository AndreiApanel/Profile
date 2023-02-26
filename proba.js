// Your task is to add a new property users Answer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.
function colourAssociation(array) {
  let result = [];
  for (let index = 0; index < array.length; index++) {
    result[index] = { [array[index][0]]: array[index][1] };
  }

  return result;
}

console.log(
  colourAssociation([
    ["yellow", "flexible"],
    ["blue", "humerous"],
    ["orange", "lazy"],
    ["pink", "dramatic"],
    ["blue", "mystical"],
    ["yellow", "angry"],
    ["pink", "dramatic"],
    ["white", "humerous"],
    ["red", "lazy"],
    ["white", "mystical"],
  ])
);
