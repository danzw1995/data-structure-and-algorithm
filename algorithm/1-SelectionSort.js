
const swap = require('./swap.js');

// 选择排序算法
const selectionSort = (arr) => {
  let i, j, minIndex;
  for (i = 0; i < arr.length; i ++) {
    minIndex = i;
    for (j = i; j < arr.length; j ++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
}



let arr = [2, 3, 5, 4, 10, 1, 7]

selectionSort(arr)
console.log(arr)