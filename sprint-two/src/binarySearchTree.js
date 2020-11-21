var BinarySearchTree = function(value) {
  let instance = {};

  instance.value = value;
  instance.left = null;
  instance.right = null;

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

  let recursor = function(node) {
    if (result) {
      return;
    }
    if (node.value === target) {
      result = true;
      return;
    }
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
/*
 * Complexity: What is the time complexity of the above functions?
 */
