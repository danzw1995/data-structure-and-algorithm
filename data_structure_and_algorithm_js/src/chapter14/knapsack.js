function knapsack (capacity, size, value, n) {
  if (n == 0 || capacity == 0) {
    return 0;
  }
  if (size[n - 1] > capacity) {
    return knapsack(capacity, size, value, n - 1);
  } else {
    return Math.max(
      value[n - 1] + knapsack(capacity - size[n - 1], size, value, n - 1),
      knapsack(capacity, size, value, n - 1)
    )
  }
}

function max (a, b) {
  return (a > b) ? a : b;
}

function dKnapsack (capacity, size, value, n) {
  var K = [];
  let str = '';
  for (var i = 0; i <= capacity + 1; i++) {
    K[i] = [];
  }
  for (var i = 0; i <= n; i++) {
    for (var w = 0; w <= capacity; w++) {
      if (i == 0 || w == 0) {
        K[i][w] = 0;
      }
      else if (size[i - 1] <= w) {
        K[i][w] = max(value[i - 1] + K[i - 1][w - size[i - 1]],
          K[i - 1][w]);
      }
      else {
        K[i][w] = K[i - 1][w];
      }
      str += K[i][w] + ' ';
    }
    // console.log(str)
  }

  return K[n][capacity];
}

module.exports = dKnapsack
// let value = [4, 5, 10, 11, 13];
// let size = [3, 4, 7, 8, 9];
// let capacity = 16;
// let n = 5;
// console.log(dKnapsack(capacity, size, value, n));
