/**
 * 1．写一个程序，该程序从一个文本文件中读入名字和电话号码，
 * 然后将其存入一个字典。该程序需包含如下功能：
 * 显示单个电话号码、显示所有电话号码、
 * 增加新电话号码、删除电话号码、清空所有电话号码。
 */
let fs = require('fs');
let Dictionary = require('./Dictionary');
let phoneBook = new Dictionary();
let data = fs.readFileSync(__dirname + '/phoneBook.txt', 'utf-8')
data.split('\r\n').forEach(line => {
let [name, phone] = line.split(':')
phoneBook.add(name, phone);
});
console.log(phoneBook);
console.log(phoneBook.find('Jack'));
phoneBook.remove('Jack');
phoneBook.showAll();
phoneBook.clear();
console.log(phoneBook)


/**
 * 2．使用Dictionary类写一个程序，
 * 该程序用来存储一段文本中各个单词出现的次数。
 * 该程序显示每个单词出现的次数，但每个单词只显示一次。
 * 
 */
 function recordWord (words) {
  let dict = new Dictionary();
  words.split(' ').forEach(word => {
    if (dict.find(word)) {
      dict.add(word, dict.find(word) + 1);
    } else {
      dict.add(word, 1);
    }
  });
  dict.showAll();
 }
 recordWord('the brown fox jumped over the blue fox');


 /**
  * 3．修改练习2，使单词按字母顺序显示。
  */

  function recordWordOrder (words) {
    let dict = new Dictionary();
    words.split(' ').forEach(word => {
      if (dict.find(word)) {
        dict.add(word, dict.find(word) + 1);
      } else {
        dict.add(word, 1);
      }
    });
    Object.keys(dict.dataStore).sort().forEach(word => {
      console.log(`${word}: ${dict.dataStore[word]}`)
    })
  }
  recordWordOrder('the brown fox jumped over the blue fox');
