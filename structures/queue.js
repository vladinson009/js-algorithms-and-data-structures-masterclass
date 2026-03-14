class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (!this.last) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.size++;
    return this.size;
  }
  dequeue() {
    if (this.size < 1) {
      return null;
    }
    const returnValue = this.first;
    if (this.size === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;
    return returnValue.value;
  }
}

var queue = new Queue();
console.log(queue.enqueue(10)); // returns 1, size becomes 1
console.log(queue.enqueue(100)); // returns 2, size becomes 2
console.log(queue.enqueue(1000)); // returns 3, size becomes 3
console.log(queue.dequeue()); // returns 10, size becomes 2
