class Node {
  constructor (element) {
    this.element = element;
    this.previous = null;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor () {
    this.head = new Node('head');
  }
  insert (element, item) {
    let prevNode = this.find(item);
    let node = new Node(element);
    node.next = prevNode.next;
    // node.next.preNode = node;
    node.previous = prevNode;
    prevNode.next = node;
  }
  remove (item) {
    let node = this.find(item);
    node.previous.next = node.next;
    node.next.previous = node.previous;
    node.next = null;
    node.previous = null;
    return node;
  }
  find (item) {
    let node = this.head;
    while (node.element !== item) {
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

var cities = new DoublyLinkedList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
cities.remove("Carlisle");
cities.display();
