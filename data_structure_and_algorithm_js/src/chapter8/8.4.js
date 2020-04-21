/**
 * 1．使用线性探测法创建一个字典，用来保存单词的定义。
 * 该程序需要包含两个部分：
 * 第一部分从文本文件中读取一组单词和它们的定义，并将其存入散列表；
 * 第二部分让用户输入单词，程序给出该单词的定义。
 */

let HashTable = require('./HashTable');
let fs = require('fs')
let readline = require('readline');
let hashTable = new HashTable();

let data = fs.readFileSync(__dirname + '/word.txt', 'utf-8');
HashTable.prototype.put = function (key, value) {
  let pos = this.betterHash(key);
  while (this.table[pos]) {
    pos ++;
  }
  this.table[pos] = value;
}

data.split('\r\n').forEach(line => {
  let [key, value] = line.split(':')
  hashTable.put(key, value);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
console.log(hashTable.showDistro())
rl.question('What\' word is you find ? ', word => {
  let explain = hashTable.get(word);
  console.log(explain);
  rl.close();
})



/**
 * 2．使用开链法重新实现练习1。
 */

 HashTable.prototype.put = function (key, value) {
  let pos = this.betterHash(key);
  if (this.table[pos]) {
    this.table[pos].push(value)
  } else {
    this.table[pos] = [value];
  }
 }
 HashTable.prototype.showDistro = function () {
  for (let i = 0; i < this.table.length; i ++) {
    if (this.table[i]) {
      for (let j = 0; j < this.table[i].length; j ++) {
        console.log(`${i}-${j}: ${this.table[i][j]}`)
      }
    }
  }
}


/**
 * 3．读取一个文本文件，
 * 使用散列显示该文件中出现的单词和它们在文件中出现的次数。
 */


let fs = require('fs');
let HashTable = require('./HashTable');
let hashTable = new HashTable();
let data = fs.readFileSync(__dirname + '/text.txt', 'utf-8');
data.split('\r\n').forEach(text => {
  console.log(text.split(' ').length)
  text.split(' ').forEach(word => {
    let v = hashTable.get(word);
    if (v) {
      hashTable.put(word, v + 1);
    } else {
      hashTable.put(word, 1);
    }
  })
})