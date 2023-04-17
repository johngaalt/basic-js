const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageCharCode = message.charCodeAt(i);

      if (messageCharCode >= 65 && messageCharCode <= 90) {
        const keyCharCode = key.charCodeAt(keyIndex % key.length);
        const shift = this.isDirect ? keyCharCode - 65 : 90 - keyCharCode;
        const encryptedCharCode = ((messageCharCode - 65 + shift) % 26) + 65;

        result += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        result += message[i];
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedCharCode = encryptedMessage.charCodeAt(i);

      if (encryptedCharCode >= 65 && encryptedCharCode <= 90) {
        const keyCharCode = key.charCodeAt(keyIndex % key.length);
        const shift = this.isDirect ? keyCharCode - 65 : 90 - keyCharCode;
        const decryptedCharCode =
          ((encryptedCharCode - 65 - shift + 26) % 26) + 65;

        result += String.fromCharCode(decryptedCharCode);
        keyIndex++;
      } else {
        result += encryptedMessage[i];
      }
    }

    return this.isDirect ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};
