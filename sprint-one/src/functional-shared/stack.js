var Stack = function() {
  let instance = {};
  instance.storageSize = 0;
  instance.storage = {};
  extend(instance, stackMethods);
  return instance;
};

var extend = function(obj, objMethods) {
  for (let key in objMethods) {
    obj[key] = objMethods[key];
  }
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
      delete tail;
      this.storageSize--;
      return tail;
    }
  },
  size: function() {
    return this.storageSize;
  }
};

var stack = Stack();
stack.push(1);
console.log(stack.size());
console.log(stack.storage);