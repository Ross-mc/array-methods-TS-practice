import * as fs from 'fs';
import {createLargeArrayOfNumbers, writeToJSON} from "./createArray";
import {generatedData} from "./types"

export const getArray = () => {
  try {
    const json = fs.readFileSync('../data.json');
    const data = (JSON.parse(json.toString())) as generatedData;
    return data;
  } catch (error) {
    const data = createLargeArrayOfNumbers(1_000_000, 100_000);
    writeToJSON(data);
    return {
      numberArr: data
    };
  }
}
