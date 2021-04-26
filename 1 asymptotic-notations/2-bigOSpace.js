// ? space taken by total and i is constant
// ? whatever the arr input is So
// ! O(1) Space complexity
const sum = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//
//
//
//
//
// ? space taken by newArr is dependent on input n
// ! O(n) Space complexity
const double = (arr) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(2 * arr[i]);
  }
  return newArr;
};
console.log(double([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
