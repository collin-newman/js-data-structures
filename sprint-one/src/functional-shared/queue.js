var Queue = function() {
  let instance = {};
  instance.storage = {};
  instance.storageSize = 0;

  extend(instance, queueMethods);
  return instance;
};

var extend = function(obj, objMethods) {
  for (let key in objMethods) {
    obj[key] = objMethods[key];
  }
};

var queueMethods = {
  enqueue: function(value) {
    if (this.storageSize === 0) {
      this.storage[0] = value;
      this.storageSize++;
    } else {
      for (let i = this.storageSize; i > 0; i--) {
        this.storage[i] = this.storage[i - 1];
      }
      this.storage[0] = value;
      this.storageSize++;
    }
  },
  dequeue: function() {
    if (this.storageSize !== 0) {
      let tail = this.storage[this.storageSize - 1];
      delete tail;
      this.storageSize--;
      return tail;
    }
  },
  size: function() {
    return this.storageSize;
  }
};


