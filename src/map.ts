import { strArr, numberArr } from "./helpers";

type mapCallback<T> = (v: T, idx: number, arr: T[]) => T

const customMap = <T>(arr: T[], cb: mapCallback<T>) => {
  const resultArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    const value = arr[idx];
    resultArr.push(cb(value, idx, arr));
  }
  return resultArr;
};

const multiply = (num: number) => num * 5;

const actual = numberArr.map(num => multiply(num));

const customResult = customMap(numberArr, multiply);

console.log(actual);

console.log(customResult);

const multiplyWithIdx = (num: number, idx: number) => idx % 2 === 0 ? num * 2 : num * 5;

const actualWithIdx = numberArr.map((num, idx) => multiplyWithIdx(num, idx));

const customWithIdx = customMap(numberArr, multiplyWithIdx);

console.log(actualWithIdx);

console.log(customWithIdx);

const toUpper = (str: string) => str.toUpperCase();

const actualStr = strArr.map(v => toUpper(v));

const customStr = customMap(strArr, toUpper);

console.log(actualStr);

console.log(customStr);

