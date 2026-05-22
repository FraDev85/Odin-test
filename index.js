export function sum(a, b) {
  return a + b;
}

export function capitalize(str) {
  let word = str.trim();
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function reverseString(str) {
  let phrase = str.split("");
  return phrase.reverse().join("");
}

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

export function caesarCipher(str, shift) {
  return str
    .split("")
    .map((ch) => shiftChar(ch, shift))
    .join("");
}

function shiftChar(char, shift) {
  const code = char.charCodeAt(0);

  // Uppercase letters
  if (code >= 65 && code <= 90) {
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  }
  // Lowercase letters
  if (code >= 97 && code <= 122) {
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }

  // Non-alphabetical characters
  return char;
}

export function analyzeArray(arr) {
  const average = arr.reduce((prev, cur) => prev + cur, 0) / arr.length;

  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;

  return { average, min, max, length };
}
