var Queue = function() {
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.storageSize = 0;
  return instance;
};

var queueMethods = {
  enqueue: function(value) {
    if (this.storageSize === 0) {
      this.storage[0] = value;
      this.storageSize++;
    } else {
      for (let i = this.storageSize; i > 0; i--) {
        this.storage[this.storageSize] = this.storage[this.storageSize - 1];
      }
      this.storage[0] = value;
      this.storageSize++;
    }
  },
  dequeue: function() {
    if (this.storageSize !== 0) {
      let head = this.storage[this.storageSize - 1];
      delete head;
      this.storageSize--;
      return head;
    }
  },
  size: function() {
    return this.storageSize;
  }
};

