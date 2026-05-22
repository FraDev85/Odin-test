import {
  sum,
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  caesarCipher,
} from "./index.js";

test("sum function", () => {
  expect(sum(4, 5)).toBe(9);
  expect(sum(2, 1)).toBe(3);
  expect(sum(2, 5)).toBe(7);
  expect(sum(4, 3)).toBe(7);
  expect(sum(1, 5)).toBe(6);
});

test("Reverse string", () => {
  expect(reverseString("fuffolo")).toBe("oloffuf");
});

test("Calculator", () => {
  expect(calculator.add(7, 2)).toBe(9);
  expect(calculator.subtract(3, 2)).toBe(1);
  expect(calculator.multiply(5, 2)).toBe(10);
  expect(calculator.divide(3, 2)).toBe(1.5);
});

test("CaesarCipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("Analyze Array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});

test("Capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});
