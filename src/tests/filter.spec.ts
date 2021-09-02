import {customFilter} from "../filter";
import { numberArr, isEven } from "../helpers";

describe('customFilter.ts', () => {
  it('should call the callback function for each element in the array', () => {
    //Given
    const cb = jest.fn();

    //When
    customFilter(numberArr, cb);

    //Then
    expect(cb).toBeCalledTimes(numberArr.length)
  });

  it('should call the callback function with the current value, the index and a reference to the original array', () => {
    //Given
    const cb = jest.fn();
    const arr = [1,2,3];

    //When
    customFilter(arr, cb);

    //Then
    expect(cb).toBeCalledWith(1, 0, arr);
  });

  it('should only place elements in to the array where the callback returns true', () => {
    //Given
    const arr = [1,2,3]
    
    //When
    const result = customFilter(arr, isEven);

    //Then
    expect(result[0]).toBe(2);
    expect(result).toHaveLength(1);
  });
})