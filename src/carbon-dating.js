const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  sampleActivity = parseFloat(sampleActivity);
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    sampleActivity < 0 ||
    sampleActivity >= 9000 ||
    !Number.isInteger(sampleActivity)
  ) {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  const t = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
  return Math.ceil(t);
};
