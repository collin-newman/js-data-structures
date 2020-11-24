var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value, this.value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  //looks a lot like getElementsByClassName
  let result = false;
  let recursor = function(nodeChildren) {
    nodeChildren.forEach(function(child) {
      if (child.value === target) {
        result = true;
      } else {
        recursor(child.children);
      }
    });
  };
  recursor(this.children);

  return result;
};

treeMethods.removeFromParent = function() {
  //store 'this' in variable
  let removedTree = this;
  //get index of child from parent.children
  let splicingIndex = _.indexOf(this.parent.children, this);
  //splice out @ this index
  this.parent.children.splice(splicingIndex, 1);
  //new tree.parent = null
  removedTree.parent = null;
  //return new tree
  return removedTree;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
