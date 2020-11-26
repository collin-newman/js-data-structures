var BinarySearchTree = function(value) {
  let instance = {};

  instance.value = value;
  instance.left = null;
  instance.right = null;
  instance.depth = 1;
  instance.parent = null;

  _.extend(instance, binarySearchTreeMethods);
  return instance;
};

let binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function (insertedValue) {

  //commented out to pass prior tests
  // let depthRatio = this.getDepth()['maxDepth'] / this.getDepth()['minDepth'];

  //rebalance if (maxDepth / minDepth) > 2
  // if ( depthRatio > 2) {
  //   this.rebalance();
  // }

  if (insertedValue < this.value && this.left === null) {
    this.left = BinarySearchTree(insertedValue);
    this.left.parent = this;
    this.left.depth = this.depth + 1;
    return;

  } else if (this.left !== null && insertedValue < this.value) {
    this.left.insert(insertedValue);

  } else if (insertedValue > this.value && this.right === null) {
    this.right = BinarySearchTree(insertedValue);
    this.right.parent = this;
    this.right.depth = this.depth + 1;
    return;

  } else if (this.right !== null && insertedValue > this.value) {
    this.right.insert(insertedValue);
  }
};

binarySearchTreeMethods.contains = function(target) {
  let result = false;
  let thisNode = this;

  let recursor = function(node) {
    thisNode.operations.count++;
    if (node.value === target) {
      result = true;
      return;
    }
    if (node.left === null && node.right === null) {
      return;
    }
    if (node.left !== null && target < thisNode.value) {
      recursor(node.left);
    }
    if (node.right !== null && target > thisNode.value) {
      recursor(node.right);
    }
  };
  recursor(thisNode);

  return result;
};

binarySearchTreeMethods.depthFirstLog = function (fn) {
  let recursor = function(node) {
    fn(node.value);
    if (node.left === null && node.right === null) {
      return;
    }
    if (node.left !== null) {
      recursor(node.left);
    }
    if (node.right !== null) {
      recursor(node.right);
    }
  };
  recursor(this);
};

binarySearchTreeMethods.getDepth = function () {
  let depths = [];
  if (this.left === null || this.right === null) {
    depths.push(this.depth); //should always be 1
  }
  let recursor = function(node) {
    if (node.left === null && node.right === null) {
      depths.push(node.depth);
      return;
    }
    if (node.left !== null) {
      recursor(node.left);
    }
    if (node.right !== null) {
      recursor(node.right);
    }
  };
  recursor(this);

  return {minDepth: Math.min.apply(null, depths), maxDepth: Math.max.apply(null, depths)}; //passing in depths array for math.max
};

binarySearchTreeMethods.operations = {
  count: 0
};

binarySearchTreeMethods.breadthFirstLog = function() {
  let result = [];
  let storage = [];
  let secondStorage = [];

  let levelRecursor = function (nodes) {

    nodes.forEach(function(node) {
      result.push(node.value);
      if (node.left !== null) {
        secondStorage.push(node.left);
      }
      if (node.right !== null) {
        secondStorage.push(node.right);
      }
    });
    storage = [];

    secondStorage.forEach(function(node) {
      result.push(node.value);
      if (node.left !== null) {
        storage.push(node.left);
      }
      if (node.right !== null) {
        storage.push(node.right);
      }
    });
    secondStorage = [];

    if (storage.length === 0) {
      return;
    }
    levelRecursor(storage);
  };

  storage.push(this);
  levelRecursor(storage);
  return result;
};

