
//first hash function
var hashTableHasher = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

//djb2 hash function (#2)
let DJB2_XOR = function(str, max) {
  let len = str.length;
  let h = 5381;

  for (let i = 0; i < len; i++) {
    h = h * 33 ^ str.charCodeAt(i);
  }
  return (h >>> 0) % max;
};

//fnv1a hash function (#3)
const FNV_PRIMES = {
  32: BigInt(16777619),
  64: BigInt(1099511628211),
  128: BigInt(309485009821345068724781371),
  256: BigInt(374144419156711147060143317175368453031918731002211),
  512: BigInt(35835915874844867368919076489095108449946327955754392558399825615420669938882575126094039892345713852759),
  1024: BigInt(501645651011311865543459881103527895503076534540479074430301752383111205510814745150915769222029538271616265187852689524938529229181652437508374691371804094271873160484737966720260389217684476157468082573)
};

const FNV_OFFSETS = {
  32: BigInt(2166136261),
  64: BigInt(14695981039346656037),
  128: BigInt(144066263297769815596495629667062367629),
  256: BigInt(100029257958052580907070968620625704837092796014241193945225284501741471925557),
  512: BigInt(965930312949666949800943540071631046609041874567263789610837432943446265799458293219771643844981305189220653980578449532823934008387619192870158869517785),
  1024: BigInt(1419779506494762106872207064140321832088062279544193396087847491461758272325229673230371772215086409652120235554936562817466910857181476047101506148029755969804077320157692458563003215304957150157403644460363550505412711285966361610267868082893823963790439336411086884584107735010676915)
};

// Legacy implementation for 32-bit + number types
let fnv1a = function (string, max) {
  // Handle Unicode code points > 0x7f
  let hash = Number(FNV_OFFSETS[32]);
  let isUnicoded = false;

  for (let i = 0; i < string.length; i++) {
    let characterCode = string.charCodeAt(i);

    // Non-ASCII characters trigger the Unicode escape logic
    if (characterCode > 0x7F && !isUnicoded) {
      string = unescape(encodeURIComponent(string));
      characterCode = string.charCodeAt(i);
      isUnicoded = true;
    }

    hash ^= characterCode;
    hash += (hash << 1) + (hash << 4) + (hash << 7) + (hash << 8) + (hash << 24);
  }

  return (hash >>> 0) % max;
};

export {hashTableHasher, DJB2_XOR, FNV_PRIMES, FNV_OFFSETS, fnv1a};