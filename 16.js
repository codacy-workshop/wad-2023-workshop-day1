var elem = 2

function calculateSum(obj) {
  var globalSum = 0;
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && typeof obj[key] === 'number') {
      globalSum += obj[key];
    }
  }
  return globalSum;
}

var data = [10, 20, 30];

console.log(calculateSum(data) * elem);
