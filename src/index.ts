import * as fs from "fs";
import { getArray } from "./getArray";
import { customMap } from "./map";

const currentTimeInMilli = () => Date.now();

const multiplyByFive = (num: number) => num * 5;

const init = () => {
  const { numberArr } = getArray();
  const timeBeforeCustomMap = currentTimeInMilli();
  const resultOfCustomMap = customMap(numberArr, multiplyByFive);
  const timeAfterCustomMap = currentTimeInMilli();
  const resultOfInBuiltMap = numberArr.map((num) => multiplyByFive(num));
  const timeAfterBuiltInMap = currentTimeInMilli();
  const durationForCustomMap = timeAfterCustomMap - timeBeforeCustomMap;
  const durationForBuiltInMap = timeAfterBuiltInMap - timeAfterCustomMap;
  const difference = durationForCustomMap - durationForBuiltInMap;
  return `The customMap func lasted ${durationForCustomMap} ms and the built in Map lasted ${durationForBuiltInMap}. My custom function was ${
    difference > 0 ? "slower" : "quicker"
  } by ${difference > 0 ? difference : difference * -1} ms`;
};

const output = init();
console.log(output);