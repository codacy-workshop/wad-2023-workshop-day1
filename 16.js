var elem = 2

function calculateSum(obj) {
  var globalSum = 0;
  for (let item in obj) {
    globalSum += item;
  }
  return globalSum
}

var data = [10, 20, 30];

const globalSum = calculateSum(data);
console.log(globalSum * elem);