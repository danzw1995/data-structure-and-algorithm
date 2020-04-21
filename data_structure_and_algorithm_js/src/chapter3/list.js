class List {
  constructor () {
    this.dataStore = [];
    this.pos = 0;
    this.listSize = 0;
  }
  length () {
    return this.listSize;
  }
  append (element) {
    this.dataStore[this.listSize++] = element;
  }
  remove (element) {
    let index = this.find(element);
    if (index > -1) {
      this.dataStore.splice(index, 1);
      this.listSize --;
      return true;
    }
    return false;
  }
  insert (element, after) {
    let index = this.find(after);
    if (index > -1) {
      this.dataStore.splice(index, 0, element);
      this.listSize ++;
      return true;
    }
    return false;
  }
  clear () {
    this.dataStore = [];
    this.listSize = this.pos = 0;
  }
  contains (element) {
    let index = this.find(element);
    return index > -1;
  }
  front () {
    this.pos = 0;
  }
  end () {
    this.pos = this.listSize - 1;
  }
  prev () {
    this.pos --;
  }
  gen () {
    for (this.front(); this.hasNext(); this.next()) {
      console.log(this.getElement());
    }
  }
  next () {
    if (this.pos < this.listSize) {
      this.pos ++;
    }
  }
  currPos () {
    return this.pos;
  }
  moveTo (pos) {
    this.pos = pos;
  }
  getElement () {
    return this.dataStore[this.pos];
  }
  hasNext () {
    return this.pos < this.listSize;
  }
  hasPrev () {
    return this.pos >= 0;
  }
  toString () {
    return this.dataStore;
  }
  find (element) {
    let index = this.dataStore.findIndex(ele => ele == element);
    return index;
  }
}

module.exports = List;
