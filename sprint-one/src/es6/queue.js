class Queue {
  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }

  enqueue(value) {
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
  }

  dequeue() {
    if (this.storageSize !== 0) {
      let head = this.storage[this.storageSize - 1];
      delete this.storage[this.storageSize - 1];
      this.storageSize--;
      return head;
    }
  }

  size() {
    return this.storageSize;
  }

}