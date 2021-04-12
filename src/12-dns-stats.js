/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const domainsSplit = [];
  const resObj = {};
  domains.forEach((e) => {
    domainsSplit.push(e.split('.'));
  });
  for (let i = 0; i < domainsSplit.length; i++) {
    let objProp = '';
    for (let j = domainsSplit[i].length - 1; j >= 0; j--) {
      objProp += `.${domainsSplit[i][j]}`;
      if (objProp in resObj) {
        resObj[objProp]++;
      } else {
        resObj[objProp] = 1;
      }
    }
  }
  return resObj;
}

module.exports = getDNSStats;
