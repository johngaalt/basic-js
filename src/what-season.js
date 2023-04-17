const { NotImplementedError } = require("../extensions/index.js");

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error("Invalid date!");
  }

  const winter = [11, 0, 1];
  const spring = [2, 3, 4];
  const summer = [5, 6, 7];
  const fall = [8, 9, 10];
  const dateToMonth = date.getMonth();

  if (winter.includes(dateToMonth)) {
    return "winter";
  }

  if (spring.includes(dateToMonth)) {
    return "spring";
  }

  if (summer.includes(dateToMonth)) {
    return "summer";
  }

  if (fall.includes(dateToMonth)) {
    return "fall";
  }
}

module.exports = {
  getSeason,
};
