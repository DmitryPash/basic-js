const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1CharCount = {};
  const s2CharCount = {};

  // Count characters in s1
  for (const char of s1) {
    s1CharCount[char] = (s1CharCount[char] || 0) + 1;
  }

  // Count characters in s2
  for (const char of s2) {
    s2CharCount[char] = (s2CharCount[char] || 0) + 1;
  }

  let commonCount = 0;

  // Compare characters and count common occurrences
  for (const char in s1CharCount) {
    if (s2CharCount[char]) {
      commonCount += Math.min(s1CharCount[char], s2CharCount[char]);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
