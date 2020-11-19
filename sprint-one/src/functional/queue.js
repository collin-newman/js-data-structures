var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    if (size === 0) {
      storage[0] = value;
      size++;
    } else {
      for (let i = size; i > 0; i--) {
        storage[i] = storage[i - 1];
      }
      storage[0] = value;
      size++;
    }
  };

  someInstance.dequeue = function() {
    if (size !== 0) {
      let head = storage[size - 1];
      delete head;
      size--;
      return head;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
