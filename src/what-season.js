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

  if (!(date instanceof Date)) {
    throw Error("Invalid date!");
  }

  const winter = [12, 1, 2];
  const spring = [3, 4, 5];
  const summer = [6, 7, 8];
  const fall = [9, 10, 11];
  const dateToMonth = Number(date.toISOString().split("-")[1]);

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
