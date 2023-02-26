function towelSort(matrix) {
  matrix = typeof matrix !== "undefined" ? matrix : [];

  // let a1 = [].concat(matrix[1].sort((a, b) => a - b).reverse());
  // let b3 = [].concat(matrix[3].sort((a, b) => a - b).reverse());
  // const sorted = [].concat(...matrix);
  //   let sorted = matrix[1].sort((a, b) => a - b).reverse();
  // let sorted = [];

  matrix.forEach((_, index) => {
    if (index % 2 !== 0) {
      matrix[index].sort((a, b) => a - b).reverse();
    } else if (index.length == 0) {
      matrix;
    }
  });
  const result = [].concat(...matrix);
  return result;
}

const matrix = [];
console.log(towelSort(matrix));
