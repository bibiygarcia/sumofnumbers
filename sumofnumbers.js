/*
* Write four functions that return the sum of the numbers in a given list using
* a for-loop, a while-loop, recursion, and underscore.
* Call them sumFor, sumWhile, sumRecursion, and sumTheSimpleWay.
*/
function sumFor(data) {
  let theSum = 0;
  for (let i = 0; i < data.length; i++) {
    theSum += data[i];
  }
  return theSum;
}

function sumWhile(data) {
  let theSum = 0;
  let i = 0;
  while (i < data.length) {
    theSum += data[i];
    i++;
  }
  return theSum;
}

function helper(x, data) {
  let i = x;
  if (x === data.length) {
    return 0;
  }
  i++;
  return data[i - 1] + helper(i, data);
}

function sumRecursion(data) {
  let x = 0;
  x++;
  return data[x - 1] + helper(x, data);
}

function sumTheSimpleWay(data) {
  return _.reduce(data, function (memo, num) { return memo + num; }, 0);
}

const testList = [1, 2, 3];
console.log(sumFor(testList));
console.log(sumWhile(testList));
console.log(sumRecursion(testList));
console.log(sumTheSimpleWay(testList));

// Time: 38.07.49
// Date: 16 Sept 2023
