const { NotImplementedError } = require("../extensions/index.js");

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
function encodeLine(str) {
  let n = str.length;
  let result = "";

  for (let i = 0; i < n; i++) {
    let count = 1;

    while (i < n - 1 && str[i] === str[i + 1]) {
      count++;
      i++;
    }

    if (count > 1) {
      result += count;
    }
    result += str[i];
  }
  return result;
}

module.exports = {
  encodeLine,
};
