let fs = require('fs');
let { seqSearch, binSearch, count } = require('./search')

let words = fs.readFileSync(__dirname + '/big.txt', 'utf-8');

let arr = [].concat(words.split(/[\s\.\,"]/).filter(w => w))
let word = 'rhetoric';
let startTime = new Date().getTime();
let position = seqSearch(arr, word);
let time = new Date().getTime() - startTime;

if (position > -1) {
  console.log('找到：' + word + ', 位置为： ' + position + ', 花费时间： ' + time);
} else {
  console.log('未找到： ' + word);
}


