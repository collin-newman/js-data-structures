var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    if (size === 0) {
      storage[0] = value;
      size++;
    } else {
      storage[size] = value;
      size++;
    }
  };

  someInstance.pop = function() {
    if (size !== 0) {
      let tail = storage[size - 1];
      delete tail;
      size--;
      return tail;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};