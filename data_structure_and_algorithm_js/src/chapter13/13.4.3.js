let CArray = require('../chapter12/CArray');
let { seqSearch, binSearch } = require('./search');


function findMiner (arr, index) {
  let obj = { dataStore: arr }
  CArray.prototype.shellSort2.call(obj);
  return obj.dataStore[index];
}

let numsElement = 1000;
let nums = new CArray(numsElement);
let nums2 = new CArray(numsElement);

for (let i = 0; i < numsElement; i ++) {
  nums2.insert(nums.dataStore[i]);
}

let startTime = new Date().getTime();
findMiner(nums, Math.floor(Math.random() * (numsElement + 1)));
console.log('花费时间： ', new Date().getTime() - startTime);



