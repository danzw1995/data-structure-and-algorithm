class Stack {
  constructor () {
    this.dataStore = [];
    this.top = 0;
  }
  push (element) {
    this.dataStore[this.top ++] = element;
  }
  pop () {
    return this.dataStore[--this.top];
  }
  top () {
    return this.dataStore[this.top - 1];
  }
  length () {
    return this.top;
  }
  isEmpty () {
    return this.length() == 0;
  }
  clear () {
    this.top = 0;
  }
  toString () {
    return this.dataStore;
  }
}

module.exports = Stack;