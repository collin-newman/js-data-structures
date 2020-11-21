var Stack = function() {
  var instance = Object.create(stackMethods);

  instance.storage = {};
  instance.storageSize = 0;
  return instance;
};

var stackMethods = {
  push: function(value) {
    if (this.storageSize === 0) {
      this.storage[0] = value;
      this.storageSize++;
    } else {
      this.storage[this.storageSize] = value;
      this.storageSize++;
    }
  },
  pop: function() {
    if (this.storageSize !== 0) {
      let tail = this.storage[this.storageSize - 1];
      delete this.storage[this.storageSize - 1];
      this.storageSize--;
      return tail;
    }
  },
  size: function() {
    return this.storageSize;
  }
};

let stack = Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.storage);