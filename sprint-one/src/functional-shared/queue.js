var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {};

  instance.counter = 0;
  instance.removalCounter = 0;
  instance.storage = {};

  _.extend(instance, queueMethods);

  return instance;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter += 1;
  return value;
};

queueMethods.dequeue = function () {
  let popped = this.storage[this.removalCounter];
  delete this.storage[this.removalCounter];
  this.removalCounter += 1;

  return popped;
};

queueMethods.size = function () {
  return this.counter - this.removalCounter < 0 ? 0 : this.counter - this.removalCounter;
};


