var globalSum = 0;

var elem = 2

function calculateSum(obj) {
  for (var elem in obj) {
    globalSum += elem;
  }
}

var data = [10, 20, 30];

calculateSum(data);
console.log(globalSum * elem);