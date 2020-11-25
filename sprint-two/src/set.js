var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this.storage[item] === undefined) {
    this.storage[typeof item === 'object' ? JSON.stringify(item) : item.toString()] = true;
  } else {
    return 'item already in set!';
  }
};

setPrototype.contains = function(item) {
  return this.storage[typeof item === 'object' ? JSON.stringify(item) : item.toString()] !== undefined ? true : false;
};

setPrototype.remove = function(item) {
  if (this.storage[typeof item === 'object' ? JSON.stringify(item) : item.toString()] === true) {
    delete this.storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
