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
  shift() {
    if (!this.head) {
      return null;
    }
    const returnValue = this.head;
    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
    return returnValue;
  }
  unshift(value) {
    if (!this.head) {
      this.push(value);
      return;
    }
    const newNode = new Node(value);
    const lastHead = this.head;
    this.head = newNode;
    this.head.next = lastHead;
    this.length++;
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
    if (index < 0 || index >= this.length) {
      return false;
    }

    const newNode = new Node(value);

    if (index === 0) {
      const head = this.head;
      this.head = newNode;
      this.head.next = head.next;
    } else {
      const prev = this.get(index - 1);
      const next = prev.next.next;

      prev.next = newNode;
      newNode.next = next;
    }

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
    }
    this.length++;
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
      const current = prev.next;
      const next = current.next;
      prev.next = next;
      this.length--;
      return current;
    }
  }
}

var singlyLinkedList = new SinglyLinkedList();

singlyLinkedList.push(5); // singlyLinkedList

singlyLinkedList.push(10); // singlyLinkedList

singlyLinkedList.push(15); // singlyLinkedList
console.log(
  singlyLinkedList.get('gr'), // singlyLinkedList
);
