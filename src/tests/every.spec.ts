import {customEvery} from "../every";
import { isEven } from "../helpers";

describe('customEvery.ts', () => {

  it('should call the callback function with the current value, the index and a reference to the original array', () => {
    //Given
    const cb = jest.fn();
    const arr = [1,2,3];

    //When
    customEvery(arr, cb);

    //Then
    expect(cb).toBeCalledWith(1, 0, arr);
  });

  it('should return true if every element passes the boolean check', () => {
    //Given
    const arr = [2,4,6,10,659438434232,0,-4];
    
    //When
    const result = customEvery(arr, isEven);

    //Then
    expect(result).toEqual(true);
  });
  it('should return false if a single element fails the boolean check and should stop execution', () => {
    //Given
    const arr = [2,4,5,10,659438434232,0,-4];

    const spyHolder = {
      isEven
    }

    const spy = jest.spyOn(spyHolder, 'isEven');
    
    //When
    const result = customEvery(arr, spyHolder.isEven);

    //Then
    expect(result).toEqual(false);
    expect(spy).toBeCalledTimes(3);
  });
})