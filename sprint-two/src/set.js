var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.storage[item] === undefined) {
    this.storage[item] = true;
  } else {
    return;
  }
};

setPrototype.contains = function(item) {
  return Object.keys(this.storage).includes(item);
};

setPrototype.remove = function(item) {
  if (this.storage[item] === true) {
    delete this.storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
