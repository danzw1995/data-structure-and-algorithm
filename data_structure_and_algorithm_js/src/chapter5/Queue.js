class Queue {
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
    return this.dataStore.shift();
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
      result += this.dataStore[i] + '\n';
    }
    return result;
  }
}