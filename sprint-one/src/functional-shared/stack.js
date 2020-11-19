var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  let instance = {};

  instance.counter = 0;
  instance.storage = {};

  _.extend(instance, stackMethods);

  return instance;
};

var stackMethods = {};

stackMethods.size = function () {
  return this.counter;
};

stackMethods.push = function (value) {
  this.storage[this.counter] = value;
  this.counter += 1;
  return value;
};

stackMethods.pop = function () {
  let popped = this.storage[this.counter - 1 ];

  delete this.storage[this.counter - 1];

  this.counter === 0 ? null : this.counter -= 1;
  return popped;
};


