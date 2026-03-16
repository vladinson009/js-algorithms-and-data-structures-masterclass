class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);

    let index = this.values.length - 1;

    let parentIndex = Math.floor((index - 1) / 2);
    while (this.values[parentIndex] < this.values[index]) {
      [this.values[parentIndex], this.values[index]] = [
        this.values[index],
        this.values[parentIndex],
      ];
      index = parentIndex;
      parentIndex = Math.floor((index - 1) / 2);
    }
  }
  extractMax() {
    const rootNode = this.values[0];
    const lastNode = this.values.pop();
    this.values[0] = lastNode;
    let index = 0;
    let leftChildIndex = index * 2 + 1;
    let rightChildIndex = leftChildIndex + 1;

    while (
      leftChildIndex < this.values.length &&
      rightChildIndex < this.values.length
    ) {
      let swap = null;
      if (this.values[index] < this.values[leftChildIndex]) {
        swap = leftChildIndex;
      }
      if (
        this.values[index] < this.values[rightChildIndex] &&
        this.values[rightChildIndex] > this.values[leftChildIndex]
      ) {
        swap = rightChildIndex;
      }
      if (swap === null) {
        break;
      }
      [this.values[index], this.values[swap]] = [
        this.values[swap],
        this.values[index],
      ];
      index = swap;
      leftChildIndex = index * 2 + 1;
      rightChildIndex = leftChildIndex + 1;
    }

    return rootNode;
  }
}

const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
binaryHeap.insert(2);
binaryHeap.insert(3);
binaryHeap.insert(4);
binaryHeap.insert(5);
binaryHeap.insert(6);
binaryHeap.extractMax();
console.log(binaryHeap.values[0]); // 5

console.log(binaryHeap.values); // [5,4,2,1,3])

binaryHeap.extractMax();
console.log(binaryHeap.values); // [4,3,2,1])

binaryHeap.extractMax();
console.log(binaryHeap.values); // [3,1,2])
