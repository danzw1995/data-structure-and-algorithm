function fibonacci (n) {
  if (n <= 1) {
    return 1;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


function dynFibonacci (n) {
  let arr = [1, 1];
  if (n > 2) {
    for (let i = 2; i <= n; i ++) {
      arr[n] = arr[n - 1] + arr[n - 2];
    }
  }
  return arr[n - 1];
}

let timeStart = new Date().getTime();
fibonacci(40);
console.log(new Date().getTime() - timeStart);

timeStart = new Date().getTime();
dynFibonacci(40);
console.log(new Date().getTime() - timeStart);