binarySearchTreeMethods.rebalance = function() {
  let nodeValues = [];
  let greaterThanRoot = [];
  let lessThanRoot = [];

  //push all values from tree to array
  this.depthFirstLog(function(nodeValue) {
    nodeValues.push(nodeValue);
  });
  //sort all values ascending
  nodeValues.sort(function(a, b) {
    return a - b;
  });
  //get halfway value, length of array / 2 floor = index
  let medianValueIndex = Math.floor((nodeValues.length - 1) / 2);
  //the number at this index is the starting 'root' node
  //splice it out of nodeValues array
  let rootValue = nodeValues.splice(medianValueIndex, 1)[0];
  //iterate over nodeValues array, forEach, inserting on root node.
  //reset this to starting node
  console.log(this);
  this.value = rootValue;
  this.left = null;
  this.right = null;
  this.depth = 1;
  this.parent = null;
  console.log(this);

  //this code below is essentially deciding what shape we want to rebalance into
  nodeValues.forEach(function(value) {
    if (value < rootValue) {
      lessThanRoot.push(value);
    }
    if (value > rootValue) {
      greaterThanRoot.push(value);
    }
  });
  //lessThanRoot => [0,1,2,3,4,5,6,7,8,9]
  //greaterThanRoot => [11,12,13,14,15,16,17,18,19,20]
  //get halfway point of lessThan
  //insert on root
  //get halfway point of greaterThan
  //insert on root

  //if 'i' is even,
  //insert greaterThanRoot[ Math.floor(greaterThanRoot.length / 4) ]
  //insert lessThanRoot[ Math.floor(lessThanRoot.length / 4) ]

  //if 'i' is odd,
  //insert greaterThanRoot[ Math.floor(greaterThanRoot.length * 3/4)]
  //insert lessThanRoot[ Math.floor(greaterThanRoot.length * 3/4)]

  lessThanRoot.sort(function(a, b) {
    return b - a;
  });

  let lessThanInsertOrder = [];
  let greaterThanInsertOrder = [];

  lessThanInsertOrder.push(lessThanRoot[Math.floor((lessThanRoot.length - 1) / 2)]);
  lessThanRoot.splice(Math.floor((lessThanRoot.length - 1) / 2), 1);

  greaterThanInsertOrder.push(greaterThanRoot[Math.floor((greaterThanRoot.length - 1) / 2)]);
  greaterThanRoot.splice(Math.floor((greaterThanRoot.length - 1) / 2), 1);

  let lessThanLength = lessThanRoot.length;
  let greaterThanLength = greaterThanRoot.length;

  for (let i = 0; i < lessThanLength; i ++) {
    if (i % 2 === 0) {
      lessThanInsertOrder.push(lessThanRoot[ Math.floor((lessThanRoot.length - 1) / 4) ]);
      lessThanRoot.splice(Math.floor((lessThanRoot.length - 1) / 4), 1);
    }
    if (i % 2 === 1) {
      lessThanInsertOrder.push(lessThanRoot[ Math.floor((lessThanRoot.length - 1) * (3 / 4)) ]);
      lessThanRoot.splice(Math.floor((lessThanRoot.length - 1) * (3 / 4)), 1);
    }
  }
  for (let i = 0; i < greaterThanLength; i ++) {
    if (i % 2 === 0) {
      greaterThanInsertOrder.push(greaterThanRoot[ Math.floor((greaterThanRoot.length - 1) / 4) ]);
      greaterThanRoot.splice(Math.floor((greaterThanRoot.length - 1) / 4), 1);
    }
    if (i % 2 === 1) {
      greaterThanInsertOrder.push(greaterThanRoot[ Math.floor((greaterThanRoot.length - 1) * (3 / 4)) ]);
      greaterThanRoot.splice(Math.floor((greaterThanRoot.length - 1) * (3 / 4)), 1);
    }
  }
  // let newThis = this;

  // //this works! using bind chained to end of callback
  // greaterThanInsertOrder.forEach(function(num) {
  //   this.insert(num);
  // }.bind(this));

  //this works,
  greaterThanInsertOrder.forEach(function(num) {
    this.insert(num);
  }, this); //location of the 'this' arg in forEach API, it's the argument slot after the callback...

  lessThanInsertOrder.forEach(function(num) {
    this.insert(num);
  }, this);

  return this;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
let binarySearchTree = BinarySearchTree(10);
binarySearchTree.insert(9);
binarySearchTree.insert(8);
binarySearchTree.insert(7);
binarySearchTree.insert(6);
binarySearchTree.insert(5);
binarySearchTree.insert(4);
binarySearchTree.insert(3);
binarySearchTree.insert(2);
binarySearchTree.insert(1);
binarySearchTree.insert(0);
// binarySearchTree.insert(11);
// binarySearchTree.insert(12);
// binarySearchTree.insert(13);
// binarySearchTree.insert(14);
// binarySearchTree.insert(15);
// binarySearchTree.insert(16);
// binarySearchTree.insert(17);
// binarySearchTree.insert(18);
// binarySearchTree.insert(19);
// binarySearchTree.insert(20);

// binarySearchTree.rebalance();
