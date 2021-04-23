// ! Set
// The Set object lets you store unique values of any type, whether primitive values or object references.

// ! Description
// Set objects are collections of values. You can iterate through the elements of a set in insertion order. A value in the Set may only occur once; it is unique in the Set's collection.

// ! Value equality
// Because each value in the Set has to be unique, the value equality will be checked. In an earlier version of ECMAScript specification, this was not based on the same algorithm as the one used in the === operator. Specifically, for Sets, +0 (which is strictly equal to -0) and -0 were different values. However, this was changed in the ECMAScript 2015 specification. See "Key equality for -0 and 0" in the browser compatibility table for details.

// NaN and undefined can also be stored in a Set. All NaN values are equated (i.e. NaN is considered the same as NaN, even though NaN !== NaN).

var MySet = function () {
  this.collection = [];
  this.size = 0;
};

MySet.prototype.has = function (element) {
  return this.collection.indexOf(element) !== -1;
};

MySet.prototype.add = function (element) {
  if (!this.has(element)) {
    this.collection.push(element);
    this.size++;
    return true;
  }
  return false;
};

MySet.prototype.remove = function (element) {
  if (this.has(element)) {
    let index = this.collection.indexOf(element);
    this.collection.splice(index, 1);
    this.size--;
    return true;
  }
  return false;
};

MySet.prototype.values = function () {
  return this.collection;
};

const testSet = new MySet();

testSet.add('a');
testSet.add('a');
testSet.add('a');
testSet.add('a');
console.log(testSet.size);
testSet.add('b');
testSet.remove('a');
console.log(testSet.size);
console.log(testSet.values());
