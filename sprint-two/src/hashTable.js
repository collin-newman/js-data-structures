var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.operations = 0;
  this.bucketCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, []);
    this.bucketCount++;
  }
  for (let i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = v;
      return;
    }
  }
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (Array.isArray(this._storage.get(index))) {
    for (let i = 0; i < this._storage.get(index).length; i++) {
      this.operations ++;
      if (this._storage.get(index)[i].includes(k)) {
        return this._storage.get(index)[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, []);
  }
  for (let i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
      return;
    }
  }
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.grow = function () {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


