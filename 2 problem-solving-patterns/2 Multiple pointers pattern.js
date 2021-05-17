// ! Multiple Pointers Pattern
// Todo ==> Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well

// que ==> Write a function called sumZero which accepts a sorted array of integers. The Function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does

//// Example
//? sumZero([-3, -2, -1, 0, 1, 2, 3) => [-3,3]
//? sumZero([-2, 0, 1, 3) => undefined
//? sumZero([1, 2, 3) =>  undefined

const a = [-3, -2, -1, 0, 1, 2, 3];
const b = [-2, 0, 1, 3];
const c = [1, 2, 3];

//* Naive solution
//* 0(n^2) time complexity
//* O(1) space complexity
const naiveSumZero = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

// console.log(naiveSumZero(a));
// console.log(naiveSumZero(b));
// console.log(naiveSumZero(c));

//* Better solution
//* O(n) time complexity
//* O(1) space complexity
const refactorSumZero = (arr) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) return [arr[left], arr[right]];
    else if (sum > 0) right--;
    else left++;
  }
};

// console.log(refactorSumZero(a));
// console.log(refactorSumZero(b));
// console.log(refactorSumZero(c));

// que ==> countUniqueValues - Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. there can be negative numbers in the array, but it will always be sorted.

//// Example
const a2 = [1, 1, 1, 1, 2];
const b2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
const c2 = [];
const d2 = [-2, -1, -1, 0, 1];
//? countUniqueValues([a2]) ==> 2
//? countUniqueValues([b2]) ==> 7
//? countUniqueValues([c2]) ==> 0
//? countUniqueValues([d2]) ==> 4

//* Solution to just count number of unique number for sorted array
//* O(n) time complexity
//* O(1) space complexity
const countUniqueValues = (arr) => {
  let uniqueNum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      uniqueNum++;
    }
  }
  return uniqueNum;
};

// console.log(countUniqueValues(a2));
// console.log(countUniqueValues(b2));
// console.log(countUniqueValues(c2));
// console.log(countUniqueValues(d2));

//* Solution to count number of unique number for sorted array and also remove duplicates
//* O(n) time complexity
//* O(1) space complexity
const countUniqueValuesAndRemoveDuplicate = (arr) => {
  if (arr.length === 0) return { unique: 0, arr: [] };

  let unique = 0;
  let withoutDuplicate = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      unique++;
      withoutDuplicate.push(arr[i]);
    }
  }
  return {
    unique,
    withoutDuplicate,
  };
};

console.log(countUniqueValuesAndRemoveDuplicate(a2));
console.log(countUniqueValuesAndRemoveDuplicate(b2));
console.log(countUniqueValuesAndRemoveDuplicate(c2));
console.log(countUniqueValuesAndRemoveDuplicate(d2));
