class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

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

class WeightedGraph extends Graph {
  constructor() {
    super();
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};

    const path = []; // return at the end
    let smallest;
    // Build up initial state
    for (const vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //   As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //   We are done
        //   Build up path to return at the end;
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (const neighbor in this.adjacencyList[smallest]) {
          // find neighboring node
          const nextNode = this.adjacencyList[smallest][neighbor];
          // calculate new distance to neighboring node
          const candidate = distances[smallest] + nextNode.weight;
          const nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            // updating new smallest distance to neighbor
            distances[nextNeighbor] = candidate;
            // updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            // enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const g = new WeightedGraph();

g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');

g.addEdge('A', 'Z', 7);
g.addEdge('A', 'C', 8);

g.addEdge('Z', 'Q', 2);

g.addEdge('C', 'G', 4);

g.addEdge('D', 'Q', 8);

g.addEdge('E', 'H', 1);

g.addEdge('H', 'Q', 3);

g.addEdge('Q', 'C', 6);

g.addEdge('G', 'Q', 9);

console.log(g.Dijkstra('A', 'E')); // ["A", "Z", "Q", "H", "E"]
console.log(g.Dijkstra('A', 'Q')); // ["A", "Z", "Q"]
console.log(g.Dijkstra('A', 'G')); // ["A", "C", "G"]
console.log(g.Dijkstra('A', 'D')); // ["A", "Z", "Q", "D"]
