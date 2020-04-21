class Node {
  constructor (element) {
    this.element = element;
    this.next = null;
  }
}
class Set {
  constructor () {
    this.head = new Node('head');
  }
  add (data) {
    if (this.contains(data)) {
      return false;
    }
    let head = this.head;
    let node = new Node(data);
    node.next = head.next;
    head.next = node;
    return true;
  }
  remove (data) {
    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.element === data) {
        curNode.next = curNode.next.next;
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  }
  contains (data) {
    let curNode = this.head;
    while (curNode.next) {
      if (curNode.next.element === data) {
        return true;
      }
      curNode = curNode.next;
    }
    return false;
  }
  size () {
    let curNode = this.head;
    let num = 0;
    while (curNode.next) {
      num ++;
      curNode = curNode.next;
    }
    return num;
  }
  union (set) {
    let tempSet = new Set();
    let curNode = this.head;
    for (let i = 0; i < this.size(); i ++) {
      tempSet.add(curNode.next.element);
      curNode = curNode.next;
    }
    curNode = set.head;
    for (let i = 0; i < set.size(); i ++) {
      if (!tempSet.contains(curNode.next.element)) {
        tempSet.add(curNode.next.element)
      }
      curNode = curNode.next;
    }
    return tempSet;
  }
  intersect (set) {
    let tempSet = new Set();
    let curNode = this.head;
    for (let i = 0; i < this.size(); i ++) {
      if (set.contains(curNode.next.element)) {
        tempSet.add(curNode.next.element)
      }
      curNode = curNode.next;
    }
    return tempSet;
  }
  subset (set) {
    if (this.size() > set.size()) {
      return false;
    }
    let curNode = this.head;
    for (let i = 0; i < this.size(); i ++) {
      if (!set.contains(curNode.next.element)) {
        return false;
      }
      curNode = curNode.next;
    }
    return true;
  }
  difference (set) {
    let tempSet = new Set();
    let curNode = this.head;
    for (let i = 0; i < this.size(); i ++) {
      if (!set.contains(curNode.next.element)) {
        tempSet.add(curNode.next.element)
      }
      curNode = curNode.next;
    }
    return tempSet;
  }
  show () {
    let curNode = this.head;
    let str = 'head -> ';
    while (curNode.next) {
      str += curNode.next.element + ' -> ';
      curNode = curNode.next;
    }
    str += 'null';
    return str;
  }
}

module.exports = Set;

// var names = new Set();
// names.add("David");
// names.add("Jennifer");
// names.add("Cynthia");
// names.add("Mike");
// names.add("Raymond");
// if (names.add("Mike")) {
//   console.log("Mike added")
// }
// else {
//   console.log("Can't add Mike, must already be in set");
// }
// console.log(names.show());
// var removed = "Mike";
// if (names.remove(removed)) {
//   console.log(removed + " removed.");
// }
// else {
//   console.log(removed + " not removed.");
// }
// names.add("Clayton");
// console.log(names.show());
// removed = "Alisa";
// if (names.remove("Mike")) {
//   console.log(removed + " removed.");
// }
// else {
//   console.log(removed + " not removed.");
// }


// 并集校验
// var cis = new Set();
// cis.add("Mike");
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Raymond");
// var dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Jonathan");
// var it = new Set();
// it = cis.union(dmp);
// console.log(it.show());


// 交集校验
// var cis = new Set();
// cis.add("Mike");
// cis.add("Clayton");
// cis.add("Jennifer");
// cis.add("Raymond");
// var dmp = new Set();
// dmp.add("Raymond");
// dmp.add("Cynthia");
// dmp.add("Bryan");
// var inter = cis.intersect(dmp);
// console.log(inter.show()); //显示Raymond


// 子集校验
// var it = new Set();
// it.add("Cynthia");
// it.add("Clayton");
// it.add("Jennifer");
// it.add("Danny");
// it.add("Jonathan");
// it.add("Terrill");
// it.add("Raymond");
// it.add("Mike");
// var dmp = new Set();
// dmp.add("Cynthia");
// dmp.add("Raymond");
// dmp.add("Jonathan");
// if (dmp.subset(it)) {
//   console.log("DMP is a subset of IT.");
// }
// else {
//   console.log("DMP is not a subset of IT.");
// }


// 差集校验
var cis = new Set();
var it = new Set();
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Danny");
it.add("Bryan");
it.add("Clayton");
it.add("Jennifer");
var diff = new Set();
diff = cis.difference(it);
console.log("[" + cis.show() + "] difference [" + it.show()
      + "] -＞ [" + diff.show() + "]");