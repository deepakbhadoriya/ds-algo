const array = [1, 25, 4, 6, 8, 19, 10, 3, 5];

// ! Bubble Sort

// it sorts values by comparing the subsequent values and if the number following I
// is lesser then it swaps them abd continues to do so for the entire array.
// compare subsequent items in an array
// swap if not sorted
// loop through and check
// store value being sorted
// push rearrangement.

const bubbleSort = (arr) => {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i);
      }
    }
  }

  console.log(arr);
};

const swap = (arr, index) => {
  let temp = arr[index];
  arr[index] = arr[index + 1];
  arr[index + 1] = temp;
};

bubbleSort(array);
