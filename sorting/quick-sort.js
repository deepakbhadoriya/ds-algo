const array = [1, 2, 4, 6, 8, 19, 10, 3, 5];

// ! Quick Sort

// Divide and Conquer - Usually done recursively
// The way quicksort works, is by choosing a ​pivot​ (an element in the array, often random),
// and check whether values in the array are higher or lower than that pivot.
// The values lower than the pivot should be on the​ ​left side, and the values higher than the pivot should be on the right side!

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  } else {
    const left = [];
    const right = [];
    const pivot = arr.pop(); // Taking last element of arr as pivot
    const sortedArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (pivot > arr[i]) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }

    return sortedArr.concat(quickSort(left), pivot, quickSort(right));
  }
};

console.log(quickSort(array));
