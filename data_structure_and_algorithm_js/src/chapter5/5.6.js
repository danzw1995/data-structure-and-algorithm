
let Deque = require('./Deque');
let PriorityQueue = require('./PriorityQueue');

/**
 * 2．使用前面完成的Deque类来判断一个给定单词是否为回文。
 */

 function isPalindrome (word) {
  let deque = new Deque();
  let deque2 = new Deque();
  let letter1 = '';
  let letter2 = '';
  word.split('').forEach(w => {
    deque.pushFront(w);
    deque2.pushBack(w);
  });
  while (deque.length()) {
    letter1 += deque.popFront();
    letter2 += deque2.popFront();
  }
  return letter1 === letter2;
 }


 /**
  * 3．修改例5-5中的优先队列，使得优先级高的元素优先码也大。
  * 写一段程序测试你的改动。
  */

  class Patient {
    constructor (name, code) {
      this.name = name;
      this.code = code;
    }
  }
  let p = new Patient("Smith",5);
  let ed = new PriorityQueue();
  ed.enqueue(p);
  p = new Patient("Jones", 4);
  ed.enqueue(p);
  p = new Patient("Fehrenbach", 6);
  ed.enqueue(p);
  p = new Patient("Brown", 1);
  ed.enqueue(p);
  p = new Patient("Ingram", 1);
  ed.enqueue(p);
  console.log(ed.toString());
  let seen = ed.dequeue();
  console.log("Patient being treated: " + seen[0].name);
  console.log("Patients waiting to be seen: ")
  console.log(ed.toString());
  //下一轮
  seen = ed.dequeue();
  console.log("Patient being treated: " + seen[0].name);
  console.log("Patients waiting to be seen: ")
  console.log(ed.toString());
  seen = ed.dequeue();
  console.log("Patient being treated: " + seen[0].name);
  console.log("Patients waiting to be seen: ")
  console.log(ed.toString());


  /**
   * 4．修改例5-5中的候诊室程序，使得候诊室内的活动可以被控制。
   * 写一个类似菜单系统，让用户可以进行如下选择：
   *  a．患者进入候诊室；
   *  b．患者就诊；
   *  c．显示等待就诊患者名单。
   *  详情见index.html
   */ 