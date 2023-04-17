const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const disPrev = "--discard-prev";
  const disNext = "--discard-next";
  const doublePrev = "--double-prev";
  const doubleNext = "--double-next";
  const controls = [disPrev, disNext, doublePrev, doubleNext];
  let result = arr;

  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  const index = result.findIndex((value) => controls.includes(value));

  if (arr.includes(disPrev)) {
    result = arr.filter(
      (value) => value !== disPrev || value !== arr[index - 1]
    );
  } else if (arr.includes(disNext)) {
    result = arr.filter((value) => value !== arr[index + 1]);
  } else if (arr.includes(doublePrev)) {
    result = arr.reduce((acc, curValue, curIndx) => {
      const item = [curValue];

      if (curIndx === index - 1) {
        item.push(curValue);
      }

      acc.push(...item);

      return acc;
    }, []);
  } else if (arr.includes(doubleNext)) {
    result = arr.reduce((acc, curValue, curIndx) => {
      const item = [curValue];

      if (curIndx === index + 1) {
        item.push(curValue);
      }

      acc.push(...item);

      return acc;
    }, []);
  }

  return result.filter((value) => !controls.includes(value));
}

module.exports = {
  transform,
};
