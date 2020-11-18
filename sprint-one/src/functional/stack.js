var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let counter = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter += 1;
    return value;
  };

  someInstance.pop = function() {
    let returner = storage[counter - 1];

    delete storage[counter - 1];
    counter === 0 ? null : counter -= 1;
    return returner;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
