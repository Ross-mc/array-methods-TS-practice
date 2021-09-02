import {booleanCallback} from "./types"

export const customEvery = <T>(arr: T[], cb: booleanCallback<T>) => {
  for (let idx = 0; idx < arr.length; idx++) {
    const value = arr[idx];
    const result = cb(value, idx, arr);
    if (!result){
      return false
    }
  }
  return true
};

