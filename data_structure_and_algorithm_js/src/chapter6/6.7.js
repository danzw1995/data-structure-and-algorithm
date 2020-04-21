/**
 * 1．实现advance(n)方法，使当前节点向前移动n个节点。
 */

DoublyLinkedList.prototype.advance = function (item, n) {
  let node = this.find(item);
  let prevNode = node.previous;
  this.remove(item);
  while (n && prevNode && prevNode.element !== 'head') {
    prevNode = node.previous;
    n --;
  }
  this.insert(item, prevNode.element);
}

/**
 * 2．实现back(n)方法，使当前节点向后移动n个节点。
 */

DoublyLinkedList.prototype.back = function (item, n) {
  let node = this.find(item);
  let nextNode = node.next;
  if (!nextNode) {
    return
  }
  this.remove(item);
  while (n && nextNode.next) {
    nextNode = node.next;
    n --;
  }
  this.insert(item, next.element);
}


/**
 * 4．使用单向链表写一段程序，记录用户输入的一组测验成绩。
 */

 let scores = new LinkedList();

 scores.insert(80, 'head');
 scores.insert(79, 80);
 scores.insert(66, 79);
 scores.insert(90, 66);



 /**
  * 约瑟夫问题
  */

  let list = new LinkedList();
  let head = list.find('head');
  let current = head, p;
  for (let i = 1; i < 42; i ++) {
    p = new Node(i);
    current.next = p;
    current = p;
  }
  p.next = head;
  current = head;
  while (current.next.next !== current) {
    for (let j = 0; j <= 1; j ++) {
      current = current.next;
    }
    list.remove(current.next.element);
    // current.next = current.next.next;
  }
  console.log(list)