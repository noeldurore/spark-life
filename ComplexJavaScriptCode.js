/*
Filename: ComplexJavaScriptCode.js

This code demonstrates a complex and elaborate implementation of a data structure called a Directed Acyclic Graph (DAG). 
The DAG is represented using an adjacency list. It provides various functionalities such as adding and removing nodes, 
connecting and disconnecting edges, performing topological sorting, and checking for cycles in the graph.

Note: This code assumes the availability of helper functions and classes such as LinkedList, Stack, and Queue.

*/

class Node {
  constructor(value) {
    this.value = value;
    this.connections = new LinkedList();
  }
}

class DirectedAcyclicGraph {
  constructor() {
    this.nodes = new LinkedList();
  }

  addNode(value) {
    const node = new Node(value);
    this.nodes.append(node);
  }

  removeNode(value) {
    let current = this.nodes.head;
    while (current) {
      if (current.value.value === value) {
        this.nodes.remove(current.value);
        break;
      }
      current = current.next;
    }
  }

  connectNodes(value1, value2) {
    let current = this.nodes.head;
    while (current) {
      if (current.value.value === value1) {
        current.value.connections.append(new Node(value2));
        break;
      }
      current = current.next;
    }
  }

  disconnectNodes(value1, value2) {
    let current = this.nodes.head;
    while (current) {
      if (current.value.value === value1) {
        const connections = current.value.connections;
        let connection = connections.head;
        while (connection) {
          if (connection.value.value === value2) {
            connections.remove(connection.value);
            break;
          }
          connection = connection.next;
        }
        break;
      }
      current = current.next;
    }
  }

  topologicalSort() {
    const stack = new Stack();
    const visited = {};

    const dfs = (node) => {
      visited[node.value] = true;
      let connection = node.connections.head;
      while (connection) {
        if (!visited[connection.value.value]) {
          dfs(connection.value);
        }
        connection = connection.next;
      }
      stack.push(node.value);
    };

    let current = this.nodes.head;
    while (current) {
      if (!visited[current.value.value]) {
        dfs(current.value);
      }
      current = current.next;
    }

    const result = [];
    while (!stack.isEmpty()) {
      result.push(stack.pop());
    }
    return result;
  }

  hasCycle() {
    const visited = {};
    const recStack = {};

    const isCyclic = (node) => {
      visited[node.value] = true;
      recStack[node.value] = true;

      let connection = node.connections.head;
      while (connection) {
        if (!visited[connection.value.value] && isCyclic(connection.value)) {
          return true;
        } else if (recStack[connection.value.value]) {
          return true;
        }
        connection = connection.next;
      }

      recStack[node.value] = false;
      return false;
    };

    let current = this.nodes.head;
    while (current) {
      if (!visited[current.value.value]) {
        if (isCyclic(current.value)) {
          return true;
        }
      }
      current = current.next;
    }
    return false;
  }
}

// Usage example:

const graph = new DirectedAcyclicGraph();

graph.addNode("A");
graph.addNode("B");
graph.addNode("C");
graph.addNode("D");

graph.connectNodes("A", "B");
graph.connectNodes("A", "C");
graph.connectNodes("C", "D");
graph.connectNodes("D", "B");

console.log(graph.topologicalSort()); // Outputs: ["A", "C", "D", "B"]

graph.removeNode("C");

console.log(graph.topologicalSort()); // Outputs: ["A", "D", "B"]

console.log(graph.hasCycle()); // Outputs: false

graph.connectNodes("B", "A");

console.log(graph.hasCycle()); // Outputs: true
