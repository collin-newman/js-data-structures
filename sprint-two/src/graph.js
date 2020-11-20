

// Instantiate a new graph
var Graph = function() {
  this.size = 0;
  this.nodeList = [];
  this.edges = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.size++;
  this.nodeList.push({
    value: node
  });
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  let result = false;

  this.nodeList.forEach(function(item) {
    if (item.value === node) {
      result = true;
    }
  });

  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (let i = 0; i < this.nodeList.length; i++) {
    if (this.nodeList[i].value === node) {
      this.nodeList.splice(i, 1);
    }
  }

  this.removeEdge(node); //node = 5

  // this.nodeList.forEach.bind(this.nodeList, function(item, index) {
  //   if (item.value === node) {
  //     this.nodeList.splice(index, 1);
  //   }
  // });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {

  let edges = Object.keys(this.edges);
  let alsoEdges = Object.values(this.edges);

  let result = false;

  if ((_.contains(edges, JSON.stringify([fromNode, toNode])) || (_.contains(alsoEdges, JSON.stringify([fromNode, toNode]))))) {
    result = true;
  }
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[JSON.stringify([fromNode, toNode])] = JSON.stringify([toNode, fromNode]);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (arguments.length === 1) {

    let target = fromNode;
    let keys = Object.keys(this.edges).map(function(item) {
      return JSON.parse(item);
    });

    let compare = function(array1, target) {
      if (array1.includes(target)) {
        return true;
      }
    };
    for (let i = 0; i < keys.length; i++) {
      if (compare(keys[i], target)) {
        delete this.edges[JSON.stringify(keys[i])];
      }
    }

  } else {

    let target = [fromNode, toNode];
    let keys = Object.keys(this.edges).map(function(item) {
      return JSON.parse(item);
    });

    let compare = function(array1, array2) {
      if (array1.includes(array2[0])) {
        if (array1.includes(array2[1])) {
          return true;
        }
      }
    };

    for (let i = 0; i < keys.length; i++) {
      if (compare(keys[i], target)) {
        delete this.edges[JSON.stringify(target)];
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.nodeList, function(item) {
    cb(item.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

