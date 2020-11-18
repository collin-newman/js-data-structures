var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.storage = {};
};

Stack.prototype.size = function () {
  return this.counter;
};

Stack.prototype.push = function (value) {
  this.storage[this.counter] = value;
  this.counter += 1;
  return value;
};

Stack.prototype.pop = function () {
  let popped = this.storage[this.counter - 1];
  delete this.storage[this.counter - 1 ];
  this.counter === 0 ? null : this.counter -= 1;
  return popped;
};