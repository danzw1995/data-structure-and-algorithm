/**
 * 1．修改Set类，使里面的元素按顺序存储。
 * 写一段测试代码来测试你的修改。
 */

let Set = require('./Set')
Set.prototype.add = function (data) {
  for (let i = 0; i < this.dataStore.length; i ++) {
    if (compare(this.dataStore[i], data)) {
      if (i === 0) {
        this.dataStore.unshift(data);
      } else {
        this.dataStore.splice(i - 1, 0, data);
      }
      return;
    }
  }
  this.dataStore.push(data);
}

function compare (a, b) {
  if (!a.length) {
    return true;
  }
  if (!b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i ++) {
    if (a.charCodeAt(i) === b.charCodeAt(i)) {
      return compare(a.substring(i), b.substring(i))
    }
    return a.charCodeAt(i) > b.charCodeAt(i);
  }
}

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");

console.log(names);


/**
 * 2．修改Set类，将存储方式从数组替换为链表。
 * 写一段测试代码来测试你的修改。
 * 详情查看Set2.js
 */ 



 /**
  * 3．为Set类增加一个higher(element)方法，
  * 该方法返回比传入元素大的元素中最小的那个。
  * 写一段测试代码来测试这个方法。
  */

Set.prototype.higher = function (element) {
  let index = this.dataStore.findIndex(data => data === element);
  if (index < this.dataStore.length - 1) {
    return this.dataStore[index + 1]
  } else {
    return null;
  }
}


/**
 * 4．为Set类增加一个lower(element)方法，
 * 该方法返回比传入元素小的元素中最大的那个。
 * 写一段测试代码来测试这个方法。
 */

Set.prototype.lower = function (element) {
  let index = this.dataStore.findIndex(data => data === element);
  if (index == 0) {
    return null
  } else {
    return this.dataStore[index - 1];
  }
}

console.log(names)
console.log(names.higher('David'))
console.log(names.lower('Mike'))
