import { rotLeft } from "./rotLeft.js";

const arr1 = [1, 2, 3, 4, 5];
const d = 4; // [5,1,2,3,4]
//-------------------------------
const arr2 = [
  41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51,
];
const d2 = 10; // [77, 97, 58, 1, 86, 58, 26, 10, 86, 51, 41, 73, 89, 7, 10, 1, 59, 58, 84, 77]

console.log(rotLeft(arr1, 4));