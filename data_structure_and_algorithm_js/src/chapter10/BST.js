class Node {
  constructor (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  show () {
    console.log(this.data);
  }
}
class BST {
  constructor () {
    this.root = null;
  }
  insert (data) {
    let root = this.root;
    let node = new Node(data, null, null)
    if (root == null) {
      this.root = node;
      return;
    }
    while (true) {
      let current;
      if (root.data < data) {
        current = root.right;
        if (current === null) {
          root.right = node;
          break; 
        }
      } else {
        current = root.left;
        if (current === null) {
          root.left = node;
          break;
        }
      }
      root = current;
    }
  }
  remove (data) {
    this.root = this.removeNode(this.root, data);
  }
  removeNode (node, data) {
    if (node === null) {
      return null;
    }
    if (node.data === data) {
      if (!node.left && !node.right) {
        return null;
      } else if (!node.left) {
        return node.right;
      } else if (!node.right) {
        return node.left;
      } else {
        let tempNode = this.getSmallest(node.right);
        tempNode.right = this.removeNode(node.right, tempNode.data);
        tempNode.left = node.left;
        return tempNode;
      }
    } else if (node.data < data) {
      node.right = this.removeNode(node.right, data)
    } else {
      node.left = this.removeNode(node.left, data);
    }
    return node;
  }
  getSmallest (node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
  getMin () {
    let current = this.root;
    if (current === null) {
      return null;
    }
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  getMax () {
    let current = this.root;
    if (current === null) {
      return null;
    }
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  find (data) {
    let current = this.root;
    while (current !== null) {
      if (current.data === data) {
        return current;
      } else if (current.data < data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }
  preOrder (node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }
  inOrder (node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }
  postOrder (node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}
//      23 
//   16      45
// 3   22   37   99

var nums = new BST();   
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal: ");
nums.inOrder(nums.root);
console.log('PreOrder traversal: ');
nums.preOrder(nums.root);
console.log('PostOrder traversal: ');
nums.postOrder(nums.root);

nums.remove(23);
console.log("PreOrder traversal: ");
nums.preOrder(nums.root);
