const array = [1, 2, 4, 6, 8, 19, 10, 3, 5];

// ! Binary Search
// works only on sorted array
const binarySearch = (arr, toFind) => {
  let min = 0;
  let max = arr.length;
  let mid = Math.floor((min + max) / 2);

  while (arr[mid] !== toFind && min < max) {
    if (arr[mid] < toFind) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
    mid = Math.floor((min + max) / 2);
  }
  if (arr[mid] === toFind) {
    return `found ${toFind} at index ${mid}`;
  } else {
    return `${toFind} Not found`;
  }
};

const sortedArray = array.sort((a, b) => a - b);
console.log(binarySearch(sortedArray, 19));
