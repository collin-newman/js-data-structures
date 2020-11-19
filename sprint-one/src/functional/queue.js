var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let counter = 0;
  let removalCounter = 0;

  someInstance.enqueue = function(value) {
    //get an array of the keys in storage, find the maximum number, than add 1, and use that as the new key when storing value
    let lastInLine = Math.max.apply(null, Object.keys(storage));
    storage[lastInLine + 1] = value;

    storage[counter] = value;
    counter += 1;

    return value;
  };

  someInstance.dequeue = function() {
    //get the keys in storage
    let popped = storage[removalCounter];
    removalCounter += 1;

    return popped;
  };
  //find the smallest key and make that "firstInLine"
  //delete storage[firstInLine]


  someInstance.size = function() {
    // Math.max(0, Object.keys(storage).length - 1);
    return counter - removalCounter < 0 ? 0 : counter - removalCounter;
  };
  return someInstance;
};
