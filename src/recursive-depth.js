const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 1) {
    return arr.reduce((prev, current) => {
      return Array.isArray(current) ? Math.max(this.calculateDepth(current, depth + 1), prev) : prev;
    }, depth);
  }
};
