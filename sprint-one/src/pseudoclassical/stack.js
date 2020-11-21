var Stack = function() {
  this.storage = {};
  this.storageSize = 0;
};

Stack.prototype.push = function(value) {
  if (this.storageSize === 0) {
    this.storage[0] = value;
    this.storageSize++;
  } else {
    this.storage[this.storageSize] = value;
    this.storageSize++;
  }
};

Stack.prototype.pop = function() {
  if (this.storageSize !== 0) {
    let head = this.storage[this.storageSize - 1];
    delete head;
    this.storageSize--;
    return head;
  }
};

Stack.prototype.size = function() {
  return this.storageSize;
};

