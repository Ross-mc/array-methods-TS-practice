"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("./helpers");
var customMap = function (arr, cb) {
    var resultArr = [];
    for (var idx = 0; idx < arr.length; idx++) {
        var value = arr[idx];
        resultArr.push(cb(value, idx, arr));
    }
    return resultArr;
};
var multiply = function (num) { return num * 5; };
var actual = helpers_1.numberArr.map(function (num) { return multiply(num); });
var customResult = customMap(helpers_1.numberArr, multiply);
console.log(actual);
console.log(customResult);
var multiplyWithIdx = function (num, idx) { return idx % 2 === 0 ? num * 2 : num * 5; };
var actualWithIdx = helpers_1.numberArr.map(function (num, idx) { return multiplyWithIdx(num, idx); });
var customWithIdx = customMap(helpers_1.numberArr, multiplyWithIdx);
console.log(actualWithIdx);
console.log(customWithIdx);
var toUpper = function (str) { return str.toUpperCase(); };
var actualStr = helpers_1.strArr.map(function (v) { return toUpper(v); });
var customStr = customMap(helpers_1.strArr, toUpper);
console.log(actualStr);
console.log(customStr);
