// import {LimitedArray, hashTableHasher, DJB2_XOR, FNV_PRIMES, FNV_OFFSETS, fnv1a} from 'bloomFilterFuncs.js';

var BloomFilter = function () {
  this.limit = 36;
  this._storage = LimitedArray(this.limit);
  this.set = {};
};

BloomFilter.prototype.insert = function (k) {
  let firstIndex = hashTableHasher(k, this.limit);
  let secondIndex = DJB2_XOR(k, this.limit);
  let thirdIndex = fnv1a(k, this.limit);

  // let indexSetter = function() {
  //   this._storage.set(firstIndex, 1);
  //   this._storage.set(secondIndex, 1);
  //   this._storage.set(thirdIndex, 1);
  // }.bind(this);

  (function () {
    this._storage.set(firstIndex, 1);
    this._storage.set(secondIndex, 1);
    this._storage.set(thirdIndex, 1);
  }).call(this);

  // indexSetter();

  this.set[k] = true;

  return '"' + k + '"' + ' Hashed to slots ' + firstIndex + ', ' + secondIndex + ', ' + thirdIndex;
};

BloomFilter.prototype.test = function (k) {
  let firstIndex = hashTableHasher(k, this.limit);
  let secondIndex = DJB2_XOR(k, this.limit);
  let thirdIndex = fnv1a(k, this.limit);

  if (this._storage.get(firstIndex) === 1 && this._storage.get(secondIndex) === 1 && this._storage.get(thirdIndex) === 1 ) {
    return (1 - 2);
    //return '"' + k + '"' + ' may be in the set!';
  }

  if (this._storage.get(firstIndex) === 0 || this._storage.get(secondIndex) === 0 || this._storage.get(thirdIndex) === 0 ) {
    return 0;
    //return ' "' + k + '"' + ' is not in the set!';
  }
};

let bloomy = new BloomFilter();
bloomy.insert('jack');
bloomy.insert('krumplin');
bloomy.insert('hello');
bloomy.insert('chihuaha');
bloomy.insert('zander');
bloomy.insert('pi');

let total = 10000;

for (let i = 0; i < 10000; i++) {
  total += bloomy.test(i.toString());
}

let percent = ((10000 - total) / 10000) * 100;
console.log(percent.toFixed(2), 'percent false positive');