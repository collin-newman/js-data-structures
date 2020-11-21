var Tree = function(value, parent = null) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value, this.value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */
