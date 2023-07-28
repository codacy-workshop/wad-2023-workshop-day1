
function calculateSum(obj) {
  let globalSum = 0;
  for (var elem in obj) {
    globalSum += elem;
  }
}

var data = [10, 20, 30];

calculateSum(data);
console.log(globalSum * elem);