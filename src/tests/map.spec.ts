import {customMap} from "../map";
import { numberArr, multiplyByFive } from "../helpers";

describe('customMap.ts', () => {
  it('should call the callback function for each element in the array', () => {
    //Given
    const cb = jest.fn();

    //When
    customMap(numberArr, cb);

    //Then
    expect(cb).toBeCalledTimes(numberArr.length)
  });

  it('should call the callback function with the current value, the index and a reference to the original array', () => {
    //Given
    const cb = jest.fn();
    const arr = [1,2,3];

    //When
    customMap(arr, cb);

    //Then
    expect(cb).toBeCalledWith(1, 0, arr);
  });

  it('should return an array of equal length to the original array', () => {
    //Given
    const cb = jest.fn().mockReturnValue(42);

    //When
    const result = customMap(numberArr, cb);

    //Then
    expect(Array.isArray(result)).toBeTruthy();
    expect(result).toHaveLength(numberArr.length);
  });

  it('should place the correct value for the first element of the original array into the first element of new array', () => {
    //Given
    const arr = [1,2,3]
    
    //When
    const result = customMap(arr, multiplyByFive);

    //Then
    expect(result[0]).toBe(5);
  });
})