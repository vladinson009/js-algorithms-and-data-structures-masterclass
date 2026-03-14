class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.last) {
      this.last = newNode;
    } else {
    }
    const nextNode = this.first;

    this.first = newNode;
    this.first.next = nextNode;

    this.size++;

    return this.size;
  }
  pop() {
    if (this.size < 1) {
      return null;
    }
    if (this.size === 1) {
      const returnValue = this.first.value;

      this.first = null;
      this.last = null;
      this.size--;
      return returnValue;
    }
    const returnValue = this.first;
    const newHead = this.first.next;
    this.first = newHead;

    this.size--;
    return returnValue.value;
  }
}

const stack = new Stack();

console.log(stack.push(10));
console.log(stack.push(100));
console.log(stack.push(1000));
const removed = stack.pop();
console.log(removed); // 1000
console.log(stack.size); // 2
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.size); // 0
