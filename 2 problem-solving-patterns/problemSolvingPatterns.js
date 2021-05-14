// ! Frequency Counter Pattern
// que Write a fun called same, which accepts two arrays. The Function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

//// Example
//? same([1,2,3], [4,1,9]) => true
//? same([1,2,3], [1,9]) => false
//? same([1,2,1], [4,4,1]) => false

//* Naive solution
//* 0(n^2) time complexity
const sameNaive = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) return false;
    arr2.splice(correctIndex, 1);
  }
  return true;
};

//* Better solution
//* O(n) time complexity
const sameRefactor = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  let freqCount1 = {};
  let freqCount2 = {};
  for (let val of arr1) {
    freqCount1[val] = (freqCount1[val] || 0) + 1;
  }
  for (let val of arr2) {
    freqCount2[val] = (freqCount2[val] || 0) + 1;
  }
  for (let key in freqCount1) {
    if (!(key ** 2 in freqCount2)) {
      return false;
    }
    if (freqCount2[key ** 2] !== freqCount1[key]) {
      return false;
    }
  }

  return true;
};

const a = [
  [1, 2, 2, 3],
  [4, 1, 4, 9],
];
const b = [
  [1, 2, 3],
  [1, 9],
];
const c = [
  [1, 2, 1],
  [4, 4, 1],
];

// console.log(sameRefactor(a[0], a[1]));
// console.log(sameNaive(a[0], a[1]));

// console.log(sameRefactor(b[0], b[1]));
// console.log(sameNaive(b[0], b[1]));

// console.log(sameRefactor(c[0], c[1]));
// console.log(sameNaive(c[0], c[1]));

// que ANAGRAMS --- Given two string, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, from iceman.

//// Example
//? validAnagram("","") => true
//? validAnagram("aaz","zza") => false
//? validAnagram("anagram","nagaram") => true
//? validAnagram("rat","car") => false
//? validAnagram("awesome","awesom") => false
//? validAnagram("qwerty","qeywrt") => true
//? validAnagram("texttwisttime","timetwisttext") => true

const validAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  let charFeq1 = {};
  let charFeq2 = {};

  for (let char of str1) {
    charFeq1[char] = (charFeq1[char] || 0) + 1;
  }
  for (let char of str2) {
    charFeq2[char] = (charFeq2[char] || 0) + 1;
  }

  for (let key in charFeq1) {
    if (!(key in charFeq2)) {
      return false;
    }
    if (charFeq1[key] !== charFeq2[key]) {
      return false;
    }
  }

  // console.log(charFeq1);
  // console.log(charFeq2);

  return true;
};

const validAnagramPro = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  const lookUp = {};

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i];
    lookUp[letter] ? (lookUp[letter] += 1) : (lookUp[letter] = 1);
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookUp[letter]) {
      return false;
    } else {
      lookUp[letter] -= 1;
    }
  }

  return true;
};

// console.log(validAnagram('', ''));
// console.log(validAnagram('aaz', 'zza'));
// console.log(validAnagram('anagram', 'nagaram'));
// console.log(validAnagram('rat', 'car'));
// console.log(validAnagram('awesome', 'awesom'));
// console.log(validAnagram('qwerty', 'qeywrt'));
// console.log(validAnagram('texttwisttime', 'timetwisttext'));

// console.log(validAnagram('', ''));
// console.log(validAnagramPro('aaz', 'zza'));
// console.log(validAnagramPro('anagram', 'nagaram'));
// console.log(validAnagramPro('rat', 'car'));
// console.log(validAnagramPro('awesome', 'awesom'));
// console.log(validAnagramPro('qwerty', 'qeywrt'));
// console.log(validAnagramPro('texttwisttime', 'timetwisttext'));
