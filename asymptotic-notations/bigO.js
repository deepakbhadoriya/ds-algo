// ? always 3 operations
// ! O(1) complexity
const addNMath = (n) => {
  return (n * (n + 1)) / 2;
};

// const T1 = new Date();
// addNMath(1000000000);
// const T2 = new Date();
// console.log(`Seconds took ${(T2 - T1) / 1000}`);
//
//
//
//
//
// ? Number of operations is (eventually)
// ? bounded by a multiple of n (say, 10n)
// ! O(n) complexity
const addNLoop = (n) => {
  let result = 0;
  for (let i = 0; i <= n; i++) result += i;
  return result;
};

// const t1 = new Date();
// addNLoop(1000000000);
// const t2 = new Date();
// console.log(`Seconds took ${(t2 - t1) / 1000} `);
//
//
//
//
//
// ? Number of operations is (eventually)
// ? bounded by a multiple of n (say, 10n)
// ! O(n) complexity
const countUpAndDown = (n) => {
  console.log('Going up!');
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  console.log('At the top! \n Going down...');
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
  console.log('Back down. BYE!');
};

// countUpAndDown(10);
//
//
//
//
//
// ? O(n) operation inside of an O(n) operation
// ! O(n^2) complexity
const printAllPairs = (n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};

// printAllPairs(5);
//
//
//
//
//
// ? Number of operations is (eventually)
// ? bounded by a multiple of n (say, 10n)
// ! O(n) complexity
const logAtLeast5 = (n) => {
  for (let i = 0; i <= Math.max(5, n); i++) console.log(i);
};
logAtLeast5(0);
//
//
//
//
//
// ? always finite operations
// ! O(1) complexity
const logAtMost5 = (n) => {
  for (let i = 0; i <= Math.min(5, n); i++) console.log(i);
};
logAtMost5(10);
