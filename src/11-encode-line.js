/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const addText = (tempStr = '') => {
  let text = '';
  if (tempStr.length === 1) {
    text = tempStr;
  } else {
    text = `${tempStr.length}${tempStr[0]}`;
  }
  return text;
};

function encodeLine(str) {
  if (str === '') {
    return str;
  }
  let result = '';
  let tempStr = str[0];
  for (let i = 1; i < str.length; i++) {
    if (tempStr[0] === str[i]) {
      tempStr += str[i];
    } else {
      result += addText(tempStr);
      tempStr = str[i];
    }
  }
  result += addText(tempStr);
  return result;
}

module.exports = encodeLine;
