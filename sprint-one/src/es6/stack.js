class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.counter = 0;
    this.storage = {};
  }
  push (value) {
    this.storage[this.counter] = value;
    this.counter += 1;
    return value;
  }

  pop () {
    let popped = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter === 0 ? null : this.counter -= 1;
    return popped;
  }

  size () {
    return this.counter;
  }

}