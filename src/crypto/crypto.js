import pkg from "crypto-js";

// encrypt the message using AES encryption
//return a string
const encrypt = (message, password) => {
  const ciphertext = pkg.AES.encrypt(JSON.stringify(message), password);
  return ciphertext.toString();
};

// decrypt a message using AES encryption
//return a JSON
const decrypt = (ciphertext, password) => {
  const bytes = pkg.AES.decrypt(ciphertext, password);
  const plaintext = bytes.toString(pkg.enc.Utf8);
  return JSON.parse(plaintext);
};

//return a MD5 text
const applyHash = (text) => {
  return pkg.MD5(text).toString();
};

export default { encrypt, decrypt, applyHash };
