const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (i + 1 >= arr.length) break;
      i++;
    } else if (arr[i] === "--double-prev") {
      if (arr[i - 2] === "--discard-next" || i - 1 < 0) continue;
      newArr.push(arr[i - 1]);
    } else if (arr[i] === "--double-next") {
      if (i + 1 >= arr.length) break;
      newArr.push(arr[i + 1]);
    } else if (arr[i] === "--discard-prev") {
      if (arr[i - 2] === "--discard-next") continue;
      newArr.pop();
    } else newArr.push(arr[i]);
  }

  return newArr;
};
