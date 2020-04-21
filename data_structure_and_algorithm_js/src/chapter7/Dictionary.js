class Dictionary {
  constructor () {
    this.dataStore = [];
  }
  add (key, value) {
    this.dataStore[key] = value;
  }
  find (key) {
    return this.dataStore[key];
  }
  remove (key) {
    delete this.dataStore[key];
  }
  showAll () {
    Object.keys(this.dataStore).forEach(key => {
      console.log(`${key} -> ${this.dataStore[key]}`)
    })
  }
  count () {
    return Object.keys(this.dataStore).length;
  }
  clear () {
    this.dataStore = [];
  }

}

module.exports = Dictionary;