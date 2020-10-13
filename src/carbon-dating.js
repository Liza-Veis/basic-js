const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    !parseFloat(sampleActivity) ||
    parseFloat(sampleActivity) < 0 ||
    parseFloat(sampleActivity) >= 9000 ||
    !Number.isInteger(parseFloat(sampleActivity))
  ) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(t);
};
