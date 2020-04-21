class Node {
  constructor (element) {
    this.element = element;
  }
}
class LinkedList {
  constructor () {
    this.head = new Node('head');
    this.head.next = head;
  }
  insert (element, item) {
    let preNode = this.find(item);
    let node = new Node(element);
    node.next = preNode.next;
    preNode.next = node;
  }
  remove (item) {
    let prevNode = this.findPrev(item);
    if (prevNode.next) {
      prevNode.next = prevNode.next.next;
    }
  }
  find (item) {
    let node = this.head;
    while (node.element !== item) {
      node = node.next;
    }
    return node;
  }
  findPrev (item) {
    let node = this.head;
    while (node && node.next.element !== item) {
      node = node.next;
    }
    return node;
  }
  display () {
    let node = this.head;
    while (node.next !== null) {
      console.log(node.next.element);
      node = node.next;
    }
  }
}