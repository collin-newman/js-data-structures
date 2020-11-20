var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let child = Tree(value);
  this.children.push(child);
  //we want to set value = Tree() when we make a child, and add that to newTree.children array
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
