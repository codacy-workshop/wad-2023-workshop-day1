var elem = 2

function calculateSum(obj) {
  var globalSum = 0;
  obj.forEach(function (item) {
    globalSum += item;
  })
  return globalSum
}

var data = [10, 20, 30];

const globalSum = calculateSum(data);
console.log(globalSum * elem);