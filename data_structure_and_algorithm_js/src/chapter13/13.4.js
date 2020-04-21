/**
 * 1．顺序查找算法总是查找数据集中匹配到的第一个元素。
 * 请重写该算法使之返回匹配到的最后一个元素。
 */

 function seqSearch (arr, data) {
  for (let i = arr.length - 1; i >= 0; i --) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
 }


 /**
  * 2．对同一个数据集进行测试，
  * 比较顺序查找算法执行所花费的时间与
  * 同时使用插入排序算法和二分查找算法花费的总时间。
  * 你得到的结果是什么？
  */

  let CArray = require('../chapter12/CArray');
  let { seqSearch: search, binSearch } = require('./search');

  let numsElement = 10000000;
  let nums = new CArray(numsElement);
  let nums2 = new CArray(numsElement);
  nums.setData();
  for (let i = 0; i < numsElement; i ++) {
    nums2.insert(nums.dataStore[i])
  }
  // nums.shellSort2();
  let startTime = new Date().getTime();
  let num = Math.floor(Math.random() * numsElement);
  let pos = search(nums.dataStore, num);
  console.log('找到' + num + '，位置：' + pos + '，花费：', new Date().getTime() - startTime);
  

  nums2.shellSort2();
  startTime = new Date().getTime();
  pos = binSearch(nums2.dataStore, num);
  console.log('找到' + num + '，位置：' + pos + '，花费：', new Date().getTime() - startTime);


/**
 * 3．创建一个函数用来查找数据集中的次小元素。
 * 你能否归纳一下，如何实现查找第三小、第四小，等等的搜索函数？
 * 在至少有1000个元素的数据集上测试你的函数。
 * 请同时在数字和文本数据集上进行测试。
 */

 /**
  * 实现思路：
  * a、先排序，在找
  * b、直接遍历查找（需要若干变量或者一个数组）
  * 详情见13.4.3
  */


 

  
  

  