class Set {
  constructor () {
    this.dataStore = [];
  }
  add (data) {
    if (this.dataStore.indexOf(data) === -1) {
      this.dataStore.push(data);
      return true;
    } else {
      return false;
    }
  }
  remove (data) {
    let index = this.dataStore.indexOf(data);
    if (index === -1) {
      return false;
    }
    this.dataStore.splice(index, 1);
    return true;
  }
  contains (data) {
    return this.dataStore.indexOf(data) > -1;
  }
  size () {
    return this.dataStore.length;
  }
  union (set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i ++) {
      tempSet.add(this.dataStore[i]);
    }
    for (let i = 0; i < set.dataStore.length; i ++) {
      if (!tempSet.contains(set.dataStore[i])) {
        tempSet.add(set.dataStore[i])
      }
    }
    return tempSet;
  }
  intersect (set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i ++) {
      if (set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i])
      }
    }
    return tempSet;
  }
  subset (set) {
    if (this.size() > set.size()) {
      return false;
    }
    for (let i = 0; i < this.dataStore.length; i ++) {
      if (!set.contains(this.dataStore[i])) {
        return false;
      }
    }
    return true;
  }
  diffrence (set) {
    let tempSet = new Set();
    for (let i = 0; i < this.dataStore.length; i ++) {
      if (!set.contains(this.dataStore[i])) {
        tempSet.add(this.dataStore[i])
      }
    }
    return tempSet;
  }
  show () {
    return this.dataStore;
  }
}

module.exports = Set;

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
  console.log("Mike added")
}
else {
  console.log("Can't add Mike, must already be in set");
}
console.log(names.show());
var removed = "Mike";
if (names.remove(removed)) {
  console.log(removed + " removed.");
}
else {
  console.log(removed + " not removed.");
}
names.add("Clayton");
console.log(names.show());
removed = "Alisa";
if (names.remove("Mike")) {
  console.log(removed + " removed.");
}
else {
  console.log(removed + " not removed.");
}