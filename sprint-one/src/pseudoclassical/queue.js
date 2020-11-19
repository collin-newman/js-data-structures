var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
  this.removalCounter = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.counter] = value;
  this.counter += 1;
  return value;
};

Queue.prototype.dequeue = function () {
  let popped = this.storage[this.removalCounter];
  delete this.storage[this.removalCounter];

  this.removalCounter += 1;
  return popped;
};

Queue.prototype.size = function () {
  return this.counter - this.removalCounter < 0 ? 0 : this.counter - this.removalCounter;
};

