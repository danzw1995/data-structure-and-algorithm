let CArray = require('./CArray')

CArray.prototype.setData = function () {
  for (let i = 0; i < this.numElements; i ++) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1)) + '';
    // this.dataStore[i] = i;
    // this.dataStore[i] = this.numElements - i;
  }
}

let numElements = 100000;
let myNums = new CArray(numElements);
let myNums2 = new CArray(numElements);
let myNums3 = new CArray(numElements);
let myNums4 = new CArray(numElements);
let myNums5 = new CArray(numElements);
let myNums6 = new CArray(numElements);
myNums.setData();
for (let i = 0; i < myNums.numElements; i ++) {
  myNums2.insert(myNums.dataStore[i]);
  myNums3.insert(myNums.dataStore[i]);
  myNums4.insert(myNums.dataStore[i]);
  myNums5.insert(myNums.dataStore[i]);
  myNums6.insert(myNums.dataStore[i]);
}

// myNums.toString()
// myNums.bubbleSort();
// myNums2.selectionSort();
// myNums3.insertionSort();
// myNums4.shellSort2();
// myNums5.mergeSort();
myNums6.quickSort();

// myNums.toString();