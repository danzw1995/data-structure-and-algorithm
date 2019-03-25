
const swap = require('./swap.js');

// 冒泡排序
const bubbleSort = (arr) => {
  let i, j;
  for (i = arr.length - 1; i > 0; i --) {
    for (j = 0; j < i; j ++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
}

let arr = [2, 3, 5, 4, 10, 1, 7]

bubbleSort(arr)
console.log(arr)