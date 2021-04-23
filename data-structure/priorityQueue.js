class PriorityQueue {
  constructor() {
    this.collection = [];
  }

  print() {
    console.log(this.collection);
  }
  enqueue(item) {
    if (this.collection.length === 0) {
      this.collection.push(item);
    } else {
      var added = false;
      for (let i = 0; i < this.collection.length; i++) {
        if (this.collection[i][1] > item[1]) {
          this.collection.splice(i, 0, item);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(item);
      }
    }
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

var pq = new PriorityQueue();
pq.enqueue(['Beau Carnes', 2]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Briana Swift', 2]);
pq.enqueue(['Quincy Larson', 4]);
pq.enqueue(['Quincy Larson', 3]);
pq.enqueue(['Ewa Mitulska-Wójcik', 0]);
pq.enqueue(['Ewa Mitulska-Wójcik', 10]);

pq.print();
pq.dequeue();
console.log(pq.front());
pq.print();
