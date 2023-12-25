const { NotImplementedError } = require('../extensions/index.js');

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
  if (typeof sampleActivity !== 'string') {
    return false; // Invalid input type
  }

  const MODERN_ACTIVITY_FLOAT = parseFloat(sampleActivity);

  if (typeof MODERN_ACTIVITY_FLOAT !== 'number' || isNaN(MODERN_ACTIVITY_FLOAT) || MODERN_ACTIVITY_FLOAT <= 0 || MODERN_ACTIVITY_FLOAT > MODERN_ACTIVITY) {
    return false; // Invalid input
  }

  const RATE_CONSTANT = 0.693 / HALF_LIFE_PERIOD;
  const age = Math.log(MODERN_ACTIVITY / MODERN_ACTIVITY_FLOAT) / RATE_CONSTANT;

  return Math.ceil(age);
}

module.exports = {
  dateSample
};
