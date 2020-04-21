let List = require('./list');

/**
 * 1．增加一个向列表中插入元素的方法
 * 该方法只在待插元素大于列表中的所有元素时才执行插入操作
 * 这里的大于有多重含义，对于数字，它是指数值上的大小；
 * 对于字母，它是指在字母表中出现的先后顺序。
 */

List.prototype.insertBig = function (element, after) {
  let index = this.find(after);
  let type = typeof(element);
  if (index > -1) {
    for (this.front(); this.hasNext(); this.next()) {
      let ele = this.getElement();
      if (typeof ele == 'number' && type == 'number') {
        if (element > ele) {
          continue;
        }
        return false;
      } else {
        if (element.charCodeAt(0) > ele.charCodeAt(0)) {
          continue;
        }
        return false;
      }
    }
    this.insert(element, after);
    return true;
  }
  return false;
}


/**
 * 2．增加一个向列表中插入元素的方法，
 * 该方法只在待插元素小于列表中的所有元素时才执行插入操作。
 */

List.prototype.insertSmall = function (element, after) {
  let index = this.find(after);
  let type = typeof(element);
  if (index > -1) {
    for (this.front(); this.hasNext(); this.next()) {
      let ele = this.getElement();
      if (typeof ele == 'number' && type == 'number') {
        if (element < ele) {
          continue;
        }
        return false;
      } else {
        if (element.charCodeAt(0) < ele.charCodeAt(0)) {
          continue;
        }
        return false;
      }
    }
    this.insert(element, after);
    return true;
  }
  return false;
}


/**
 * 3．创建Person类，该类用于保存人的姓名和性别信息。
 * 创建一个至少包含10个Person对象的列表。
 * 写一个函数显示列表中所有拥有相同性别的人。
 */

 class Person {
   constructor (name, sex) {
     this.name = name;
     this.sex = sex;
   }
 }
 let list = new List();
 for (let i = 0; i < 10; i ++) {
   let sex = Math.random() > 0.5 ? 'male' : 'female';
   list.append(new Person(`John${i}`, sex));
 }

 function findSameSex (list, sex) {
   let arr = [];
   for(list.front(); list.hasNext(); list.next()) {
    arr.push(list.getElement());
   }
   return arr.filter(person => person.sex == sex);
 }

 console.log(findSameSex(list, 'male'));
 console.log(findSameSex(list, 'female'));


 /**
  * 4．修改本章的影碟租赁程序，
  * 当一部影片检出后，将其加入一个已租影片列表。
  * 每当有客户检出一部影片，都显示该列表中的内容。
  * 详情见 3.5.4.js
  */
