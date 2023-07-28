
var elem = 2

function calculateSum(obj) {
  var sum = 0;
  
  for (let elem in obj) {
    sum += elem;
  }
  return sum;
}

var data = [10, 20, 30];

const sumResult = calculateSum(data);
console.log(sumResult * elem);