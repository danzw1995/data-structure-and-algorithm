class PriorityQueue {
  constructor () {
    this.dataStore = [];
  }
  length () {
    return this.dataStore.length;
  }
  empty () {
    return this.dataStore.length === 0;
  }
  enqueue (element) {
    this.dataStore.push(element);
  }
  dequeue () {
    let index = 0;
    for (let i = 1; i < this.dataStore.length; i ++) {
      if (this.dataStore[index].code < this.dataStore[i].code) {
        index = i;
      }
    }
    return this.dataStore.splice(index, 1);
  }
  front () {
    return this.dataStore[0];
  }
  back () {
    return this.dataStore[this.dataStore.length - 1];
  }
  clear () {
    this.dataStore = [];
  }
  toString () {
    let result = '';
    for (let i = 0; i < this.dataStore.length; i ++) {
      result += this.dataStore[i].name + ' code: ' + this.dataStore[i].code + '\n';
    }
    return result;
  }
}

// module.exports = PriorityQueue;