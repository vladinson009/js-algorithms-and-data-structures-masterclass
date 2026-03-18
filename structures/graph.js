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
  depthFirstSearch(start) {
    const result = [];
    const visited = {};

    const dfsHelper = (vertex) => {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((el) => {
        if (!visited[el]) {
          return dfsHelper(el);
        }
      });
    };

    dfsHelper(start);
    return result;
  }
  breadthFirstSearch(start) {
    const result = [];
    const queue = [];
    const visited = { [start]: true };

    const bfsHelper = (vertex) => {
      if (!vertex) return null;
      result.push(vertex);

      this.adjacencyList[vertex].forEach((el) => {
        if (!visited[el]) {
          visited[el] = true;
          queue.push(el);
        }
      });
      return bfsHelper(queue.shift());
    };

    bfsHelper(start);
    return result;
  }
}

var graph = new Graph();

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

graph.addEdge('S', 'P');
graph.addEdge('S', 'U');

graph.addEdge('P', 'X');
graph.addEdge('U', 'X');

graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');

graph.addEdge('X', 'Q');
graph.addEdge('X', 'Y');
graph.addEdge('X', 'V');

graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');

graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');

graph.addEdge('R', 'T');
graph.addEdge('W', 'T');

console.log(graph.breadthFirstSearch('S')); // ["S", "P", "U", "X", "Q", "V", "Y", "R", "W", "T"]
