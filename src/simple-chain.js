const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: "",
  getLength() {
    let length = this.chain !== "" ? this.chain.split("~~").length : 0;
    return length;
  },
  addLink(value = "") {
    this.chain += this.chain === "" ? `( ${value} )` : `~~( ${value} )`;
    return this;
  },
  removeLink(position) {
    const chainParts = this.chain.split("~~");
    if (!Number.isInteger(position) || position > chainParts.length) {
      this.chain = "";
      throw new Error();
    }
    this.chain = chainParts.filter((cur, i) => i !== position - 1).join("~~");
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split("~~").reverse().join("~~");
    return this;
  },
  finishChain() {
    const chain = this.chain;
    this.chain = "";
    return chain;
  },
};
module.exports = chainMaker;
