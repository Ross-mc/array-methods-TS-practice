import {numberArr, strArr} from './helpers';
import {filterCallback} from "./types"

export const customFilter = <T>(arr: T[], cb: filterCallback<T>) => {
  const resultArr = [];
  for (let idx = 0; idx < arr.length; idx++) {
    const value = arr[idx];
    const result = cb(value, idx, arr);
    if (result){
      resultArr.push(value);
    }
  }
  return resultArr;
};

