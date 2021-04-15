const array = [1, 2, 4, 6, 8, 19, 10, 3, 5];

// ! Linear Search
const linearSearch = (arr, toFind) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === toFind) {
      return `found ${toFind} at index ${i}`;
    }
  }
  return `${toFind} Not found`;
};

const result = linearSearch(array, 11);
console.log(result);
