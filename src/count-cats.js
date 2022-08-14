const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 countCats([
	[0, 1, '^^'],  0 | 2
	[0, '^^', 2], 1 | 1
	['^^', 1, 2]  0 | 0
 ]) => 3`
 
 */
function countCats(matrix) {

	let catsResult = 0;

	for (let arr of matrix) {
		arr.forEach(element => {
			if (element === '^^') {
				catsResult++;
			}
		});
	}
	return catsResult;
}

module.exports = {
	countCats
};
