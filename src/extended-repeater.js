const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }

  const repeatTimes = options.repeatTimes !== undefined ? options.repeatTimes : 1;
  const separator = options.separator !== undefined ? options.separator : '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes !== undefined ? options.additionRepeatTimes : 1;
  const additionSeparator = options.additionSeparator !== undefined ? options.additionSeparator : '|';

  let repeatedString = '';

  for (let i = 0; i < repeatTimes; i++) {
    repeatedString += str;

    for (let j = 0; j < additionRepeatTimes; j++) {
      repeatedString += j !== additionRepeatTimes - 1 ? addition + additionSeparator : addition;
    }

    repeatedString += i !== repeatTimes - 1 ? separator : '';
  }

  return repeatedString;
}

module.exports = {
  repeater
};
