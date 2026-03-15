class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // ! Insert with iterative approach
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    //
    while (true) {
      if (value < current.value) {
        //Go left
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        //Go right
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return undefined;
      }
    }
  }
  // ! Find with recursive approach
  find(value) {
    const recursiveSearch = (current) => {
      if (!current) {
        return undefined;
      }
      const currentValue = current.value;
      if (currentValue === value) {
        return current;
      } else if (value < currentValue) {
        return recursiveSearch(current.left);
      } else {
        return recursiveSearch(current.right);
      }
    };

    return recursiveSearch(this.root);
  }
  // ! Remove with recursive approach
  remove(value) {
    const removeNode = (node, value) => {
      if (!node) {
        return null;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      }
      if (value > node.value) {
        node.right = removeNode(node.right, value);
        return node;
      }
      //NODE FOUND
      // Case 1: no children
      if (!node.left && !node.right) {
        return null;
      }
      //   Case 2: one child
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      // Case 3: two children
      let successor = node.right;
      while (successor.left) {
        successor = successor.left;
      }
      node.value = successor.value;
      node.right = removeNode(node.right, successor.value);
      return node;
    };
    this.root = removeNode(this.root, value);
    return this;
  }
  // ! finSecondLargest with recursive approach
  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) {
      return undefined;
    }
    let currentLargestValue = this.root.value;
    const secondLargest = (current) => {
      if (currentLargestValue < current.value && current.right) {
        currentLargestValue = current.value;
        return secondLargest(current.right);
      }
      return currentLargestValue;
    };

    return secondLargest(this.root);
  }
  isBalanced() {
    const height = (node) => {
      if (!node) {
        return 0;
      }

      const leftHeight = height(node.left);
      const rightHeight = height(node.right);

      if (leftHeight === -1 || rightHeight === -1) {
        return -1;
      }

      if (Math.abs(leftHeight - rightHeight) > 1) {
        return -1;
      }

      return Math.max(leftHeight, rightHeight) + 1;
    };
    return height(this.root) !== -1;
  }
  breadthFirstSearch() {
    const data = [];

    const recursiveSearch = (queue) => {
      if (!queue.length) {
        return;
      }
      const node = queue.shift();
      data.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }

      recursiveSearch(queue);
    };
    if (this.root) {
      recursiveSearch([this.root]);
    }
    return data;
  }
  DFSPreOrder() {
    const data = [];
    const preOrder = (node) => {
      if (!node) {
        return;
      }

      data.push(node.value);
      if (node.left) {
        preOrder(node.left);
      }
      if (node.right) {
        preOrder(node.right);
      }
    };

    preOrder(this.root);
    return data;
  }
  DFSInOrder() {
    const data = [];
    const inOrder = (node) => {
      if (!node) {
        return;
      }

      if (node.left) {
        inOrder(node.left);
      }
      data.push(node.value);
      if (node.right) {
        inOrder(node.right);
      }
    };

    inOrder(this.root);
    return data;
  }
  DFSPostOrder() {
    const data = [];
    const postOrder = (node) => {
      if (!node) {
        return;
      }

      if (node.left) {
        postOrder(node.left);
      }
      if (node.right) {
        postOrder(node.right);
      }
      data.push(node.value);
    };

    postOrder(this.root);
    return data;
  }
}
var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
console.log(
  binarySearchTree.DFSPreOrder(), // [15, 10, 1, 5, 12, 20, 50]
);

console.log(
  binarySearchTree.DFSInOrder(), // [1, 5, 10, 12, 15, 20, 50]
);
console.log(
  binarySearchTree.DFSPostOrder(), // [5, 1, 12, 10, 50, 20, 15]
);
