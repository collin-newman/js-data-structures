class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.counter = 0;
    this.removalCounter = 0;
  }

  enqueue (value) {
    this.storage[this.counter] = value;
    this.counter += 1;
    return value;
  }

  dequeue () {
    let popped = this.storage[this.removalCounter];
    delete this.storage[this.removalCounter];
    this.removalCounter += 1;
    return popped;
  }

  size () {
    return this.counter - this.removalCounter < 0 ? 0 : this.counter - this.removalCounter;
  }

}
