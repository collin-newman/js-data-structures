var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this.operations = 0;
  this.bucketCount = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if ( this.bucketCount / this._limit > .62 ) {

    this.bucketCount = 0;
    //store oldLimit
    let oldLimit = this._limit;
    //store oldStorage
    let oldStorage = this._storage;
    //double limit -
    this._limit = this._limit * 2;
    //create new limited array w/new limit
    this._storage = LimitedArray(this._limit);

    let originalThis = this;
    //iterate thru previous storage up to previous storage size
    this.reHash.call(this, oldLimit, oldStorage);
  }
  //reset the index based on new limit size
  index = getIndexBelowMaxForKey(k, this._limit);

  if (!Array.isArray(this._storage.get(index))) {
    this._storage.set(index, []);
    this.bucketCount++;
    // console.log('ratio', this.bucketCount / this._limit);
  }

  for (let i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index)[i][1] = v;
      return;
    }
  }
  this._storage.get(index).push([k, v]);
};

HashTable.prototype.reHash = function(limit, storage) {
  let newThis = this;
  for (let i = 0; i < limit; i++) {
    if (storage.get(i) === undefined) {
      continue;
    }
    if (Array.isArray(Array.from(storage.get(i)))) {
      let bucket = Array.from(storage.get(i));
      bucket.forEach(function(item) {
        newThis.insert(item[0], item[1]);
      });
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // console.log('index', index);
  if (this._storage.get(index) === undefined) {
    return;
  }
  let bucket = Array.from(this._storage.get(index));
  if (Array.isArray(bucket)) {
    for (let i = 0; i < bucket.length; i++) {
      this.operations ++;
      if (bucket[i].includes(k)) {
        return bucket[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  if (this._storage.get(index) === undefined) {
    return;
  }

  let bucket = this._storage.get(index);

  for (let i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      this._storage.get(index).splice(i, 1);
      if (this._storage.get(index).length === 0) {
        this._storage.set(index, undefined);
        this.bucketCount -= 1;
      }
      break;
    }
  }

  if ( this.bucketCount / this._limit < .25 ) {
    this.bucketCount = 0;
    //take snapshot of storage
    let oldStorage = this._storage;
    let oldLimit = this._limit;
    //set new storage limit to 1/2
    this._limit = this._limit * .5;
    this._storage = LimitedArray(this._limit);
    //create new storage
    //pass oldstorage and old limit into rehash method
    this.reHash(oldLimit, oldStorage);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


let hash = new HashTable();

hash.insert('chris', 30);
hash.insert('christopher', 30);
hash.insert('thristy', 30);
hash.insert('c', 30);
hash.insert('p', 30);
hash.insert('z', 30);
hash.insert('abc', 30);
hash.insert('efghijklmnopppqwop', 30);
hash.insert('tex', 30);
hash.insert('palzz', 30);
hash.insert('thomas', 30);


let smallHash = new HashTable();
smallHash.insert('chris', 30);
smallHash.insert('christopher', 30);
smallHash.insert('thristy', 30);
smallHash.insert('c', 30);
smallHash.insert('p', 30);
smallHash.insert('z', 30);
smallHash.insert('abc', 30);
smallHash.insert('efghijklmnopppqwop', 30);
smallHash.insert('tex', 30);
smallHash.insert('palzz', 30);
smallHash.insert('thomas', 30);