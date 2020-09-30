const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let cats = 0;
  for (let val of matrix) {
    if (Array.isArray(val)) cats += countCats(val);
    if (val === "^^") {
      cats++;
    }
  }
  return cats;
};
