const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  const repeatTimes = parseInt(options.repeatTimes) || 1;
  const separator = options.separator !== undefined ? String(options.separator) : "+";

  const addition = options.addition !== undefined ? String(options.addition) : "";
  const additionSeparator = options.additionSeparator ? String(options.additionSeparator) : "|";
  const additionRepeatTimes = parseInt(options.additionRepeatTimes) || 1;

  const repeatStr = (str, separator, times) => (str ? (str + separator).repeat(times).slice(0, separator.length * -1) : "");

  let strPart = String(str);
  strPart += repeatStr(addition, additionSeparator, additionRepeatTimes);

  const newStr = repeatStr(strPart, separator, repeatTimes);

  return newStr;
};
