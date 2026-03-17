class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    [this.adjacencyList[vertex1], this.adjacencyList[vertex2]] = [
      this.adjacencyList[vertex1].filter((v) => v !== vertex2),
      this.adjacencyList[vertex2].filter((v) => v !== vertex1),
    ];
  }
  removeVertex(vertex) {
    const vertexList = this.adjacencyList[vertex];

    for (const node of vertexList) {
      this.removeEdge(vertex, node);
    }
    delete this.adjacencyList[vertex];
  }
}

var graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');

graph.removeVertex('C');
graph.removeVertex('B');

console.log(graph.adjacencyList['A']); // still exists
console.log(graph.adjacencyList['D']); // still exists
