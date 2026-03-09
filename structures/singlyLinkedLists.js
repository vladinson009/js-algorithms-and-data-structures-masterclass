class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
    if (val) this.push(val);
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      const lastEl = this.tail;
      lastEl.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) {
      return undefined;
    }
    const returnValue = this.head;
    const newHead = returnValue.next;
    this.head = newHead;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return returnValue;
  }
  unshift(value) {
    if (!this.head) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      const lastHead = this.head;
      this.head = newNode;
      this.head.next = lastHead;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (typeof index !== 'number') {
      return null;
    }

    let element = this.head;
    for (let i = 0; i < index; i++) {
      element = element.next;
    }
    return element;
  }
  set(index, value) {
    const foundValue = this.get(index);
    if (!foundValue) {
      return false;
    }
    foundValue.val = value;
    return true;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(value);
    } else if (index === this.length) {
      this.push(value);
    } else {
      const newNode = new Node(value);
      const prev = this.get(index - 1);
      const futureNext = prev.next;
      prev.next = newNode;
      newNode.next = futureNext;
      this.length++;
    }
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const prev = this.get(index - 1);
      const removed = prev.next;
      const next = removed.next;
      prev.next = next;
      this.length--;
      return removed;
    }
  }
  rotate(num) {
    if (this.length === 0) {
      return this;
    }
    num = num % this.length;
    if (num < 0) {
      num = this.length + num;
    }
    if (num === 0) {
      return this;
    }
    let newTail = this.get(num - 1);
    let newHead = newTail.next;

    this.tail.next = this.head;
    this.head = newHead;
    this.tail = newTail;
    this.tail.next = null;
    return this;
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(
  singlyLinkedList.head.val, // 5
);
console.log(
  singlyLinkedList.tail.val, // 25;
);

singlyLinkedList.rotate(3);
console.log(
  singlyLinkedList.head.val, // 20
);
console.log(
  singlyLinkedList.head.next.val, // 25
);

console.log(
  singlyLinkedList.head.next.next.val, // 5
);
console.log(
  singlyLinkedList.head.next.next.next.val, // 10
);
console.log(
  singlyLinkedList.head.next.next.next.next.val, // 15
);
console.log(
  singlyLinkedList.tail.val, // 15
);
console.log(
  singlyLinkedList.tail.next, // null
);

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(
  singlyLinkedList.head.val, // 5
);
console.log(
  singlyLinkedList.tail.val, // 25;
);

singlyLinkedList.rotate(-1);
console.log(
  singlyLinkedList.head.val, // 25
);
console.log(
  singlyLinkedList.head.next.val, // 5
);
console.log(
  singlyLinkedList.head.next.next.val, // 10
);

console.log(
  singlyLinkedList.head.next.next.next.val, // 15
);

console.log(
  singlyLinkedList.head.next.next.next.next.val, // 20
);
console.log(
  singlyLinkedList.tail.val, // 20
);

console.log(
  singlyLinkedList.tail.next, // null
);

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
console.log(
  singlyLinkedList.head.val, // 5
);
console.log(
  singlyLinkedList.tail.val, // 25;
);

singlyLinkedList.rotate(1000);
console.log(
  singlyLinkedList.head.val, // 5
);

console.log(
  singlyLinkedList.head.next.val, // 10
);
console.log(
  singlyLinkedList.head.next.next.val, // 15
);
console.log(
  singlyLinkedList.head.next.next.next.val, // 20
);
console.log(
  singlyLinkedList.head.next.next.next.next.val, // 25
);
console.log(
  singlyLinkedList.tail.val, // 25
);
console.log(
  singlyLinkedList.tail.next, // null
);
