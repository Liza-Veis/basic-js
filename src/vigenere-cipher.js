const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direction) {
    if (direction === false) {
      this.direction = "reverse";
    } else this.direction = "direct";
    this.alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error("The required arguments are missing");

    const fn = (charIdx, keyIdx) => (charIdx + keyIdx) % this.alphabet.length;

    return this.applyCipher(message, key, fn);
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error("The required arguments are missing");

    const fn = (charIdx, keyIdx) => (charIdx + this.alphabet.length - keyIdx) % this.alphabet.length;

    return this.applyCipher(message, key, fn);
  }

  applyCipher(message, key, fn) {
    let keyStr = key.toUpperCase();
    do {
      keyStr += keyStr;
    } while (keyStr.length < message.length);

    keyStr = keyStr.slice(0, message.length);

    let keyStrIdx = 0;

    const newMessage = message.split("").map((letter, idx) => {
      const char = letter.toUpperCase();
      if (this.alphabet.indexOf(char) !== -1) {
        const charIdx = this.alphabet.indexOf(char);
        const keyIdx = this.alphabet.indexOf(keyStr[keyStrIdx++]);
        return this.alphabet[fn(charIdx, keyIdx)];
      }
      return letter;
    });

    if (this.direction === "reverse") return newMessage.reverse().join("");

    return newMessage.join("");
  }
}

module.exports = VigenereCipheringMachine;
