/**
 * 1．写一个程序，使用暴力技巧来寻找最长公共子串。
 */

function lcs (word1, word2) {
  let str = '';
  for (let i = 0; i < word1.length; i++) {
    let temp = '';
    let t = i;
    for (let j = 0; j < word2.length; j++) {
      if (word1[i] == word2[j]) {
        temp += word2[j];
        i++;
      } else {
        str = str.length > temp.length ? str : temp;
        temp = '';
        i = t;
      }
    }
    str = str.length > temp.length ? str : temp;
    i = t;
  }
  return str;
}

console.log(lcs('abbcc', 'dbbcc'))


/**
 * 2．写一个程序，允许用户改变背包问题的约束条件，
 * 以便于观察条件的变化对结果的影响。
 * 比如，你可以改变背包的容量、物品的价值，或物品的重量。
 * 每次最好只改一个约束条件。
 */

let dKnapsack = require('./knapsack');
let readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let value = [4, 5, 10, 11, 13];
let size = [3, 4, 7, 8, 9];
let capacity = 16;
let n = 5;
console.log(dKnapsack(capacity, size, value, n));
function loopRL () {
  rl.question('What is you would change ?', str => {
    let [k, v] = str.split(':');
    switch (k) {
      case 'value':
        value = JSON.parse(v);
        break;
      case 'size':
        size = JSON.parse(v);
        break;
      case 'capacity':
        capacity = v;
        break;
      case 'n':
        n = v;
        break;
    }
    console.log(dKnapsack(capacity, size, value, n));
    loopRL();
  })
}
loopRL();






/**
 * 3．使用贪心算法找零钱，不过这次不允许使用10美分，
 * 假设要找的零钱一共是30美分，请尝试找到一个解。
 * 这个解是最优解吗？
 */
function makeChange (origAmt, coins) {
  var remainAmt = 0;
  if (origAmt % 25 < origAmt) {
    coins[3] = parseInt(origAmt / 25);
    remainAmt = origAmt % 25;
    origAmt = remainAmt;
  }
  // if (origAmt % .1 < origAmt) {
  //   coins[2] = parseInt(origAmt / .1);
  //   remainAmt = origAmt % .1;
  //   origAmt = remainAmt;
  // }
  if (origAmt % 5 < origAmt) {
    coins[1] = parseInt(origAmt / 5);
    remainAmt = origAmt % 5;
    origAmt = remainAmt;
  }

  coins[0] = parseInt(origAmt / 1);
}

function showChange (coins) {
  if (coins[3] > 0) {
    console.log("25美分的数量 - " + coins[3] + " - " + coins[3] * .25);
  }
  // if (coins[2] > 0) {
  //   console.log("10美分的数量 - " + coins[2] + " - " + coins[2] * .10);
  // }
  if (coins[1] > 0) {
    console.log("5美分的数量 - " + coins[1] + " - " + coins[1] * .05);
  }
  if (coins[0] > 0) {
    console.log("1美分的数量 - " + coins[0] + " - " + coins[0] * .01);
  }
}

var origAmt = 30;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);
