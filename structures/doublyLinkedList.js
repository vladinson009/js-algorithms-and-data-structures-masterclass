class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }
  pop() {
    if (this.length < 1) {
      return undefined;
    }
    const removedNode = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
    }

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
  unshift(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
    }
    this.head = newNode;
    this.length++;
    return this;
  }
  shift() {
    if (this.length < 1) {
      return undefined;
    }
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
    }

    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.head;
    }
    if (index === this.length - 1) {
      return this.tail;
    }
    const middlePoint = this.length / 2;

    if (index < middlePoint) {
      let returnValue = this.head;
      for (let i = 0; i < index; i++) {
        returnValue = returnValue.next;
      }
      return returnValue;
    } else {
      let returnValue = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        returnValue = returnValue.prev;
      }
      return returnValue;
    }
  }
  set(index, value) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === 0) {
      this.head.val = value;
    } else if (index === this.length - 1) {
      this.tail.val = value;
    } else {
      this.get(index).val = value;
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
      const prevNode = this.get(index - 1);
      const nextNode = prevNode.next;

      prevNode.next = newNode;
      newNode.prev = prevNode;

      nextNode.prev = newNode;
      newNode.next = nextNode;
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
    }

    if (index === this.length - 1) {
      return this.pop();
    }

    const removedNode = this.get(index);
    const prevNode = removedNode.prev;
    const nextNode = removedNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    removedNode.prev = null;
    removedNode.next = null;

    this.length--;

    return removedNode;
  }
  reverse() {
    if (this.length <= 1) {
      return this;
    }

    let current = this.head;
    let temp = null;

    while (current) {
      temp = current.next;
      current.next = current.prev;
      current.prev = temp;

      current = temp;
    }
    temp = this.head;
    this.head = this.tail;
    this.tail = temp;

    return this;
  }
}
let doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.push(5).push(10).push(15).push(20);
console.log(doublyLinkedList.reverse()); // singlyLinkedList
console.log(doublyLinkedList.length); // 4
console.log(doublyLinkedList.head.val); // 20
console.log(doublyLinkedList.head.next.val); // 15
console.log(doublyLinkedList.head.next.next.val); // 10
console.log(doublyLinkedList.head.next.next.next.val); // 5
