
const swap = require('./swap.js');

// 插入排序 在部分有序的数组中使用效果最好

// 初始版本
const insertSort = (arr) => {
  let i, j;
  for (i = 1; i < arr.length - 1; i ++) {
    for (j = i + 1; j > 0; j --) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j - 1, j);
      } else {
        break;
      }
    }
  }
}

// 优化版 减少交换次数
const insertSort2 = (arr) => {
  let i, j, cur;
  for (i = 1; i < arr.length - 1; i ++) {
    for (j = i + 1, cur = arr[j]; j > 0 && cur < arr[j - 1]; j --) {
      arr[j] = arr[j - 1];
    }
    arr[j] = cur;
  }
}


let arr = [2, 3, 5, 4, 10, 1, 7]

insertSort(arr)
console.log(arr)