const factor = 2

function calculateSum(obj) {
  let globalSum = 0;
  let elem;

  for (elem in obj) {
    globalSum += obj[elem];
  }

  return globalSum;
}

const data = [10, 20, 30];

const calculatedSum = calculateSum(data);
console.log(calculatedSum);
console.log(calculatedSum * factor);