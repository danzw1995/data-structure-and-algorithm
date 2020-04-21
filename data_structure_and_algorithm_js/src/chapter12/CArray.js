class CArray {
  constructor (numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.gaps = [4, 1];
    this.numElements = numElements;
    for (let i = 0; i < numElements; i ++) {
      this.dataStore[i] = i;
    }
  }
  setData () {
    for (let i = 0; i < this.numElements; i ++) {
      this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
    }
  }
  clear () {
    for (let i = 0; i < this.numElements; i ++) {
      this.dataStore[i] = 0;
    }
  }
  insert (element) {
    this.dataStore[this.pos++] = element;
  }
  toString () {
    let retStr = '';
    for (let i = 0; i < this.numElements; i ++ ) {
      retStr += this.dataStore[i] + ' ';
      if (i > 0 && i % 10 === 0) {
        retStr += '\r\n';
      }
    }
    console.log(retStr);
  }
  swap (arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  bubbleSort () {
    let timeStart = new Date().getTime();
    let numElements = this.dataStore.length;
    for (let outer = numElements; outer >= 2; outer --) {
      for (let inner = 0; inner < outer - 1; inner ++) {
        if (this.dataStore[inner] > this.dataStore[inner + 1]) {
          this.swap(this.dataStore, inner, inner + 1);
        }
        // this.toString();
      }
    }
    console.log(new Date().getTime() - timeStart);
  }
  selectionSort () {
    let timeStart = new Date().getTime();
    let numElements = this.dataStore.length;
    let minIndex;
    for (let outer = 0; outer < numElements; outer ++) {
      minIndex = outer;
      for (let inner = outer + 1; inner < numElements; inner ++) {
        if (this.dataStore[minIndex] > this.dataStore[inner]) {
          minIndex = inner;
        }
      }
      this.swap(this.dataStore, minIndex, outer);
      // this.toString();
    }
    console.log(new Date().getTime() - timeStart);
  }
  insertionSort () {
    let timeStart = new Date().getTime();
    let numElements = this.dataStore.length;
    for (let outer = 1; outer < numElements; outer ++) {
      let inner = outer;
      let temp = this.dataStore[outer];
      while (inner > 0 && this.dataStore[inner - 1] > temp ) {
        this.dataStore[inner] = this.dataStore[inner - 1];
        // this.toString();
        inner --;
      }
      this.dataStore[inner] = temp;
    }
    console.log(new Date().getTime() - timeStart);
  }
  shellSort () {
    let timeStart = new Date().getTime();
    let numElements = this.dataStore.length;
    for (let i = 0; i < this.gaps.length; i ++) {
      let g = this.gaps[i];
      for (let i = g; i < numElements; i ++) {
        let temp = this.dataStore[i];
        let j = i;
        for (; j >= g && this.dataStore[j - g] > temp; j -= g) {
          this.dataStore[j] = this.dataStore[j - g];
          // this.toString();
        }
        this.dataStore[j] = temp;
      }
    }
    
    console.log(new Date().getTime() - timeStart);
  }
  shellSort2 () {
    let timeStart = new Date().getTime();
    let numElements = this.dataStore.length;
    let h = 1;
    while (h < numElements / 3) {
      h = h * 3 + 1;
    }
    while (h >= 1) {
      for (let i = h; i < numElements; i ++) {
        let temp = this.dataStore[i];
        let j = i;
        for (; j >= h && this.dataStore[j - h] > temp; j -= h) {
          this.dataStore[j] = this.dataStore[j - h];
          // this.toString();
        }
        this.dataStore[j] = temp;
      }
      h = (h - 1) / 3;
    }
    console.log(new Date().getTime() - timeStart);
  }
  mergeSort () {
    let timeStart = new Date().getTime();
    let step = 1;
    let left, right;
    while (step < this.dataStore.length) {
      left = 0;
      right = step;
      while (right + step <= this.dataStore.length) {
        this.mergeArrays(this.dataStore, left, left + step, right, right + step);
        left = right + step;
        right = left + step;
      }
      if (right < this.dataStore.length) {
        this.mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length)
      }
      step *= 2;
    }
    console.log(new Date().getTime() - timeStart);
  }
  mergeArrays (arr, startLeft, stopLeft, startRight, stopRight) {
    let leftArray = new Array(stopLeft - startLeft + 1);
    let rightArray = new Array(stopRight - startRight + 1);
    leftArray[leftArray.length - 1] = Infinity;
    rightArray[rightArray.length - 1] = Infinity;
    let m = 0;
    let n = 0;
    let k = startLeft;
    let i;
    for (i = 0; i < leftArray.length - 1; i ++) {
      leftArray[i] = arr[k ++]
    }
    k = startRight;
    for (i = 0; i < rightArray.length - 1; i ++) {
      rightArray[i] = arr[k ++];
    }
    for (i = startLeft; i < stopRight; i ++) {
      if (leftArray[m] < rightArray[n]) {
        arr[i] = leftArray[m++];
      } else {
        arr[i] = rightArray[n++];
      }
    }
    // console.log('leftArray - ', leftArray); 
    // console.log('rightArray - ', rightArray); 
  }
  quickSort () {
    let timeStart = new Date().getTime();
    const _quickSort = (arr) => {
      if (arr.length <= 1) {
        return arr;
      }
      let leftArray = [];
      let rightArray = [];
      let pivot = 0;
      for (let i = 1; i < arr.length; i ++) {
        if (arr[i] < arr[pivot]) {
          leftArray.push(arr[i]);
        } else {
          rightArray.push(arr[i]);
        }
      }
      return [].concat(_quickSort(leftArray), arr[pivot], _quickSort(rightArray));
    }
    this.dataStore = _quickSort(this.dataStore);
    console.log(new Date().getTime() - timeStart);
  }
}

module.exports = CArray


// let numElements = 10000000;
// let myNums = new CArray(numElements);
// let myNums2 = new CArray(numElements);
// let myNums3 = new CArray(numElements);
// let myNums4 = new CArray(numElements);
// let myNums5 = new CArray(numElements);
// myNums.setData();
// for (let i = 0; i < myNums.numElements; i ++) {
//   myNums2.insert(myNums.dataStore[i]);
//   myNums3.insert(myNums.dataStore[i]);
//   myNums4.insert(myNums.dataStore[i]);
//   myNums5.insert(myNums.dataStore[i]);
// }
// myNums.toString();
// myNums.bubbleSort();
// myNums2.selectionSort();
// myNums3.insertionSort();
// myNums3.shellSort();
// myNums3.shellSort2();
// myNums.toString();
// myNums.toString();
// myNums4.mergeSort();
// myNums5.quickSort();
// myNums.toString();
