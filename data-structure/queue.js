class Queue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }
  enqueue(item) {
    this.collection.push(item);
  }
  dequeue() {
    return this.collection.shift();
  }
  front() {
    return this.collection[0];
  }
  size() {
    return this.collection.length;
  }
  isEmpty() {
    return this.collection.length === 0;
  }
}

var newQueue = new Queue();

newQueue.print();
console.log(newQueue.isEmpty());
newQueue.enqueue('a');
newQueue.enqueue('b');
newQueue.enqueue('c');
newQueue.enqueue('d');
newQueue.dequeue();
newQueue.print();
console.log(newQueue.front());
console.log(newQueue.size());
console.log(newQueue.isEmpty());
