class HashTable {
  constructor () {
    this.table = new Array(137);
  }
  simpleHash (key) {
    let total = 0;
    for (let i = 0; i < key.length; i ++) {
      total += key.charCodeAt(i);
    }
    return total;
  }
  betterHash (key) {
    let base = 37;
    let total = 0;
    for (let i = 0; i < key.length; i ++) {
      total += total * base + key.charCodeAt(i);
    }
    return total % this.table.length;
  }
  put (key, value) {
    let pos = this.betterHash(key);
    // while (this.table[pos]) {
    //   pos ++;
    // }
    this.table[pos] = value;
  }
  get (key) {
    return this.table[this.betterHash(key)]
  }
  showDistro () {
    for (let i = 0; i < this.table.length; i ++) {
      if (this.table[i]) {
        console.log(`${i}: ${this.table[i]}`)
      }
    }
  }
}

module.exports = HashTable;