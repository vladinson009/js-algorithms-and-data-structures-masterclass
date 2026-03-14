class Stack {
  constructor() {
    this.q1 = new Queue();
    this.q2 = new Queue();
  }
  push(val) {
    this.q2.enqueue(val);
    while (this.q1.size > 0) {
      this.q2.enqueue(this.q1.dequeue());
    }
    let temp = this.q1;
    this.q1 = this.q2;
    this.q2 = temp;
    return this;
  }
  pop() {
    if (this.q1.size === 0) {
      return null;
    }

    return this.q1.dequeue();
  }
}

// QUEUE AND NODE HAVE BEEN IMPLEMENTED FOR YOU

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
  enqueue(data) {
    var node = new Node(data);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;

    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

var s = new Stack();
s.push(10).push(20).push(30);
console.log(s.pop()); // 30
console.log(s.pop()); // 20
console.log(s.pop()); // 10
console.log(s.pop()); // null
s.push(30).push(40).push(50);
console.log(s.pop()); // 50
s.push(60);
console.log(s.pop()); // 60
