let CArray = require('../chapter12/CArray');
function seqSearch (arr, data) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] == data) {
      return i;
    }
  }
  return -1;
}

function seqSearchPlus (arr, data) {
  for (let i = 0; i < arr.length; i ++) {
    if (arr[i] == data) {
      if (i > 0 && i < arr.length * 0.2) {
        swap(arr, i, i - 1);
        return i - 1;
      }
      return i;
    }
  }
  return -1;
}

function binSearch (arr, data) {
  let upperBound = arr.length - 1;
  let lowerBound = 0;
  while (lowerBound <= upperBound) {
    let mid = Math.floor((lowerBound + upperBound) / 2);
    if (arr[mid] == data) {
      return mid;
    } else if (arr[mid] < data) {
      lowerBound = mid + 1;
    } else {
      upperBound = mid - 1;
    }
  }
  return -1;
}

function count (arr, data) {
  let index = binSearch(arr, data);
  let count = 0;
  let pos = index;
  if (pos > -1) {
    count ++;
    while (pos-- > 0) {
      if (arr[pos] == data) {
        count ++;
      } else {
        break;
      }
    }
    pos = index;
    while (pos++ < arr.length - 1) {
      if (arr[pos] == data) {
        count ++;
      } else {
        break;
      }
    }
    return count;
  } else {
    return count;
  }
}

function swap (arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp; 
}

module.exports = {
  binSearch,
  seqSearch,
  seqSearchPlus,
  count
}


// let nums = new CArray(100);
// nums.setData();

// nums.shellSort2();
// nums.toString();

// let index = binSearch(nums.dataStore, 33);
// console.log(count(nums.dataStore, 30));