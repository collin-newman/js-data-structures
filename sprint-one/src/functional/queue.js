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
    console.log(storage);
    return value;
  };

  someInstance.dequeue = function() {


    let keys = Object.keys(storage);
    let firstInLine = Math.min.apply(null, keys);

    console.log('keys', keys, 'firstInLine', firstInLine);


    let returner = storage[firstInLine];
    delete storage[firstInLine];

    console.log('storage', storage);

    counter === 0 ? null : counter -= 1;

    return returner;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
