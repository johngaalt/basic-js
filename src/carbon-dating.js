const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    isNaN(sampleActivity) ||
    Number(sampleActivity) <= 0 ||
    Number(sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  }

  const sample = Number(sampleActivity);
  const k = 0.693 / HALF_LIFE_PERIOD;
  const f = Math.log(MODERN_ACTIVITY / sample);
  const t = Math.ceil(f / k);
  return t;
}

module.exports = {
  dateSample,
};
