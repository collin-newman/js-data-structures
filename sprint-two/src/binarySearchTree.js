var BinarySearchTree = function(value) {
  let instance = {};

  instance.value = value;
  instance.left = null;
  instance.right = null;
  instance.searched = false;

  _.extend(instance, binarySearchTreeMethods);
  return instance;
};

let binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function (insertedValue) {
  if (insertedValue < this.value && this.left === null) {
    this.left = BinarySearchTree(insertedValue);
    return;
  } else if (this.left !== null && insertedValue < this.value) {
    this.left.insert(insertedValue);
  } else if (insertedValue > this.value && this.right === null) {
    this.right = BinarySearchTree(insertedValue);
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

binarySearchTreeMethods.operations = {
  count: 0
};

binarySearchTreeMethods.breadthFirstLog = function() {
  let result = [];
  let storage = [];
  let secondStorage = [];

  storage.push(this);

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

    //iterate over the array, pushing to result each iteration
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

  levelRecursor(storage);

  return result;
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
