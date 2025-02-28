const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catCount = 0;

  // Loop through each row of the matrix
  for (let i = 0; i < matrix.length; i++) {
    // Loop through each element in the row
    for (let j = 0; j < matrix[i].length; j++) {
      // Check if the element is a cat ear ("^^")
      if (matrix[i][j] === '^^') {
        catCount++;
      }
    }
  }

  return catCount;
}

module.exports = {
  countCats
};
