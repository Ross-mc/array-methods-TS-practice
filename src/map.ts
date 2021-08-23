import {mapCallback} from "./types"

export const customMap = <T>(arr: T[], cb: mapCallback<T>) => {
  const resultArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    const value = arr[idx];
    resultArr.push(cb(value, idx, arr));
  }
  return resultArr;
};



