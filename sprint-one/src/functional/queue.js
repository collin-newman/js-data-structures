var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  let counter = 0;

  someInstance.enqueue = function(value) {
    //get an array of the keys in storage, find the maximum number, than add 1, and use that as the new key when storing value
    let lastInLine = Math.max.apply(null, Object.keys(storage));
    storage[lastInLine + 1] = value;

    storage[counter] = value;
    counter += 1;

    return value;
  };

  someInstance.dequeue = function() {

    if (Object.keys(storage).length === 0) {
      return;
    }

    let keys = Object.keys(storage);
    let firstInLine = Math.min.apply(keys, keys);
    console.log(keys);



    let returner = storage[firstInLine];
    delete storage[firstInLine];



    counter === 0 ? null : counter -= 1;

    return returner;
  };

  someInstance.size = function() {
    return counter;
  };
  return someInstance;
};
