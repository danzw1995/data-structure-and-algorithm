class Deque {
  constructor () {
    this.dataStore = [];
  }
  length () {
    return this.dataStore.length;
  }
  empty () {
    return this.dataStore.length === 0;
  }
  pushBack (element) {
    this.dataStore.push(element);
  }
  pushFront (element) {
    this.dataStore.unshift(element);
  }
  popBack () {
    return this.dataStore.pop();
  }
  popFront () {
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

let queue = new Deque();

console.log(queue.empty());

queue.pushFront('hello');
queue.pushFront('world');
queue.pushBack('html');
queue.pushBack('js');
console.log(queue)

queue.popBack();
queue.popBack();

module.exports = Deque;