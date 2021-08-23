import * as fs from 'fs';

const createLargeArrayOfNumbers = (length: number, max: number) => {
  const largeArr = [];
  for (let i = 0; i<length; i++){
    const randomNum = Math.floor(Math.random() * max);
    largeArr.push(randomNum);
  }
  return largeArr;
}

const length = parseInt(process.argv[2]) || 1_000_000;
const max = parseInt(process.argv[3]) || 100_000;

const largeArr = createLargeArrayOfNumbers(length, max);

const jsonArr = JSON.stringify({
  numberArr: largeArr
});

fs.writeFileSync('../data.json', jsonArr);