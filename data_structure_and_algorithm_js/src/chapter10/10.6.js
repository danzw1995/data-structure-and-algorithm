/**
 * 1．为BST类增加一个新方法，该方法返回BST中节点的个数。
 */
let BST = require('./BST');
BST.prototype.getNodeNum = function (node) {
  let num = 0;
  if (node === null) {
    return 0;
  }
  num ++;
  num += this.getNodeNum(node.left);
  num += this.getNodeNum(node.right);
  return num;
}


/**
 * 2．为BST类增加一个新方法，该方法返回BST中边的个数。
 */

 BST.prototype.getSideNum = function () {
   let num = this.getNodeNum(this.root);
   if (num === 0) {
     return 0;
   }
   return num - 1;
 }


 /**
  * 5．写一段程序，读入一个较大的文本文件，
  * 并将其中的单词保存到BST中，
  * 显示每个单词在文本中出现的次数。
  */

  BST.prototype.update = function (data) {
    let node = this.find(data);
    node.count ++;
  }