class Stack {
  constructor() {
    this.storage = {};
    this.storageSize = 0;
  }

  push(value) {
    if (this.storageSize === 0) {
      this.storage[0] = value;
      this.storageSize++;
    } else {
      this.storage[this.storageSize] = value;
      this.storageSize++;
    }
  }

  pop() {
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