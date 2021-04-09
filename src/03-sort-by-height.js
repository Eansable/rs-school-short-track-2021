/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const tempArr = [];
  const result = [];
  arr.forEach((e) => {
    if (e > -1) {
      tempArr.push(e);
    }
  });
  tempArr.sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      result.push(tempArr[index]);
      index++;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

module.exports = sortByHeight;
