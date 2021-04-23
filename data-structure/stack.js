class Stack {
  constructor() {
    this.count = 0;
    this.storage = [];
  }

  push(data) {
    this.storage[this.count] = data;
    this.count++;
  }
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  size() {
    return this.count;
  }
  peek() {
    if (this.count === 0) {
      return undefined;
    }
    return this.storage[this.count - 1];
  }
}

const stack1 = new Stack();

console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.size());
stack1.push('hello');
stack1.push('hello1');

console.log(stack1.size());
console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.peek());
console.log(stack1.size());
