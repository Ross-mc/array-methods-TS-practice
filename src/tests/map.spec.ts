import {customMap} from "../map";
import { strArr, numberArr } from "../helpers";
import {mapCallback} from "../types"

describe('customMap.ts', () => {
  it('It should call the callback function for each element in the array', () => {
    //Given
    const cb = jest.fn();

    //When
    customMap(numberArr, cb);

    //Then
    expect(cb).toBeCalledTimes(numberArr.length)
  })
})